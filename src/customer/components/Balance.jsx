import React, { useState, useEffect } from 'react';

const Balance = () => {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchBalance = async () => {
    setLoading(true);
    try {
        const response = await fetch('http://localhost:8080/api/user/balance', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBalance(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

  useEffect(() => {
    fetchBalance();
    const handleRefreshBalance = () => {
      fetchBalance();
    };

    window.addEventListener('refreshBalance', handleRefreshBalance);

    return () => {
      window.removeEventListener('refreshBalance', handleRefreshBalance);
    };
  }, []);

  return (
    <nav>
      {balance !== null ? (
        <p>Balance: ${balance}</p>
      ) : (
        <p>Loading...</p>
      )}
    </nav>
  );
};

export default Balance;