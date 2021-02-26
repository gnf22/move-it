import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import {
  CountdownContainer,
  CountdownButton,
  CountdownButtonActive
} from '../../styles/components/Countdown';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);


  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton
          disabled
          onClick={resetCountdown}
        >
          Ciclo encerrado
        </CountdownButton>
      ) : (
          <>
            { isActive ? (
              <CountdownButtonActive
                type="button"
                onClick={resetCountdown}
              >
                Abandonar Ciclo
              </CountdownButtonActive>
            ) : (
                <CountdownButton
                  type="button"
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </CountdownButton>
              )}
          </>
        )}
    </div>
  )
}