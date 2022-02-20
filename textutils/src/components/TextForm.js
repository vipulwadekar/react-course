import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnClickUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted To UpperCase","success")
    }

    const handleOnClickLowerCase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted To LowerCase","success")
    }

    const handleClearText = () => setText("");



    const handlePasteText = () => {
        setText("")
        setText(text.writeText())
    }
    const handleCopyText = (e) => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success")
    }

    return (
        <>
            <div className="container-fluid my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">

                    <textarea
                        className="form-control"
                        id="MyBox" rows="8"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#0C2D48' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}>
                    </textarea>

                    <button className="btn btn-primary mt-3 " onClick={handleOnClickUpperCase} >
                        Convert To UpperCase
                    </button>

                    <button className="btn btn-primary mt-3 ms-3 " onClick={handleOnClickLowerCase} >
                        Convert To LowerCase
                    </button>

                    <button className="btn btn-primary mt-3 ms-3 " onClick={handleCopyText} >
                        Copy text
                    </button>

                    <button className="btn btn-primary mt-3 ms-3 " onClick={handlePasteText} >
                        Paste text
                    </button>

                    <button className="btn btn-primary mt-3 ms-3 " onClick={handleClearText} >
                        Clear text
                    </button>

                    <button className="btn btn-primary mt-3 ms-3 " onClick={handleExtraSpaces} >
                        Remove extra spaces
                    </button>
                </div>

            </div>

            <div className="container-fluid " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length}  Minutes to Read</p>
                <h2>Preview</h2>
                <p>
                    {text}
                </p>

            </div>



        </>

    )
}
