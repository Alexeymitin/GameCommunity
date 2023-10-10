# Game Community
Мой проект для обучения и тестирования различных фич.  
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
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run start:dev
```

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

## CI/CD
Реализован с помощью github actions. Файл настройки - github\workflows\main.yml

## To do
- [ ] Добавить виртуализацию
- [ ] Рефакторинг
- [ ] ...

## Контакты

- [Митин Алексей](https://t.me/n1kaka) — Front-End Engineer
 
