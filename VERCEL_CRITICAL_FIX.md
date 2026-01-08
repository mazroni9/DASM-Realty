# 🔴 إصلاح عاجل: Root Directory لا يوجد

## المشكلة:
Vercel يقول: "The specified Root Directory "frontend" does not exist"

## الحل:

### الطريقة 1: إعادة ربط المشروع (موصى به)

1. في Vercel Dashboard:
   - اذهب إلى: https://vercel.com/dasme-projects/dasm-realty/settings/general
   - في قسم "Git Repository"
   - اضغط "Disconnect" ثم "Connect Git Repository" مرة أخرى
   - اختر المستودع: `mazroni9/DASM-Realty`
   - الفرع: `main`

2. بعد إعادة الربط:
   - اذهب إلى Build and Deployment Settings
   - تأكد من Root Directory = `frontend`
   - احفظ

3. اعمل Redeploy

### الطريقة 2: حذف المشروع وإنشاؤه من جديد

1. احذف المشروع الحالي من Vercel
2. أنشئ مشروع جديد:
   - Import Git Repository
   - اختر: `mazroni9/DASM-Realty`
   - Framework: Next.js
   - Root Directory: `frontend`
   - اضغط Deploy

### الطريقة 3: التحقق من أن الملفات موجودة في GitHub

افتح: https://github.com/mazroni9/DASM-Realty/tree/main/frontend

يجب أن ترى:
- ✅ `package.json`
- ✅ `app/`
- ✅ `components/`
- ✅ `public/`

إذا لم تكن موجودة، يجب رفعها إلى GitHub.

---

## التحقق السريع:

افتح هذا الرابط في المتصفح:
https://github.com/mazroni9/DASM-Realty/tree/main/frontend

إذا رأيت الملفات = المشكلة في إعدادات Vercel
إذا لم تر الملفات = المشكلة في Git (يجب رفع الملفات)
