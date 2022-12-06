import React from "react";

import "./Task.css"

function Task(props) {
  const { task } = props
  return(
    <li>
      {task.title}
    </li>
  )
}

export default Task