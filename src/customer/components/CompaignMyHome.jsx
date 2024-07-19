import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompaignMyHome = ({ campaign, fetchCampaigns }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/campaigns/${campaign.id}`);
    };

    const deleteCampaign = async (id) => {
        const token = localStorage.getItem('jwtToken');
        try {
            const response = await fetch(`http://localhost:8080/api/campaigns/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                fetchCampaigns(token);
            } else {
                throw new Error('Failed to delete campaign');
            }
        } catch (error) {
            console.error('Error deleting campaign:', error);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        console.log('Delete clicked');
        deleteCampaign(parseInt(campaign.id, 10));
    };

    const handleUpdate = (e) => {
        e.stopPropagation();
        console.log('Update clicked');
        navigate(`/campaigns-update/${campaign.id}`);
        // onUpdate(campaign.id);
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
                height: '450px',
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
            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Delete
                </button>
                <button onClick={handleUpdate} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default CompaignMyHome;
