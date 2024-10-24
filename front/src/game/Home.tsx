import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/home.scss';

const Home = () => {
  return (
    <div>
      <ul className="grid">
        <li>
          <button className="btn-primary">
            <Link className="btn-p link" to="/game">
              Start game <span></span>
            </Link>
          </button>
        </li>
        <li>
          <button className="btn-primary">
            <Link className="btn-p link" to="/record">
              Record <span></span>
            </Link>
          </button>
        </li>
        <li>
          <button className="btn-primary">
            <Link className="btn-p link" to="/settings">
              Settings <span></span>
            </Link>
          </button>
        </li>
        <li>
          <button className="btn-primary">
            <Link className="btn-p link" to="/rules">
              Rules <span></span>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
