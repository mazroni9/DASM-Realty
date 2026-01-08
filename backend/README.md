## Backend — Laravel API (Guide + Stubs)

This folder contains a step-by-step guide and code stubs to set up a Laravel 11 (or 10) API-only backend for DASM Realty, with PostgreSQL and Cloudinary wired for future media.

### 1) Create the Laravel app
```bash
cd backend
composer create-project laravel/laravel laravel "^11.0"
```

Optional: You can use `--prefer-dist` to speed up installs.

### 2) Enter the app and install Cloudinary
```bash
cd laravel
composer require cloudinary-labs/cloudinary-laravel
php artisan vendor:publish --provider="CloudinaryLabs\CloudinaryLaravel\CloudinaryServiceProvider"
```

### 3) Configure `.env`
Copy our preset env and adjust values:
```bash
cp ../stubs/.env.example .env
php artisan key:generate
```
Fill:
- `DB_CONNECTION=pgsql`
- `DB_HOST/PORT/USERNAME/PASSWORD/DB_DATABASE`
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

### 4) Apply our stubs (routes, migration, controller, model)
Copy files from `../stubs` into the Laravel app root (keep paths):
```
app/Http/Controllers/LeadController.php
app/Models/Lead.php
database/migrations/2026_01_01_000000_create_leads_table.php
routes/api.php   (merge with existing or append our route)
config/cors.php  (ensure Next.js origin is allowed)
```

### 5) Migrate and run
```bash
php artisan migrate
php artisan serve
```
API runs at `http://127.0.0.1:8000`.

### 6) Test lead creation
```bash
curl -X POST http://127.0.0.1:8000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmed","email":"a@example.com","phone":"0500000","type":"seller","message":"أرغب ببيع عقاري"}'
```

### 7) Postgres via Docker (optional)
Use our `docker-compose.yml` at the repo root or below to spin up Postgres quickly.

### Notes
- CORS defaults allow `*` in local dev. Set `NEXT_PUBLIC_API_BASE_URL` in the frontend.
- Cloudinary is ready but unused in the landing; it will be used for property images later.


