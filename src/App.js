import './App.css';

function App() {
  return (
    <div className="App">
      {/* HEADER */}
        <header class="header">
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
        <div class="main-title">
          <p class="font-weight-bold font24">WORKSPACES</p>
          <div class=""></div>
        </div>
      </main>
      {/* END MAIN */}
    </div>
  );
}

export default App;
