# 🏫 إعدادية النور — موقع المدرسة الرسمي

> موقع رسمي لإعدادية النور بالمغرب — ثلاثي اللغات (عربي · فرنسي · إنجليزي)  
> Site officiel du Collège Al Nour — Trilingue (Arabe · Français · Anglais)

---

## 📁 هيكل المشروع / Structure du projet

```
school-website/
├── index.html                  ← الصفحة الرئيسية / Page d'accueil
├── pages/
│   ├── about.html              ← عن المدرسة / À propos
│   ├── gallery.html            ← معرض الصور / Galerie
│   ├── news.html               ← الأخبار / Actualités
│   └── contact.html            ← التواصل / Contact
├── css/
│   └── main.css                ← جميع الأنماط / Tous les styles
├── js/
│   ├── i18n.js                 ← نظام الترجمة / Système de traduction
│   ├── main.js                 ← تفاعلات عامة / Interactions générales
│   └── news-loader.js          ← تحميل الأخبار / Chargement des actualités
├── images/
│   └── (أضف صورك هنا / Ajoutez vos images ici)
├── content/
│   ├── news/
│   │   ├── index.json          ← ← فهرس الأخبار — عدّل هذا الملف لإضافة أخبار
│   │   ├── article.ar.md       ← محتوى الخبر بالعربية
│   │   ├── article.fr.md       ← محتوى الخبر بالفرنسية
│   │   └── article.en.md       ← محتوى الخبر بالإنجليزية
│   └── gallery/
│       └── index.json          ← (اختياري) فهرس الصور
└── .github/
    └── workflows/
        └── deploy.yml          ← نشر تلقائي على GitHub Pages
```

---

## 🚀 النشر على GitHub Pages / Déploiement sur GitHub Pages

### الخطوات / Étapes

1. **أنشئ مستودعاً جديداً** على GitHub (عاماً أو خاصاً مع اشتراك Pro)  
   *Créez un nouveau dépôt sur GitHub (public ou privé avec abonnement Pro)*

2. **ارفع الملفات** / *Uploadez les fichiers* :
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Al Nour School website"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **فعّل GitHub Pages** / *Activez GitHub Pages* :
   - اذهب إلى: `Settings → Pages → Source → GitHub Actions`
   - سيتم النشر تلقائياً عند كل push إلى `main`

4. **الموقع سيكون متاحاً على** / *Le site sera accessible sur* :
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

---

## 📰 كيفية إضافة خبر جديد / Comment ajouter une actualité

### الطريقة البسيطة / Méthode simple

**الخطوة 1** — افتح الملف `content/news/index.json` وأضف خبراً جديداً:

```json
{
  "slug": "nom-de-levenement-2025",
  "date": "2025-03-15",
  "category": "events",
  "emoji": "🎉",
  "title_ar": "عنوان الخبر بالعربية",
  "title_fr": "Titre de l'actualité en français",
  "title_en": "News title in English",
  "excerpt_ar": "ملخص قصير بالعربية لا يتجاوز 200 حرف.",
  "excerpt_fr": "Résumé court en français de 200 caractères maximum.",
  "excerpt_en": "Short English summary under 200 characters.",
  "content_ar": "content/news/nom-de-levenement-2025.ar.md",
  "content_fr": "content/news/nom-de-levenement-2025.fr.md",
  "content_en": "content/news/nom-de-levenement-2025.en.md"
}
```

**الخطوة 2** — أنشئ ملفات Markdown للمحتوى التفصيلي:

**`content/news/nom-de-levenement-2025.ar.md`:**
```markdown
# عنوان الخبر بالعربية

**التاريخ:** 15 مارس 2025

المحتوى التفصيلي للخبر يُكتب هنا بصيغة Markdown...

## عنوان فرعي

- نقطة 1
- نقطة 2

> اقتباس أو ملاحظة مميزة
```

**الخطوة 3** — احفظ وادفع إلى GitHub — الموقع سيتحدث تلقائياً!

### فئات الأخبار / Catégories disponibles

