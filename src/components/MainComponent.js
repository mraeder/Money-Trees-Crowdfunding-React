import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { CAMPAIGNS } from '../shared/campaigns';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: CAMPAIGNS,
            selectedCampaign : null
        };
    }

    onCampaignSelect(campaign) {
        this.setState({ selectedCampaign: campaign });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Money Trees</NavbarBrand>
                </div>
                </Navbar>
                <Directory campaigns={this.state.campaigns} />
                <CampaignInfo campaign={this.state.selectedCampaign}/>
            </div>
        );
    }
}

export default Main;