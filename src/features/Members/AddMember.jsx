import "./AddMembers.css";

import { useState } from "react";
import { StateData } from "../../data/StateData";
import Sidebar from "../Sidebar/Sidebar";
import Layout from "../Layout/Layout";

const AddMember = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [platform, setPlatform] = useState("");
    const [state, setState] = useState("");

    const formHandler = async (e) => {
        e.preventDefault();

        const userAdded = { name, email, phoneNumber, city, platform, state };
        console.log(name, email, phoneNumber, city, platform, state);

        const response = await fetch("http://localhost:8000/api", {
            method: "POST",
            body: JSON.stringify(userAdded),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setName("");
        setPlatform("");
        setCity("");
        setEmail("");
        setPhoneNumber("");
        setState("");
    };

    return (
        <Layout>
            <form onSubmit={formHandler} className="membersForm" action="">
                <h1>Add a Member</h1>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    placeholder="Phone Number"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                />
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="Eity Name"
                />

                {/* <select value={platform} onChange={(e) => setPlatform(e.target.value)} className='memberDropdown' name="Plat form" id="platform">

                    <option >Select</option>
                    <option value="">Ig</option>
                    <option value="">fb</option>
                </select> */}
                <div>
                    <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="memberDropdown"
                        id="platform"
                        name="carlist"
                        form="carform"
                    >
                        {/* <option disabled >Select</option> */}
                        <option>Ig</option>
                        <option>Fb</option>
                    </select>
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="memberDropdown"
                        id="state"
                        name="carlist"
                        form="carform"
                    >
                        <option disabled>state</option>
                        {StateData.map((item, id) => (
                            <>
                                <option>{item.name}</option>
                            </>
                        ))}
                    </select>
                </div>

                <div className="submitBtn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Layout>
    );
};

export default AddMember;
