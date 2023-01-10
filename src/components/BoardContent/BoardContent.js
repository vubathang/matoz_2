import React, { useState, useEffect, useCallback } from "react";
import { Form,Button } from 'react-bootstrap';

import "./BoardContent.css";

import List from 'components/List/List';

import { fetchBoardDetails, createNewList } from "actions/ApiCall";

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
    const boardId = '6391cd5795920b972e1c6dc3'
    fetchBoardDetails(boardId)
      .then(board => {
        setBoard(board)
        setLists(board.lists, '_id')
      })

  }, [])
  const toggleOpenNewListForm = () => {
    setOpenNewListForm(!openNewListForm)
  }

  const addNewList = () => {
    if (!newListTitle) {
      return
    }

    const newListToAdd = {
      boardId: board._id,
      title: newListTitle.trim()
    }

    createNewList(newListToAdd)
      .then(list => {
        let newList = [...lists]
        newList.push(list)
    
        let newBoard = {...board}
        newBoard.lists = newList
    
        setLists(newList)
        setBoard(newBoard)
        setNewListTitle('')
        toggleOpenNewListForm()
      })
  }

  const deleteTitle = () => {
    setNewListTitle('')
    toggleOpenNewListForm()
  }

  const onUpdateListState = (newListToUpdate) => {
    const listIdToUpdate = newListToUpdate._id
    let newLists = [...lists]
    const listIndexToUpdate = newLists.findIndex(i => i._id === listIdToUpdate)
    if(newListToUpdate._destroy) {
      // destroy
      newLists.splice(listIndexToUpdate, 1)
    }
    else {
      // update
      newLists.splice(listIndexToUpdate, 1, newListToUpdate)
    }
    setLists(newLists)
    let newBoardAfterDelList = {...board}
    newBoardAfterDelList.lists = newLists
    setBoard(newBoardAfterDelList)
  }

  return (
    <main class="main-container">
      <div class="list-columns">
        {/* <p class="font-weight-bold font24">WORKSPACES</p> */}
        {lists.map((list, index) => <List key={ index } list={list} onUpdateListState={onUpdateListState} />)}

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
                onKeyDown={e => (e.key === 'Enter') && onNewListTitleChange}
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