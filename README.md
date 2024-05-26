### Тестовое задание в компанию "Cloud Factory"
#### На позицию Frontend-разработчика

Сервис по просмотру котировок в реальном времени с обращением к API Poloniex.

### Инструкция по запуску проекта:

Для подключения к API Poloniex необходимо запустить Proxy-server из папки backend либо раскомментировать
в store.ts и заменить константу API_URL на POLONIEX_URL в методе fetchInitData для подключения через расширение 
"CORS Unblock".

Зависимости:
```yarn install```

Запуск проекта:

```yarn dev```

Сборка проекта:
```yarn run build```

### Технологии
```
React
TypeScript
MobX
Styled-components
Express
```