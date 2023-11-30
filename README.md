# Game Community
Мой проект для обучения и тестирования различных фич. 
Представляет из себя будущее Game комьюнити с блогом новостей и каталогом игр.
В проекте использованы React, Typescript, Redux, Webpack, Babel, GIT.
"Потрогать" проект можно по ссылке: 

[GameCom](https://majestic-lolly-a11882.netlify.app/)

**Для просмотра статей обязательно авторизуйтесь -  логин: user ,  пароль: 123.**

Фейковый backend - json.server
Проект постоянно обновляется. На данный момент нет адаптива, будет добавлен позже. Основной упор на функционал, а не внешний вид.
Проект покрыт тестами на 70%.
Написаны storybook для всех компонентов
**Реализованы:**
- Авторизация
- Асинхронная загрузка чанков
- Доступ к статьям только авторизованным пользователям
- Редактирование профиля
- Список статей с фильтрацией, сортировкой и поиском
- Бесконечная лента
- Роутинг
- Обработка ошибок
- Добавление комментариев к статьям
- Интернационализация
- Webpack настроен с нуля

## Содержание
- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Тестирование](#тестирование)
- [Deploy и CI/CD](#deploy-и-ci/cd)
- [To do](#to-do)
- [Telegram](#Контакты)

## Технологии
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [SCSS](https://sass-scss.ru/)
- [Jest](https://jestjs.io/ru/)
- [Stroybook](https://storybook.js.org/)

### Требования
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v8+.

### Запуск Development сервера
```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Хапуск unit тестов с jest
- `npm run test:ui` - Хапуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

### Создание билда
Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build:prod
```

## Тестирование

Мой проект покрыт юнит-тестами Jest. Для их запуска выполните команду:
```sh
npm run unit
```

Для проекта написаны storybook кейсы. Для их запуска выполните команду:
```sh
npm run storybook
```
----

## Конфигурация проекта

Для разработки проект содержит конфиг:
1. Webpack - ./config/build

Сборщик адаптирован под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

## CI/CD
Реализован с помощью github actions. Файл настройки - github\workflows\main.yml

----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

## To do
- [ ] Добавить виртуализацию
- [ ] Рефакторинг
- [ ] ...

## Контакты

- [Митин Алексей](https://t.me/n1kaka) — Front-End Engineer
 
