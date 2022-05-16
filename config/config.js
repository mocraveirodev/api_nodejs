//Para iniciar a API em ambiente diferente, usar o comando set NODE_ENV=ambiente desejado (caso esteja no windows/cmd).
//Para iniciar a API em ambiente diferente, usar o comando $Env:NODE_ENV=ambiente desejado (caso esteja no powershell).
//Para iniciar a API em ambiente diferente, usar o comando export NODE_ENV=ambiente desejado (caso esteja no linux/bash).
const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://user_adm:1234qwer@clusterapi.vln0n.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'elephpantinho0908',
                jwt_expires_in: '7d'
            };
        case 'hml':
            return {
                bd_string: 'mongodb+srv://user_adm:1234qwer@clusterapi.vln0n.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'elephpantinho0908',
                jwt_expires_in: '7d'
            };
        case 'prod':
            return {
                bd_string: 'mongodb+srv://user_adm:1234qwer@clusterapi.vln0n.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'elephpantinho0908',
                jwt_expires_in: '7d'
            };
    }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();