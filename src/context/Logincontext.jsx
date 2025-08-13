import React, { createContext, useEffect, useState } from 'react'
import { GetuserData } from '../api/userdata.api';

export const auth = createContext(null);

export default function Logincontext({ children }) {
  const [islogin, setlogin] = useState(null);
  const [isuser, setuser] = useState(null);

  async function getuser() {
    try {
      const res = await GetuserData();
      setuser(res.user);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setlogin(token);
    } else {
      setlogin(null);
      setuser(null);
    }
  }, []);

  useEffect(() => {
    if (islogin) {
      setuser(null); // امسح بيانات القديم مؤقتًا
      getuser();     // هات بيانات الجديد
    }
  }, [islogin]);

  return (
    <auth.Provider value={{ islogin, setlogin, isuser, setuser, getuser }}>
      {children}
    </auth.Provider>
  );
}
