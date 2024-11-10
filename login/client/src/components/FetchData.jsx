import React, { useState, useEffect, useRef } from "react";
import "./FetchData.css";

const FetchData = () => {
  const data = [
    {
      airTemperature: 298.1,
      processTemperature: 308.6,
      rotationalSpeed: 1551,
      torque: 42.8,
      toolWear: "2",
    },
    {
      airTemperature: 298.1,
      processTemperature: 308.6,
      rotationalSpeed: 1425,
      torque: 41.9,
      toolWear: "2",
    },
    {
      airTemperature: 298.3,
      processTemperature: 308.7,
      rotationalSpeed: 1667,
      torque: 28.6,
      toolWear: "2",
    },
    {
      airTemperature: 298.5,
      processTemperature: 309,
      rotationalSpeed: 1741,
      torque: 28,
      toolWear: "2",
    },
    {
      airTemperature: 297.6,
      processTemperature: 308.4,
      rotationalSpeed: 1398,
      torque: 48.9,
      toolWear: "2",
    },
  ];

  const [currentData, setCurrentData] = useState(data[0]); // Set initial data to the first set
  const [maintenanceMessage, setMaintenanceMessage] = useState(""); // State for the maintenance message

  const audioRef = useRef(); // useRef to handle audio element

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentData(data[index]);

      // Move to the next set of data
      index = (index + 1) % data.length; // Loop back to the first set after the last one

      // Stop and show maintenance message after displaying the last data
      if (index === 0) {
        clearInterval(interval); // Stop the interval
        setMaintenanceMessage("Maintenance Required"); // Show maintenance message
      }
    }, 2000); // Update every 2 seconds (2000ms)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  useEffect(() => {
    // This effect will trigger when the maintenance message changes
    if (maintenanceMessage) {
      setTimeout(() => {
        // Delay the audio play slightly to avoid autoplay issues
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error); // Log error if audio fails to play
        });
      }, 100); // Small delay (100ms) to ensure the message is rendered first
    }
  }, [maintenanceMessage]); // This effect runs when maintenanceMessage changes

  return (
    <div>
      <h1>Data Values</h1>
      <table
        border="1"
        style={{
          width: "50%",
          textAlign: "center",
          justifyContent: "center",
          marginLeft: "400px",
          border: "solid black",
          fontWeight: "bold",
          lineHeight: "42px",
        }}
      >
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Air Temperature</td>
            <td>{currentData.airTemperature} °C</td>
          </tr>
          <tr>
            <td>Process Temperature</td>
            <td>{currentData.processTemperature} °C</td>
          </tr>
          <tr>
            <td>Rotational Speed</td>
            <td>{currentData.rotationalSpeed} RPM</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>{currentData.torque} Nm</td>
          </tr>
          <tr>
            <td>Tool Wear</td>
            <td>{currentData.toolWear}</td>
          </tr>
        </tbody>
      </table>

      {maintenanceMessage && (
        <div
          style={{
            marginTop: "80px",
            padding: "10px",
            backgroundColor: "yellow",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {maintenanceMessage}
        </div>
      )}

      <audio ref={audioRef} src="./images/alarm.mp3" />
    </div>
  );
};

export default FetchData;
