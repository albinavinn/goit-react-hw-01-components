import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
    return (
        <div className={css.profilewrap}>
      <div className={css.profile_card}>
    <div className={css.profile_card}>
      <div className={css.card_description}>
        <img src={avatar} alt="User avatar" className={css.card_avatar} />
        <p className={css.card_name}>{username}</p>
        <p className={css.card_tag}>{tag}</p>
        <p className={css.card_location}>{location}</p>
      </div>

      <ul className={css.card_stats}>
        <li key={1} className={css.statsItems}>
          <span className={css.stats_label}>Followers</span>
          <span className={css.stats_quantity}>
            {new Intl.NumberFormat().format(stats.followers)}
          </span>
        </li>
        <li key={2} className={css.statsItems}>
          <span className={css.stats_label}>Views</span>
          <span className={css.stats_quantity}>
            {new Intl.NumberFormat().format(stats.views)}
          </span>
        </li>
        <li key={3} className={css.statsItems}>
          <span className={css.stats_label}>Likes</span>
          <span className={css.stats_quantity}>
            {new Intl.NumberFormat().format(stats.likes)}
          </span>
        </li>
      </ul>
            </div>
            </div>
            </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;