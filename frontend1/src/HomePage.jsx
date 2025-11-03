import InputBox from "./InputBox";
import Logo from "./Logo";
import Notes from "./Notes";
import Navbar from "./Navbar";
import { RiseLoader } from 'react-spinners'
import { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function HomePage() {
    const { loading, setLoading, reply, title, note, setReply } = useContext(MyContext);

    let override = {
        display: "inline-flex",
        justifyContent: "center",
        margin: "4rem 0 4rem 0"
    }

    return (
        <div className={`d-flex flex-column ${reply ? "justify-content-start mt-5" : "justify-content-center"} `} style={{ minHeight: "89vh", }} >
            {title && 
            <>
                <Logo/>
                <h2 className="text-center h4 mb-5">Fuel me with a topic—I’ll launch your notes mission!</h2>
            </>
            }
            <InputBox />
            <RiseLoader color="#ff6b01" loading={loading} cssOverride={override}></RiseLoader>
            {reply && <Notes />}
        </div>
    );
}

export default HomePage;

