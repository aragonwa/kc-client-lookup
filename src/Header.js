import React from 'react';
import { FaFlag, FaCog } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <h1>King County Client Lookup Tool</h1>
      <nav>
        {/* Example content */}
        <ul>
          <li>
            <FaFlag />
          </li>
          <li>
            {' '}
            <FaCog />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
