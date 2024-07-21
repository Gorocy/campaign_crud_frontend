import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignHome = ({ campaign }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/campaigns/${campaign.id}`);
  };

  return (
    <div 
      style={{
        border: '3px solid green', 
        padding: '15px', 
        margin: '15px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '300px', 
        height: '500px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '25px',
      }}
      onClick={handleClick}
    >
      <h3>{campaign.name}</h3>
      <p><strong>Keywords:</strong> {campaign.keywords.join(', ')}</p>
      <p><strong>Bid Amount:</strong> {campaign.bidAmount}</p>
      <p><strong>Campaign Fund:</strong> {campaign.campaignFund}</p>
      <p><strong>Status:</strong> {campaign.status}</p>
      <p><strong>Town:</strong> {campaign.town}</p>
      <p><strong>Radius:</strong> {campaign.radius} km</p>
      <p><strong>User:</strong> {campaign.user.firstName} {campaign.user.lastName}</p>
      <p><strong>Contact:</strong> {campaign.user.email}</p>
      <p><strong>Product:</strong> {campaign.product.name}</p>
    </div>
  );
};

export default CampaignHome;
