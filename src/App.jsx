import CardSideBar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <Header/>
      <Container>
        <SideBar>
        <CardSideBar/>
        <CardSideBar/>
        <CardSideBar/>
        <CardSideBar/>
        </SideBar>
        <ConteudoPrincipal/>
      </Container>
      </>
  )
}

export default App
