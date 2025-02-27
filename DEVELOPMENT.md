# Процесс разработки CryptoWallet MVP

## 🛠 Настройка окружения

### Требования
- Node.js >= 18
- Java Development Kit (JDK) 17
- Android Studio
- Android SDK API 35
- Git

### Установка зависимостей
```bash
# Установка зависимостей проекта
npm install

# Установка зависимостей для iOS (требуется macOS)
cd ios && pod install && cd ..
```

## 📝 Процесс разработки

### Запуск приложения
```bash
# Запуск Metro сервера
npm start

# Запуск на Android
npm run android

# Запуск на iOS
npm run ios
```

### Работа с кодом

#### Форматирование кода
```bash
# Форматирование всех файлов
npm run format

# Проверка стиля кода
npm run lint

# Исправление ошибок линтера
npm run lint:fix
```

#### Структура проекта
```
src/
├── app/              # Конфигурация приложения
├── core/             # Ядро приложения
├── features/         # Основной функционал
├── services/         # Внешние сервисы
├── shared/           # Общие компоненты
└── navigation/       # Навигация
```

### UI компоненты

#### Доступные компоненты
- Typography: типографика с поддержкой разных стилей
- Button: кнопка с разными вариантами отображения
- Card: карточка с тенью или рамкой
- Input: поле ввода с поддержкой состояний

#### Темизация
- Поддержка светлой и темной темы
- Автоматическое определение системной темы
- Возможность ручного переключения

### Навигация
- Стек навигации для авторизации
- Табы для основного flow
- Модальные окна для дополнительных экранов

## 🧪 Тестирование

### Запуск тестов
```bash
# Запуск всех тестов
npm test

# Запуск тестов в watch режиме
npm test -- --watch
```

### Типы тестов
- Unit тесты для утилит и хуков
- Компонентные тесты для UI
- Интеграционные тесты для основных flow

## 📦 Сборка

### Android
```bash
# Сборка debug версии
cd android && ./gradlew assembleDebug

# Сборка release версии
cd android && ./gradlew assembleRelease
```

### iOS
```bash
# Сборка через Xcode
open ios/CryptoWalletMVP.xcworkspace
```

## 🔄 Git Flow

### Ветки
- main: основная ветка
- develop: ветка разработки
- feature/*: новый функционал
- bugfix/*: исправление ошибок
- release/*: подготовка релиза

### Коммиты
Используем Conventional Commits:
- feat: новый функционал
- fix: исправление ошибок
- docs: документация
- style: форматирование
- refactor: рефакторинг
- test: тесты
- chore: обслуживание

## 📚 Полезные ресурсы
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [Trust Wallet Core Documentation](https://developer.trustwallet.com/wallet-core)

## 🔍 Линтер и форматирование

### ESLint конфигурация
```javascript
// .eslintrc.js
{
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
  }
}
```

### Prettier конфигурация
```javascript
// .prettierrc.js
{
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  importOrder: [
    '^react$',
    '^react-native$',
    '^@react-navigation',
    '^@/',
    '^[./]'
  ]
}
```

### Команды
```bash
# Проверка линтера
npm run lint

# Исправление ошибок линтера
npm run lint:fix

# Форматирование кода
npm run format

# Проверка форматирования
npm run format:check

# Проверка типов TypeScript
npm run type-check

# Полная валидация
npm run validate
```

### Текущие ошибки линтера
1. Отсутствующие типы модулей:
   - [ ] react
   - [ ] react-native
   - [ ] react-native-svg
   - [ ] @react-navigation/bottom-tabs

2. Неявные типы:
   - [ ] color в IconProps
   - [ ] props в TabBar
   - [ ] style в компонентах

3. Отсутствующие модули:
   - [ ] MarketIcon.tsx
   - [ ] SettingsIcon.tsx

### План исправления
1. Установить недостающие @types пакеты
2. Добавить явные типы для пропсов
3. Создать отсутствующие компоненты иконок
4. Настроить алиасы импортов
5. Исправить inline стили

### Правила форматирования
1. Сортировка импортов:
   - React
   - React Native
   - Навигация
   - Внутренние модули
   - Относительные импорты

2. Стиль кода:
   - Одинарные кавычки
   - Точка с запятой
   - Максимальная длина строки: 100
   - Отступ: 2 пробела 