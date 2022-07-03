import React, { useState } from "react";

// import PropTypes from "prop-types";
export default function LowertoUppercase(props) {
    function handleUpClick() {
        console.log("Button Clicked " + text);
        let changetext = text.toUpperCase();
        setText(changetext);
        // setText("You hit the Button to Make Some Majic")
    }
    function handleOnChange(event) {
        // console.log("Handle On Change");
        setText(event.target.value);
    };

    const handleCamelStyle = (event) => {
        // console.log("Button Clicked " + text);
        let cameltext = text.toLowerCase();
        setText(cameltext);
    };

    const clearText = (event) =>{
        setText("");
    };


    const [text, setText] = useState("Remove Me 😍!. ");
    return (
        <>
            <h1>{props.heading} </h1>
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
            <button className="btn btn-primary cpata mx-2" onClick={handleUpClick}>
                Convert to Cpatalize
            </button>
            <button className="btn btn-primary camel mx-2" onClick={handleCamelStyle}>
                Convert to Lowercase
            </button>

            <button className="btn btn-secondary btn btn-info mx-3" onClick={clearText}>
                Clear
            </button>
         
                <hr />

            <div className="container">
                {/* <h4>Your Text Summry</h4> */}
                <p>{text.split(" ").length} Words {text.length} Charachters</p>
                <hr />
                <h3>Reading Time</h3>
                <hr />
                <p>{0.04 * text.split(" ").length} Mintues Requried to Read </p>
                <hr />
            </div>

            <div className="container">
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    );
}
