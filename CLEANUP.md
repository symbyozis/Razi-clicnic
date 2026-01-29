# Очистка старых файлов

После миграции на FSD архитектуру можно удалить следующие файлы и папки:

## Папки для удаления

```bash
# Старые компоненты (теперь в src/widgets и src/shared/ui)
rm -rf components/

# Старые layouts (теперь в src/shared/ui/layouts)
rm -rf layouts/

# Старые стили (теперь в src/application/styles)
rm -rf styles/

# Старые утилиты (теперь в src/shared/lib)
rm -rf utils/

# Старая конфигурация (пустая)
rm -rf config/
```

## Файлы для удаления

```bash
# Старая тема (теперь в src/shared/config/theme.ts)
rm theme.ts

# Старый конфиг (теперь в src/shared/config/app.config.json)
rm app.config.json
```

## Команда для удаления всего сразу

```bash
rm -rf components/ layouts/ styles/ utils/ config/ theme.ts app.config.json
```

## ⚠️ Внимание!

Перед удалением убедитесь, что:
1. Проект успешно собирается: `npm run build`
2. Dev сервер работает: `npm run dev`
3. Нет ошибок TypeScript
4. Все страницы отображаются корректно

## После удаления

Структура проекта станет чище:

```
razi-clinic/
├── src/                  # ✅ Новая FSD структура
├── pages/                # ✅ Next.js Pages Router
├── public/               # ✅ Статические файлы
├── node_modules/         # ✅ Зависимости
├── .next/                # ✅ Build
├── package.json          # ✅ Конфигурация
├── tsconfig.json         # ✅ TypeScript config
├── next.config.js        # ✅ Next.js config
├── CHANGELOG.md          # ✅ История изменений
├── FSD_MIGRATION.md      # ✅ Документация FSD
└── README.md             # ✅ Основная документация
```
