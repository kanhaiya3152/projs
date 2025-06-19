import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile';
import Login from './components/login';

function App() {

  return (
    <UserContextProvider>
      <h2>Hii this side a React developer</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
