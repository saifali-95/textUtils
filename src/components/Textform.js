import React,{useState} from 'react'

function Textform() {
  
  const [text, setText] = useState('Enter Text Please');
  const handleClick = ()=> {
    const upperText = text.toUpperCase();
    setText(upperText);
  } 

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }


  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
        <button type="button" className="btn btn-primary my-2" onClick={handleClick}>Upper Case</button>
      </div>
    </div>
  );
}
export default Textform;
