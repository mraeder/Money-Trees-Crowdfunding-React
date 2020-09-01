import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampaignInfo from './CampaignInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { CAMPAIGNS } from '../shared/campaigns';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: CAMPAIGNS,
            selectedCampaign: null
        };
    }

    onCampaignSelect(campaignId) {
        this.setState({ selectedCampaign: campaignId });
    }

    render() {
        return (
            <div>
                <Header />
                <Directory campaigns={this.state.campaigns} onClick={campaignId => this.onCampaignSelect(campaignId)} />
                <CampaignInfo campaign={this.state.campaigns.filter(campaign => campaign.id === this.state.selectedCampaign)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;