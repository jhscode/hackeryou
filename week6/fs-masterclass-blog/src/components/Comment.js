import React from 'react';

const Comment = ({ body, user, date }) => (
  <div>
    {body} - {user.name} - {date}
  </div>
);

export default Comment;