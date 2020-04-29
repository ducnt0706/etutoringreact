import React from 'react'
import Comment from './Comment';
import Commentadd from './Commentadd';

const Commentview = ({ comments, onCreate, onDelete }) => {
  return (
    <section >
      <Commentadd onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} onDelete={onDelete} />)}
    </section>
  )
}

export default Commentview;