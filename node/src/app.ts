import "dotenv/config";
import express from 'express';

import { router } from './routes';

const app = express();

app.use(router);


app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`); //redireciona a pag para autenticar com conta no github
});


app.get("/signin/callback", (request, response) => {
    const { code } = request.query; // recebe o código da url

    return response.json(code);
});



app.listen(4000, () => { console.log('🚀 Server is running on port 4000')})