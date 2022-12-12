import React, {useState, useEffect, useCallback} from "react";
import { cloneDeep } from 'lodash'

import "./List.css";

import Task from 'components/Task/Task';
import {Form, Button} from 'react-bootstrap'
import {saveNewListTitle} from 'utilities/contentEditable'
import {createNewTask, updateList} from 'actions/ApiCall'

function List(props) {

  const { list, onUpdateListState } = props

  const task = list.tasks
  const [listTitle, setListTitle] = useState('')
  const [openNewTask, setOpenNewTask] = useState(false)
  const handleListChangeTitle = useCallback(
    (e) => {
      setListTitle(e.target.value)
    },
    []
  )
  useEffect(() => {
    setListTitle(list.title)
  }, [list.title])

  const deleteList = () => {
    const newList = {
      ...list,
      _destroy: true
    }
    onUpdateListState(newList)
  }
  const onNewListTitleBlur = () => {
    
    const newList = {
      ...list,
      title: listTitle
    }
    updateList(newList._id, newList)
      .then(updatedList => {
        onUpdateListState(updatedList)
      })
    
  }

  const toggleNewTaskForm = () => {
    setOpenNewTask(!openNewTask)
    setNewTask('')
  }
  const [newTask, setNewTask] = useState('')
  const onNewTask =  (e) => {
    setNewTask(e.target.value)
  }
  const addNewTask = () => {
    if (!newTask) {
      toggleNewTaskForm()
      return
    }
    const newTaskToAdd = {
      boardId: list.boardId,
      listId: list._id,
      title: newTask.trim(),
    }

    createNewTask(newTaskToAdd)
      .then(task => {
        let newList = cloneDeep(list)
        
        newList.tasks.push(task)
        toggleNewTaskForm()
        onUpdateListState(newList)
      })
  }
  return (
    <div class="list">
      <header class="header_board">
        <div class="list-title">
          <Form.Control 
            size="sm" 
            type="text"
            class="content-editable"
            value = {listTitle}
            onChange={handleListChangeTitle}
            onBlur={onNewListTitleBlur}
            onKeyDown={saveNewListTitle}
          />
        </div>
        <span class="material-symbols-outlined trash-icon" onClick = {deleteList}>delete</span>
      </header>
      <ul>
      {task.map((task, index) => <Task key={ index } task={task} />)}
        {/* <Task/> */}
        {/* <li>Em đã yêu một người có ước mơ</li>
        <li>Mơ điều làm em thấy hoang mang lo sợ</li>
        <li>Sợ yêu một người không phải như em đã từng</li>
        <li>Nễu như anh đi về phía đó</li>
        <li>Liệu rằng anh có còn thấy em</li>
        <li>Lệ trong đôi mắt sao mà lấp đi ánh nắng mặt trời</li>
        <li>Vẫn yêu dù cho có cô đơn</li>
        <li>Dù cho anh không của riêng em sau này</li> */}
      </ul>
      <footer>
        {!openNewTask &&
          <div class="footer-action" onClick={toggleNewTaskForm}>
            <span class="material-symbols-outlined icon add_task">add</span>
            Add another task
          </div>
        }
        { openNewTask &&
          <div class="enter-new-task" >
            <Form.Control 
              size="sm" 
              type="text-area" 
              rows = '3'
              placeholder="Enter new task ..." 
              class="input-enter-new-task"
              value = {newTask}
              onChange={onNewTask}
              onKeyDown={event => (event.key === 'Enter') && addNewTask()}
            />
            <span class="material-symbols-outlined trash-icon" onClick = {toggleNewTaskForm}>delete</span>
          </div>
        }


      </footer>
    </div>
  )
}

export default List