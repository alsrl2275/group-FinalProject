import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import Login from "./pages/Login";
import InsertForm from "./pages/InsertForm";
import KakaoMap from "./KakaoMap";
import GroupJoin from "./pages/GroupJoin";
import SignUp from "./pages/SignUp";
import Calendar from "./pages/Calendar";
import Userdata from "./pages/Userdata";
import LoginContextProvider, {
  LoginContext,
} from "./contexts/LoginContextProvider";
import AdminPage from "./pages/admin";

import UserUpdate from "./pages/UserUpdate";

import PaymentComponent from "./components/GroupJoin/PaymentComponent";
import Review from "./pages/review";
import Finduser from "./pages/Finduser";

export default function App() {
  const { userInfo } = useContext(LoginContext);
  const token = localStorage.getItem("accessToken");
  console.log(userInfo)
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/test" element={<Test />} />
      {token === null ? (
        <>
        <Route path="/insert" element={<Navigate to="/Login" replace />} />
        <Route path="/userdata" element={<Navigate to="/Login" replace />} />
        <Route path="/schedule" element={<Navigate to="/Login" replace />} />
        <Route path="/payment" element={<Navigate to="/Login" replace />} />
        <Route path="/review" element={<Navigate to="/Login" replace />} />
        </>
      ) : (
        <>
          <Route path="/insert" element={<InsertForm />} />
          <Route path="/userdata" element={<Userdata />} />
          <Route path="/schedule" element={<Calendar />} />
          <Route path="/payment" element={<PaymentComponent />} />
          <Route path="/review" element={<Review />} />
        </>
      )}

      <Route path="/Login" element={<Login />} />
      <Route path="/KakaoMap" element={<KakaoMap />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/findUser" element={<Finduser/>}/>
      <Route path="/userUpdate" element={<UserUpdate />} />
      <Route path="/GroupJoin" element={<GroupJoin />} />
      <Route path="/GroupJoin/:category" element={<GroupJoin />} />
      <Route path="/GroupJoin//:hselected" element={<GroupJoin />} />
      <Route path="/GroupJoin/:hsearch/:hselected" element={<GroupJoin />} />

      {!userInfo || (userInfo && userInfo.role !== "ROLE_ADMIN") ? (
        <Route path="/admin" element={<Navigate to="/" replace />} />
      ) : (
        <Route path="/admin" element={<AdminPage />} />
      )}
    </Routes>
  );
}
