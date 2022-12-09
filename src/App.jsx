import MenuJson from './utils/menu.json'
import { Navbar } from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar data={MenuJson} />    
    </div>
  )
}
export default App
