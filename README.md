# Todo List API

Esta é uma API em Node.js para a aplicação [Todo List](https://github.com/lucasmedeiros/todo-list), feita com React Native.

## Instalação

### MySQL

Para rodar essa API, primeiramente você deve ter o [MySQL](https://www.mysql.com/downloads/) instalado e configurado em sua máquina. Para facilitar o processo, você pode instalar a pilha do *Apache*, com o MySQL e o [phpmyadmin](https://www.phpmyadmin.net/downloads/) (que, inclusive, foi como o esquema relacional do banco de dados foi criado). Siga um dos processos de instalação, de acordo com seu sistema operacional:

- [LAMP (Ubuntu e derivados)](https://www.digitalocean.com/community/tutorials/como-instalar-a-pilha-linux-apache-mysql-php-lamp-no-ubuntu-16-04-pt)
- [WAMP Server (Windows)](https://www.devmedia.com.br/instalacao-do-wampserver/25871)
- [XAMPP (Windows)](https://www.apachefriends.org/pt_br/index.html)

Após ter o MySQL configurado, você deve criar um **esquema relacional** com o nome de sua preferência (por exemplo, *todo-list*) e, usando esse esquema, rodar o script em [tasks.sql](./tasks.sql) para gerar as tabelas do banco de dados necessárias para essa aplicação.

### Configuração do ambiente

Agora, na pasta raiz desse projeto, você deve criar um arquivo com variáveis de ambiente de nome `.env`, seguindo exatamente o mesmo modelo descrito no arquivo de exemplo [.env.example](./.env.example).

**OBS**: Esta API se utiliza de autenticação com *JSON Web Tokens* (`JWT`). Nas variáveis de ambiente, você precisará definir uma **chave secreta** para que o servidor possa efetuar a comunicação com a aplicação. Essa chave pode ser qualquer palavra que **apenas você** saiba. Caso se interesse em saber mais sobre **JWT**, você pode ler a [documentação oficial](https://jwt.io/introduction/).

As variáveis disponíveis são as seguintes:

```md
- MYSQL_DATABASE = nome do esquema relacional que criou [OBRIGATÓRIO]
- MYSQL_USER = nome de seu usuário do MySQL [OBRIGATÓRIO]
- MYSQL_PASSWORD = senha de seu usuário do MySQL [OBRIGATÓRIO]
- MYSQL_HOST = host em que seu banco de dados está relacionado (atenção: não incluir 'http://') [OPCIONAL]

- JWT_SECRET = chave secreta para que o servidor efetue a comunicação e autenticação [OBRIGATÓRIO]

- SERVER_PORT = porta em que a API vai rodar [OPCIONAL]
- SERVER_BASE_URL = url do host em que a API está rodando (atenção: não incluir 'http://') [OPCIONAL]
```

**OBS**: caso não queira configurar as variáveis de ambiente **opcionais**, você pode não adicioná-las no arquivo `.env` que você irá criar, ou simplesmente deixá-las com o valor padrão que está no `.env.example`. Fica a seu critério.

### Rodar a API

Depois de ter tudo configurado, você deve fazer o clone deste repositório e acessar a pasta local criada, com os comandos:

```zsh
git clone https://github.com/lucasmedeiros/todo-list-backend.git
cd todo-list-backend
```

Agora, dentro da pasta, você deve executar comandos do gerenciador de dependências [yarn](https://yarnpkg.com/lang/en/) (caso não possua instalado em sua máquina, deverá instalá-lo). Para instalar todas as dependências do Node que o projeto utiliza, rode o comando:

```zsh
yarn install
```

Para rodar em modo de desenvolvimento (recomendado para testar), execute o comando:

```zsh
yarn start
```

Para rodar a versão de produção, execute os comandos:

```zsh
yarn build
node build/index.js
```

Agora, o servidor estará rodando perfeitamente em sua máquina.
