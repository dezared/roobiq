import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import logoStartPage from '../images/splash_logotype.png'
import '../styles/pages/splash.css'

import { push } from 'connected-react-router'

function Splash() {
  const dispatch = useDispatch()
  const botScriptState = useSelector((state) => state.chatScript.value)
  
  const StartBaseScriptCallBack = (event) => {
      dispatch({ type: 'chatScript/startBaseScript'})
      dispatch(push('/chat'))
  }

  return (
    <div>
        <div>
            <img className='splash_logotype' src={logoStartPage} alt="Splash Roobiq Logotype"/>
        </div>
        <h1 className='splash_title_name'>ROOB<span className='spash_title_postfix'>IQ</span></h1>
        <p className='splash_hello_message'>Конструктор презентаций с расчетом экономических показателей.</p>
        <button onClick={StartBaseScriptCallBack} className="button primary medium">Начать</button>
        <button onClick={() => console.log(botScriptState)} className="button primary medium">ssa</button>
    </div>
  );
}

export default Splash;