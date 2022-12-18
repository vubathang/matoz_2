import React, {useEffect, useState} from "react";
import { Modal, Button, InputGroup, SplitButton, Dropdown, Form, Card} from 'react-bootstrap';

import "./CMT.css"

function CMT(props) {

  const { cmt } = props
  console.log(cmt);
  return (
    <div class="cmt">
      <div class="avatar_user">
        <div class="circle"></div>
      </div>
      <p> {cmt.title} </p>
    </div>
  )
}

export default CMT