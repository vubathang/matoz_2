import React from "react";

import "./List.css";

import Task from 'components/Task/Task';

function List() {
  return (
    <div class="list">
      <header>List 1</header>
      <ul>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        {/* <li>Em đã yêu một người có ước mơ</li>
        <li>Mơ điều làm em thấy hoang mang lo sợ</li>
        <li>Sợ yêu một người không phải như em đã từng</li>
        <li>Nễu như anh đi về phía đó</li>
        <li>Liệu rằng anh có còn thấy em</li>
        <li>Lệ trong đôi mắt sao mà lấp đi ánh nắng mặt trời</li>
        <li>Vẫn yêu dù cho có cô đơn</li>
        <li>Dù cho anh không của riêng em sau này</li> */}
      </ul>
      <footer>Add another task</footer>
    </div>
  )
}

export default List