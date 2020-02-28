import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    // {
    //   id: "u1",
    //   name: "Bob Smith",
    //   image:
    //     "https://media1.s-nbcnews.com/i/newscms/2019_29/2936201/190619-joe_murphy-byline2436_341b585a5f99c3de69c34b262283c983.jpg",
    //   places: 3
    // }
  ];
  return <UserList items={USERS} />;
};

export default Users;
