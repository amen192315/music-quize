import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/scss/chooseLvl.scss';

const ChooseLevelKpop = () => {
  return (
    <div>
      <button className="btn-primary">
        <Link className="btn-p easy" to="/easykpop">
          Легкий
        </Link>
      </button>
      <button className="btn-primary">
        <Link className="btn-p med" to="/mediumkpop">
          Средний
        </Link>
      </button>
      <button className="btn-primary">
        <Link className="btn-p hard" to="/hardkpop">
          Сложный
        </Link>
      </button>
    </div>
  );
};

export default ChooseLevelKpop;
