import React, { useContext } from 'react';
import { userContextAuth } from './UserContextFirebase';

function Home() {
   const { logout, user } = useContext(userContextAuth);

   const handleLogOut = async () => {
      try {
         await logout();
      } catch (error) {
         console.log(error.message);
      }
   };
   return (
      <div className='App'>
         <h1>Home</h1>
         <h2>Hello Welcome</h2>
         <p>{user && user.email}</p>
         <button onClick={handleLogOut} type='submit'>
            LogOut
         </button>
      </div>
   );
}

export default Home;
