import React from "react"
import Footer from "./Footer"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <main className="layout">{children}</main>
      <Footer></Footer>
    </>
  )
}

export default layout
