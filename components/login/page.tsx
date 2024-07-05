// components/Login.js
"use client"; // Check if this directive is necessary based on your environment

import React, { useState, useEffect } from 'react';
import { auth } from '../../firebaseConfig'; // Adjust path as per your project structure
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'; // Make sure to import onAuthStateChanged

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleNavigation = (page: string) => {
    window.location.href = `/${page}`;
  };


  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("user logged in successfully now you can add recording videos")

      setEmail('');
      setPassword('');
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {isLoggedIn ? (
        <div className="bg-blue-400 p-4 rounded shadow">
          <h1 className="text-3xl font-bold mb-4">Welcome, User!</h1>
          <p>You are logged in. You can now add recording videos.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => handleNavigation('addvideos')}>
            Check Video adding system
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </form>
        </>
      )}
      
    </div>
  );
};

export default Login;
