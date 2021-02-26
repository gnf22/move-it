import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer } from '../../styles/components/Profile';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="https://github.com/gnf22.png" alt="Diego Fernandes" />
      <div>
        <strong>Gustavo Nascimento</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
