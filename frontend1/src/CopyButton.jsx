import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

function CopyButton({ markdownText }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            // Write raw markdown text to clipboard
            await navigator.clipboard.writeText(markdownText);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy:", err);
            alert("Copy failed. Please try again.");
        }
    };

    return (
        <Tooltip title={copied ? "Copied!" : "Copy"}>
            <button
                onClick={handleCopy}
                className="copybtn text-gray-700 hover:text-green-600 transition-all"
            >
                {copied ? (
                    <i className="fa-regular fa-circle-check"></i>
                ) : (
                    <i className="fa-regular fa-clone"></i>
                )}
            </button>
        </Tooltip>
    );
}

export default CopyButton;