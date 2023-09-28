import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    // console.log("UpperCase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText)
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text , setText] = useState('');
  // text = "new Text";//Wrong way to change the state
  // setText("New Text");// Correct way to change the state

  return (
    <>
      <div>
        <h2>{props.heading} </h2>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
