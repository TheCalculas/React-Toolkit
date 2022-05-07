import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); // set text ho jaayega new text ke equal hence it got updated
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  //
  //
  //
  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="9"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
      </div>
      <div className="container">
        <h6>
          Your passage has {text.split(" ").length} words and {text.length}{" "}
          characters
        </h6>
      </div>
    </>
  );
}
