import React from 'react'
import Comment from './Comment';
import Commentadd from './Commentadd';

const Commentview = ({ comments, onCreate }) => {
  return (
    <section >
      <Commentadd onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} />)}
    </section>
  )
}

export default Commentview;