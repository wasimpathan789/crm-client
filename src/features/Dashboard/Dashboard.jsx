import "./Dashboard.css";
import { FaUsers, FaCity } from "react-icons/fa";
import { Chart } from "react-google-charts";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import MyChart from "../common/MyChart";
import Layout from "../Layout/Layout";

const Dashboard = () => {
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
    const totalMember = apiData.length
    const totalCities = apiData.length



    useEffect(() => {
        getData();
    }, []);
    return (
        <Layout>
            <div className=" dashboardContens">
                <div className="membersContainer">
                    <div className="members">
                        <div className="membersTop">
                            <FaUsers />
                            <p>Total Members</p>
                        </div>
                        <div className="membersBottom">
                            <p> {totalMember}</p>
                        </div>
                    </div>
                    <div className="members">
                        <div className="membersTop">
                            <FaCity />
                            <p>Total Cities</p>
                        </div>
                        <div className="membersBottom">
                            <p>{totalCities}</p>
                        </div>
                    </div>
                    <div className="members">
                        <div className="membersTop">
                            <FaUsers />
                            <p>No. of States</p>
                        </div>
                        <div className="membersBottom">
                            <p>
                                {newStates.length}
                            </p>
                        </div>
                    </div>
                </div>
                {/* charts  */}
                {/* <div div className="chartsContainer">
                    all chart here
                    <div className="platformChart">
                        <MyChart />
                    </div>
                    <div className="stateChart">
                        <Bar
                            data={{
                                labels: apiData.map((x) => x.state),
                                datasets: [
                                    {
                                        label: "State",
                                        data: apiData.map((x) => x.platform.length),
                                        borderColor: "red",
                                        backgroundColor: "pink",
                                    },
                                ],
                            }}
                        />
                    </div>
                </div> */}
            </div>
        </Layout>
    );
};

export default Dashboard;
