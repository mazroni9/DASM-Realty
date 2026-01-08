# Backend — Laravel API

Laravel API backend for DASM Realty platform.

## Setup Instructions

### 1. Create Laravel Project

```bash
composer create-project laravel/laravel laravel "^11.0"
cd laravel
```

### 2. Install Dependencies

```bash
composer require cloudinary-labs/cloudinary-laravel
php artisan vendor:publish --provider="CloudinaryLabs\CloudinaryLaravel\CloudinaryServiceProvider"
```

### 3. Copy Stubs to Laravel Project

Copy all files from `backend/stubs/` to your Laravel project maintaining the same directory structure:

```bash
# From project root
cp -r backend/stubs/app/* backend/laravel/app/
cp -r backend/stubs/config/* backend/laravel/config/
cp -r backend/stubs/database/* backend/laravel/database/
cp -r backend/stubs/routes/* backend/laravel/routes/
cp backend/stubs/env.example.stub backend/laravel/.env.example
```

### 4. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
php artisan key:generate
```

Edit `.env`:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=dasm
DB_USERNAME=postgres
DB_PASSWORD=postgres

FRONTEND_URL=http://localhost:3000
VERCEL_URL=https://dasm-realty-dasme-projects.vercel.app

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 5. Run Migrations

```bash
php artisan migrate
```

### 6. Start Server

```bash
php artisan serve
```

API will be available at: `http://127.0.0.1:8000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Create Lead
```
POST /api/leads
Content-Type: application/json

{
  "name": "Ahmed Ali",
  "email": "ahmed@example.com",
  "phone": "0500000000",
  "type": "seller",
  "message": "أرغب ببيع عقاري"
}
```

## CORS Configuration

CORS is configured in `config/cors.php` to allow:
- `http://localhost:3000` (local development)
- `https://dasm-realty-dasme-projects.vercel.app` (Vercel production)
- Any `*.vercel.app` domain

## Database

Uses PostgreSQL. Make sure Docker container is running:

```bash
docker compose up -d
```

## Cloudinary

Cloudinary is configured for future image uploads. Set credentials in `.env`.