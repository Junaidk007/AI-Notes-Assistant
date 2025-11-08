import { useContext, useState } from "react";
import './inputBox.css'
import './navbar.css'
import { MyContext } from "./MyContext";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function InputBox() {
    const { prompt, setPrompt, reply, setReply, loading, setLoading, setTitle, option, setOption, count, setCount } = useContext(MyContext);
    let [check, setCheck] = useState(false);

    let handelSwitch = (event) => {
        setCheck(event.target.checked);
    }
    let switchStyle = {
        "& .MuiSwitch-thumb": {
            backgroundColor: "black",
        },
        "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
            backgroundColor: "#ff6b01", // orange
        },
    }

    const getReply = async () => {
        setTitle(false);
        setLoading(true)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                topic: prompt,
                count: count,
                level: option,
                reason: check
            })
        }

        try {
            const response = await fetch("https://ainotesassistant.onrender.com/api/asknotes", options);
            let rep = await response.json();
            if (!rep) {
                setLoading(false);
                setPrompt("")
                setOption(null)
                setCount(null)
                return
            }

            let message = rep.message;
            setReply(message);
        } catch (e) {
            console.log(e)
        }
        setLoading(false);
        setPrompt("")
        setOption(null)
        setCount(null)
    }

    return (
        <div className="chatInput">
            <div className="inputBox mb-3">
                <input placeholder="Enter topic"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ? getReply() : ''}
                    style={{ color: "black" }}
                />
                <div className="row le justify-content-start">
                    <div className="col-7  d-flex gap-3">
                        <div className="btn-group">
                            <button className="btn btn-dark level " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {count ? count : "count"}
                            </button>
                            <ul className="dropdown-menu inp-drop shadow">
                                <li onClick={() => setCount("250")} className={count === "250" ? "heighlight" : ""}>250</li>
                                <li onClick={() => setCount("500")} className={count === "500" ? "heighlight" : ""}>500</li>
                                <li onClick={() => setCount("1000")} className={count === "1000" ? "heighlight" : ""}>1000</li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-dark level " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {option ? option : "Level"}
                            </button>
                            <ul className="dropdown-menu inp-drop shadow">
                                <li onClick={() => setOption("Beginner")} className={option === "Beginner" ? "heighlight" : ""}>Beginner</li>
                                <li onClick={() => setOption("Intermediate")} className={option === "Intermediate" ? "heighlight" : ""}>Intermediate</li>
                                <li onClick={() => setOption("Advance")} className={option === "Advance" ? "heighlight" : ""}>Advance</li>
                            </ul>
                        </div>
                        <div>
                            <FormControlLabel control={<Switch {...label} color="warning" sx={switchStyle} onChange={handelSwitch} checked={check} />} label="Reasoning" />
                        </div>
                    </div>
                    <div className="col-5">
                        <div id="submit" onClick={prompt ? getReply : null}><i className="fa-solid fa-paper-plane"></i></div>
                    </div>
                </div>


            </div>
            <p className="info">
                Notes Assitant can make mistakes. Check important info.
            </p>
        </div>
    );
}

export default InputBox;