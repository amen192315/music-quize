import React from 'react';
import '../../../../../assets/scss/start.scss';
import { K_POP } from '../../../../data/kpop/k-pop.data';
import { Link } from 'react-router-dom';

const HardResultKpop = ({ correct }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {K_POP.length}
      </h2>
      <button>
        <Link to="/game"> Вернуться к выбору жанра песни</Link>
      </button>
    </div>
  );
};

export default HardResultKpop;
