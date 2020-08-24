import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [
                {
                    id: 0,
                    name: 'Powdered Beer - Just Add Carbonation',
                    category: 'Travel & Outdoors',
                    image: 'assets/images/beer-3.jpg', 
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    raised: '$5,017 USD Raised -- 25% of Goal Complete'
                },
                {
                    id: 1,
                    name: 'Offline Language Translation Earbuds',
                    category: 'Technology',
                    image: 'assets/images/earbuds-1.jpg', 
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    raised: '$96,134 USD Raised -- 120% of Goal Complete'
                },
                {
                    id: 2,
                    name: 'Bring a Coworking Space to Sheboygan',
                    category: 'Community Projects',
                    image: 'assets/images/cowork-2.jpg', 
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    raised: '$150,865 USD Raised -- 75% of Goal Complete'
                },
                {
                    id: 3,
                    name: 'Nail Stickers Made With Real Nail Polish',
                    category: 'Skin, Hair, and Nails',
                    image: 'assets/images/nails-orange.jpg', 
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    raised: '$2,329 USD Raised -- 53% of Goal Complete'
                },
                {
                    id: 4,
                    name: 'Hard-Shelled Suitcase With Charging Ports',
                    category: 'Travel & Outdoors',
                    image: 'assets/images/suitcase-1.jpg', 
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    raised: '$82,932 USD Raised -- 90% of Goal Complete'
                },
                {
                    id: 5,
                    name: 'Technology Conference - Northeast Wisconsin',
                    category: 'Events & Conferences',
                    image: 'assets/images/programming-1.jpg', 
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    raised: '$7,487 USD Raised -- 31% of Goal Complete'
                },
            ],
        };
    }

    render() {
        const directory = this.state.campaigns.map(campaign => {
            return (
                <div key={campaign.id} className="col">
                    <img src={campaign.image} alt={campaign.name} />
                    <h2>{campaign.name}</h2>
                    <p>{campaign.category}</p>
                    <p>{campaign.description}</p>
                    <p>{campaign.raised}</p>
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
}

export default Directory;