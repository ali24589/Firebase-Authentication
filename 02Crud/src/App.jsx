import {BrowserRouter  as Router,Routes,Route } from  'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import UsersList from './pages/UsersList'
import PutNewData from './pages/PutNewData'
import EditUser from './pages/EditUser'
function App() {

  return (
   <>
   <div className='flex justify-evenly'>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='SignIn' element={<SignIn/>} />
        <Route path='UsersList' element={<UsersList/>} />
        <Route path='PutNewData' element={<PutNewData/>}/>
        <Route path="/edit/:id" element={<EditUser />} />
              </Routes>
    </Router>
   </div>
   
   </>
  )
}

export default App
