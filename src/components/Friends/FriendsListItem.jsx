import css from './Friends.module.css';



export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li className={css.item} key={id} id={id}>
            <span className={isOnline ? css.isOnline : css.isOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};