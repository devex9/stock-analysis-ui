import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Close Price" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default StockChart;
