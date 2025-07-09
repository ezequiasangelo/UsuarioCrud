# Sistema de Perfil de Usuário

## Visão Geral

O **Sistema de Perfil de Usuário** permite visualizar, editar e salvar dados pessoais em um banco de dados MySQL , por meio de uma interface moderna, intuitiva e responsiva.

## Funcionalidades

- Visualização de dados do usuário:
  - Foto de perfil
  - Nome completo
  - Idade
  - Rua, bairro, estado
  - Biografia
- Edição e salvamento dos dados
- Upload de imagem com Cloudinary
- API RESTful para comunicação entre frontend e backend
- Interface responsiva (mobile e desktop)

---

## 🎥 Demonstração

![Demonstração do Projeto](assets/demo.gif)  
Link no Vercel: https://usuario-crud.vercel.app/usuario

---

## 💻 Tecnologias Utilizadas

### Frontend
- Angular
- TypeScript
- HTML/CSS

### Backend
- Laravel 11 (PHP 8.3+)
- PostgreSQL / MySQL (configurável)
- Cloudinary 1.20 (armazenamento de imagens)

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/ezequiasangelo/UsuarioCrud.git
```

### 2️⃣ Backend (Laravel)

```bash
cd UsuarioCrud/sync360-backend
composer install
```

Configure o arquivo `.env` com as variáveis de ambiente, especialmente banco de dados e Cloudinary:

```env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:S5m4QLMeL2ZhJcDKGBrfNIU8O389vIKZ2KXH3HOHrr8=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=usuarios_db
DB_USERNAME=root
DB_PASSWORD=

CLOUDINARY_CLOUD_NAME=daujmvh3s
CLOUDINARY_API_KEY=151914288375616
CLOUDINARY_API_SECRET=GGYslNOnLNLyWadisZgkcp9GLEY

```

Se o arquivo `.env` não existir, copie o exemplo:

```bash
cp .env.example .env
```

Gere a chave da aplicação:

```bash
php artisan key:generate
```

Execute as migrações do banco:

```bash
php artisan migrate
```

Inicie o servidor Laravel:

```bash
php artisan serve
```

O backend estará disponível em:  
http://localhost:8000/api/usuario

---

### 3️⃣ Frontend (Angular)

```bash
cd ../sync360-frontend
npm install
ng serve
```

O frontend estará disponível em:  
http://localhost:4200

---

*Agora você está pronto para utilizar o Sistema.
