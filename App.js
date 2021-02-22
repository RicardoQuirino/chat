import React from 'react'

import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height='100vh'
            projectID='8cf378a6-2a4f-476e-8a80-c543f3c2b7e1'
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
    )
}

export default App