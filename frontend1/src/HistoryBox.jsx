import { Link } from "react-router-dom";
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

    const preview = data.message.length > 300 ? data.message.slice(0, 300) + ". . . . . . . ." : data.message;
    const plainText = preview.replace(/[#_*`>!\[\]\(\)]/g, "");

    return (
        <div class="card mb-3">
            <Link onClick={getNotes} to={"/"}>
                <div className="card-body justify-content-between d-flex align-items-center p-4">
                    <div style={{ width: "95%" }}>
                        <h5 className="card-title " style={{ color: "#353535", width: "100%" }}>{data.title}</h5>
                        <p style={{ color: "black", fontSize: "0.75rem" }} className="text-muted border-bottom pb-2 mb-3">{formattedDate}&nbsp;&nbsp;&#124;&nbsp;&nbsp;{formattedTime}</p>
                        <p className="card-text" style={{ color: "#353535" }}>{plainText}</p>
                    </div>
                    <i onClick={deleteNotes} className="fa-solid fa-trash" style={{ color: "#ff6b01" }}></i>
                </div>
            </Link>
        </div>
    );
}

export default HistoryBox;