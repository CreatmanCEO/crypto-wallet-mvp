# Референс успешной сборки Android

## Версии и зависимости

```json
// package.json
{
  "dependencies": {
    "react": "19.0.0",
    "react-native": "0.78.0"
  },
  "devDependencies": {
    "@react-native-community/cli": "^15.0.1",
    "@react-native-community/cli-platform-android": "15.0.1",
    "@react-native-community/cli-platform-ios": "15.0.1"
  }
}
```

## Android конфигурация

### android/build.gradle

```gradle
buildscript {
    ext {
        buildToolsVersion = "35.0.0"
        minSdkVersion = 24
        compileSdkVersion = 35
        targetSdkVersion = 35
        ndkVersion = "27.1.12297006"
        kotlinVersion = "2.0.21"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle")
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin")
    }
}
```

### android/gradle/wrapper/gradle-wrapper.properties

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.12-all.zip
```

### android/settings.gradle

```gradle
pluginManagement { includeBuild("../node_modules/@react-native/gradle-plugin") }
plugins { id("com.facebook.react.settings") }
extensions.configure(com.facebook.react.ReactSettingsExtension){ ex -> ex.autolinkLibrariesFromCommand() }
rootProject.name = 'CryptoWalletMVP'
include ':app'
includeBuild('../node_modules/@react-native/gradle-plugin')
```

### android/gradle.properties

```properties
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m
android.useAndroidX=true
newArchEnabled=true
hermesEnabled=true
```

## Системные требования

- Node.js: >=18
- Java: OpenJDK 17.0.14 (Temurin)
- Android SDK: API 35
- Build Tools: 35.0.0

## Порядок запуска

1. Запуск Metro:

```bash
npm start
```

2. Сборка и установка:

```bash
npx react-native run-android
```

## Критерии успешной сборки

- Metro сервер запущен и отвечает на localhost:8081
- Gradle сборка завершена успешно
- APK установлен на устройство
- Приложение запускается и отображает тестовый экран

## Известные проблемы и решения

1. Если ошибка "unknown command 'run-android'":

   - Проверить наличие @react-native-community/cli
   - Переустановить CLI локально

2. Если ошибка с Gradle:
   - Проверить соответствие версий в build.gradle
   - Очистить кэш: `cd android && ./gradlew clean`
