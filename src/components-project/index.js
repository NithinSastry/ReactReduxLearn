import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.past().toString()}
        avatarSource={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.past().toString()}
        avatarSource={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.past().toString()}
        avatarSource={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.past().toString()}
        avatarSource={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={faker.date.past().toString()}
        avatarSource={faker.image.avatar()}
        comment={faker.lorem.sentence()}
      />
      
    </div>
  );
};

export default App;
