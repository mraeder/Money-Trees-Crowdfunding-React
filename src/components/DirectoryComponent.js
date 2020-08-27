import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampaignInfo from './CampaignInfoComponent';

class Directory extends Component {  

    renderSelectedCampaign(campaign) {
        if (campaign) {
            return (
                <Card>
                    <CardImg top src={campaign.image} alt={campaign.name} />
                    <CardBody>
                        <CardTitle>{campaign.name}</CardTitle>
                        <CardText>{campaign.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    } 

    render() {
        const directory = this.props.campaigns.map ( campaign => {
            return (
                <div key={campaign.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampaignSelect(campaign)}>
                        <CardImg width="100%" src={campaign.image} alt={campaign.name} />
                        <CardImgOverlay>
                            <CardTitle>{campaign.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                {directory}
                </div>
                {/* <div className="col-md-5  m-1">
                    {this.renderSelectedCampaign(this.state.selectedCampaign)}
                </div> */}
            </div>
        );
    }
}

export default Directory;