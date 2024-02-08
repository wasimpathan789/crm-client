import Sidebar from "../Sidebar/Sidebar";
import "./MembersList.css";
import "../Layout/Layout.css";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

const MemberList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const contacHandler = () => {
        setOpen(!open);
    };

    const getData = async () => {
        const response = await fetch("http://localhost:8000/");

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            setData(result);
        }
        console.log(result);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <Layout>
            {" "}
            <table className="table">
                <tr className="tableTop">
                    <th>Platform</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
                {data.map((item, index) => (
                    <tr>
                        <td>{item.platform}</td>
                        <td>{item.name}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                    </tr>
                ))}
            </table>
        </Layout>
    );
};

export default MemberList;
