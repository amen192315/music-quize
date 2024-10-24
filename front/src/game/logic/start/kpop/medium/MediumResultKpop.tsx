import React from 'react';
import '../../../../../assets/scss/start.scss';
import { K_POP_Medium } from '../../../../data/kpop/k-pop-medium.data';
import { Link } from 'react-router-dom';

const MediumResultKpop = ({ correct }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {K_POP_Medium.length}
      </h2>
      <button>
        <Link to="/game"> Вернуться к выбору жанра песни</Link>
      </button>
    </div>
  );
};

export default MediumResultKpop;
