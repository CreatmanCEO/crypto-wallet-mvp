# CryptoWallet MVP

Кроссплатформенное мобильное приложение криптокошелька на React Native с поддержкой мультивалютного холодного хранения.

## 🚀 Функциональность

### MVP (Текущая версия)
- Криптокошелек (основная функциональность)
- Личный кабинет пользователя
- Поддержка основных операций с криптовалютами
- Интеграция с OKX для операций ввода/вывода
- Мультивалютное отображение балансов

### Планируемые функции
- Новостной модуль
- Маркетплейс
- Расширенная аналитика

## 🛠 Технический стек

- React Native
- TypeScript
- Trust Wallet Core SDK
- Web3.js
- Redux Toolkit + Redux Persist
- React Navigation 6
- React Native Reanimated
- React Query
- react-native-keychain

## 📱 Требования

- iOS 13+
- Android 8+ (API 26)
- Поддержка биометрии на устройстве

## 🔧 Установка и запуск

```bash
# Установка зависимостей
yarn install

# Запуск для iOS
cd ios && pod install && cd ..
yarn ios

# Запуск для Android
yarn android
```

## 📋 Структура проекта

```
src/
├── app/              # Конфигурация приложения
├── core/             # Ядро приложения
├── features/         # Основной функционал
├── services/         # Внешние сервисы
├── shared/           # Общие компоненты
└── navigation/       # Навигация
```

## 🔐 Безопасность

- Шифрование приватных ключей
- Биометрическая аутентификация
- Защита от скриншотов
- Проверка root/jailbreak

## 📄 Лицензия

MIT