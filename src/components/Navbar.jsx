import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user1="jean";
  const user2 = "victor";

  return (
    <nav>
      <ul>
        <li key={1}><Link to={"/"}>Home</Link></li>
        <li key={2}><Link to={`/user-profile/${user1}`}>{user1}</Link></li>
        <li key={3}><Link to={`/user-profile/${user2}`}>{user2}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
