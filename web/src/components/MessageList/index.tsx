import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'


export function MessageList(){
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="doWhile2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="https://github.com/gabrielalimact.png" alt="gabi"/>
                        </div>
                        <span>Gabriela Lima</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="https://github.com/gabrielalimact.png" alt="gabi"/>
                        </div>
                        <span>Gabriela Lima</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="https://github.com/gabrielalimact.png" alt="gabi"/>
                        </div>
                        <span>Gabriela Lima</span>
                    </div>
                </li>

                
            </ul>
        </div>

    )
}