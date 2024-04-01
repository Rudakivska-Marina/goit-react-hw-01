import { useState } from 'react'
import Profile  from './components/Profile/Profile'
import userData from "./components/JSON/userData.json"
import friends from "./components/JSON/friends.json"
import FriendList from "./components/FriendList/FriendList"
import transactions from "./components/JSON/transactions.json"
import TransactionHistory from './components/Transactions/TransactionHistory'

function App() {
  

  return (
    <div>
    <Profile
    name = {userData.username}
    tag = {userData.tag}
    location = {userData.location}
    image = {userData.avatar}
    stats = {userData.stats}
    />
<FriendList friends = {friends}/>
<TransactionHistory items = {transactions}/>
     </div> 
  )
}

export default App