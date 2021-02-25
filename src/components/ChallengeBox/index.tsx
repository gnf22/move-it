import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import {
  ChallengeBoxContainer,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeFailedButton,
  ChallengeSucceeededButton
} from '../../styles/components/ChallengeBox';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton
              type="button"
              onClick={resetChallenge}
            >
              Falhei
            </ChallengeFailedButton>

            <ChallengeSucceeededButton
              type="button"
            >
              Completei
            </ChallengeSucceeededButton>
          </footer>
        </ChallengeActive>
      ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
          </ChallengeNotActive>
        )}
    </ChallengeBoxContainer>
  )
}