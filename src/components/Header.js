import React from "react"
import Logo from "../assets/schneiderlogo.png"
import Aveva from "../assets/aveva.png"
const Header = () => {
  return (
    <div style={{ margin: "0 px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        className="logoImage"
        onClick={() => {
          window.location.reload()
        }}
        alt="schnider"
        src={Logo}
        style={{ objectFit: "contain", cursor: "pointer" }}
      />
      <img
        className="logoImage"
        onClick={() => {
          window.location.reload()
        }}
        alt="schnider"
        src={Aveva}
        style={{ objectFit: "contain", cursor: "pointer" }}
      />
    </div>
  )
}

export default Header
