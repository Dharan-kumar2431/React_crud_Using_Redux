import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Userlist from './User_List/Userlist';
import Appbar from './Nave_Bar/Navbar';
import Createuser from './Create_User/CreateUser';
import Edituser from './Edit_User/Edituser';
import { useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetechUserData } from './Redux_component/slice/slice';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetechUserData())
  },[dispatch])

  return (
     <Router>
      <Appbar/>
      <Routes>
        <Route index Component={Userlist} />
        <Route path='/createuser' Component={Createuser}/>
        <Route path='/edituser/:id' Component={Edituser} />
      </Routes>
    </Router>
  );
}

export default App;
