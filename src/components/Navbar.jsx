import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user1="jean";
  const user2 = "victor";

  return (

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
       
        <ul>
          <li>
            <Link to={`user-profile/${user1}`}>{user1}</Link>
          </li>
          <li>
            <Link to={`user-profile/${user2}`}>{user2}</Link>
          </li>
         
        </ul>
      </ul>
    </nav>
  );
  
}

export default Navbar;
