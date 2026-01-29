# Razi Clinic - FSD Architecture

## Обновления

### Библиотеки
Все зависимости обновлены до последних версий:
- Next.js: 16.1.6
- React: 19.2.4
- MUI: 7.3.6
- TypeScript: 5.9.3

### Архитектура

Проект переведен на **Feature-Sliced Design (FSD)** архитектуру.

#### Структура проекта

```
src/
├── application/        # Инициализация приложения
│   ├── providers/      # Провайдеры (Theme, etc.)
│   └── styles/         # Глобальные стили
│
├── pages/              # Страницы приложения (пусто, используются Next.js pages)
│
├── widgets/            # Крупные самостоятельные блоки
│   ├── Header/         # Шапка сайта
│   └── Footer/         # Подвал сайта
│
├── features/           # Функциональные возможности
│
├── entities/           # Бизнес-сущности
│
└── shared/             # Переиспользуемые ресурсы
    ├── ui/             # UI компоненты, layouts
    ├── lib/            # Вспомогательные функции
    ├── api/            # API методы
    ├── config/         # Конфигурация
    └── types/          # Общие типы

pages/                  # Next.js Pages Router
├── _app.tsx           # Точка входа приложения
├── index.tsx          # Главная страница
├── about.tsx          # О нас
├── contacts.tsx       # Контакты
└── documents.tsx      # Документы
```

#### Алиасы путей

В проекте настроены следующие алиасы для удобства импорта:

```typescript
"@/*"              → "./src/*"
"@/application/*"  → "./src/application/*"
"@/pages/*"        → "./src/pages/*"
"@/widgets/*"      → "./src/widgets/*"
"@/features/*"     → "./src/features/*"
"@/entities/*"     → "./src/entities/*"
"@/shared/*"       → "./src/shared/*"
```

#### Примеры использования

```typescript
// Импорт виджетов
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

// Импорт UI компонентов
import { MainLayout, SectionLayout, CarouselMain } from "@/shared/ui";

// Импорт утилит
import { phoneFormat } from "@/shared/lib";

// Импорт конфигурации
import appConfig from "@/shared/config/app.config.json";
```

## Команды

```bash
npm run dev      # Запуск dev сервера
npm run build    # Сборка production
npm run start    # Запуск production сервера
npm run lint     # Проверка кода
```

## Преимущества FSD

1. **Масштабируемость** - легко добавлять новые функции
2. **Переиспользование** - компоненты независимы
3. **Понятная структура** - каждый слой имеет свою роль
4. **Изоляция** - изменения в одной части не ломают другие
5. **Командная работа** - разные разработчики работают над разными слоями

## Миграция компонентов

### Widgets (Виджеты)
- `Header` - Навигационная панель
- `Footer` - Подвал с контактами и ссылками

### Shared UI (Переиспользуемые компоненты)
- `MainLayout`, `PageLayout`, `SectionLayout` - Макеты страниц
- `ServiceItem` - Карточка услуги
- `Checkup`, `DoctorCard` - Карточки
- `CarouselMain`, `CarouselDoctors`, `CarouselNews`, `CarouselReviews` - Карусели

### Shared Lib (Утилиты)
- `phoneFormat` - Форматирование телефона

### Shared Config (Конфигурация)
- `app.config.json` - Настройки приложения
- `theme.ts` - Тема MUI

## Следующие шаги

1. Вынести логику форм в `features/`
2. Создать сущности в `entities/` (Doctor, Service, etc.)
3. Добавить API слой в `shared/api/`
4. Настроить state management при необходимости
