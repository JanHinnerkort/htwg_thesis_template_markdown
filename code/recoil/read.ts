import { useRecoilState } from 'recoil';
import { userState } from './modules/globalState';

function App() {
    const [user] = useRecoilState(userState);

    return (
     <div>
        Hello {user.first}!
     </div>
 )
}