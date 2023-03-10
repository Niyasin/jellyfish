import { useEffect, useRef, useState } from "react";
import {motion,useAnimationControls} from 'framer-motion'
function App() {
    const [formData,setformData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    gender:'Male',
    dateOfBirth:'',
    address:'',
  });
  const message=useRef(null);
  const [stage,setStage]=useState(1);
  let uid=null;
  const sendData=()=>{
    let valied=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(formData.firstName.length 
      && formData.lastName.length 
      && formData.email.length 
      && formData.phone.length 
      && formData.dateOfBirth.length 
      && formData.address.length
      && valied.test(formData.email)
      ){
      let xhr =new XMLHttpRequest();
      xhr.open('POST','reg');
      xhr.setRequestHeader('Content-Type','application/json');
      xhr.send(JSON.stringify(formData));
      xhr.onload=()=>{
        let res=JSON.parse(xhr.responseText);
        if(!res.error){
          uid=res.uid;
          setStage(2);
        }
      }
    }else{
      control.start({opacity:[0,1,1,1,1,1,1,0],transition:{duration:3}});
    }
  }
  const control=useAnimationControls();
  return (
    <div className="container">
      <div className="form">
        <div className="horizontal">
        <h1>{stage==1?"Registration":"Confirmation"}</h1>
        </div>
      {stage==1?
      <>
        <div className="inputwrap">
          <div className="horizontal">
            <input placeholder="First Name" onChange={(e)=>{setformData({...formData,firstName:e.target.value})}}/>
            <input placeholder="Last Name" onChange={(e)=>{setformData({...formData,lastName:e.target.value})}}/>
          </div>
          <input placeholder="Email" onChange={(e)=>{setformData({...formData,email:e.target.value})}}/>
            <input placeholder="Phone" onChange={(e)=>{setformData({...formData,phone:e.target.value})}}/>
          <div className="horizontal">
            <select placeholder="Pronouns" onChange={(e)=>{setformData({...formData,gender:e.target.value})}}>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
              <option value={null} defaultValue>Prefer not to say</option>
            </select>
            <input placeholder="Date Of Boirth" type="date" onChange={(e)=>{setformData({...formData,dateOfBirth:e.target.value})}}/>
          </div>
          <input placeholder="Address" onChange={(e)=>{setformData({...formData,address:e.target.value})}}/>
            <div className="button" onClick={sendData}>Submit</div>
           
        </div>
        </>:<>
        
        <p>
          Thank You For Your Registration,Please Check Your Email For Further Notification
        </p>
        
        </>
      }
      </div>
      <motion.div animate={control} initial={{opacity:0}}>
        <div className="message" ref={message}>
        Please fill Valied Data !
        </div>
      </motion.div>
      <div className="imagewrap">
        <img src="./1.png"/>
      </div>
      </div>
  );
}

export default App;