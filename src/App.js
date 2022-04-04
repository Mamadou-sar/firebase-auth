import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route
               path='/home'
               element={
                  <ProtectedRoute>
                     <Home />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
