import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author = {faker.name.firstName()}/>
      <CommentDetail author = {faker.name.firstName()}/>
      <CommentDetail author = {faker.name.firstName()}/>
      <CommentDetail author = {faker.name.firstName()}/>
      <CommentDetail author = {faker.name.firstName()}/>
    </div>
  );
};

export default App;
