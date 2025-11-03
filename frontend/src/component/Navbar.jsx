import "../component/navbar.css"
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav class="navbar ps-5 pe-5 mb-5">
            <div class="container-fluid ps-5 pe-5">
                <div className="col-3">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <div className="logo me-2"></div>
                        {/* <b className="">Ai Notes Assistant</b>   */}
                    </a>
                </div>
                <div className="col-3 d-flex justify-content-end">
                        <span onClick={handleProfileClick} className="usericon"><i className="fa-solid fa-user"></i></span>
                </div>
                {
                    isOpen &&
                    <div className="dropDown">
                        <div className="dropDownItem"><i class="fa-solid fa-user"></i> User</div>
                        <div className="dropDownItem"><i class="fa-solid fa-cloud-arrow-up"></i> History</div>
                        <div className="dropDownItem"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log out</div>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Navbar;