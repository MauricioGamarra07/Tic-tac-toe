
import './App.css'
import {mostrarIcono} from './assets/components/Funciones'

function App() {

  return (
    <div className="App">

      <div className="contenedor">

        <h1 className='turno'>Turno de las <i>"X"</i></h1>

        <table>
          <tbody>
            <tr>
              <td><button className='btnCard' id='0' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='1' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='2' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
            <tr>
              <td><button className='btnCard' id='3' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='4' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='5' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
            <tr>
              <td><button className='btnCard' id='6' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='7' onClick={(e) => { mostrarIcono(e) }}></button></td>
              <td><button className='btnCard' id='8' onClick={(e) => { mostrarIcono(e) }}></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default App
