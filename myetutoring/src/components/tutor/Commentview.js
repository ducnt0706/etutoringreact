import React from 'react'
import Comment from './Comment';
import Commentadd from './Commentadd';

const Commentview = ({ comments, onCreate }) => {
  return (
    <section className="Comments">
      <Commentadd onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} onCreate={onCreate} />)}
    </section>
  )
}

export default Commentview;
