# Razi Clinic - Медицинский центр

Современная медицинская клиника с опытными специалистами.

## Технологии

- **Next.js 15** - React-фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS v4** - Utility-first CSS фреймворк
- **PrimeReact** - UI компоненты
- **Swiper** - Современные карусели
- **Firebase** - Backend и аутентификация
- **FSD Architecture** - Feature-Sliced Design архитектура

## Структура проекта (FSD)

```
src/
├── app/                 # App Router (Next.js)
│   ├── layout.tsx
│   ├── page.tsx
│   └── */page.tsx
├── widgets/            # Композитные блоки (Header, Footer, Carousels)
├── entities/           # Бизнес-сущности (Doctor, Service, Checkup)
├── shared/             # Переиспользуемый код
│   ├── ui/            # UI-компоненты
│   ├── lib/           # Утилиты и хелперы
│   ├── types/         # TypeScript типы
│   └── config/        # Конфигурация
└── public/            # Статические файлы
```

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build

# Запуск production сборки
npm start
```

## Конфигурация

Создайте файл `.env.local` с переменными окружения:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Разработка

Проект использует:
- **ESLint** для линтинга
- **TypeScript** для типизации
- **Tailwind CSS** для стилизации
- **PrimeReact** для готовых компонентов

## Лицензия

MIT
