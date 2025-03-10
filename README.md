# :checkered_flag: GERENCIADOR PATRIMONIAL

Monitoramento e controle do fluxo de entrada e saída nos laboratórios.

## :technologist: Membros da equipe e Orientador

Membro 538429 - Gustavo Menezes De Sousa - Análise e Desenvolvimento De Sistemas

Membro 540089 - Jônatas Fernandes Silva - Análise e Desenvolvimento De Sistemas

Membro 539644 - Robert Michael Ávila - Análise e Desenvolvimento De Sistemas

Prof. Orientador - Anderson Uchôa.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário Logado
- Patrimônio

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Patrimônio
- Bens
    - Imóveis
    - Terreno
    - Veículo
    - Participações Societárias
    - Outros Investimentos
- Direito 
- Obrigações

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

**Funcionalidades de usuário:**

- login com autenticação
- perfil de usuário
- Atualização de dados do perfil
- cadastro de usuário
- Cadastrar patrimônio
- Ver patrimônio
- Atualizar patrimônio
- Deletar patrimônio

## :desktop_computer: Tecnologias e frameworks utilizados

**Backend:**

- Node js
- express js
- Prisma
- body-parser
- NodeMailer
- sqlite
- JWT
- bcrypt
- Cors
- Morgan
- dotenv


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuários | X |  X | X | X |
| Patrimônio | X | X | X | X|

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| POST | /criar |
| POST | /auth/login |
| POST | /esqueceuASenha|
| POST | /adicionar-patrimonio|
| POST | /adicionar-bem|
| POST | /adicionar-direito|
| POST | /adicionar-obrigacao|
| PUT | /atualizar-senha|
| PUT | /atualizar/:id|
| PUT | /atualizar-bem/:id|
| PUT | /atualizar-direito/:id|
| PUT | /atualizar-obrigacao/:id|
| GET | /perfil/:id|
| GET | /ver-todos-os-patrimonios|
| GET | /patrimonios/:userId|
| DELETE | /deletar|
| DELETE | /deletar-bem/:id|
| DELETE | /deletar-direito/:id|
| DELETE | /deletar-obrigacao/:id|

## Documentação
* [Documento de visão do projeto](https://docs.google.com/document/d/1ecPbt2rhca9vvIZzKyTWGP36-gXFlgF-3wmrct--Rwk/edit?usp=sharing)