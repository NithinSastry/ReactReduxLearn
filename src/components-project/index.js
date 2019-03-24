import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.past().toString()}
          avatarSource={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        Some other harcorded text as component
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.past().toString()}
          avatarSource={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.past().toString()}
          avatarSource={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.past().toString()}
          avatarSource={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.date.past().toString()}
          avatarSource={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
