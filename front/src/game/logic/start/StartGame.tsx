import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/scss/start.scss';

const StartGame = () => {
  return (
    <div>
      <h1 className="title">Выбери жанр музыки</h1>
      <div className="gridGame">
        <Link className="start-btn" to="/chooseLevelKpop">
          K-pop
        </Link>
        <Link className="start-btn" to="/rap">
          Rap
        </Link>
        <Link className="start-btn" to="/rushits">
          Russian hits
        </Link>
      </div>
    </div>
  );
};

export default StartGame;
