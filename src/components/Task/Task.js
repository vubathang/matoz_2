import TaskModal from "components/TaskModal/TaskModal";
import React, { useState} from "react";

import "./Task.css"

function Task(props) {
  const { task } = props
  const [modalShow, setModalShow] = useState(false)
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
      />
    </li>
  )
}

export default Task