# actflf

# 📦 Projeto Fullstack - CRUD de Usuários

Este projeto fullstack foi desenvolvido com:

- **Backend:** NestJS + TypeORM + Redis
- **Frontend:** Next.js + React Query
- **Banco de Dados:** MySQL ou PostgreSQL
- **Cache:** Redis

## 📁 Estrutura de Pastas

```
/crud-user-backend   → Projeto NestJS
/crud-user-frontend  → Projeto Next.js
```

---

## ⚙️ Requisitos

- Node.js instalado (https://nodejs.org)
- MySQL ou PostgreSQL
- Redis

---

## ▶️ Instruções de Setup

---

### 🛠️ Instalação Global do NestJS CLI

```bash
npm install -g @nestjs/cli
```

---

## 🚀 Backend (NestJS)

### 📂 Acesse a pasta:

```bash
cd crud-user-backend
```

### 📥 Instale as dependências:

```bash
npm install
```

### 🧱 Configure os pacotes Redis e Tipagem:

```bash
npm uninstall @nestjs/redis
npm install ioredis
npm i cache-manager-redis-store@2.0.0
npm install @nestjs/mapped-types
```

### ⚙️ Configure o `.env`

Crie um arquivo `.env` com as variáveis do banco e Redis:


### 🧪 Rodar testes

```bash
npm run test
```

### ▶️ Rodar o servidor

```bash
npm run start:dev
```

---

## 🧩 Redis no Windows

Você pode rodar o Redis via Docker:

```bash
docker run --name redis -p 6379:6379 -d redis
```

Ou via WSL (Windows Subsystem for Linux), com:

```bash
sudo apt install redis
sudo service redis-server start
```

---

## 💻 Frontend (Next.js)

### 📂 Acesse a pasta:

```bash
cd crud-user-frontend
```

### 📥 Instale as dependências:

```bash
npm install
```

### ▶️ Rodar o Frontend

```bash
npm run dev
```

---

## 🔗 Integração

O frontend se conecta à API do backend (http://localhost:3000 por padrão). Você pode configurar a URL da API no frontend via variável:

## 📋 Funcionalidades

### Backend
- ✅ CRUD de usuários (`POST`, `GET`, `PUT`, `DELETE`)
- ✅ Cache com Redis
- ✅ Testes com Jest

### Frontend
- ✅ Listagem de usuários
- ✅ Cadastro e edição
- ✅ React Query para cache e chamadas otimizadas

---

## ✍️ Autor

Desenvolvido por Filipe Ferro 
