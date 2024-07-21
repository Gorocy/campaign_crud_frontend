import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/PostCampaign.css';

const PostProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            navigate('/sign-in');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/products/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            },
            body: JSON.stringify({ name, price: parseInt(price) })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product posted successfully:', data);
                alert('Successfully created product');
                navigate('/');
            })
            .catch(error => console.error('Error posting campaign:', error));
    };

    return (
        <div className="post-campaign">
            <h2>Post Product</h2>
            <form onSubmit={handleSubmit} className="post-campaign-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Post Product</button>
            </form>
        </div>
    );
};

export default PostProduct;