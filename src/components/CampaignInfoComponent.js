import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampaignInfo extends Component {
    
    renderProgress(progress) {
        if(progress) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Progress</h4>
                    {progress.map(progress => {
                        return (
                            <div key={progress.id}>
                                <p>{progress.text} </p>
                                <p>{progress.percent} </p>
                            </div>
                        );
                    })}
                </div>
            )
        }
        return <div/>;
    }
    
    renderCampaign(campaign) {
        return (
            <div className="col-md-5 m-1">             
                <Card>
                    <CardImg top src={campaign.image} alt={campaign.name} />
                    <CardBody>
                        <CardTitle>{campaign.name}</CardTitle>
                        <CardText>{campaign.description}</CardText>
                    </CardBody>
                </Card>
            </div>)
    }
    render() {
        if (this.props.campaign){
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampaign(this.props.campaign)}
                        {this.renderProgress(this.props.campaign.progress)}
                    </div>
                </div>
            );
        }
        return <div/>;
    }
}

export default CampaignInfo;