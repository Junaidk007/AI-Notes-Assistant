import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function HistoryBox({data, setData}) {
    let {note, setNote, setReply, setTitle} = useContext(MyContext);

    const deleteNotes = async () => {
        const id = data._id;
        try {
            let response = await fetch(`http://localhost:8080/api/notes/${id}`, {method: 'DELETE'});
            let mes = await response.json();
            setData((prevNotes) => prevNotes.filter(note => note._id !== id));
        } catch (e) {
            console.log(e);
        }
    }

    const getNotes = async () => {
        const id = data._id;
        try {
            let response = await fetch(`http://localhost:8080/api/notes/${id}`);
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
                    <div style={{width: "95%"}}>
                        <h5 className="card-title border-bottom pb-3 mb-3" style={{color: "#353535",width: "100%"}}>{data.title}</h5>
                        <p className="card-text" style={{color: "#353535"}}>{plainText}</p>
                    </div>
                       <i onClick={deleteNotes} className="fa-solid fa-trash" style={{color: "#ff6b01"}}></i>
                </div>
            </Link>
        </div>
    );
}

export default HistoryBox;