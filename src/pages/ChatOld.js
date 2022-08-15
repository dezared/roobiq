// import { useCallback } from 'react'
// import { useSelector, useStore, useDispatch } from 'react-redux'
//
//
// function Chat() {
//     const botScriptStateMessage = useSelector((state) => state.chatScript.botReduceMessage)
//     const scriptPhase = useSelector((state) => state.chatScript.scriptPhase)
//     const messages = useSelector((state) => state.chatScript.messages)
//
//     const dispatch = useDispatch()
//     let inputChatBotValue = ''
//
//     /* Если фаза не началась, перебрасываем пользователя в начало */
//     if(scriptPhase === "script:none")
//     {
//         return
//     }
//
//     const chatBotSendMessage = (event) => {
//         if(event.key === "Enter")
//         {
//             dispatch({ type: 'chatScript/chatBotCallBackMessage', payload: inputChatBotValue })
//             event.target.value = ''
//         }
//     }
//
//     const chatBotChangeValue = (event) => {
//         inputChatBotValue = event.target.value
//     }
//
//     return (
//         <div>
//             <div>
//             {messages.map(message => (
//                 <div>
//                     {message}
//                 </div>
//             ))}
//             </div>
//             <p>Message: {botScriptStateMessage}</p>
//             <input onKeyDown={chatBotSendMessage} onChange={chatBotChangeValue}></input>
//         </div>
//     )
// }
//
// export default Chat;
