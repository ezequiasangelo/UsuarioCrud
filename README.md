# Sistema de Perfil de Usuário

## 📌 Visão Geral

O **Sistema de Perfil de Usuário** permite visualizar, editar e salvar dados pessoais em um banco de dados MySQL ou PostgreSQL, por meio de uma interface moderna, intuitiva e responsiva.

---

## ✅ Funcionalidades

- Visualização de dados do usuário:
  - Foto de perfil
  - Nome completo
  - Idade
  - Endereço completo (rua, bairro, estado)
  - Biografia
- Edição e salvamento de dados
- Upload de imagem com Cloudinary
- API RESTful entre frontend e backend
- Interface responsiva (mobile e desktop)

---

## 🎥 Demonstração

🔗 [Acesse no Vercel](https://usuario-crud.vercel.app/usuario)

---

## 💻 Tecnologias Utilizadas

### Frontend
- Angular
- TypeScript
- HTML/CSS

### Backend
- Laravel 11 (PHP 8.3+)
- MySQL (configurável)
- Cloudinary 1.20 (upload de imagens)

---

## ⚙️ Como Executar o Projeto Localmente

> **Pré-requisitos:**
>
> - [XAMPP (com MySQL e PHP)](https://www.apachefriends.org/pt_br/index.html)
> - [Composer](https://getcomposer.org/download/)
> - [Node.js (v18+ recomendado)](https://nodejs.org/)
> - [Git](https://git-scm.com/)

---

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/ezequiasangelo/UsuarioCrud.git
```

---

### 2️⃣ Backend (Laravel)

```bash
cd UsuarioCrud/sync360-backend
composer install
```

#### 🔧 Configure o arquivo `.env`:

Se não existir, copie o exemplo:

```bash
cp .env.example .env
```

Edite com suas configurações de banco (ex: XAMPP MySQL local) e Cloudinary:

> Todas as variáveis já estão preenchidas no arquivo `.env.example`. Basta copiá-lo e ajustar conforme necessário.

```env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=usuarios_db
DB_USERNAME=root
DB_PASSWORD=

CLOUDINARY_CLOUD_NAME=***
CLOUDINARY_API_KEY=***
CLOUDINARY_API_SECRET=***
```

#### 🗝️ Gere a chave da aplicação:

```bash
php artisan key:generate
```

#### 🗃️ Rode as migrações:

```bash
php artisan migrate
```

#### 🚀 Inicie o servidor:

```bash
php artisan serve
```

> A API estará disponível em:  
> **http://localhost:8000/api/usuario**

---

### 3️⃣ Frontend (Angular)

```bash
cd ../sync360-frontend
npm install
ng serve
```

> O frontend estará disponível em:  
> **http://localhost:4200**

---

### ✅ Pronto!

Agora você pode acessar o sistema localmente com o backend rodando em Laravel e banco MySQL via XAMPP.
