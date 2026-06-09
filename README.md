# 💻 Eduardo Freyer — Portfolio Web

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)

Um portfólio profissional moderno e performático desenvolvido com as tecnologias mais recentes do ecossistema JavaScript. O site apresenta uma interface minimalista e fluida com suporte nativo a múltiplos idiomas, alternância de temas claro/escuro e integração de formulário de contato via API dedicada.

---

## ✨ Funcionalidades Principais

* **Tema Escuro e Claro Nativo**: Mudanças visuais fluidas com persistência das preferências do usuário no `localStorage`.
* **Internacionalização (i18n)**: Suporte completo e dinâmico aos idiomas **Português (PT)** e **Inglês (EN)** para todo o conteúdo do site.
* **Formulário de Contato Inteligente**: Integração com a API do **Resend** para envio de e-mails em formato HTML personalizado combinando com o tema escuro do site.
* **Efeitos de Animação Avançados**:
  * Janela de código com digitação simulada em tempo real no Hero.
  * Cards de tecnologia com efeito de brilho radial interativo que segue a posição do cursor.
  * Transições de rolagem suaves com observadores de interseção (`IntersectionObserver`) ativados dinamicamente.
* **Design Responsivo e Premium**: Totalmente otimizado para celulares, tablets e computadores, utilizando Tailwind CSS e fontes do Google (`Space Grotesk`, `DM Sans`, `JetBrains Mono`).

---

## 🛠️ Tecnologias Utilizadas

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
* **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Envio de E-mail**: [Resend SDK](https://resend.com/)
* **Ícones**: SVGs customizados estilo Lucide e Tech Glyphs integrados.

---

## 📁 Estrutura de Pastas

```text
├── public/                  # Arquivos estáticos (imagens, favicon)
├── src/
│   ├── app/
│   │   ├── api/             # Rota do servidor Next.js para processar o contato
│   │   │   └── contact/
│   │   │       └── route.ts # Route Handler responsável pela integração com Resend
│   │   ├── globals.css      # Estilização Tailwind e regras personalizadas
│   │   ├── layout.tsx       # Estrutura base HTML, SEO e carregamento de fontes
│   │   └── page.tsx         # Orquestrador da Home Page e estados globais
│   ├── components/          # Componentes visuais do Portfólio
│   │   ├── About.tsx        # Seção de biografia e focos principais
│   │   ├── Contact.tsx      # Formulário de contato com estados de envio e erros
│   │   ├── Footer.tsx       # Assinatura de direitos autorais e botão subir
│   │   ├── Hero.tsx         # Hero A com terminal de código digitável
│   │   ├── Icons.tsx        # Mapeamento vetorial de ícones e logotipos
│   │   ├── Nav.tsx          # Navbar com toggles de tema/idioma e menu mobile
│   │   ├── Projects.tsx     # Lista de projetos com wireframes interativos
│   │   └── TechStack.tsx    # Exibição de tecnologias com cursor glow
│   └── lib/
│       └── i18n.ts          # Banco de dados com traduções para PT e EN
```

---

## 🚀 Como Iniciar Localmente

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina (recomendado versão 18 ou superior) e um gerenciador de pacotes como o `npm`.

### 1. Clonar e Instalar Dependências

Instale todos os pacotes necessários especificados no `package.json`:

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie ou configure o arquivo `.env.local` na raiz do projeto contendo a sua chave da Resend para poder receber as mensagens do formulário de contato:

```env
# Configuração do Resend
RESEND_API_KEY=re_sua_chave_real_da_resend
```

> **Nota**: Se você estiver em desenvolvimento e usando um plano gratuito da Resend, os e-mails de teste serão entregues por padrão na mesma conta utilizada para o cadastro utilizando o remetente automático `onboarding@resend.dev`.

### 3. Executar o Servidor de Desenvolvimento

Inicie o servidor local:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### 4. Compilar para Produção

Para gerar uma build otimizada de produção e verificar se não há erros de tipagem TypeScript:

```bash
npm run build
```

Para rodar a build local gerada:

```bash
npm run start
```
