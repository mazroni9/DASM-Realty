# إعدادات Vercel المطلوبة

## ⚠️ مهم جداً: إعدادات Dashboard

بعد رفع الكود إلى GitHub، يجب التأكد من الإعدادات التالية في Vercel Dashboard:

### 1. افتح إعدادات المشروع:
https://vercel.com/dasme-projects/dasm-realty/settings

### 2. في تبويب "General":
- **Root Directory:** `frontend` ⚠️ (هذا مهم جداً!)
- **Framework Preset:** `Next.js`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** `20.x` أو `22.x` (موصى به)

### 3. في تبويب "Git":
- **Production Branch:** `main`
- **Auto-deploy:** `Enabled`

### 4. بعد تعديل الإعدادات:
1. احفظ التغييرات
2. اذهب إلى "Deployments"
3. اضغط "Redeploy" على آخر deployment
4. أو انتظر النشر التلقائي بعد push جديد

---

## ✅ التحقق من الإعدادات الحالية:

تم التحقق من:
- ✅ `vercel.json` صحيح (بدون `rootDirectory`)
- ✅ المشروع مربوط بـ `dasme-projects/dasm-realty`
- ✅ آخر commit يحتوي على إصلاح `'use client'`
- ✅ جميع الملفات موجودة في `frontend/`

## 🔧 إذا استمرت المشكلة:

1. تأكد من أن **Root Directory = `frontend`** في Dashboard
2. احذف cache في Vercel (Settings → General → Clear Build Cache)
3. اعمل Redeploy يدوياً

---

**الرابط:** https://dasm-realty-dasme-projects.vercel.app
