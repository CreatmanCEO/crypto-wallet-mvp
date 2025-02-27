# Процесс разработки CryptoWallet MVP

## 🛠 Настройка окружения

### Требования
- Node.js >= 18
- Java Development Kit (JDK) 17
- Android Studio
- Android SDK API 35
- Git
- Visual Studio Code с расширениями:
  - ESLint
  - Prettier
  - React Native Tools
  - TypeScript

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

# Проверка типов TypeScript
npm run type-check
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
- Icons: SVG иконки с поддержкой тем

#### Темизация
- Поддержка светлой и темной темы
- Автоматическое определение системной темы
- Возможность ручного переключения
- Кастомные цвета и отступы

### Навигация
- Стек навигации для авторизации
- Табы для основного flow
- Модальные окна для дополнительных экранов
- Типизация параметров навигации

## 🧪 Тестирование

### Запуск тестов
```bash
# Запуск всех тестов
npm test

# Запуск тестов в watch режиме
npm test -- --watch

# Запуск с покрытием
npm test -- --coverage

# Запуск конкретного теста
npm test -- Card.test.tsx
```

### Типы тестов
- Unit тесты для утилит и хуков
- Компонентные тесты для UI
- Интеграционные тесты для основных flow
- E2E тесты для критических сценариев

## 📦 Сборка

### Android
```bash
# Сборка debug версии
cd android && ./gradlew assembleDebug

# Сборка release версии
cd android && ./gradlew assembleRelease

# Очистка
cd android && ./gradlew clean
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

## 🔒 Безопасность

### Хранение ключей
- Используем react-native-keychain
- Шифрование в KeyStore/Keychain
- Биометрическая защита
- Проверка root/jailbreak

### Сетевая безопасность
- SSL pinning
- Защита от MITM атак
- Валидация сертификатов
- Защита от инъекций

### Защита данных
- Шифрование локального хранилища
- Безопасные значения по умолчанию
- Очистка при выходе
- Защита от скриншотов

## 📱 Поддерживаемые платформы

### Android
- Минимальная версия: API 24 (Android 7.0)
- Целевая версия: API 35
- Поддержка архитектур:
  - arm64-v8a
  - armeabi-v7a
  - x86
  - x86_64

### iOS (в планах)
- Минимальная версия: iOS 13
- Поддержка:
  - iPhone
  - iPad
  - Dark Mode
  - Face ID/Touch ID 