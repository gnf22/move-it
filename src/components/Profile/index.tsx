import { ProfileContainer } from '../../styles/components/Profile';

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/gnf22.png" alt="Diego Fernandes" />
      <div>
        <strong>Gustavo Nascimento</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </ProfileContainer>
  );
}
