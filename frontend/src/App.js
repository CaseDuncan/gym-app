import { Routes, Route} from 'react-router-dom';
import './App.css';
import Grid from '@mui/material/Grid'

// import CreateService from './components/service/CreateService';
import CreateCustomer from './components/customers/CreateCustomer';
import Layout from './components/layout/Layout';
import Login from './components/login/Login'
import Home from './pages/home/Home';
import CustomerContainer from './components/customers/CustomerContainer';


function App() {
  return (
    
    <Grid container>
     <Layout/>
    
      <Routes>
        <Route path={'/'} exact element={<Home/>}/>
        {/* <Route path='/services' element={<CreateService/>}/> */}
        <Route path='/customers' element={<CustomerContainer/>}/>
        <Route path="/customers/add" element={<CreateCustomer/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
   
    </Grid>
    
  );
}

export default App;
