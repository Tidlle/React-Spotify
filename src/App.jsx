import { useEffect, useState } from "react"
import CardSideBar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import SideBar from "./components/SideBar"

function App() {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
      .then(res => res.json)
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
  })

  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <CardSideBar />
          <CardSideBar />
          <CardSideBar />
          <CardSideBar />
        </SideBar>
        <ConteudoPrincipal>
          {
            artistas.map(artistas => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <p>{artistas.name}</p>
                <div className="bg-green-400 w-3/4 h-7"></div>
                <div className="bg-green-400 w-3/4 h-7"></div>
              </div>
            ))
          }


        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
