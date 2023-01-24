import die1 from './IMG/die/dice-1-fill.svg'
import die2 from './IMG/die/dice-2-fill.svg'
import die3 from './IMG/die/dice-3-fill.svg'
import die4 from './IMG/die/dice-4-fill.svg'
import die5 from './IMG/die/dice-5-fill.svg'
import die6 from './IMG/die/dice-6-fill.svg'
import earth from './IMG/earth.svg'
import fire from './IMG/fire.svg'
import lightning from './IMG/lightning.svg'
import snow from './IMG/snow.svg'
import water from './IMG/water.svg'
import wind from './IMG/wind.svg'
import sword from './IMG/sword.svg'
import shield from './IMG/shield.svg'

import { useState, useEffect } from 'react'

function App() {

const [users, setUsers] = useState([])
const [die, setDie] = useState([die1])
const dieList = [die1, die2, die3, die4, die5, die6]
const [roll, setRoll] = useState()
const [element, setElement] = useState(['fire +4'])

const userFunc = async () => {
  const res = await fetch('https://reqres.in/api/users/')
  const json = await res.json();
  setUsers(json.data)
}

useEffect(() => {
  userFunc();
}, []);

const activeFunc = (e) => {
  setElement(e.targetvalue) //debug
  e.target.classList.toggle('active')
}

const rollFunc = () => {
  const randomNum = Math.floor(Math.random() * 6)
  setDie(dieList[randomNum])
  setRoll(Number([randomNum]) + 1)
}

  return (
    <div className="App">
     <div className='main-container'>
        <div className='title-container ct'>
          <h1 className='main-title-text fs'>Battle Game Online</h1>
          </div>
        <div className='player-container fx rw'>
           {/* Player 1 */}
        <div className='p1 fx cl'>
          <div className='p1-profile-container fx cl bs'>
            <div className='p1-img-container'>
              {/* <img src={users[0].avatar} className='p1-img bs'></img> */}
            </div>
            <div className='p1-name-container fx'>
              {/* <h3>{users[0].first_name}</h3> */}
              </div>
            <div className='p1-desc-container ct'>
              <h3 className='p1-desc-container-title'>MP</h3>
              <div className='mp-bar bs'></div>
              <h3 className='p1-desc-container-title'>Health</h3>
              <div className='health-bar bs'></div>
            </div>
            <div className='p1-atk-def-container fx rw'>
            <div className='atk-container fx cl'>
            <img src={sword} className='sword-opt' alt='sword-icon'></img>
              <h3 className='atk-title'>Attack</h3>
              </div>
            <div className='def-container fx cl'>
              <img src={shield} className='shield-opt' alt='shield-icon'></img>
              <h3 className='def-title'>Defend</h3>
              </div>
            </div>
          </div>
          <div className='p1-option-container fx rw'>
            <div className='opt p1-option-fire fx cl bs'>
              <div className='ck' onClick={activeFunc} value='fire'></div>
              <img src={fire} className='opt-img' alt='fire-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Fire</h3>
              </div>
            <div className='opt p1-option-water fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={water} className='opt-img' alt='water-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Water</h3>
            </div>
            <div className='opt p1-option-lightning fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={lightning} className='opt-img' alt='lightning-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Lightning</h3>
            </div>
            <div className='opt p1-option-snow fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={snow} className='opt-img' alt='snow-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Snow</h3>
              </div>
              <div className='opt p1-option-earth fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={earth} className='opt-img' alt='earth-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Earth</h3>
              </div>
              <div className='opt p1-option-wind fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={wind} className='opt-img' alt='wind-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Wind</h3>
              </div>
          </div>
        </div>
            {/* Battle  */}
            <div className='battle-container fx cl'>
              {/* <img src={arrow} className='top-arrow'></img> */}
              <div className='p1-battle bs'>
                <h1 className='tac'>Player 1</h1>
                <p className='tac'>You Rolled a {roll}</p>
                <p className='tac'>{element}</p>
                <p className='tac'>Total points:</p>
              </div>
              <div className='p2-battle bs'>
              <h1 className='tac'>Player 2</h1>
              </div>
              {/* <img src={arrow} className='bottom-arrow'></img> */}
            </div>
            {/* Player 2 */}
            <div className='p2 fx cl'>
          <div className='p2-profile-container fx cl bs'>
            <div className='p2-img-container'>
              {/* <img src={users[1].avatar} className='p2-img bs'></img> */}
            </div>
            <div className='p2-name-container fx'>
              {/* <h3>{users[1].first_name}</h3> */}
              </div>
            <div className='p2-desc-container ct'>
            <h3 className='p2-desc-container-title'>MP</h3>
              <div className='mp-bar bs'></div>
              <h3 className='p2-desc-container-title'>Health</h3>
              <div className='health-bar bs'></div>
            </div>
            <div className='p2-atk-def-container fx rw'>
            <div className='atk-container fx cl'>
            <img src={sword} className='sword-opt' alt='sword-icon'></img>
              <h3 className='atk-title'>Attack</h3>
              </div>
            <div className='def-container fx cl'>
              <img src={shield} className='shield-opt' alt='shield-icon'></img>
              <h3 className='def-title'>Defend</h3>
              </div>
            </div>
          </div>
          <div className='p2-option-container fx rw'>
            <div className='opt p2-option-fire fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={fire} className='opt-img' alt='fire-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Fire</h3>
              </div>
            <div className='opt p2-option-water fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={water} className='opt-img' alt='water-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Water</h3>
            </div>
            <div className='opt p2-option-lightning fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={lightning} className='opt-img' alt='lightning-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Lightning</h3>
            </div>
            <div className='opt p2-option-snow fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={snow} className='opt-img' alt='snow-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Snow</h3>
              </div>
              <div className='opt p2-option-earth fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={earth} className='opt-img' alt='earth-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Earth</h3>
              </div>
              <div className='opt p2-option-wind fx cl bs'>
              <div className='ck' onClick={activeFunc}></div>
              <img src={wind} className='opt-img' alt='wind-icon'></img>
              <h3 className='opt-title fx' draggable='no'>Wind</h3>
              </div>
          </div>
        </div>
        </div>
        <div className='score-container fx cl'>
          <img src={die} className='die' alt='die-icon'></img>
          <button className='roll-die bs' onClick={rollFunc}>Roll</button>
        </div>
      </div>
    </div>
  );
}

export default App;
