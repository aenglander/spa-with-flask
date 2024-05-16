import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import flaskLogo from './assets/flask.png'
import './App.css'
import {Link} from "react-router-dom";

function App() {
  return (
    <>
        <div>
            <a href="https://flask.palletsprojects.com" target="_blank">
                <img src={flaskLogo} className="logo" alt="Pallets logo"/>
            </a>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>
        <h1>Flask + Vite + React</h1>
        <div className="card">
        <Link to={"status-codes"}>HTTP Status Codes</Link>
      </div>
    </>
  )
}

export default App
