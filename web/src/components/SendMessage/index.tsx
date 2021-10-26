import { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext, AuthProvider } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'
import sealSvg from '../../assets/seal.svg'

export function SendMessage() {
    const { user, signOut } = useContext(AuthContext)
    const [message, setMessage] = useState('')
    
    async function handleSendMessage(e : FormEvent) {
        e.preventDefault()
        if(!message.trim()) {
            return;
        }
        await api.post('/messages', { message })
        console.log("Mensagem enviada")
        setMessage('');
    }

    return (
        <div className={styles.sendMessageWrapper}>
            <img src={sealSvg} className={styles.seal}/>
            <button className={styles.signOutButton} onClick={signOut}>
                <VscSignOut size='32' />
            </button>
            

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt='userImage'/>
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size='14' />
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
                <label htmlFor='message'>Mensagem</label>
                <textarea 
                    name='message' 
                    id='message' 
                    placeholder='Qual sua expectativa para o evento?' 
                    onChange={event =>setMessage(event.target.value)} 
                    value={message} 
                />

                <button type='submit'>Enviar mensagem</button>
            </form>
        </div>
    )
}