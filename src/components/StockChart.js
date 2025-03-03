import React from "react";

import { scaleTime } from "d3-scale";
import { ChartCanvas, Chart } from "react-financial-charts";
import { CandlestickSeries } from "react-financial-charts";
import { XAxis, YAxis } from "react-financial-charts";
import { timeFormat } from "d3-time-format";


const StockChart = ({ data }) => {
    if (!data || data.length === 0) return <p>Loading chart...</p>;

    // Convert date format
    const parsedData = data.map(d => ({
        date: new Date(d.Date),
        open: d["Open Price"],
        high: d["High Price"],
        low: d["Low Price"],
        close: d["Close Price"],
    }));

    return (
        <ChartCanvas
            height={400}
            ratio={3}
            width={800}
            seriesName="StockChart"
            data={parsedData}
            xAccessor={d => d.date}
            xScale={scaleTime()}
            xExtents={[parsedData[0].date, parsedData[parsedData.length - 1].date]}
        >
            <Chart id={1} yExtents={d => [d.high, d.low]}>
                <XAxis axisAt="bottom" orient="bottom" tickFormat={timeFormat("%b %d")} />
                <YAxis axisAt="left" orient="left" />
                <CandlestickSeries />
            </Chart>
        </ChartCanvas>
    );
};

export default StockChart;
