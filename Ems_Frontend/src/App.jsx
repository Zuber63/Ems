import {Toaster} from "react-hot-toast"
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Nav from './Components/Nav'
import Dashboard from './Pages/Dashboard'
import AddEmp from './Pages/AddEmp'
import Emp from './Pages/Emp'
import EmpView from './Pages/EmpView'
import UpdateEmp from './Pages/UpdateEmp'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
      <Route index  element={<Dashboard/>}/>
      <Route path='/AddEmp'  element={<AddEmp/>}/>
      <Route path='/Emp'  element={<Emp/>}/>
      <Route path='/EmpView/:id'  element={<EmpView/>}/>
      <Route path='/UpdateEmp/:id'  element={<UpdateEmp/>}/>
      
      
      </Route>
    </Routes>
    <Toaster/>
    </BrowserRouter>


    


  )
}



export default App;
