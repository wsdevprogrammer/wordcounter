import React, { useState } from "react";

export default function LowertoUppercase() {
    const [text, setText] = useState("Paste your Text here..");

    const handleUpClick = () => {
      const newText = text.trim();
      const changedText = newText.toUpperCase();
      setText(changedText);
    };

    const handleCamelStyle = () => {
      const camelText = text.toLowerCase();
      setText(camelText);
    };

    const clearText = () => {
      setText('');
    };

    const handleOnChange = (event) => {
      setText(event.target.value);
    };

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const charCount = text.trim().replace(/\s+/g, "").length;

    return (
        <>
            <p className="mt-4" style={{color: 'gray'}}>Clear Text & Paste your Text in the Text Area</p>
            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    onChange={handleOnChange}
                    value={text}
                    rows="8"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 300 }}
                ></textarea>
            </div>
            <button className="btn btn-primary cpata mx-2 " onClick={handleUpClick}>
                Convert to Capitalize
            </button>
            <button className="btn btn-primary camel mx-2 my-2" onClick={handleCamelStyle}>
                Convert to Lowercase
            </button>

            <button className="btn bg-warning btn btn-info mx-2 my-2" onClick={clearText}>
                Clear
            </button>

            <div className="container mt-4">
                <p>{wordCount} Words {charCount} Characters</p>
                <hr className="w-25" />
                <h3>Reading Time</h3>
                <hr className="w-25" />
                <p>{0.04 * charCount} Minutes Required to Read</p>
                <hr className="w-25" />
            </div>

            <div className="container">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
