import React, {useState , Fragment } from 'react';
import Editpost from './Editpost';
const Posts = ({ post, loading }) => {
  const [editpost, seteditpost] = useState(false)
   

  if (loading) {
    return <h2>Loading...</h2>;
  }

 





  return (
  <Fragment>
      

            
            <tr key={post._id}>
        <td>{post.companyname}</td>
        <td>{post.description}</td>
        <td>{post.city}</td>
        <td>{post.state}</td>
        <td>{post.email}</td>
        <td>{post.number}</td>
        <td><button onClick={e=>seteditpost(!editpost)} className='add'>edit post</button></td>
        <td>{
      
      editpost&&
      <Fragment>
        <Editpost post={post} />
    </Fragment>}</td>
    </tr>
            
  </Fragment>
  );
};

export default Posts;