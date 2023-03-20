import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileStats,
  ProfileStatsItem,
} from './Profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
