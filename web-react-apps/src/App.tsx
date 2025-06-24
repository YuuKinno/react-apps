import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import ContentsAdd from "./screens/ContentsAdd"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contentsAdd" element={<ContentsAdd />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
