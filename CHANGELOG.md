# Changelog - FSD Migration

## 🎉 Основные изменения

### ✅ Обновление зависимостей

Все пакеты обновлены до последних версий (январь 2026):

| Пакет | Старая версия | Новая версия |
|-------|--------------|--------------|
| Next.js | 16.0.10 | **16.1.6** |
| React | 19.2.3 | **19.2.4** |
| React DOM | 19.2.3 | **19.2.4** |
| @mui/material | 7.3.6 | 7.3.6 ✓ |
| @types/node | 25.0.3 | **25.1.0** |
| @types/react | 19.2.7 | **19.2.10** |
| TypeScript | 5.9.3 | 5.9.3 ✓ |
| eslint-config-next | 16.0.10 | **16.1.6** |

### 🏗️ Архитектура FSD

Проект полностью переструктурирован по методологии **Feature-Sliced Design**:

#### Новая структура:

```
src/
├── application/          # Слой приложения
│   ├── providers/        # React провайдеры (Theme)
│   ├── styles/          # Глобальные стили
│   └── index.tsx        # Корневой компонент App
│
├── widgets/             # Виджеты (крупные блоки)
│   ├── Header/          # Шапка сайта
│   │   ├── ui/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.scss
│   │   └── index.ts
│   └── Footer/          # Подвал сайта
│       ├── ui/
│       │   ├── Footer.tsx
│       │   └── Footer.module.scss
│       └── index.ts
│
├── features/            # Фичи (пусто, готово к расширению)
│
├── entities/            # Сущности (пусто, готово к расширению)
│
└── shared/              # Общие ресурсы
    ├── ui/              # UI компоненты
    │   ├── components/  # Переиспользуемые компоненты
    │   │   ├── Cards/   # Карточки (Checkup, Doctor)
    │   │   ├── Carousels/ # Карусели (Main, Doctors, News, Reviews)
    │   │   └── ServiceItem.tsx
    │   ├── layouts/     # Макеты страниц
    │   │   ├── MainLayout.tsx
    │   │   ├── PageLayout.tsx
    │   │   └── SectionLayout.tsx
    │   └── index.ts     # Публичный API
    ├── lib/             # Утилиты
    │   ├── phoneFormat.ts
    │   └── index.ts
    ├── types/           # Типы TypeScript
    │   └── index.ts
    ├── config/          # Конфигурация
    │   ├── theme.ts     # Тема MUI
    │   └── app.config.json
    └── api/             # API (готово к использованию)
```

### 📝 Что изменилось

#### 1. Алиасы путей (tsconfig.json)
```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@/application/*": ["./src/application/*"],
    "@/widgets/*": ["./src/widgets/*"],
    "@/features/*": ["./src/features/*"],
    "@/entities/*": ["./src/entities/*"],
    "@/shared/*": ["./src/shared/*"]
  }
}
```

#### 2. Точка входа (pages/_app.tsx)
Теперь просто импортирует App из `@/application`:
```typescript
import "@/application/styles/globals.scss";
import App from "@/application";
export default App;
```

#### 3. Миграция компонентов

**До:**
```typescript
import MainLayout from '../layouts/MainLayout'
import { Header } from '../components/Header'
import { phoneFormat } from '../utils/helpers/phoneFormat'
```

**После:**
```typescript
import { MainLayout } from '@/shared/ui'
import { Header } from '@/widgets/Header'
import { phoneFormat } from '@/shared/lib'
```

### 🔧 Исправления

1. **Grid2 → Grid**: Обновлен на стабильную версию MUI Grid
2. **Sass @import → @use**: Обновлен синтаксис импорта стилей
3. **Глобальные стили**: Перенесены в pages/_app.tsx согласно требованиям Next.js

### ✨ Преимущества новой структуры

1. **Модульность**: Каждый компонент изолирован
2. **Масштабируемость**: Легко добавлять новые фичи
3. **Переиспользование**: Компоненты независимы друг от друга
4. **Понятность**: Четкая структура папок
5. **Типизация**: Все компоненты типизированы
6. **Алиасы**: Короткие и понятные пути импорта

### 🚀 Как использовать

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Production
npm run start
```

### 📦 Public API компонентов

#### Widgets
```typescript
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
```

#### Shared UI
```typescript
import {
  MainLayout,
  PageLayout,
  SectionLayout,
  ServiceItem,
  Checkup,
  DoctorCard,
  CarouselMain,
  CarouselDoctors,
  CarouselNews,
  CarouselReviews
} from '@/shared/ui'
```

#### Shared Lib
```typescript
import { phoneFormat } from '@/shared/lib'
```

#### Shared Config
```typescript
import appConfig from '@/shared/config/app.config.json'
import { theme } from '@/shared/config/theme'
```

### 🎯 Следующие шаги

1. Создать features для форм (ContactForm, AppointmentForm)
2. Вынести бизнес-логику в entities (Doctor, Service, News)
3. Добавить API клиент в shared/api
4. Настроить state management (если нужно)
5. Добавить тесты

### ⚠️ Важно

- Старые папки `components/`, `layouts/`, `utils/` можно удалить
- Файлы `theme.ts` и `app.config.json` в корне можно удалить
- Все импорты обновлены на новую структуру

### 📚 Документация

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js 16](https://nextjs.org/docs)
- [MUI v7](https://mui.com/material-ui/getting-started/)
