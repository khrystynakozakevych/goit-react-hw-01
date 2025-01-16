import '../components/App.css';

import Profile from './Profile/Profile';
import userData from '../components/userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../components/friends.json';

function App() {
  return (
    <>
      <Profile
        key={userData.tag}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
