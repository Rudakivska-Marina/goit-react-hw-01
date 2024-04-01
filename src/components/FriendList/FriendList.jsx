import FriendListItem from "./FriendListItem"
import css from "./FriendList.module.css"

function FriendList({friends}){
    return(
        <ul className={css.list}>
		{friends.map(el => {return <FriendListItem src={el.avatar} name={el.name} status={el.isOnline} key={el.id}/>})}
</ul>
    )
}

export default FriendList;