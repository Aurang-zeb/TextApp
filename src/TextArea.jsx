import React, { useState } from 'react'
import './TextArea.css'

function TextArea() {
  const[text,settext]=useState('');
  const Textshow=(e)=>{
    settext(e.target.value)
  }
  const upperCase=()=>{
    settext(text.toUpperCase())
  }
  const LowerCase=()=>{
    settext(text.toLowerCase());
  }
  const handleClearbutton=()=>{
    settext('');
  }
  const removeExtraSpace=()=>{
    let Clean=text.trim().replace(/\s+/g,'');
    settext(Clean);
  }
  return (
    <>
    <form>
    <div className="container ">
  <div class="form-group my-4">
    <label htmlFor="exampleFormControlTextarea1 ">Type Your text Here </label>
    <textarea  class="form-control my-3 border-2" value={text} onChange={Textshow} id="exampleFormControlTextarea1" rows="15"></textarea>
  </div>
   
  <p>{text.split(" ").length} Words and {text.length} Character</p>
  <p>{0.008 * text.split(" ").length} Mintues read</p>
  <h4>Preview</h4>
  <pre style={{fontStyle:'italic',border:'1px dotted',padding:'4px'}}>{text}</pre>
  
  </div>
  <div className="btnContainer">
    {/* Touppercase button */}
  <button type="button" onClick={upperCase} class="btn btn-primary mx-2 ">To UpperCase</button>
  {/* To lowercase button */}
<button type="button" onClick={LowerCase} class="btn btn-primary mx-2">To LowerCase
</button>
{/* Clear button */}
<button type="button" onClick={handleClearbutton} class="btn btn-primary mx-2">Clear Text
</button> 
{/* Remove Extra Spaces  */}
<button type="button" onClick={removeExtraSpace} class="btn btn-primary mx-2">Remove Extra Space
</button> 
  </div>
</form> 
    </>  
 )
}

export default TextArea






