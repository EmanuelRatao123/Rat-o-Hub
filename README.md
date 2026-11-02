# RATAO_HUB - Plataforma de Comunicação
**CRIADO POR EMANUEL RATÃO**

Bem-vindo ao repositório do RATAO_HUB, uma plataforma de comunicação inspirada no Discord com suporte a chat em tempo real, chamadas de áudio/vídeo via WebRTC e um Bot Studio integrado.

## O que está incluído na versão atual (Base Funcional):
- **Frontend (Vite + React + TS):** Interface escura, responsiva, com Sidebar, Chat, e Editor Monaco para Bots.
- **Backend (Node.js + Express + Socket.IO):** Servidor de WebSockets pronto para mensagens e sinalização WebRTC.
- **Banco de Dados (PostgreSQL):** Estrutura de schemas para usuários, servidores, canais e mensagens.
- **Infraestrutura:** Arquivo `render.yaml` pronto para deploy.

*Nota de desenvolvimento:* Sistemas complexos como o motor de programação visual arrastável, sistema completo de isolamento de bots (Docker/VMs) e orquestração avançada de WebRTC exigem servidores dedicados e foram estruturados em formato de *esqueleto funcional* para futura expansão, devido às limitações de uma hospedagem serverless gratuita.

## Tutorial de Instalação e Execução (Passo a Passo)

### 1. Pré-requisitos
- Instale o **Node.js** (versão 18 ou superior): Baixe em https://nodejs.org/
- Instale o **PostgreSQL**: Baixe em https://www.postgresql.org/ ou use um banco na nuvem.

### 2. Como abrir o projeto
Extraia o arquivo `RATAO_HUB.zip`. Abra a pasta extraída no seu editor de código (como o VS Code).

### 3. Configurando o Banco de Dados (PostgreSQL) local
Crie um banco de dados chamado `ratao_hub_db`.
Execute o script localizado em `backend/src/db/schema.sql` no seu banco de dados para criar as tabelas.

### 4. Instalando dependências e testando localmente
Abra o terminal na pasta do projeto e execute:

**No Backend:**
```bash
cd backend
npm install
# Crie um arquivo .env baseado no .env.example
npm run dev
```

**No Frontend:**
```bash
cd frontend
npm install
npm run dev
```
O frontend abrirá na porta padrão do Vite (geralmente `http://localhost:5173`).

### 5. Como configurar e fazer Deploy no Render
1. Crie uma conta no [Render](https://render.com/).
2. Conecte seu repositório GitHub (você precisa subir essa pasta para o GitHub primeiro).
3. No painel do Render, vá em **Blueprints** e conecte seu repositório. O Render lerá o arquivo `render.yaml` e criará automaticamente:
   - O Banco de Dados PostgreSQL.
   - O Web Service do Backend (Node.js).
   - O Static Site do Frontend (React).
4. As variáveis de ambiente principais já estão mapeadas no `render.yaml`.
