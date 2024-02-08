import { Chart } from "react-google-charts";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Layout from '../Layout/Layout'
const Chartpage = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState("");
    const getData = async () => {
        const response = await fetch("http://localhost:8000/");

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            setApiData(result);
        }
        console.log(result);
    };

    const newStates = apiData.filter((element) => {
        return element.state == 'Maharashtra'
    })
    console.log("wasim" + newStates);
    const length = newStates.length;

    console.log("lenggth" + length);


    useEffect(() => {
        getData();
    }, []);
    return (

        <Layout>
            <div style={{ width: "700px", height: "500px" }}>
                <Bar
                    data={{
                        labels: apiData.map((x) => x.state),
                        // labels: [10, 20, 30, 50, 100],

                        datasets: [
                            {
                                label: "State",
                                data: apiData.map((x) => x.platform.length),
                                // data: [10, 20, 30, 50, 100],

                                borderColor: "yellow",
                                // backgroundColor: "pink",
                            },
                        ],
                    }}
                />

            </div>


        </Layout>
    )
}

export default Chartpage
