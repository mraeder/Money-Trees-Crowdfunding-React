import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampaignInfo from './CampaignInfoComponent';
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
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Money Trees</NavbarBrand>
                </div>
                </Navbar>
                <Directory campaigns={this.state.campaigns} onClick={campaignId => this.onCampaignSelect(campaignId)}/>
                <CampaignInfo campaign={this.state.campaigns.filter(campaign => campaign.id === this.state.selectedCampaign)[0]} />
            </div>
        );
    }
}

export default Main;