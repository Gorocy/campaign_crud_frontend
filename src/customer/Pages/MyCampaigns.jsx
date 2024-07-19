import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignMyHome from '../components/CompaignMyHome';

const MyCamapaigns = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsAuthenticated(true);
            fetchCampaigns(token);
        } else {
            navigate('/sign-in');
        }
    }, [navigate]);

    const fetchCampaigns = (token) => {
        fetch('http://localhost:8080/api/campaigns/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch campaigns');
                }
            })
            .then(data => setCampaigns(data))
            .catch(error => console.error('Error fetching campaigns:', error));
    };

    if (!isAuthenticated) {
        return null;
    }

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
                <CampaignMyHome
                    key={campaign.id}
                    campaign={campaign}
                    fetchCampaigns={fetchCampaigns}
                />
            ))}
        </div>
    );
};

export default MyCamapaigns;
