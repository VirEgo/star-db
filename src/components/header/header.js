import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <div className="header header-wrapper  d-flex">
      <h3>
        <a href="#/">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#/people">People</a>
        </li>
        <li>
          <a href="#/planets">Planets</a>
        </li>
        <li>
          <a href="#/starships">Starships</a>
        </li>
      </ul>
      <button className="btn btn-primary btn-sm">Change Service</button>
    </div>
  );
};

export default Header;