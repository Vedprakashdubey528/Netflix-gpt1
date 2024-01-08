import React from 'react'
import { LOGO } from '../utils/constant';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe called when comp umnount this func is by firebase.(callback)
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && <div className='flex p-2'>
        <img className='w-12 h-12 m-2 opacity-2'
          alt="logo user" src={user?.photoURL} />
        <div className='text-red-600 m-5 float-left'>{user.displayName}</div>
        <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
      }
    </div>

  )
}

export default Header