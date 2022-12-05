import './App.css';

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        {/* HEADER */}
        <header class="header">
          <div clas="header-left"></div>
          <div class="header-right">
            <span class="material-symbols-outlined">group</span>
            <span class="material-symbols-outlined">notifications</span>
            <span class="material-symbols-outlined">account_circle</span>
          </div>
        </header>
        {/* END HEADER */}

        {/* SIDEBAR */}
        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand font24">
              <span class="material-symbols-outlined" >emoji_objects</span> MATOZ
            </div>
            <span class="material-symbols-outlined" onclick="closeSidebar()">close</span>
          </div>
          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <span class="material-symbols-outlined">home</span>Home
            </li>
            <li class="sidebar-list-item">
              <span class="material-symbols-outlined">signal_cellular_alt</span>Gantt Chart        
            </li>
            <li class="sidebar-list-item">
              <span class="material-symbols-outlined">settings</span>Settings
            </li>
          </ul>
        </aside>
        {/* END SIDEBAR */}

        {/* MAIN */}
        <main class="main-container">
          <div class="list-columns">
            {/* <p class="font-weight-bold font24">WORKSPACES</p> */}
            <div class="list">
              <header>List 1</header>
              <ul>
                <li>Em đã yêu một người có ước mơ</li>
                <li>Mơ điều làm em thấy hoang mang lo sợ</li>
                <li>Sợ yêu một người không phải như em đã từng</li>
                <li>Nễu như anh đi về phía đó</li>
                <li>Liệu rằng anh có còn thấy em</li>
                <li>Lệ trong đôi mắt sao mà lấp đi ánh nắng mặt trời</li>
                <li>Vẫn yêu dù cho có cô đơn</li>
                <li>Dù cho anh không của riêng em sau này</li>
              </ul>
              <footer>Add another task</footer>
            </div>
            <div class="list">
              <header>List 1</header>
              <ul>
                <li>Em đã yêu một người có ước mơ</li>
                <li>Mơ điều làm em thấy hoang mang lo sợ</li>
                <li>Sợ yêu một người không phải như em đã từng</li>
                <li>Nễu như anh đi về phía đó</li>
                <li>Liệu rằng anh có còn thấy em</li>
              </ul>
              <footer>Add another task</footer>
            </div>
            <div class="list">
              <header>List 1</header>
              <ul>
                <li>Em đã yêu một người có ước mơ</li>
                <li>Mơ điều làm em thấy hoang mang lo sợ</li>
                <li>Sợ yêu một người không phải như em đã từng</li>
                <li>Nễu như anh đi về phía đó</li>
                <li>Liệu rằng anh có còn thấy em</li>
              </ul>
              <footer>Add another task</footer>
            </div>
            <div class="list">
              <header>List 1</header>
              <ul>
                <li>Em đã yêu một người có ước mơ</li>
                <li>Mơ điều làm em thấy hoang mang lo sợ</li>
                <li>Sợ yêu một người không phải như em đã từng</li>
                <li>Nễu như anh đi về phía đó</li>
                <li>Liệu rằng anh có còn thấy em</li>
              </ul>
              <footer>Add another task</footer>
            </div>
          </div>
        </main>
        {/* END MAIN */}
      </div>

    </div>
  );
}

export default App;
