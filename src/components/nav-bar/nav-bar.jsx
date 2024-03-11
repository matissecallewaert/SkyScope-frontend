import './nav-bar.css';
import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const entries = [
        { name: 'Home', path: '/', ico: '🏠', hue: 200 },
        { name: 'Dashboard', path: '/dashboard', ico: '📊', hue: 260 },
        { name: 'Train', path: '/train', ico: '💪', hue: 320 },
        { name: 'Label', path: '/label', ico: '🏷️', hue: 30 },
        { name: 'Detection', path: '/detection', ico: '🔍', hue: 60 },
        { name: 'Contact', path: '/contact', ico: '📞', hue: 90 },
    ];

    return (
      <nav>
        {entries.map((entry, i) => (
          <Link key={i} to={entry.path} className="item" style={{ '--hue': `${entry.hue}deg` }}>
            <span className="icon mono" aria-hidden="true">{entry.ico}</span>
            <span className="icon midl" aria-hidden="true" style={{ backgroundImage: `-moz-element(#blur${i})` }}>{entry.ico}</span>
            <span className="icon grey" aria-hidden="true">{entry.ico}</span>
            <div className='name'>{entry.name}</div>
          </Link>
        ))}
      </nav>
    );
};

export default NavBar;
  