# 🚀 دليل النشر النهائي - DASM Realty

## ✅ تم رفع الكود إلى GitHub

**المستودع:** https://github.com/mazroni9/DASM-Realty  
**الفرع:** `main`  
**آخر commit:** `fb783ec`

---

## 📋 الإعدادات المطلوبة في Vercel Dashboard

### 1. افتح إعدادات المشروع:
https://vercel.com/dasme-projects/dasm-realty/settings/build-and-deployment

### 2. اضبط الإعدادات التالية:

#### Root Directory:
- **القيمة:** `frontend` ⚠️ **مهم جداً!**
- **لا تتركه فارغاً!**

#### Build and Development Commands:
- **Framework Preset:** `Next.js`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 3. احفظ التغييرات:
- اضغط **"Save"** في أسفل الصفحة

---

## 🔄 إعادة النشر في Vercel

### الطريقة 1: عبر Dashboard (موصى به)
1. اذهب إلى: https://vercel.com/dasme-projects/dasm-realty/deployments
2. اضغط على آخر deployment
3. اضغط **"Redeploy"** → **"Redeploy"** مرة أخرى

### الطريقة 2: عبر GitHub (تلقائي)
- بعد push جديد إلى `main`، Vercel سينشر تلقائياً
- تأكد من أن **Auto-deploy** مفعّل في Settings → Git

### الطريقة 3: عبر CLI
```bash
cd frontend
vercel --prod --yes
```

---

## ✅ التحقق من النشر الناجح

بعد النشر، يجب أن ترى في logs:
```
✓ Build completed successfully
✓ Deployed to production
```

**الرابط:** https://dasm-realty-dasme-projects.vercel.app

---

## 🔍 حل المشاكل

### إذا ظهر خطأ: `npm error path /vercel/path0/package.json`
- **السبب:** Root Directory فارغ أو غير صحيح
- **الحل:** اضبط Root Directory = `frontend` في Dashboard

### إذا ظهر خطأ: `'use client' directive missing`
- **السبب:** تم إصلاحه في commit `eeac30c`
- **الحل:** تأكد من أنك تستخدم آخر commit

### إذا لم يعمل الموقع:
1. تحقق من Root Directory = `frontend`
2. احذف Build Cache (Settings → General → Clear Build Cache)
3. اعمل Redeploy

---

## 📦 محتويات المشروع

```
DASM-Realty/
├── frontend/          ← Next.js App (Root Directory في Vercel)
│   ├── app/          ← App Router
│   ├── components/   ← React Components
│   ├── public/       ← Static Assets
│   └── package.json  ← Dependencies
├── backend/          ← Laravel API (للمستقبل)
└── vercel.json       ← Vercel Config
```

---

**آخر تحديث:** 2026-01-08
