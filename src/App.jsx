import { useContext } from 'react'
import { ThemeContext } from './components/Theme/ThemeContext'
import './App.css'
import Paragraph from './components/Theme/Paragraph'

// console.log(ThemeContext)

function App() {
  const context = useContext(ThemeContext)

  return (
      <div style={{ padding: 50 }}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Paragraph/>
      </div>
  )
}

export default App
