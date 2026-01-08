# Figma ⇄ Cursor Bridge - Production Handoff Guide

## 🎯 الهدف
ربط مباشر بين Figma و Cursor لتنفيذ سريع ودقيق 1:1

---

## 📋 المرحلة A: تجهيز Figma (مرة واحدة)

### 1. تسمية Frames بوضوح
```
Property / Details / Light
Property / Details / Dark
Dashboard / Home / RTL
Dashboard / Home / LTR
```

### 2. تسمية Components
```
Header
Button / Primary
Button / Secondary
Button / Green (Auction)
Card
Sidebar
Table
```

### 3. تفعيل Dev Mode
- أعلى اليمين → **Dev Mode**
- هذا يسمح لـ Cursor بقراءة القيم بدقة

---

## 📁 المرحلة B: هيكل المشروع

### الهيكل الحالي (موجود):
```
/app
  /page.tsx              ← Landing Page
  /property
    /[id]
      page.tsx           ← Property Details
  /dashboard
    page.tsx             ← Dashboard Home

/components
  /property
    PropertyHero.tsx
    PropertyGallery.tsx
    PropertySpecs.tsx
    PropertyDescription.tsx
    PropertyMap.tsx
    OfficeInfo.tsx
    AuctionStatus.tsx
  /dashboard
    DashboardLayout.tsx
    DashboardSidebar.tsx
    DashboardTopBar.tsx
    KPICard.tsx
    PropertiesTable.tsx
    AuctionStatusSection.tsx

/styles
  tokens.css             ← Design Tokens من Figma
```

---

## 🎨 المرحلة C: Design Tokens

### ملف `frontend/styles/tokens.css`
يحتوي على جميع القيم من Figma:

- **Colors**: Navy, Green, Light/Dark themes
- **Typography**: Fonts, sizes, weights
- **Spacing**: xs, sm, md, lg, xl, 2xl
- **Border Radius**: sm, md, lg
- **Shadows**: Light mode only
- **Transitions**: Fast, normal

### الاستخدام في الكود:
```css
/* في CSS */
background-color: var(--bg-main);
color: var(--text-main);
border-radius: var(--radius-md);
box-shadow: var(--shadow-md);
```

```tsx
// في Tailwind (مضاف في config)
className="bg-[var(--bg-main)] text-[var(--text-main)]"
```

---

## 🔗 المرحلة D: ربط Figma → Cursor

### الخطوات:

1. **افتح Figma Dev Mode**
   - حدد Frame المطلوب
   - انسخ القيم (Colors, Spacing, Typography)

2. **حدّث `tokens.css`**
   - ضع القيم الجديدة في الملف
   - احفظ الملف

3. **Cursor سيطبق التغييرات تلقائياً**
   - جميع المكونات تستخدم CSS Variables
   - التغيير في tokens.css يؤثر على كل المكونات

---

## ✅ المرحلة E: Checklist التحقق

### قبل الإنهاء، تأكد من:

- [ ] الصفحة عربية افتراضيًا (RTL)
- [ ] Dark Mode بدون shadows
- [ ] زر المزاد أخضر ويظهر فقط عند الحاجة
- [ ] Dashboard واضحة وغير مزدحمة
- [ ] لا ألوان خارج tokens.css
- [ ] جميع Spacing من tokens.css
- [ ] Typography مطابق لـ Figma
- [ ] Components قابلة لإعادة الاستخدام

---

## 🚀 استخدام سريع

### عند تحديث تصميم في Figma:

1. افتح Figma → Dev Mode
2. انسخ القيم الجديدة
3. حدّث `frontend/styles/tokens.css`
4. احفظ → Cursor يطبق تلقائياً

### مثال:
```css
/* في Figma: Navy color = #0B3A63 */
/* في tokens.css: */
--navy: #0B3A63;

/* في الكود: */
className="bg-[var(--navy)]"
```

---

## 📝 ملاحظات مهمة

1. **لا تستخدم inline styles** إلا للضرورة القصوى
2. **استخدم CSS Variables** دائماً من tokens.css
3. **Tailwind config** يحتوي على نفس القيم للاستخدام السريع
4. **Dark Mode** = بدون shadows (محدد في tokens.css)

---

## 🎯 الخطوة التالية

- [ ] ربط Dashboard بالـ API (Mock Data أولاً)
- [ ] صفحة المزاد التفاعلية
- [ ] Form إضافة/تعديل عقار
