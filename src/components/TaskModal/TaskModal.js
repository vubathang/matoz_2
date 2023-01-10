import React, {useEffect, useState} from "react";
import { cloneDeep } from 'lodash'
import { Modal, Button, InputGroup, SplitButton, Dropdown, Form, Card} from 'react-bootstrap';
import {createNewComment} from 'actions/ApiCall'

import "./TaskModal.css"
import CMT from "components/comment/CMT";

function TaskModal(props) {
  const { show, task, toggleModal} = props
  const cmt = task.comment
  const [status, SetStatus] = useState("")
  const [cmtContent, setCmtContent] = useState('')
  
  const onNewComment =  (e) => {
    setCmtContent(e.target.value)
  }

  const addNewComment = () => {
    if (!cmtContent) {
      return
    }
    const newComment = {
      taskId: task._id,
      boardId: task.boardId,
      listId: task.listId,
      title: cmtContent.trim(),
    }

    createNewComment(newComment)
      .then(comment => {
        let newTask = cloneDeep(task)
        newTask.comment.push(comment)
      })
      
  }

  const handleStatus = (index) => {
    if (index === 1) {SetStatus('To Do')}
    else if (index === 2) {SetStatus('Doing')}
    else if (index === 3) {SetStatus('Complete')}
    else if (index === 0) {SetStatus('')}
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      class="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {task.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputGroup className="mb-3">
      
          <SplitButton
            variant="outline-secondary"
            title="Status"
            id="segmented-button-dropdown-1"
          >
            <Dropdown.Item onClick={(e) => {handleStatus(1)}}>To Do</Dropdown.Item>
            <Dropdown.Item onClick={(e) => {handleStatus(2)}}>Doing</Dropdown.Item>
            <Dropdown.Item onClick={(e) => {handleStatus(3)}}>Compelete</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={(e) => {handleStatus(0)}}>Cancel</Dropdown.Item>
          </SplitButton>

          <Form.Control aria-label="Text input with dropdown button" placeholder="Choose status" value = {status}/> 
        </InputGroup>

        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1">
            Start
          </Button>
          <Form.Control type="date" name='Start Date'/>
        </InputGroup>

        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1">
            Finish
          </Button>
          <Form.Control type="date" name='End Date'/>
        </InputGroup>
        <InputGroup className="mb-3 commentHeader">
          <div class="avatar_user">
            <div class="circle"></div>
          </div>
          <Form.Control 
            type="text" 
            name='Comment'
            value = {cmtContent}
            onChange={onNewComment}
            onKeyDown={event => (event.key === 'Enter' && addNewComment())}
          />
        </InputGroup>
        <Card class="form-cmt">
          {cmt.map((cmt, index) => <CMT key={ index } cmt={cmt} />)}
        </Card>
      </Modal.Body>
        
        

      <Modal.Footer>
        <Button variant="primary" onClick={toggleModal}>Enter</Button>{' '}
        <Button variant="danger" onClick={toggleModal}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal