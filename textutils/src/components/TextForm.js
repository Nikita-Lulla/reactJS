import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked" + text) 
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been converted to UpperCase","success")
    }
    const handleOnChange = (event)=>{
        console.log("On Change was clicked")
        setText(event.target.value)
        
    }
    const handleLowClick = ()=>{
        console.log("LowerCase was clicked" + text)
        let newLowText = text.toLowerCase()
        setText(newLowText)
        props.showAlert("Text has been converted to LowerCase","success")

    }
    const handleCopyClick= ()=>{
        console.log("Copy was clicked")
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been Copied to Clipboard","success")

    }
    const handleClearClick= ()=>{
        console.log("Clear button was clicked")
        let newText = ''
        setText(newText)
        props.showAlert("Text has been cleared","success")

    }
    const handleExtraSpaceClick= ()=>{
        console.log("Extra Space button was clicked")
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Space has been removed","success")

    }
    const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{backgroundColor: props.mode === 'light'? 'white':'#042743', color: props.mode === 'light'? 'black':'white'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'light'? 'white':'grey', color: props.mode === 'light'? 'black':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
    </div>
    <div className='container my-3' style={{backgroundColor: props.mode === 'light'? 'white':'#042743', color: props.mode === 'light'? 'black':'white'}}>
        <h2>Your Text Summary</h2>
        {/* <p><b>{text.split(' ').length}</b> words and <b>{text.length}</b> characters</p> */}
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.length}</b> minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something in the above textbox to preview it here'}</p>
    </div>
    </>
  )
}
