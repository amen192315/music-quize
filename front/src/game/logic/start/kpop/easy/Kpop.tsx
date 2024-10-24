import React, { useState } from 'react';
import { K_POP } from '../../../../data/kpop/k-pop.data';
import '../../../../../assets/scss/start.scss';
import GameKpop from './GameKpop';
import ResultKpop from './ResultKpop';

const Kpop = () => {
  const [sec, setSec] = useState(3);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const kpop = K_POP[step];
  if (sec >= 0) {
    setTimeout(() => {
      setSec(sec - 1);
    }, 800);
  }

  const onClickVariant = (index: number) => {
    setStep(step + 1);

    if (index === kpop.corrent) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div>
      {sec >= 0 ? (
        <h1 className="count">{sec}</h1>
      ) : step !== K_POP.length ? (
        <GameKpop step={step} kpop={kpop} onClickVariant={onClickVariant} />
      ) : (
        <ResultKpop correct={correct} />
      )}
    </div>
  );
};

export default Kpop;
