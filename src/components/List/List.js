import React, {useState, useEffect, useCallback} from "react";

import "./List.css";

import Task from 'components/Task/Task';
import {Form} from 'react-bootstrap'

function List(props) {

  const { list } = props

  const task = list.tasks
  const [listTitle, setListTitle] = useState('')
  const handleListChangeTitle = useCallback(
    (e) => {
      setListTitle(e.target.value)
    },
    []
  )
  useEffect(() => {
    setListTitle(list.title)
  }, [list.title])

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
            onKeyDown={event => (event.key === 'Enter') && handleListChangeTitle}
          />
        </div>
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
        <div class="footer-action">
          <span class="material-symbols-outlined icon add_task">add</span>
          Add another task
        </div>

        </footer>
    </div>
  )
}

export default List