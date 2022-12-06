import React, { useState, useEffect, useCallback } from "react";
import { Form,Button } from 'react-bootstrap';

import "./BoardContent.css";

import List from 'components/List/List';

import { initData } from 'actions/initData'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [lists, setLists] = useState([])
  const [openNewListForm, setOpenNewListForm] = useState(false)
  const [newListTitle, setNewListTitle] = useState('')
  const onNewListTitleChange = useCallback(
    (e) => {
      setNewListTitle(e.target.value)
    },
    []
  )

  useEffect(() => {
    const boardFromDb = initData.boards.find(board => board.id === 'board-1')
    if (boardFromDb) {
      setBoard(boardFromDb)

      setLists(boardFromDb.lists)
    }
  }, [])
  const toggleOpenNewListForm = () => {
    setOpenNewListForm(!openNewListForm)
  }

  const addNewList = () => {
    if (!newListTitle) {
      return
    }

    const newListToAdd = {
      id: (Math.random().toString(36).substring(2, 5)),
      boardId: board.id,
      title: newListTitle.trim(),
      tasks: []
    }

    let newList = [...lists]
    newList.push(newListToAdd)

    let newBoard = {...board}
    newBoard.lists = newList

    setLists(newList)
    setBoard(newBoard)

    setNewListTitle('')
    toggleOpenNewListForm()
  }

  const deleteTitle = () => {
    setNewListTitle('')
    toggleOpenNewListForm()
  }

  return (
    <main class="main-container">
      <div class="list-columns">
        {/* <p class="font-weight-bold font24">WORKSPACES</p> */}
        {lists.map((list, index) => <List key={ index } list={list} />)}



        <div class="form-add-another-list">
          {!openNewListForm &&
            <div class="add-another-list" onClick={toggleOpenNewListForm}>
              <span class="material-symbols-outlined icon hover">add</span>
              Add new list
            </div>
          }
          {openNewListForm &&
          <div class="enter-new-list">
            <Form.Control 
              size="sm" 
              type="text" 
              placeholder="Enter new list ..." 
              class="input-enter-new-list"
              value = {newListTitle}
              onChange={onNewListTitleChange}
              onKeyDown={event => (event.key === 'Enter') && onNewListTitleChange}
            />
            <Button 
              as="input" 
              type="button" 
              value="Enter"
              onClick={addNewList}
            />{' '}
            <span class="material-symbols-outlined trash-icon" onClick = {deleteTitle}>delete</span>
          </div>
          }
        </div>
      </div>
    </main>
  )
}

export default BoardContent 