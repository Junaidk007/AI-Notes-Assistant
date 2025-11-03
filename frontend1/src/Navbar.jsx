import { Link } from "react-router-dom";
import './navbar.css'
import { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function Navbar() {
    let {setReply, setTitle, setOption, setCount, isOpen, setIsOpen} = useContext(MyContext);

    

    let newNotes = () => {
        setReply("")
        setTitle(true);
        setOption(null)
        setCount(null)
    }

    let handelIsOpen = () => {
        setIsOpen(!isOpen);
    }

    // Close dropdown if clicked outside the dropdown area
    const handleClickOutside = (e) => {
        // If click happens outside .dropdown-center
        if (!e.target.closest(".dropdown-center")) {
            setIsOpen(false);
        }
    };

    // Add/remove listener for outside clicks
    useState(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav className="navbar shadow">
            <div className="container-fluid row pt-3 pb-3" style={{
                width: "1100px",
                maxWidth: "100%",
                margin: "0 auto"
            }}>
                <div className="col-3 d-flex align-items-center
">
                    <Link onClick={newNotes} className="navbar-brand" to={"/"}>
                        <img src="/Ai-logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    </Link>
                    <span className='fs-5'>AiNotesAssistant</span>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <div className='pe-2'><Link onClick={newNotes} className='btn shadow circle-btn' to={"/"}><i className="fa-solid fa-pen-to-square"></i></Link></div>
                    <div className={`dropdown-center ${isOpen ? "show" : ""}`} data-bs-auto-close="false">
                        <a onClick={handelIsOpen} className="btn shadow circle-btn " href="#" role="button" data-bs-toggle="dropdown" aria-expanded={isOpen}>
                            {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                        </a>

                        <ul className={`dropdown-menu nav-drop shadow ${isOpen ? "show" : ""}`}>
                            <li><a className="dropdown-item" href="#" ><i className="fa-solid fa-user"></i>&nbsp;&nbsp;User</a></li>
                            <li><Link className="dropdown-item" to={"/history"}>Search History</Link></li>
                            <li style={{ padding: "0 0 0 0", }} className="divider"><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Log Out&nbsp;&nbsp;<i className="fa-solid fa-right-from-bracket"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;