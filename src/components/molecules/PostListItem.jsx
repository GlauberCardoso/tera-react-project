import React from 'react';

import { getFriendlyDate } from "../../helpers/Date";

export default function PostListItem(props) {
  const [showContent, setShowContent] = React.useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  }

  return (
    <div onClick={handleShowContent} className="user_blog__posts-item">
      <div className="user-blog__posts-item-photo">
        <img src={props.image} className="responsive" alt="" />
      </div>
      <h2 className="user-blog__posts-item-title">{props.title}</h2>
      <div className="user-blog__posts-date">
        Publicado em {getFriendlyDate(props.createdAt)}
      </div>
      {showContent && (
        <div className="user-blog__post-content">{props.content}</div>
      )}
    </div>
  );
}
