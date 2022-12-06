import React, { useState, useEffect } from "react";

import "./BoardContent.css";

import List from 'components/List/List';

import { initData } from 'actions/initData'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [lists, setLists] = useState([])

  useEffect(() => {
    const boardFromDb = initData.boards.find(board => board.id === 'board-1')
    if (boardFromDb) {
      setBoard(boardFromDb)

      setLists(boardFromDb.lists)
    }
  }, [])

  return (
    <main class="main-container">
      <div class="list-columns">
        {/* <p class="font-weight-bold font24">WORKSPACES</p> */}
        {lists.map((list, index) => <List key={ index } list={list} />)}
      </div>
    </main>
  )
}

export default BoardContent 