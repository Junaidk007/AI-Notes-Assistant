import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/night-owl.css";
import './notes.css'
import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";


function Notes() {
    let { reply } = useContext(MyContext);
    let [display, setDisplay] = useState(false);
    const [latestReply, setLatestReply] = useState(null);
    useEffect(() => {
        let content = reply.split(" ");
        let idx = 0
        setDisplay(false);

        let interval = setInterval(() => {
            setLatestReply(content.slice(0, idx + 1).join(" "));
            idx++;
            if (idx >= content.length) {
                clearInterval(interval);
                setDisplay(true)
            }
        }, 30);

        return () => clearInterval(interval);
    }, [reply])
    return (
        <div className="mb-5 border-top pt-5" style={{
            width: "1100px",
            maxWidth: "100%",
            margin: "1rem auto",
        }} >
            <div className="notes markdown-body">
                <ReactMarkdown rehypePlugins={rehypeHighlight} remarkPlugins={[remarkGfm]} >
                    {latestReply}
                </ReactMarkdown>
            </div>
            {display && (<div className="d-flex justify-content-end" style={{  padding: "1rem 3.5rem 0 0"}}>
                <CopyButton markdownText={reply} />
                {/* <ShareButton markdownText={reply}/> */}
            </div>) }


        </div>
    );
}

export default Notes;