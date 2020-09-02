import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampaign({campaign}) {  
    return (
        <div className="col-md-5 m-1">             
            <Card>
                <CardImg top src={campaign.image} alt={campaign.name} />
                <CardBody>
                    <CardTitle>{campaign.name}</CardTitle>
                    <CardText>{campaign.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
 
function RenderProgress({progress}) {
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
    
function CampaignInfo(props) {
    if (props.campaign) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampaign campaign={props.campaign} />
                    <RenderProgress progress={props.campaign.progress} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampaignInfo;