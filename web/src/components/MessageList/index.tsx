import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList(){
    const [ messages, setMessages] = useState<Message[]>([]);



    useEffect(() => {
        api.get<Message[]>('messages/last3').then(response => {
            setMessages(response.data)
        })
    }, []) 



    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="doWhile2021" />

            <ul className={styles.messageList}>

                {messages.map(messages => {
                    return (
                        <li key = {messages.id} className={styles.message}>
                            <p className={styles.messageContent}>{messages.text}🔥🔥</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImg}>
                                    <img src={messages.user.avatar_url} alt="User Image"/>
                                </div>
                                <span>{messages.user.name}</span>
                            </div>
                        </li>
                    )
                })}
                                
            </ul>
        </div>

    )
}