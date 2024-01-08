import React from 'react'
import { LOGO, USER_AVATAR } from '../utils/constant';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && <div className='flex p-2'>
        <img className='w-12 h-12 m-2 opacity-2'
          alt="logo user" src={user?.photoURL} />
        <h2>{user.displayName}</h2>
        <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
      }
    </div>

  )
}

export default Header