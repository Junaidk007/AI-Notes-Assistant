import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div style={{
                width: "1100px",
                maxWidth: "100%",
                margin: "0 auto",

            }}>
                <div className="row p-5 pe-0 ps-0">
                    <div className="col-4 brandBox">
                        <div className='brandb'>
                            <div className="logo mb-2">
                                <img src="/Ai-logo.png" alt="" height={"50"} />
                            </div>
                            <b>AiNotesAssistant</b>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4 d-flex justify-content-end">
                        <div className='socials'>
                            <Link to={"https://www.linkedin.com/in/junaid-khan-06305032b"}><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link to={"https://github.com/Junaidk007"}><i className="fa-brands fa-github"></i></Link>
                            <Link to={"https://www.instagram.com/junaid.k0007?igsh=MXE5M21qanRna3drdQ=="}><i className="fa-brands fa-instagram"></i></Link>
                            <Link to={"https://x.com/Junaid_k0007?t=eqD3XUw72ZRtrQVKMr6HOQ&s=09"}><i className="fa-brands fa-x-twitter"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row border-bottom mb-3"></div>
                <div className="row info d-flex pt-4 pb-4">
                    <div className="col-4 border-right d-flex">
                        <p className='p-0 m-0'>© 2025 Ai Notes Assistant Project. All rights reserved.</p>
                    </div>
                    <div className="col-4 ps-5">
                        <p className='ps-2 pb-0 m-0'><Link to={"https://www.linkedin.com/in/kanchan-kapri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>Kanchan Kapri</Link> &nbsp; | &nbsp; <Link to={"https://www.linkedin.com/in/junaid-khan-06305032b"}>Junaid Khan</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;