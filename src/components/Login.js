import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContextAuth } from './UserContextFirebase';

function Login() {
   const { login } = useContext(userContextAuth);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();
      try {
         await login(email, password);
         navigate('/home');
      } catch (error) {
         setError(error.message);
      }
   }
   return (
      <div className='App'>
         <form onSubmit={handleSubmit}>
            <h2>connectez-vous</h2>
            {error && <h3>{error}</h3>}
            <div>
               <label htmlFor='email'>Email</label>
               <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>

            <div>
               <button type='submit'>Connection</button>
            </div>
            <p>
               Vous n'avez pas encore un compte
               <Link to='/'> inscrivez-vous</Link>
            </p>
         </form>
      </div>
   );
}

export default Login;
