import HistoryBox from "./HistoryBox";
import { RiseLoader } from 'react-spinners'
import { useState, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";

function HistoryPage() {
    let { setLoading, loading, setIsOpen } = useContext(MyContext)
    let [data, setData] = useState([]);

    let override = {
        display: "inline-flex",
        justifyContent: "center",
        margin: "4rem 0 4rem 0"
    }

    let getReply = async () => {
        setLoading(true)
        try {
            let reply = await fetch("https://ainotesassistant.onrender.com/api/notes");
            let response = await reply.json();
            setData(response);
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getReply();
        setIsOpen(false)
    }, [])
    // getReply();
    return (
        <div className="d-flex flex-column pt-5 mb-5" style={{
            width: "1100px",
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0 2rem"

        }} >
            <h2 className="mb-5 text-muted">Search History</h2>
            <div style={{
                minHeight: "24.5dvh",
                display: "flex",
                flexDirection: "column"
            }}>{
                    loading ? (<RiseLoader color="#ff6b01" loading={loading} cssOverride={override}></RiseLoader>) :
                        (data.length > 0 ? (
                            data.map((data, index) => (
                                <HistoryBox key={index} data={data} setData={setData} />
                            ))
                        ) : (
                            <p>No history found</p>
                        ))
                }
            </div>
        </div >
    );
}

export default HistoryPage;