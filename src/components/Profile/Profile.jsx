import css from "./Profile.module.css"

function Profile(props){
return (
    <div className={css.container}>
<div className={css.sub}>
<img className={css.image}
src={props.image}
alt={props.name}
/>
<p className={css.name}>{props.name}</p>
<p className={css.tag}>@{props.tag}</p>
<p className={css.location}>{props.location}</p>
</div>

<ul className={css.list}>
<li className={css.item}>
<span>Followers</span>
<span className={css.followers}>{props.stats.followers}</span>
</li>
<li className={css.item}>
<span>Views</span>
<span className={css.views}>{props.stats.views}</span>
</li>
<li className={css.item}>
<span>Likes</span>
<span className={css.likes}>{props.stats.likes}</span>
</li>
</ul>
</div>
)
}

export default Profile;