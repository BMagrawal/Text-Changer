
import React from 'react';
import copy from "copy-to-clipboard"
import { useState } from 'react';
// import Alert from './Alert';

export default function TextArea(props) {

    
    

    const [Text, setText] = useState("");
    

    const clickHandlerUp = () => {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert(" concerted to Uppercase","success")
    }

    const clickHandlerLow = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert(" concerted to Lowercase","success")
    }

    const clickToCopy = () => {
        // copy(Text);
        navigator.clipboard.writeText(Text)
        props.showAlert("Text is copied","success")
        
    }


    const changeHandler = (event) => {
        setText(event.target.value)
        
    }

    const clickToRemoveSpace = ()=>{
        let newtext = Text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert(" ExtraSpace is cleared","success")
    }

    const clickReset = (event) => {
        alert("are you sure want to clear all text ")
        setText(event.target.value = "")
        props.showAlert("Content is creared","success")
        
    }

    return (
        <div  style={{color: props.mode==='light'?'black' : 'white'}}>
            <div className='container my-3'  >
                <div className="mb-3">
                    <h3>Enter the text to change</h3>
                    <textarea className="form-control" value={Text} style={{backgroundColor: props.mode==='light'?'white' : '#1B0547',color:props.mode==='dark'?'white' : 'black'}} onChange={changeHandler}  rows="8"></textarea>
                </div>
            </div>

            <div className="container">
                <button disabled={Text.length===0} className={`btn btn-${props.newmode} mx-2 my-2`} onClick={clickHandlerUp}>Convert to UpperCase</button>
                <button disabled={Text.length===0} className={`btn btn-${props.newmode} mx-2 my-2`} onClick={clickHandlerLow}>Convert to LowerCase</button>
                <button disabled={Text.length===0} className={`btn btn-${props.newmode} mx-2 my-2`} onClick={clickToCopy}>copy</button>
                <button disabled={Text.length===0} className={`btn btn-${props.newmode} mx-2 my-2`} onClick={clickToRemoveSpace}>Remove Extra Spaces</button>
                <button disabled={Text.length===0} className="btn btn-danger mx-2" onClick={clickReset}>Reset</button>
            </div>

            <div className="container my-2" >
                <h3>Text summary</h3>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {Text.length} </p>
                <h4>Read time : {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length}</h4>
            </div>

        </div>
    )
}


