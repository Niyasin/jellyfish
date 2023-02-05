import { useState } from "react";

function App() {
  const [formData,setformData]=useState({
    firstName:null,
    lastName:null,
    email:null,
    phone:null,
    gender:null,
    dateOfBirth:null,
    address:null,
  });
  return (
    <div className="container">
      <div className="form">
        <div className="horizontal">
          <h1>Registration</h1>
          <Progress stage={1}/>
        </div>
        <div className="inputwrap">
          <div className="horizontal">
            <input placeholder="First Name" onChange={(e)=>{setformData({...formData,firstName:e.target.value})}}/>
            <input placeholder="Last Name" onChange={(e)=>{setformData({...formData,lastName:e.target.value})}}/>
          </div>
          <input placeholder="Email" onChange={(e)=>{setformData({...formData,email:e.target.value})}}/>
          <input placeholder="Phone" onChange={(e)=>{setformData({...formData,phone:e.target.value})}}/>
          <div className="horizontal">
            <select placeholder="Pronouns" onChange={(e)=>{setformData({...formData,gender:e.target.value})}}>
              <option value={'male'}>He/Him</option>
              <option value={'female'}>She/Her</option>
              <option value={null} defaultValue>Prefer not to say</option>
            </select>
            <input placeholder="Date Of Boirth" type="date" onChange={(e)=>{setformData({...formData,dateOfBirth:e.target.value})}}/>
          </div>
          <input placeholder="Address" onChange={(e)=>{setformData({...formData,address:e.target.value})}}/>
        <div className="button" onClick={()=>{console.log(formData);}}>Submit</div>
        </div>
      </div>
      <div class="imagewrap">
        <img src="./1.png"/>
      </div>
      </div>
  );
}

export default App;

const Progress=({stage})=>{
  return(
    <div className="progress">
      <hr/>
      <div className={stage>=1?'checked':'uncheked'}>1</div>
      <div className={stage>=2?'checked':'uncheked'}>2</div>
      <div className={stage>=3?'checked':'uncheked'}>3</div>
    </div>
  )
}