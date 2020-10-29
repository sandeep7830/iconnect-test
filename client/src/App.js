import React, { useState, useEffect, Fragment } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import Addpost from './components/Addpost';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [formdata, setformdata] = useState({
    companyname:''
})
const{companyname}=formdata;

const [addpost, setaddpost] = useState(false)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/data");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const onchange=e=>{
    setformdata({...formdata,[e.target.name]:e.target.value})}

  const submit=async()=>{
    
    const config={
        headers:{
            "Content-Type":"application/json",
        },
    }
    try {
        
     const res=await axios.get("/data/name",formdata,config);
     setPosts(res.data);
     console.log(posts)
    } catch (error) {
        console.log(error)
    }

}




  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    
    <div className='container '>
      <button onClick={e=>setaddpost(!addpost)} className='add'>add</button>
      {addpost&&<Fragment>
    <Addpost/>
    </Fragment>}

    <form className="form" onSubmit={e=> submit()}>
    <div className="form-group">
          <input type="text" placeholder=" search comapnyname"name="companyname"value={companyname} onChange={e=>onchange(e)}/>
        </div>
        
        <input  type="submit"/>
    </form>
     <table className='table'>
     <thead>
                <tr>
                  <th >CompanyName</th>
                  <th >description</th>
                  <th >city</th>
                  <th >state</th>
                  <th >email</th>
                  <th >number</th>
                  <th />
                </tr>
            </thead>
            <tbody>
            {currentPosts.map(post=><Fragment><Posts post={post} loading={loading} /></Fragment>)}
            </tbody>
     </table>
      
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />



    </div>
    
  );
 
};

export default App;
