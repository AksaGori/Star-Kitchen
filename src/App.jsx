
import React from 'react'
import './App.css'
import { Home } from './pages/Home'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <div>
      <Home />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
        toastStyle={{
          backgroundColor: "#fff9f2",
          color: "#3D2925",
          fontSize: "14px",
          fontWeight: "600",
          padding: "10px 14px",
          width: "auto",
          minHeight: "45px",
          borderRadius: "10px"
        }}
      />

    </div>
  )
}
