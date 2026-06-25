import './global_styles.css';

// ============================================
// ФУНКЦИИ ДЛЯ НОВЕЛЛЫ
// ============================================

function openNovellaModal(): void {
  const modal = document.getElementById('novella-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeNovellaModal(): void {
  const modal = document.getElementById('novella-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// ============================================
// ОБРАБОТЧИКИ СОБЫТИЙ (СТРЕЛОЧНЫЕ ФУНКЦИИ)
// ============================================

document.addEventListener('DOMContentLoaded', (): void => {
  // Закрытие модалки новеллы по клику на фон
  const modal = document.getElementById('novella-modal');
  if (modal) {
    modal.addEventListener('click', (e: Event): void => {
      const target = e.target as HTMLElement;
      if (target === modal) {
        closeNovellaModal();
      }
    });
  }

  // Плавный скролл по якорям
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element): void => {
    anchor.addEventListener('click', (e: Event): void => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Обработка кликов по модальным окнам сертификатов
  document.querySelectorAll('.modal').forEach((modal: Element): void => {
    modal.addEventListener('click', (e: Event): void => {
      const target = e.target as HTMLElement;
      if (target === modal) {
        (modal as HTMLElement).style.display = 'none';
      }
    });
  });
});

// Закрытие по Escape
document.addEventListener('keydown', (e: KeyboardEvent): void => {
  if (e.key === 'Escape') {
    closeNovellaModal();
    // Закрываем все модалки сертификатов
    document.querySelectorAll('.modal').forEach((modal: Element): void => {
      (modal as HTMLElement).style.display = 'none';
    });
  }
});

// ============================================
// ДЕЛАЕМ ФУНКЦИИ ГЛОБАЛЬНЫМИ ДЛЯ ONCLICK
// ============================================

(window as any).openNovellaModal = openNovellaModal;
(window as any).closeNovellaModal = closeNovellaModal;

console.log('✅ Сайт-резюме загружен!');
