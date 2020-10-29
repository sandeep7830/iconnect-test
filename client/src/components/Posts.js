import React, {useState , Fragment } from 'react';
import Editpost from './Editpost';
const Posts = ({ posts, loading }) => {
  const [editpost, seteditpost] = useState(false)
   

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const Posts=posts.map(post=>(
   
    
    <tr key={post._id}>
        <td>{post.companyname}</td>
        <td>{post.description}</td>
        <td>{post.city}</td>
        <td>{post.state}</td>
        <td>{post.email}</td>
        <td>{post.number}</td>
        
        <td>{
      
      editpost&&
      
      <Fragment>
        <Editpost post={post} />
    </Fragment>}</td>
    </tr>
  ))





  return (
  <Fragment>
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
                {Posts}
            </tbody>
            <button onClick={e=>seteditpost(!editpost)} className='add'>edit post</button>
        </table>
  </Fragment>
  );
};

export default Posts;