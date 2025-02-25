import React, { useState, useEffect } from "react";
import axios from "axios";
import StockChart from "../components/StockChart";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://backend-y594.onrender.com/stock/HAL")  // Use deployed backend URL
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data", error));
    }, []);

    return (
        <div>
            <h1>Stock Market Analysis</h1>
            <StockChart data={data} />
        </div>
    );
};

export default Home;
