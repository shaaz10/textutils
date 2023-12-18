import React,{useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    const handUpClick=()=>{
        console.log("Yes")
        let newText =text.toUpperCase();
       setText(newText);
      props.showAlert("All are conerted to uppercase!","success");
    } 
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const handLoClick=()=>{
        console.log("Yes")
        let newText =text.toLowerCase();
       setText(newText);
       props.showAlert("All are conerted to lowercase!","success");
    }

const handItClick=()=>{
    console.log("Yes")
    
    let newText =" "
    setText(newText);
    props.showAlert("All are cleared!","success");
}
  return (
    <>
    
    <div className={`container text-${props.mode=='light'?'#192734 ':'light'}`} style={{color: props.mode==='dark'?'white':'black'}}>
    <div>
        <h1>{props.heading}</h1>
      
<div className={`container mx-1`}>
<label for="my text" className="form-label"></label>
<textarea className="form-control " style={{background: props.mode=='dark'?'#192734':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}   id="my text" rows="10"></textarea>

</div><button className ="btn btn-primary mx-3 my-2"  onClick={handUpClick}>Upper casess</button>
<button className ="btn btn-primary mx-2 my-2"  onClick={handLoClick}>Lower casess</button>
<button className ="btn btn-primary mx-2 my-2"  onClick={handItClick}>Cleart text</button>
    </div>
<div className={`container my-4 mx-2 text-${props.mode=== 'light'?'#192734 ':'light'}`}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length}  characters</p>
    <p>{text.split(" ").length * 0.08} Minutes read</p>
    <h2>Preview</h2>
    <p>{text==''?'Write somethig':text}</p>
</div>
</div>
</>

)
}
  