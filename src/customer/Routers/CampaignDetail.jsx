import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/campaigns/${id}`)
      .then(response => response.json())
      .then(data => setCampaign(data))
      .catch(error => console.error('Error fetching campaign details:', error));
  }, [id]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{campaign.name}</h2>
      <p><strong>Keywords:</strong> {campaign.keywords.join(', ')}</p>
      <p><strong>Bid Amount:</strong> {campaign.bidAmount}</p>
      <p><strong>Campaign Fund:</strong> {campaign.campaignFund}</p>
      <p><strong>Status:</strong> {campaign.status}</p>
      <p><strong>Town:</strong> {campaign.town}</p>
      <p><strong>Radius:</strong> {campaign.radius} km</p>
      <p><strong>User:</strong> {campaign.user.firstName} {campaign.user.lastName}</p>
      <p><strong>Product:</strong> {campaign.product.name}</p>
    </div>
  );
};

export default CampaignDetail;