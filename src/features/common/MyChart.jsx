import React, { useState, useEffect } from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from 'react-chartjs-2';

const MyChart = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState("");
    const getData = async () => {

        const response = await fetch("http://localhost:8000/")

        const result = await response.json()

        if (!response.ok) {
            console.log(result.error)
            setError(result.error)
        }
        if (response.ok) {
            setApiData(result);
        }
        console.log(result)
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div style={{ height: "200px", width: "70%" }}>
            <Bar height={"100px"} data={{
                labels: apiData.map(x => x.platform),
                datasets: [
                    {
                        label: "revenue",
                        data: apiData.map(x => x.platform.length)
                    },

                ]
            }} />

            <div>
                {apiData.map(x => x.email.length)}
            </div>

        </div>
    )
}

export default MyChart
