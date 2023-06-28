import { auth } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { provider } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth"


function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <p>ログイン</p>
      {user ? (
        <>
          <UserInfo/>
          <SignOutButton/>
          </>
      ):(
        <SignInButton/>
      )
      }
      
    </div>
  )
}


export default Home


function SignInButton(){
  const signInWithGoogle = () =>{
    console.log("user:",useAuthState)
    signInWithPopup(auth, provider);
  };
  return(
    <button onClick = {signInWithGoogle}>
      <p>サインイン</p>
    </button>
  )
}

function SignOutButton(){
  console.log("user:",useAuthState)
  return(
    <button onClick = {() =>auth.signOut()}>
      <p>サインアウト</p>
    </button>
  )
}

function UserInfo(){
  return(
    <div>
      <img src={auth.currentUser.photoURL} alt="asb" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  )
}