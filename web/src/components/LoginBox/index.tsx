import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss'


export function LoginBox(){
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href="#" className={styles.signWithGitHub}>
                <VscGithubInverted size="24"/> Entrar com GitHub
            </a>
        </div>
    )
}