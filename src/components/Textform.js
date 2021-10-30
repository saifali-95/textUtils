import React,{useState} from 'react'
import './Textform.css'

function Textform() {
  
  const [text, setText] = useState('');
  const handleUpperClick = ()=> {
    const upperText = text.toUpperCase();
    setText(upperText);
  } 
  
  const handleLowerClick = ()=> {
    const lowerText = text.toLowerCase();
    setText(lowerText);
  } 

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const clearText = (event)=> {
    setText("");
  }

  const copyText = (event)=> {
    navigator.clipboard.writeText(text);
  } 

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label className="form-label">
          <h2> Enter your text here </h2>
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} placeholder={'Enter your text here'}></textarea>
        <i type="button" className="far fa-copy errspan" onClick={copyText} title="Copy to Clipboard"></i>
      </div>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpperClick}>To Upper Case</button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowerClick}>To Lower Case</button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear Text</button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy to Clipboard</button>
    </div>
    <div className="container">
      <div className="my-3">
        <h3> Summary</h3>
        <p> Word Count is {text.split(" ").length} and Total Characters is {text.length} </p>
        <h3> Preview </h3>
        <p>{text.toLowerCase()}</p>
      </div>
    </div>
    </>
  );
}
export default Textform;
