import React, { useEffect, useRef } from 'react';
import '../../../../../assets/scss/start.scss';
import { K_POP_Medium } from '../../../../data/kpop/k-pop-medium.data';

const MediumGameKpop = ({ kpop, onClickVariant, step }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const percentage = Math.round((step / K_POP_Medium.length) * 100);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [step]);
  return (
    <div className="mainGame">
      {
        <audio ref={audioRef} autoPlay>
          <source src={K_POP_Medium[step].music} />
        </audio>
      }
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1 className="title">Какая песня сейчас играет?</h1>
      <ul className="list">
        {kpop.variants.map((el: [], index: number) => (
          <li onClick={() => onClickVariant(index)}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default MediumGameKpop;
