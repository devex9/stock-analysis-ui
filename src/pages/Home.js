import React, { useState, useEffect } from "react";
import axios from "axios";
import StockChart from "../components/StockChart";

const Home = () => {
    const [data, setData] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedStock, setSelectedStock] = useState("HAL");

    // Fetch available stock symbols
    useEffect(() => {
        axios.get("https://backend-y594.onrender.com/stocks/list")
            .then(response => setStocks(response.data.stocks))
            .catch(error => console.error("Error fetching stock list", error));
    }, []);

    // Fetch stock data when a stock is selected
    useEffect(() => {
        if (selectedStock) {
            axios.get(`https://backend-y594.onrender.com/stock/${selectedStock}`)
                .then(response => setData(response.data))
                .catch(error => console.error("Error fetching stock data", error));
        }
    }, [selectedStock]);

    // Handle stock selection
    const handleSelectStock = (stock) => {
        setSelectedStock(stock);
        setQuery(stock);  // Update input field
    };

    return (
        <div>
            <h1>Stock Market Analysis</h1>
            <input
                type="text"
                placeholder="Search stock..."
                value={query}
                onChange={(e) => setQuery(e.target.value.toUpperCase())} // Convert to uppercase
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
            {/* Show dropdown suggestions */}
            {query && (
                <ul style={{ border: "1px solid #ccc", width: "300px", padding: "5px", listStyle: "none", maxHeight: "200px", overflowY: "auto" }}>
                    {stocks
                        .filter(stock => stock.startsWith(query))
                        .slice(0, 10) // Show max 10 suggestions
                        .map((stock, index) => (
                            <li key={index} onClick={() => handleSelectStock(stock)} style={{ cursor: "pointer", padding: "5px" }}>
                                {stock}
                            </li>
                        ))}
                </ul>
            )}
            <h2>{selectedStock} Stock Chart</h2>
            <StockChart data={data} />
        </div>
    );
};

export default Home;
