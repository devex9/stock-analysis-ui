import React, { useState, useEffect } from "react";
import axios from "axios";
import StockChart from "../components/StockChart";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://backend-y594.onrender.com/stock/HAL")  // Your Render backend URL
            .then(response => {
                console.log("Fetched Data:", response.data); // Debugging
                setData(response.data);
            })
            .catch(error => console.error("Error fetching data", error));
    }, []);

    return (
        <div>
            <h1>Stock Market Analysis</h1>
            {data.length > 0 ? <StockChart data={data} /> : <p>Loading...</p>}
        </div>
    );
};

export default Home;
