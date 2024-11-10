import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchData from "./FetchData";

function Video() {
  // State to hold form data
  const [formData, setFormData] = useState({
    airTemperature: "",
    processTemperature: "",
    rotationalSpeed: "",
    torque: "",
    toolWear: "1", // Default to "1" (High)
  });

  // State to hold fetched data
  const [fetchedData, setFetchedData] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.airTemperature ||
      !formData.processTemperature ||
      !formData.rotationalSpeed ||
      !formData.torque ||
      !formData.toolWear
    ) {
      alert("All fields are required.");
      return;
    }

    // Send data to the backend via POST request
    try {
      const response = await axios.post(
        "http://localhost:3001/tool-wear",
        formData
      );
      if (response.status === 201) {
        alert("Data submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit data.");
    }
  };

  // Fetch data from the backend every 2 seconds
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/tool-wear");
        setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data initially and then every 2 seconds
    fetchData();
    const interval = setInterval(fetchData, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">Air Temperature (°C)</th>
            <th scope="col">Process Temperature (°C)</th>
            <th scope="col">Rotational Speed (RPM)</th>
            <th scope="col">Torque (Nm)</th>
            <th scope="col">Tool Wear Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                name="airTemperature"
                value={formData.airTemperature}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="number"
                name="processTemperature"
                value={formData.processTemperature}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="number"
                name="rotationalSpeed"
                value={formData.rotationalSpeed}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="number"
                name="torque"
                value={formData.torque}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <select
                name="toolWear"
                value={formData.toolWear}
                onChange={handleChange}
                required
              >
                <option value="1">1 (High)</option>
                <option value="2">2 (Medium)</option>
                <option value="3">3 (Low)</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handleSubmit}
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginLeft: "800px",
          height: "50px",
          width: "140px",
          marginTop: "30px",
        }}
      >
        Submit
      </button> */}

      {/* <h2>Fetched Data:</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Air Temperature (°C)</th>
            <th scope="col">Process Temperature (°C)</th>
            <th scope="col">Rotational Speed (RPM)</th>
            <th scope="col">Torque (Nm)</th>
            <th scope="col">Tool Wear Type</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((item, index) => (
            <tr key={index}>
              <td>{item.airTemperature}</td>
              <td>{item.processTemperature}</td>
              <td>{item.rotationalSpeed}</td>
              <td>{item.torque}</td>
              <td>{item.toolWear}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <FetchData />
    </>
  );
}

export default Video;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Video() {
//   // State to hold fetched data
//   const [fetchedData, setFetchedData] = useState([]);

//   // Fetch data from the backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/toolwears");
//         setFetchedData(response.data); // Store fetched data in the state
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // Call fetchData initially when the component mounts
//     fetchData();
//   }, []); // Empty dependency array makes it run once when the component mounts

//   return (
//     <>
//       <h2>Fetched Data:</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Air Temperature (°C)</th>
//             <th scope="col">Process Temperature (°C)</th>
//             <th scope="col">Rotational Speed (RPM)</th>
//             <th scope="col">Torque (Nm)</th>
//             <th scope="col">Tool Wear Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fetchedData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.airTemperature}</td>
//               <td>{item.processTemperature}</td>
//               <td>{item.rotationalSpeed}</td>
//               <td>{item.torque}</td>
//               <td>{item.toolWear}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Video;
