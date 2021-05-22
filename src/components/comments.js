import React from "react";
import faker from "faker";

const comments = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="Avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()} {faker.name.lastName()}
          </a>
          <div className="metadata">
            <span className="data">Today at 6:00AM</span>
          </div>
          <div className="text">{faker.lorem.words()}</div>
        </div>
      </div>
    </div>
  );
};

export default comments;
