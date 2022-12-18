import TaskModal from "components/TaskModal/TaskModal";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./Task.css"

function Task(props) {
  const { task } = props
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = () => {
    if (modalShow) {
      setModalShow(false)
    }
    else {
      setModalShow(true)
    }
  }
  return(
    <li>
      {task.title}
      <span class="material-symbols-outlined dropdown" onClick={() => toggleModal()}>arrow_drop_down</span>
      <TaskModal
        show={modalShow}
        task={task}
        toggleModal={toggleModal}
        // onClick={() => setModalShow(false)}
      />
    </li>
  )
}

export default Task