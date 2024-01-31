import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import Login from "./pages/Login";
import InsertForm from "./pages/InsertForm";
import KakaoMap from "./KakaoMap";
import GroupJoin from "./pages/GroupJoin";
import SignUp from "./pages/SignUp";


export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/insert" element={<InsertForm/>}/>
      {/* <Route path="/insert" element={user ? ( <InsertForm/>) 
                                          : (<Routes>
                                                <Route path="/" element={<Login />} />
                                             </Routes>)}/> */}
      <Route path="/Login" element={<Login/>}/>
      <Route path="/KakaoMap" element={<KakaoMap/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/GroupJoin" element={<GroupJoin/>}/>
      <Route path="/GroupJoin/:category" element={<GroupJoin/>}/>
      <Route path="/GroupJoin//:hselected" element={<GroupJoin />} />
      <Route path="/GroupJoin/:hsearch/:hselected" element={<GroupJoin />} />
    </Routes>
  );
}
