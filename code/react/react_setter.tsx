
export function App() {
    const [user, setUser] = useState<User>(initialUser)

    return(
        <Login user={user} setUser={setUser}/>
    )

}

interface Props{
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>,
  }
  
  export const Login:React.FC<Props> = ({user, setUser}) => {
    return (
          <div>
            {!user.authentificated ? (
                  <button onClick={() => {setUser({...user, authentificated: !user.authentificated})}}>Login</button>
              ) : (
                  <button onClick={() => {setUser({...user, authentificated: !user.authentificated})}}>Logout</button>
              )}
          </div>
    )
  }