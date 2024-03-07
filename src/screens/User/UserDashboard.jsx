import React, { useState, useEffect } from 'react';
import Map from "react-map-gl"


const UserDashboard = () => {
  const [viewport, setViewport] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 8,
  })
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getUser", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      console.log(data);
      setUser(data);

    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  const handleUpdateAddress = async (lat, lng) => {
    try {
      const response = await fetch("http://localhost:3000/api/updateAddress", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail'),
          latitude: lat,
          longitude: lng
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update address');
      }

      setUser(prevUser => ({
        ...prevUser,
        location: {
          latitude: lat,
          longitude: lng
        }
      }));

    } catch (error) {
      console.error('Error updating address:', error.message);
    }
  };
  function handleClick(e) {
    const long = e.lngLat.lng;
    const lat = e.lngLat.lat;
    handleUpdateAddress(lat, long)
  }

  return (
    <div>
      <h2>User Dashboard</h2>
      {user && (
        <div>
          <h3>User Details</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.latitude}, {user.location.longitude}</p>
        </div>
      )}
      <h3>Update Address</h3>

      <div>

        <Map
          initialViewState={viewport}
          mapboxAccessToken='pk.eyJ1IjoiYW51cjRhZyIsImEiOiJjbHRnNGdqd3Ewc3F3Mmtxd3J0ejJyMzZzIn0.AwqyqzaaRzf1hsqwgbTjBQ'
          style={{
            width: "100%",
            height: "100%"
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={(viewport) => setViewport(viewport)}
          onDblClick={handleClick}
        ></Map>
      </div>


      <button onClick={handleUpdateAddress}>Update Address</button>
    </div>
  );
};

export default UserDashboard;
