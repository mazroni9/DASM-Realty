# 🔧 إصلاح مشكلة Vercel Deployment

## المشكلة الحالية:
Vercel يبحث عن `package.json` في الجذر بدلاً من مجلد `frontend/`

## ✅ الحل (يجب تنفيذه في Vercel Dashboard):

### الخطوة 1: افتح إعدادات المشروع
https://vercel.com/dasme-projects/dasm-realty/settings/general

### الخطوة 2: اضبط Root Directory
في قسم **"Root Directory"**:
- **غير القيمة من:** (فارغ أو `.`)
- **إلى:** `frontend` ⚠️ **مهم جداً!**

### الخطوة 3: تأكد من الإعدادات الأخرى:
- **Framework Preset:** `Next.js`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### الخطوة 4: احفظ التغييرات
اضغط **"Save"** في أسفل الصفحة

### الخطوة 5: إعادة النشر
1. اذهب إلى تبويب **"Deployments"**
2. اضغط على آخر deployment
3. اضغط **"Redeploy"** → **"Redeploy"** مرة أخرى
4. أو انتظر النشر التلقائي بعد push جديد

---

## 📝 ملاحظات مهمة:

1. **Root Directory = `frontend`** هو الإعداد الأهم
2. بدون هذا الإعداد، Vercel سيبحث عن `package.json` في الجذر ولن يجده
3. بعد ضبط Root Directory، سيتم البحث في `frontend/package.json` بشكل صحيح

---

## 🔍 التحقق من الإعدادات:

بعد ضبط Root Directory، يجب أن ترى في logs:
```
Running "install" command: `npm install`...
> Found package.json in frontend/
```

بدلاً من:
```
npm error path /vercel/path0/package.json
```

---

**الرابط المباشر للإعدادات:**
https://vercel.com/dasme-projects/dasm-realty/settings/general
