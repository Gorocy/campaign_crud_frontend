import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../components/PostCampaign.css';

const CampaignPut = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [keywords, setKeywords] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [towns, setTowns] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        keywords: [],
        bidAmount: '',
        campaignFund: '',
        town: '',
        radius: '',
        status: 'ON',
    });

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsAuthenticated(true);

            fetch('http://localhost:8080/api/enums/keywords')
                .then(response => response.json())
                .then(data => setKeywords(data))
                .catch(error => console.error('Error fetching keywords:', error));

            fetch('http://localhost:8080/api/enums/campaign-status')
                .then(response => response.json())
                .then(data => setStatuses(data))
                .catch(error => console.error('Error fetching statuses:', error));

            fetch('http://localhost:8080/api/enums/towns')
                .then(response => response.json())
                .then(data => setTowns(data))
                .catch(error => console.error('Error fetching towns:', error));
            fetch(`http://localhost:8080/api/campaigns/${id}`)
                .then(response => response.json())
                .then(data => setFormData(data))
                .catch(error => console.error('Error fetching campaign details:', error));
        } else {
            navigate('/sign-in');
        }
    }, [navigate, id]);

    if (!isAuthenticated) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
          setFormData(prevState => ({
            ...prevState,
            [name]: checked
              ? [...prevState[name], value]
              : prevState[name].filter(item => item !== value),
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: value,
          }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        try {
            const response = await fetch(`http://localhost:8080/api/campaigns/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate('/');
            } else {
                throw new Error('Failed to update campaign');
            }
        } catch (error) {
            console.error('Error updating campaign:', error);
        }
    };

    return (
        <div className="post-campaign">
            <h1>Update a Campaign</h1>
            <form onSubmit={handleSubmit} className="post-campaign-form">
                <div className="form-group">
                    <label>Campaign Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Keywords:</label>
                    {keywords.map(keyword => (
                        <div key={keyword} className="form-group-checkbox">
                            <input
                                type="checkbox"
                                id={keyword}
                                name="keywords"
                                value={keyword}
                                checked={formData.keywords.includes(keyword)}
                                onChange={handleChange}
                            />
                            <label htmlFor={keyword}>{keyword}</label>
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <label>Bid Amount:</label>
                    <input
                        min={1}
                        type="number"
                        name="bidAmount"
                        value={formData.bidAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Campaign Fund:</label>
                    <input
                        min={1}
                        type="number"
                        name="campaignFund"
                        value={formData.campaignFund}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Town:</label>
                    <select
                        name="town"
                        value={formData.town}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a town</option>
                        {towns.map(town => (
                            <option key={town} value={town}>
                                {town}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Radius:</label>
                    <input
                        min={1}
                        type="number"
                        name="radius"
                        value={formData.radius}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        {statuses.map(status => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default CampaignPut;