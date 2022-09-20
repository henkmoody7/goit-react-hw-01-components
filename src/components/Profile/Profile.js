import { ProfileWrapper, StatsContainer } from './profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <ProfileWrapper>
      <img src={avatar} alt={username} width="340" />
      <h2>{username}</h2>
      <b>#{tag}</b>
      <p>{location}</p>
      <StatsContainer>
        <p>
          Followers
          <br />
          <span>
            <b>{stats.followers}</b>
          </span>
        </p>

        <p>
          Views
          <br />
          <span>
            <b>{stats.views}</b>
          </span>
        </p>

        <p>
          Likes
          <br />
          <span>
            <b>{stats.likes}</b>
          </span>
        </p>
      </StatsContainer>
    </ProfileWrapper>
  );
};
