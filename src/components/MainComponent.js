import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampaignInfo from './CampaignInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPAIGNS } from '../shared/campaigns';
import { PROGRESS } from '../shared/progress';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: CAMPAIGNS,
            progress: PROGRESS 
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    campaign={this.state.campaigns.filter(campaign => campaign.featured)[0]}
                    progress={this.state.progress.filter(progress => progress.featured)[0]} 
                />
            );
        };

        const CampaignWithId = ({match}) => {
            return (
                <CampaignInfo 
                    campaign={this.state.campaigns.filter(campaign => campaign.id === +match.params.campaignId)[0]}
                    progress={this.state.progress.filter(progress => progress.campaignId === +match.params.campaignId)}
                />
            );
        }; 

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campaigns={this.state.campaigns} />} />
                    <Route path='/directory/:campaignId' component={CampaignWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;