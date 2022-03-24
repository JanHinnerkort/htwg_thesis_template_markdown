import { useDispatch, useSelector } from 'react-redux';

function App() {
    const user = useSelector((state: GlobalState) => state.user);
    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(login())
    }

    return (
        <button onClick={onLogin}>Login</button>
    )
}