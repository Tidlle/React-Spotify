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
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log("Finalizou a requisição"))
  },[])

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
          <> 
          {artistas
            .filter( artista => artista.genero.includes("Trap"))
            .map(artistas => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <h1>{artistas.name}</h1>
              </div>
            ))}
          </>
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
