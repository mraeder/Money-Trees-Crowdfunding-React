import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {  

    render() {
        const directory = this.props.campaigns.map ( campaign => {
            return (
                <div key={campaign.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campaign.id)}>
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