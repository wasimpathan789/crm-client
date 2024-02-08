import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./features/Dashboard/Dashboard";
import MemberList from "./features/Members/MemberList";
import AddMember from "./features/Members/AddMember";
import Chartpage from "./features/Chartpage/Chartpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/memberlist" element={<MemberList />} />
        <Route path="/chart" element={<Chartpage />} />
      </Routes>
    </Router>
  );
}

export default App;
