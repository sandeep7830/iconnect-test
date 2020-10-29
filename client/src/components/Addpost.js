import React,{ useState } from 'react'
import axios from 'axios';

const Addpost = () => {
 const [formdata, setformdata] = useState({
     companyname:'',
     description:'',
     city:'',
     state:'',
     email:'',
     number:'',

 })
 const{
    companyname,
    description,
    city,
    state,
    email,
    number,

}=formdata;
const onchange=e=>{
  setformdata({...formdata,[e.target.name]:e.target.value})}
    
const submit=async()=>{
    
    const config={
        headers:{
            "Content-Type":"application/json",
        },
    }
    try {
        
     await axios.post("/data",formdata,config);
    } catch (error) {
        console.log(error)
    }

}


return (
        <div>
             <form className="form" onSubmit={e=> submit()}>
             <div className="form-group">
          <input type="text" placeholder="comapnyname"name="companyname"value={companyname} onChange={e=>onchange(e)}/>
        </div>
        <div className="form-group">
          <textarea type="text" placeholder="description"name="description"value={description} onChange={e=>onchange(e)}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="email"name="email"value={email} onChange={e=>onchange(e)}/>
        </div>
        <div className="form-group">
          <input type="number" placeholder="number"name="number"value={number} onChange={e=>onchange(e)}/>
        </div>
             <div className="form-group">
          <select name="state" value={state} onChange={e=>onchange(e)}>
          <option value="0">* Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Goa">Goa</option>
            <option value="Gujrat">Gujrat</option>
          </select>
        </div>
        {!state? <select name="state" value={city} onChange={e=>onchange(e)}>
                 <option value="0">* Select State first</option>
                 </select>:<div className="form-group">
                 {
                state==="Maharashtra"?  <select name="city" value={city} onChange={e=>onchange(e)}>  
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Nagpur">Nagpur</option>
              </select>:(state==="Goa"?<select name="city" value={city} onChange={e=>onchange(e)}>  
                <option value="Panjim">Panaji</option>
                <option value="Intern">Baga</option>
                <option value="Other">Anjuna</option>
              </select>:<select name="city" value={city} onChange={e=>onchange(e)}>  
                <option value="surat">surat</option>
                <option value="Gandinagar">Gandinagar</option>
                <option value="Other">Rajkot</option>
              </select>)
            }
       
          
        </div>}
    
        <input type="submit" />
             </form>
        </div>
    )
}

export default Addpost
