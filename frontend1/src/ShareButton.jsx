import Tooltip from "@mui/material/Tooltip";

function ShareButton({ markdownText }) {
  const handleShare = async () => {
    const shareData = {
      title: "AI Notes Assistant",
      text: markdownText,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Note shared successfully!");
      } catch (err) {
        console.error("Share canceled or failed:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(markdownText);
        alert("Sharing not supported — note copied to clipboard instead!");
      } catch (err) {
        alert("Unable to share or copy.");
        console.error(err);
      }
    }
  };

  return (
    <Tooltip title="Share">
      <button
        onClick={handleShare}
        className="copybtn"
      >
        <i className="fa-regular fa-share-from-square"></i>
      </button>
    </Tooltip>
  );
}

export default ShareButton;
