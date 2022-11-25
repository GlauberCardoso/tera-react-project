import React from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";

export default function UserBlog() {
  const { userId } = useParams();

  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`)
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
      setUser(data[0].userData);
      setIsLoading(false);
    });
  }, [userId])

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
