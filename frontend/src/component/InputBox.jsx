import { useState } from "react";

function InputBox() {
    // const {prompt, setPrompt} = useContext(MyContext);
    let [value, setValue] = useState();

    //     const getReply = async () => {
    //     setLoading(true);
    //     setNewChat(false);

    //     console.log("message ", prompt, " threadId ", currThreadId);
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             message: prompt,
    //             threadId: currThreadId
    //         })
    //     };

    //     try {
    //         const response = await fetch("http://localhost:8080/api/chat", options);
    //         const res = await response.json();
    //         console.log(res);
    //         setReply(res.reply);
    //     } catch(err) {
    //         console.log(err);
    //     }
    //     setLoading(false);
    // }

    return (
        <div className="chatInput">
            <div className="inputBox">
                <input placeholder="Ask anything"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    // onKeyDown={(e) => e.key === 'Enter' ? getReply() : ''}
                >

                </input>
                <div id="submit" ><i className="fa-solid fa-paper-plane"></i></div>
            </div>
            <p className="info">
                Notes Assitant can make mistakes. Check important info. See Cookie Preferences.
            </p>
        </div>
    );
}

export default InputBox;