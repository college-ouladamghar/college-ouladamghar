// ============================================
//  AL NOUR SCHOOL — NEWS LOADER
//  Reads markdown files from content/news/
//  Uses marked.js (loaded from CDN) for parsing
// ============================================

(async function () {
  const INDEX_URL = 'content/news/index.json';

  // Adjust path for inner pages
  const isInner = window.location.pathname.includes('/pages/');
  const base = isInner ? '../' : './';

  async function loadNewsIndex() {
    try {
      const res = await fetch(base + 'content/news/index.json');
      if (!res.ok) throw new Error('No index');
      return await res.json();
    } catch {
      // Return demo articles if no index exists yet
      return [
        {
          slug: 'start-year-2025',
          date: '2025-09-01',
          category: 'events',
          emoji: '🎒',
          title_ar: 'انطلاق الموسم الدراسي 2025-2026',
          title_fr: 'Rentrée scolaire 2025-2026',
          title_en: 'Back to school 2025-2026',
          excerpt_ar: 'استقبلت إعدادية النور تلاميذها الجدد والقدامى في أجواء احتفالية مميزة بمناسبة انطلاق الموسم الدراسي الجديد.',
          excerpt_fr: 'Le Collège Al Nour a accueilli ses nouveaux et anciens élèves dans une atmosphère festive pour la rentrée scolaire.',
          excerpt_en: 'Al Nour Middle School welcomed its new and returning students in a festive atmosphere for the start of the new school year.',
        },
        {
          slug: 'science-fair-2025',
          date: '2025-11-15',
          category: 'academic',
          emoji: '🔬',
          title_ar: 'أسبوع العلوم — نتائج مبهرة',
          title_fr: 'Semaine des sciences — Résultats remarquables',
          title_en: 'Science week — Outstanding results',
          excerpt_ar: 'حقق تلاميذ إعدادية النور نتائج متميزة في أسبوع العلوم الإقليمي، حيث فازوا بثلاث جوائز في تخصصات مختلفة.',
          excerpt_fr: "Les élèves du Collège Al Nour ont obtenu d'excellents résultats lors de la semaine régionale des sciences, remportant trois prix.",
          excerpt_en: 'Al Nour students achieved outstanding results at the regional science week, winning three prizes in different disciplines.',
        },
        {
          slug: 'sports-day-2025',
          date: '2025-12-10',
          category: 'sports',
          emoji: '⚽',
          title_ar: 'اليوم الرياضي السنوي',
          title_fr: 'Journée sportive annuelle',
          title_en: 'Annual sports day',
          excerpt_ar: 'نظّمت المدرسة يومها الرياضي السنوي بمشاركة واسعة من التلاميذ والأساتذة في مختلف الألعاب والمسابقات.',
          excerpt_fr: "L'établissement a organisé sa journée sportive annuelle avec une large participation d'élèves et d'enseignants.",
          excerpt_en: 'The school organized its annual sports day with wide participation from students and teachers in various games and competitions.',
        },
      ];
    }
  }

  function renderCard(article, lang, limit) {
    const titleKey = `title_${lang}`;
    const excerptKey = `excerpt_${lang}`;
    const title = article[titleKey] || article.title_ar;
    const excerpt = article[excerptKey] || article.excerpt_ar;
    const date = new Date(article.date).toLocaleDateString(
      lang === 'ar' ? 'ar-MA' : lang === 'fr' ? 'fr-FR' : 'en-GB',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
    const readMore = window.i18n ? window.i18n.t('news.readmore') : 'اقرأ المزيد';
    const newsHref = (isInner ? '' : 'pages/') + `news.html#${article.slug}`;

    return `
      <article class="news-card reveal" data-category="${article.category || 'general'}">
        <div class="news-card-img-placeholder">${article.emoji || '📰'}</div>
        <div class="news-card-body">
          <p class="news-card-date">${date}</p>
          <h3 class="news-card-title">${title}</h3>
          <p class="news-card-excerpt">${excerpt}</p>
        </div>
        <div class="news-card-footer">
          <a href="${newsHref}" class="link-arrow">${readMore}</a>
        </div>
      </article>`;
  }

  async function renderNews(container, maxItems) {
    if (!container) return;

    const articles = await loadNewsIndex();
    const lang = window.i18n ? window.i18n.getLang() : 'ar';
    const sorted = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    const toShow = maxItems ? sorted.slice(0, maxItems) : sorted;

    container.innerHTML = toShow.map(a => renderCard(a, lang, maxItems)).join('');

    // Re-trigger reveal observer for new cards
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
      }, { threshold: 0.1 });
      container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
      container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }

  // Home page: show 3 latest
  const homeGrid = document.getElementById('newsGrid');
  if (homeGrid) await renderNews(homeGrid, 3);

  // News full page: show all
  const fullGrid = document.getElementById('newsGridFull');
  if (fullGrid) await renderNews(fullGrid, null);

  // Re-render when language changes
  document.addEventListener('langChanged', async () => {
    if (homeGrid) await renderNews(homeGrid, 3);
    if (fullGrid) await renderNews(fullGrid, null);
  });
})();
