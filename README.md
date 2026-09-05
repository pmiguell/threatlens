# ThreatLens

ThreatLens é o front-end de uma plataforma de **Cyber Threat Intelligence (CTI)**, desenvolvida como parte de uma pesquisa acadêmica na UFU. A aplicação centraliza a coleta e visualização de postagens relevantes de fontes como Twitter/X, Reddit e dark web, permitindo que analistas de segurança monitorem menções, avaliem o nível de relevância/risco de cada postagem e configurem alertas personalizados.

> Este repositório contém apenas o **front-end** (React + Vite). Ele consome uma API REST externa (back-end não incluído aqui) para autenticação, coleta de posts, estatísticas e gerenciamento de usuários/alertas.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar o projeto localmente](#como-rodar-o-projeto-localmente)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Autenticação](#autenticação)
- [Lint e Padrões de Código](#lint-e-padrões-de-código)
- [Build e Deploy](#build-e-deploy)
- [Contribuindo](#contribuindo)

## Funcionalidades

- **Dashboard (Overview)** — visão geral com filtros por período (dia, semana, mês, ano, tudo ou intervalo customizado), proporção de posts analisados vs. relevantes, tabela dos posts mais relevantes, gráfico de barras por fonte, gráfico de rosca por nível de relevância e nuvem de palavras (word cloud) com os termos mais frequentes.
- **Posts** — listagem completa de postagens coletadas, com detalhes de cada post em um modal (fonte, score de relevância, conteúdo, etc.).
- **Alertas** — criação de alertas personalizados por palavra-chave, fórum de origem (Twitter, Reddit, dark web) e frequência de verificação (dias/semanas/meses), além de visualização e exclusão dos alertas já criados.
- **Relatórios** — página reservada para exportação de relatórios de inteligência (em desenvolvimento).
- **Autenticação completa** — cadastro com verificação de código por e-mail (OTP), login, "esqueci minha senha" com reset via código, e troca de senha autenticada.
- **Área do usuário (Minha Conta)** — gerenciamento dos dados da própria conta.
- **Painel de Administração** — restrito a usuários administradores, com listagem paginada de usuários e exclusão de contas.
- **Tema claro/escuro** — alternância de tema persistida via hook dedicado.
- **Rotas protegidas** — controle de acesso por autenticação (`ProtectedRoute`) e por papel/role (`AdminRoute`).

## Stack Tecnológica

- **[React 18](https://react.dev/)** — biblioteca de UI
- **[Vite](https://vitejs.dev/)** — build tool e dev server
- **[React Router 7](https://reactrouter.com/)** — roteamento (`createBrowserRouter`)
- **[Axios](https://axios-http.com/)** — cliente HTTP com interceptors (refresh automático de token)
- **[Chart.js](https://www.chartjs.org/)** / **react-chartjs-2** — gráficos de barras e rosca
- **[D3.js](https://d3js.org/)** + **d3-cloud** — nuvem de palavras
- **[Bootstrap 5](https://getbootstrap.com/)** — utilitários de estilo base
- **CSS Modules** — estilização isolada por componente
- **[React Icons](https://react-icons.github.io/react-icons/)** — ícones
- **ESLint** — padronização e qualidade de código

## Estrutura do Projeto

```
threatlens/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/               # Imagens e ícones
│   ├── components/           # Componentes reutilizáveis (um diretório por componente)
│   ├── constants/            # Constantes globais (chaves de storage, opções, etc.)
│   ├── context/               # Contextos React (ex.: AuthContext)
│   ├── data/                  # Dados estáticos/mock
│   ├── hooks/                  # Hooks customizados (useAlerts, usePosts, useStats, useTheme, useUsers, useWordCloud)
│   ├── layouts/                # Layouts de página (RootLayout com Sidebar/Navigation)
│   ├── pages/                   # Páginas da aplicação (Home, Posts, Alerts, Admin, Login, Register, etc.)
│   ├── services/                 # Camada de comunicação com a API (auth, post, alerts, admin)
│   ├── utils/                     # Funções utilitárias (ex.: storage)
│   ├── App.jsx                     # Componente raiz (AuthProvider + RouterProvider)
│   ├── router.jsx                   # Definição das rotas
│   └── main.jsx                      # Ponto de entrada da aplicação
├── index.html
├── vite.config.js             # Configuração do Vite (inclui proxy de /api)
├── eslint.config.js
├── package.json
└── .env.example
```

## Pré-requisitos

- **[Node.js](https://nodejs.org/)** 18 ou superior (recomendado LTS)
- **npm** (instalado junto com o Node.js)
- Uma instância do **back-end da API** do ThreatLens rodando localmente (por padrão esperado em `http://localhost:8080`) — necessária para login, dados de dashboard, posts, alertas, etc.

## Como rodar o projeto localmente

Siga o passo a passo abaixo para colocar o front-end no ar na sua máquina:

### 1. Clone o repositório

```bash
git clone https://github.com/pmiguell/threatlens.git
cd threatlens
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo de exemplo e ajuste se necessário:

```bash
cp .env.example .env
```

O conteúdo padrão já funciona com a configuração de proxy do Vite:

```env
VITE_API_BASE_URL=/api
```

> Veja a seção [Variáveis de Ambiente](#variáveis-de-ambiente) para mais detalhes sobre como o proxy funciona.

### 4. Garanta que o back-end esteja rodando

O front-end espera que a API esteja disponível em `http://localhost:8080` (configurado em [vite.config.js](vite.config.js)). Suba o back-end do ThreatLens (repositório separado) antes de continuar, ou ajuste o `target` do proxy caso a API esteja em outra porta/host.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173** (porta padrão do Vite).

### 6. Acesse a aplicação

Abra o navegador em `http://localhost:5173`, crie uma conta (ou faça login, caso já exista um usuário cadastrado no back-end) e explore o dashboard.

## Variáveis de Ambiente

| Variável              | Descrição                                                                 | Padrão (`.env.example`) |
|-----------------------|----------------------------------------------------------------------------|--------------------------|
| `VITE_API_BASE_URL`   | Base URL usada pelo Axios para chamadas à API                              | `/api`                   |

Por padrão, as requisições são feitas para `/api` e o [vite.config.js](vite.config.js) redireciona (proxy) tudo que começa com `/api` para `http://localhost:8080`, removendo o prefixo `/api` do caminho antes de repassar ao back-end. Isso evita problemas de CORS durante o desenvolvimento.

Se o seu back-end rodar em outra porta, altere o `target` em `vite.config.js`:

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:SUA_PORTA',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
},
```

Alternativamente, você pode apontar `VITE_API_BASE_URL` diretamente para a URL completa da API (ex.: `http://localhost:8080`) e remover o proxy, caso o back-end já esteja configurado para aceitar requisições CORS do front-end.

## Scripts Disponíveis

| Comando           | Descrição                                                       |
|--------------------|-------------------------------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento do Vite com hot reload       |
| `npm run build`    | Gera a build de produção na pasta `dist/`                         |
| `npm run preview`  | Serve localmente a build de produção gerada por `npm run build`   |
| `npm run lint`     | Executa o ESLint em todo o projeto                                 |

## Autenticação

A autenticação é baseada em **cookies HTTP-only** gerenciados pelo back-end:

- O cliente Axios ([src/services/api.js](src/services/api.js)) é configurado com `withCredentials: true`.
- Um interceptor de resposta detecta erros `401`/`403`, tenta renovar a sessão automaticamente via `POST /auth/refresh` e reenfileira as requisições que falharam enquanto o token é renovado.
- Caso o refresh também falhe, o usuário é redirecionado para `/login` e os dados locais de sessão são limpos.
- Cadastro e recuperação de senha utilizam verificação por código (OTP) enviado por e-mail.
- O acesso a rotas é controlado por `ProtectedRoute` (usuário autenticado) e `AdminRoute` (usuário com papel de administrador).

## Lint e Padrões de Código

O projeto usa **ESLint** (configurado em [eslint.config.js](eslint.config.js)) com regras para React e React Hooks. Antes de abrir um PR, rode:

```bash
npm run lint
```

## Build e Deploy

Para gerar os arquivos estáticos de produção:

```bash
npm run build
```

Os arquivos serão gerados em `dist/`, prontos para serem servidos por qualquer servidor estático (Nginx, Vercel, Netlify, etc.). Lembre-se de configurar a variável `VITE_API_BASE_URL` (ou o proxy reverso do seu servidor) para apontar para a API em produção.

Para testar a build localmente antes do deploy:

```bash
npm run preview
```

## Contribuindo

1. Crie uma branch a partir da `dev`: `git checkout -b feat/minha-feature`
2. Faça suas alterações e garanta que `npm run lint` passa sem erros
3. Abra um Pull Request descrevendo a mudança

---

Projeto desenvolvido no contexto de pesquisa em Cybersecurity — UFU.
