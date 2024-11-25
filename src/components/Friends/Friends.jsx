import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
    const element = friends.map(({ id, avatar, name, isOnline }) => (
        < FriendsListItem
            key={id}
            id={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
        />
    ));
    return <ul className={css.friendList}>{element}</ul>;
};
        
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired,
    )
};
export default FriendList;