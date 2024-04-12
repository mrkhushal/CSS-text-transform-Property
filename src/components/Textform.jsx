import React, {useState} from 'react' 

export default function Textform(props) { 

// Uppercase
const handleUpClick =()=>{
    console.log("Upeercase was clicked" + text);
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
}
// Lowecase
const handlelwClick =()=>{
    console.log("Lowecase was clicked" + text);
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
}
// cleartext
const handleclearClick =()=>{
    console.log("Clear");
    let cleartext = "";
    setText(cleartext);
}
// Copy text
const handlecopyClick =()=>{
    console.log("Copy");
    var text= document.getElementById("mybox");
    navigator.clipboard.writeText(text.value);
}
// Spaces Remove
const handleExtraSpaces =()=>{ 
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
}
// Capitalize
const handlecaClick = () => {
    console.log("Capitalize was clicked" + text);
    let words = text.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let capitalizedText = capitalizedWords.join(" ");
    setText(capitalizedText);
}


const handleOnChange =(event) =>{
    console.log("onChange");
    setText(event.target.value)
}
  const [text, setText] = useState('Enter text here');
 
  return (
<>
<div className='container my-5'   >
   <h1>CSS text-transform Property</h1> 
   <div className="row">
   <div className='col-12 text-right pb-3'>
    <button className='btn btn-danger ' onClick={handleclearClick}>Clear Text</button>
    <button className='btn btn-success ml-2' onClick={handlecopyClick}>Copy Text</button>
    </div>
   <div className="form-group col-12">
  
 
    <textarea className="form-control" value={text} onChange={handleOnChange} 
      id="mybox"  rows="8"></textarea>
    </div>
   </div>
    <div className='row text-center'>
    <div className='col-lg-3 '>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className='col-lg-3'>
    <button className='btn btn-success' onClick={handlelwClick}>Convert to Lowercase</button>
    </div>
    <div className='col-lg-3'>
    <button className='btn btn-info' onClick={handlecaClick}>Convert to Capitalize</button>
    </div>
    <div className='col-lg-3'>
    <button className='btn btn-secondary' onClick={handleExtraSpaces}>Extra spaces Remove</button>
    </div>
   

    </div>
    </div>
    <div className='container'  >
    <h2>Your text summary</h2>
    <p><strong>{text.split(" ").length}</strong> word <strong>{text.length}</strong> characters</p>
    <p><strong>{0.008 * text.split(" ").length}</strong>  Minutes Read</p>
    <h2>
        Preview
    </h2>
    <p>{text}</p>
    </div>
</>
  )
}
 
