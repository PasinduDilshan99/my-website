import React from "react";
import "../css/loadingWord.css";

const LoadingWord = () => {
  return (
    <div className="loading-word-body">
      <h2 className="loading-word-h2">
        <div className="loading-word-span">L</div>
        <div className="loading-word-span">O</div>
        <div className="loading-word-span">A</div>
        <div className="loading-word-span">D</div>
        <div className="loading-word-span">I</div>
        <div className="loading-word-span">N</div>
        <div className="loading-word-span">G</div>
        <div className="loading-word-span">.</div>
        <div className="loading-word-span">.</div>
        <div className="loading-word-span">.</div>
      </h2>
    </div>
  );
};

export default LoadingWord;
