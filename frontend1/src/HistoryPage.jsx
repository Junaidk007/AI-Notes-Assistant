import HistoryBox from "./HistoryBox";
import { useState, useEffect } from "react";

function HistoryPage() {
    let [ data, setData ] = useState([]);
    let getReply = async () => {
        try {
            let reply = await fetch("https://ainotesassistant.onrender.com/api/notes");
            let response = await reply.json();
            setData(response);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getReply();
    }, [])

    // getReply();
    return (
        <div className="d-flex flex-column pt-5 mb-5" style={{
            width: "1100px",
            maxWidth: "100%",
            margin: "0 auto",

        }} >
            <h2 className="mb-5 text-muted">Search History</h2>
            <div>
                {data.length > 0 ? (
                    data.map((data, index) => (
                        <HistoryBox key={index} data={data} setData={setData} />
                    ))
                ) : (
                    <p>No history found</p>
                )}
            </div>
        </div>
    );
}

export default HistoryPage;