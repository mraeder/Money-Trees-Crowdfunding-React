import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle } from 'reactstrap'; 
import { Link } from 'react-router-dom';

function RenderDirectoryItem ({campaign}) {
    return (
        <Card>
            <Link to={`/directory/${campaign.id}`}>
                <CardImg width="100%" src={campaign.image} alt={campaign.name} />
                <CardImgOverlay>
                    <CardTitle>{campaign.name}</CardTitle> 
                    <CardSubtitle class="subtitle">{campaign.category}</CardSubtitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory (props) {

    const directory = props.campaigns.map (campaign => {
        return (
            <div key={campaign.id} className="col-md-5 m-1">
                <RenderDirectoryItem campaign={campaign} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;