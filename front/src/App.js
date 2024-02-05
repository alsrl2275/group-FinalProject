import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import Login from "./pages/Login";
import InsertForm from "./pages/InsertForm";
import KakaoMap from "./KakaoMap";
import GroupJoin from "./pages/GroupJoin";
import SignUp from "./pages/SignUp";
import Calendar from "./pages/Calendar";
import LoginContextProvider, { LoginContext } from "./contexts/LoginContextProvider";


export default function App() {

  return (
    <LoginContextProvider>
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/test" element={<Test />} />
          <Route path="/insert" element={<InsertForm />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/KakaoMap" element={<KakaoMap />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/GroupJoin" element={<GroupJoin />} />
          <Route path="/GroupJoin/:category" element={<GroupJoin />} />
          <Route path="/GroupJoin//:hselected" element={<GroupJoin />} />
          <Route
            path="/GroupJoin/:hsearch/:hselected"
            element={<GroupJoin />}
          />
          <Route path="/schedule" element={<Calendar />} />
        </Routes>
      
    </BrowserRouter>
    </LoginContextProvider>
  );
}
