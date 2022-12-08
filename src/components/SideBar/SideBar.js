import React from "react"

import "./SideBar.css"

function SideBar() {
  return (
    <aside id="sidebar">
      <div class="sidebar-title">
        <div class="sidebar-brand font24">
          <span class="material-symbols-outlined color_light" >emoji_objects</span> MATOZ
        </div>
        <span class="material-symbols-outlined" onclick="closeSidebar()">close</span>
      </div>
      <ul class="sidebar-list">
        <li class="sidebar-list-item">
          <span class="material-symbols-outlined home">home</span>Home
        </li>
        <li class="sidebar-list-item">
          <span class="material-symbols-outlined grandient">signal_cellular_alt</span>Gantt Chart        
        </li>
        <li class="sidebar-list-item">
          <span class="material-symbols-outlined white">settings</span>Settings
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
