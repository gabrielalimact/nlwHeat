/* 
    Receber o code(string)
    Recuperar o access_token no github para conseguir ter acesso ao usuário
    Verificar se o usuário existe no based
     --- sim = gera um token
     --- não = cria no BD, gera um token
     Retornar o token com as infos do user
*/
import axios from 'axios';


class AuthenticateUserService {
    async execute(code : string) {
        const url = 'https://github.com/login/oauth/acess_token';


        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data;

    }
}

export { AuthenticateUserService };