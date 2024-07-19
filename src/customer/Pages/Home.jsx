import React, { useState, useEffect } from 'react';



const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/campaigns/all')
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);


  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            <h3>{campaign.name}</h3>
            <p><strong>Keywords:</strong> {campaign.keywords.join(', ')}</p>
            <p><strong>Bid Amount:</strong> {campaign.bidAmount}</p>
            <p><strong>Campaign Fund:</strong> {campaign.campaignFund}</p>
            <p><strong>Status:</strong> {campaign.status}</p>
            <p><strong>Town:</strong> {campaign.town}</p>
            <p><strong>Radius:</strong> {campaign.radius} km</p>
            <p><strong>User:</strong> {campaign.user.firstName} {campaign.user.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
