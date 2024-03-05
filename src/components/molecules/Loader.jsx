import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Toggle the loader visibility every 500ms
    const interval = setInterval(() => {
      setShowLoader((prevShowLoader) => !prevShowLoader);
    }, 500);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Set height to fill the entire viewport
      }}
    >
      {showLoader && (
        <div className="skeleton-loader">
          {/* This is just a simple rectangle representing a skeleton loader */}
          <div
            style={{
              width: '200px', // Adjust width as needed
              height: '20px', // Adjust height as needed
              backgroundColor: '#e0e0e0', // Adjust color as needed
              borderRadius: '4px', // Adjust border radius as needed
              marginBottom: '10px', // Adjust margin as needed
              animation: 'flash 1s infinite alternate', // Apply the flashing animation
            }}
          ></div>
          <div
            style={{
              width: '150px', // Adjust width as needed
              height: '15px', // Adjust height as needed
              backgroundColor: '#e0e0e0', // Adjust color as needed
              borderRadius: '4px', // Adjust border radius as needed
              animation: 'flash 1s infinite alternate', // Apply the flashing animation
            }}
          ></div>
          {/* You can add more placeholder elements as needed */}
        </div>
      )}
    </div>
  );
}
