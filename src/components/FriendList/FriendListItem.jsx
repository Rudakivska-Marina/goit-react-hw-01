import css from "./FriendListItem.module.css"

function FriendListItem(props){
    return (
        <li className={css.box}>
  <img className={css.image} src={props.src} alt={props.name} width="48" />
  <p className={css.name}>{props.name}</p>
  <p className={props.status ? css.green : css.red}>{props.status ? "Online" : "Offline"}</p>
</li>

    )
}

export default FriendListItem;