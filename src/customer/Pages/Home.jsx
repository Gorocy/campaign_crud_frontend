import React, { useState, useEffect } from 'react';
import CampaignHome from '../components/CampaignHome';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/campaigns/all')
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div 
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px',
        margin: '0 20px'
      }}
    >
      
      {campaigns.map((campaign) => (
        <CampaignHome
          key={campaign.id} 
          campaign={campaign}
        />
      ))}
    </div>
  );
};

export default Home;
