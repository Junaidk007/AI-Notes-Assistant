import { Link } from "react-router-dom";
import './historybox.css'
import { useContext } from "react";
import { MyContext } from "./MyContext";

function HistoryBox({ data, setData }) {
    let { note, setNote, setReply, setTitle } = useContext(MyContext);

    const date = new Date(data.timestamp);
    const time = new Date(data.timestamp);

    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    const formattedTime = time.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const deleteNotes = async () => {
        const id = data._id;
        try {
            let response = await fetch(`https://ainotesassistant.onrender.com/api/notes/${id}`, { method: 'DELETE' });
            let mes = await response.json();
            setData((prevNotes) => prevNotes.filter(note => note._id !== id));
        } catch (e) {
            console.log(e);
        }

    }

    const getNotes = async () => {
        const id = data._id;
        try {
            let response = await fetch(`https://ainotesassistant.onrender.com/api/notes/${id}`);
            let mes = await response.json();
            // setNote(mes);
            setReply(mes.message)
            setTitle(false)
        } catch (e) {
            console.log(e);
        }
    }

    const preview = data.message.replace(/[#_*`>!\[\]\(\)]/g, "");
    const plainText = preview.length > 300 ? preview.slice(0, 300) + ". . . . . . . ." : preview;

    return (
        <div class="card mb-3 flex-row box">
            <Link onClick={getNotes} to={"/"} className="col-11">
                <div className="box2 card-body justify-content-between d-flex align-items-center p-4 pe-0 ps-0">
                    <div style={{ width: "100%" }}>
                        <h5 className="card-title " style={{ color: "#353535", width: "100%" }}>{data.title}</h5>
                        <p style={{ color: "black", fontSize: "0.75rem" }} className="text-muted mb-0">{formattedDate}&nbsp;&nbsp;&#124;&nbsp;&nbsp;{formattedTime}</p>
                        <div className="border-bottom pb-2 mb-3 pt-0 mt-0" style={{width: "61.5rem"}}></div>
                        <p className="card-text" style={{ color: "#353535" }}>{plainText}</p>
                    </div>
                </div>
            </Link>
            <div className="col-1" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'start',
                padding: "1rem 0 0 2.5rem "
            }}>
            <i onClick={deleteNotes} className="fa-solid fa-xmark " style={{ color: "#ff6b01" }}></i>
            </div>
        </div>
    );
}

export default HistoryBox;