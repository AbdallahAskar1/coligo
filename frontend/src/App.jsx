import Header from "./components/Header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Main from "./components/Main/Main"
function App() {
  return (
      <>
      <div className="content">
      <Sidebar></Sidebar>
      <div>
      <Header></Header>

      <Main></Main>
      </div>
      </div>
      </>
      
    )
}

export default App
