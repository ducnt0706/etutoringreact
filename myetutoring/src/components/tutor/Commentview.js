import React from 'react'
import Comment from './Comment';
import Commentadd from './Commentadd';
import '../../css/Comment.css'; 

const Commentview = ({ comments, onCreate, onDelete }) => {
  return (
    <section className="height-medium">
      <Commentadd onCreate={onCreate}/>
      <div className="scroll-right">
        {comments.map(comment => <Comment {...comment} key={comment.id} onDelete={onDelete} />)} 
      </div>
    </section>
  )
}

export default Commentview;