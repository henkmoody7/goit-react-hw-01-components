import { Profile } from './Profile/Profile';
import userData from '../user.json';
console.log(userData);
export const App = () => {
  return (
    <div>
      <Profile user={userData} />
    </div>
  );
};
