import React, { useState } from "react";

// import PropTypes from "prop-types";
export default function LowertoUppercase(props) {
    function handleUpClick() {
        // console.log("Button Clicked " + text);
        let text;
        let newText = text.trim();
        let changetext = newText.toUpperCase();
        setText(changetext);
        // setText("You hit the Button to Make Some Majic")
    }
    function handleOnChange(event) {
        // console.log("Handle On Change");
        setText(event.target.value);
    };

    const handleCamelStyle = (event) => {
        // console.log("Button Clicked " + text);
        let cameltext = newText.toLowerCase();
        setText(cameltext);
    };

    const clearText = (event) =>{
        setText('');
    };


    const [newText, setText] = useState("Remove Me 😍!.");
    return (
        <>
            
            <p className="mt-4" style={{color: 'gray'}}>Clear Text & Paste your Text in the Text Area</p>
            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    onChange={handleOnChange}
                    value={newText}
                    rows="8"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 300 }}
                ></textarea>
            </div>
            <button className="btn btn-primary cpata mx-2 " onClick={handleUpClick}>
                Convert to Cpatalize
            </button>
            <button className="btn btn-primary camel mx-2 my-2" onClick={handleCamelStyle}>
                Convert to Lowercase
            </button>

            <button className="btn bg-warning btn btn-info mx-2 my-2" onClick={clearText}>
                Clear
            </button>
         
        

            <div className="container mt-4">
                {/* <h4>Your Text Summry</h4> */}
                
                <p>{newText.split(" ").length} Words {newText.length} Charachters</p>
                <hr className="w-25" />
                <h3>Reading Time</h3>
                <hr className="w-25" />
                <p>{0.04 * newText.split("").length} Mintues Requried to Read </p>
                <hr className="w-25" />
            </div>

            <div className="container">
                <h3>Preview</h3>
                <p>{newText}</p>
            </div>
        </>
    );
}
