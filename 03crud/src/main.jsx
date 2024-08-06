import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='AddUser' element={<AddUser/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
