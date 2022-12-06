import React from "react";

import "./BoardContent.css"

import List from 'components/List/List';


function BoardContent() {
  return (
    <main class="main-container">
      <div class="list-columns">
        {/* <p class="font-weight-bold font24">WORKSPACES</p> */}
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>

      </div>
    </main>
  )
}

export default BoardContent 