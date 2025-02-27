# CryptoWallet MVP

Кроссплатформенное мобильное приложение криптокошелька на React Native с поддержкой мультивалютного холодного хранения.

## 🚀 Функциональность

### MVP (Текущая версия)
- [x] Базовая навигация
  - TabNavigator (Wallet, Market, News, Settings)
  - Модальные экраны (Send, Receive, Security)
  - Анимированные переходы
- [x] Базовые UI компоненты
  - Typography с поддержкой всех стилей
  - Card с поддержкой тем и вариантов
  - SVG иконки с поддержкой тем
  - Адаптивные кнопки и инпуты
- [ ] Криптокошелек
  - [ ] Создание/импорт кошелька
  - [ ] Просмотр баланса
  - [ ] Отправка/получение
  - [ ] Поддержка мультивалютности
- [ ] Интеграция с OKX
  - [ ] Торговля
  - [ ] История операций
  - [ ] Статистика

### Планируемые функции
- Новостной модуль с агрегацией из разных источников
- Маркетплейс NFT
- Расширенная аналитика портфеля
- DeFi интеграции

## 🛠 Технический стек

- React Native 0.78.0
- TypeScript 5.0.4
- Trust Wallet Core SDK
- Web3.js
- Redux Toolkit + Redux Persist
- React Navigation 6
- React Native Reanimated
- React Query
- react-native-keychain

## 📱 Требования

- Node.js >= 18
- Java Development Kit (JDK) 17
- Android Studio
- Android SDK API 35
- Git

## 🔧 Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/username/crypto-wallet-mvp.git
cd crypto-wallet-mvp

# Установка зависимостей
npm install

# Запуск Metro сервера
npm start

# Запуск на Android
npm run android

# Запуск тестов
npm test
```

## 📋 Структура проекта

```
src/
├── app/              # Конфигурация приложения
│   ├── store.ts     # Redux store
│   └── hooks.ts     # Кастомные хуки
├── core/             # Ядро приложения
│   ├── wallet/      # Интеграция Trust Wallet Core
│   └── blockchain/  # Web3 функционал
├── features/         # Основной функционал
│   ├── wallet/      # Операции с кошельком
│   ├── market/      # Торговый функционал
│   ├── news/        # Новостной модуль
│   └── settings/    # Настройки приложения
├── services/         # Внешние сервисы
│   ├── api/        # API интеграции
│   └── storage/    # Хранение данных
├── shared/          # Общие компоненты
│   ├── components/ # UI компоненты
│   ├── hooks/      # Кастомные хуки
│   └── utils/      # Утилиты
└── navigation/      # Навигация
```

## 🔐 Безопасность

- [ ] Шифрование приватных ключей
- [ ] Биометрическая аутентификация
- [ ] Защита от скриншотов
- [ ] Проверка root/jailbreak
- [ ] Безопасное хранение данных
- [ ] 2FA для критических операций

## 🧪 Тестирование

```bash
# Запуск всех тестов
npm test

# Запуск с watch режимом
npm test -- --watch

# Проверка покрытия
npm test -- --coverage

# Запуск E2E тестов
npm run e2e
```

## 📦 Сборка

```bash
# Android Debug
cd android && ./gradlew assembleDebug

# Android Release
cd android && ./gradlew assembleRelease

# Очистка кэша
cd android && ./gradlew clean
```

## 🔄 CI/CD

- GitHub Actions для автоматизации тестов
- Автоматическая сборка APK
- Деплой в Firebase App Distribution
- Проверка типов и линтинг

## 📚 Документация

- [Руководство разработчика](./DEVELOPMENT.md)
- [История изменений](./CHANGELOG.md)
- [Контрольный журнал](./CONTROL.md)
- [Референс сборки](./BUILD_REFERENCE.md)

## 📄 Лицензия

MIT
