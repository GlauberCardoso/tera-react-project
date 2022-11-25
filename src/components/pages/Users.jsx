/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";

// import user1 from "../../images/placeholders/user-1.jpg";
// import user2 from "../../images/placeholders/user-2.jpg";
// import user3 from "../../images/placeholders/user-3.jpg";

export default function Users(props) {
  const { userId } = useParams();

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, [userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>

        <div className="users__list">
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">{props.users}</div>
          </a>
        </div>
      </div>
    </Default>
  );
}
