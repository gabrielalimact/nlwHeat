/* 
    Receber o code(string)
    Recuperar o access_token no github para conseguir ter acesso ao usuário
    Recuperar infos do user no github
    Verificar se o usuário existe no based
     --- sim = gera um token
     --- não = cria no BD, gera um token
     Retornar o token com as infos do user
*/
import axios from 'axios';

interface IAccessTokenResponse {
    access_token: string
}
interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}
class AuthenticateUserService {
    async execute(code : string) {
        const url = 'https://github.com/login/oauth/access_token';


        const { data: acessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        })

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${acessTokenResponse.access_token}` 
            }
        })

        return response.data;

    }
}

export { AuthenticateUserService };