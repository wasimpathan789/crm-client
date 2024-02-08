import './Sidebar.css'
import logo from '../../assets/user.png'
import {
    Link,
} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sContainer'>
            <Link to={'/'} className="top" >
                <img src={logo} alt="" />
                <h3>CRM</h3>
            </Link>
            <div className="items">
                <Link to={"/add"} className='itemsLink'> Add member</Link>

                <Link to={"/memberlist"} className='itemsLink'> members List</Link>
                <Link to={"/chart"} className='itemsLink'> All Charts</Link>



            </div>

        </div>
    )
}

export default Sidebar
