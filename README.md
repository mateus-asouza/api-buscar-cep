## COMO RODAR O PROJETO

1. Instalar todas as dependencias indicada pelo package.json
```
### npm install
```

2. Rodar o projeto usando o nodemon 
```
### nodemon app.js
```

## SEQUENCIA PARA CRIAR O PROJETO

1. Criar o arquivo package
```
### npm init
```
2. Gerencia as requisições, rotas e URLs, entre outra funcionalidades
```
### npm install express
```
3. Instalar modulo correios
```
npm install node-correios --save
```
4. Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
```
### npm install -g nodemon
```
5. Rodar o projeto usando o nodemon 
```
### nodemon app.js
```
6. Permitir acesso a API
```
### npm install --save cors
```

## Metodos

### GET

Request (`http://localhost:3001/?cep=${cep}`)

Response

```
{
        bairro: "",
        cep: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        siafi: "",
        uf: ""
    }
```