| الكود | بالعربية | En français | In English |
|-------|-----------|-------------|------------|
| `events` | فعاليات | Événements | Events |
| `academic` | أكاديمي | Académique | Academic |
| `sports` | رياضة | Sport | Sports |
| `admin` | إداري | Administratif | Administrative |
| `general` | عام | Général | General |

---

## 🖼️ إضافة صور — نظام الوسوم / Ajouter des photos — Système de tags

### الهيكل / Structure

```
images/
└── gallery/
    ├── rentree-2025.jpg
    ├── science-week.jpg
    └── ...votre-photo.jpg

content/
└── gallery/
    └── index.json   ← الملف الوحيد الذي تحرره / Le seul fichier à modifier
```

### إضافة صورة جديدة / Ajouter une nouvelle photo

**الخطوة 1** — انسخ الصورة إلى `images/gallery/`

**الخطوة 2** — أضف مدخلاً في `content/gallery/index.json`:

```json
{
  "id": "g011",
  "file": "images/gallery/nom-du-fichier.jpg",
  "placeholder": "📷",
  "date": "2025-03-15",
  "tags": ["events", "featured"],
  "alt_ar": "وصف الصورة بالعربية",
  "alt_fr": "Description de la photo en français",
  "alt_en": "Photo description in English",
  "caption_ar": "تعليق تفصيلي يظهر عند التحويم",
  "caption_fr": "Légende détaillée affichée au survol",
  "caption_en": "Detailed caption shown on hover"
}
```

**الخطوة 3** — Push → الموقع يتحدث تلقائياً ✅

### الوسوم المتاحة / Tags disponibles

| Tag | العربية | Français | English |
|-----|---------|----------|---------|
| `featured` | مميز ⭐ (يظهر في الصفحة الرئيسية) | À la une (affiché en page d'accueil) | Featured (shown on homepage) |
| `events` | فعاليات | Événements | Events |
| `academic` | أكاديمي | Académique | Academic |
| `sports` | رياضة | Sport | Sports |
| `art` | فنون | Arts | Arts |
| `campus` | المؤسسة | L'établissement | Campus |

> يمكن إسناد **عدة وسوم** لصورة واحدة: `"tags": ["events", "featured", "academic"]`  
> Une photo peut avoir **plusieurs tags** : `"tags": ["events", "featured", "academic"]`

### الـ placeholder / Placeholder emoji

إذا لم توجد الصورة على الخادم (أو في بيئة التطوير المحلية)، يُعرض الـ `placeholder` بدلاً منها.  
Si l'image est absente, le `placeholder` emoji est affiché à la place — pratique pour le développement.


---

## 🌐 الترجمة والمحتوى / Traductions et contenu

لتعديل النصوص في الموقع، افتح `js/i18n.js` وعدّل القيم المقابلة.

Pour modifier les textes du site, ouvrez `js/i18n.js` et modifiez les valeurs correspondantes.

---

## 📬 نموذج التواصل / Formulaire de contact

يستخدم الموقع **Formspree** لاستقبال رسائل نموذج التواصل:

1. اذهب إلى [formspree.io](https://formspree.io) وأنشئ حساباً
2. أنشئ نموذجاً جديداً
3. انسخ معرّف النموذج (مثال: `xpzgkrld`)
4. افتح `pages/contact.html` وابحث عن:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   واستبدل `YOUR_FORM_ID` بمعرّفك

---

## 🎨 تخصيص الألوان / Personnaliser les couleurs

افتح `css/main.css` وعدّل متغيرات CSS في القسم `:root`:

```css
:root {
  --c-accent:  #1B6CA8;  /* الأزرق الرئيسي — Bleu principal */
  --c-accent2: #C8973A;  /* الذهبي — Or */
  --c-bg:      #FAFAF8;  /* خلفية الصفحة — Fond */
  --c-text:    #1A1A1A;  /* لون النص — Couleur du texte */
}
```

---

## 📄 الترخيص / Licence

هذا الموقع مفتوح المصدر ومرخّص للاستخدام الحر لأغراض تعليمية غير تجارية.  
Ce site est open source et utilisable librement à des fins éducatives non commerciales.
