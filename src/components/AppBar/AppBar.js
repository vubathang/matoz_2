import React from "react"

import "./AppBar.css"

function AppBar() {
  return (
    <header class="header">
      <div clas="header-left"></div>
      <div class="header-right">
        <span class="material-symbols-outlined">group</span>
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined">account_circle</span>
      </div>
    </header>
  )
}

export default AppBar