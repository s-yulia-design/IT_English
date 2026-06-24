// Сгенерировано: словарь.md + UI Cursor/GitHub/ChatGPT + стартовый набор
const SEED_CARDS = [
  {
    "english": "Accept",
    "russian": "принять",
    "meaning": "Согласиться с предложенным изменением — оставить его в коде.",
    "example": "Accept the suggested fix.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Примите предложенное исправление."
  },
  {
    "english": "access",
    "russian": "доступ",
    "meaning": "Доступ — возможность открыть, посмотреть или изменить что-то.",
    "example": "You do not have access to this file.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Доступ — возможность открыть, посмотреть или изменить что-то."
  },
  {
    "english": "account",
    "russian": "аккаунт",
    "meaning": "Аккаунт — ваш личный профиль в сервисе с логином и настройками.",
    "example": "Create an account to get started.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Создайте аккаунт."
  },
  {
    "english": "accuracy",
    "russian": "точность",
    "meaning": "Точность — насколько часто ИИ отвечает правильно.",
    "example": "The accuracy of the model is 95%.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Точность — насколько часто ИИ отвечает правильно."
  },
  {
    "english": "Actions",
    "russian": "автоматизация на GitHub",
    "meaning": "Автоматические задачи при изменении кода: тесты, сборка, публикация.",
    "example": "GitHub Actions runs tests on every push.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Автоматические задачи при изменении кода: тесты, сборка, публикация."
  },
  {
    "english": "admin",
    "russian": "администратор",
    "meaning": "Администратор — человек с полными правами управления системой.",
    "example": "Contact the admin for help.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Администратор — человек с полными правами управления системой."
  },
  {
    "english": "agent",
    "russian": "агент",
    "meaning": "ИИ-агент — программа, которая сама выполняет задачи по шагам, а не только отвечает на вопросы.",
    "example": "The AI agent completed the task for you.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "ИИ-агент — программа, которая сама выполняет задачи по шагам, а не только отвечает на вопросы."
  },
  {
    "english": "Agent mode",
    "russian": "режим агента",
    "meaning": "Режим, где ИИ сам выполняет задачи: ищет файлы, пишет и меняет код.",
    "example": "Use Agent mode to implement the feature.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Используйте «режим агента»."
  },
  {
    "english": "AI",
    "russian": "ИИ",
    "meaning": "Сокращение от «искусственный интеллект». Так называют умные программы вроде ChatGPT.",
    "example": "AI can help you write emails faster.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Сокращение от «искусственный интеллект»."
  },
  {
    "english": "algorithm",
    "russian": "алгоритм",
    "meaning": "Пошаговая инструкция для решения задачи — как рецепт, только для компьютера.",
    "example": "This algorithm sorts the list quickly.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Пошаговая инструкция для решения задачи — как рецепт, только для компьютера."
  },
  {
    "english": "analytics",
    "russian": "аналитика",
    "meaning": "Аналитика — сбор и разбор данных, чтобы понять, как что-то работает.",
    "example": "Analytics shows how users behave.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Аналитика — сбор и разбор данных, чтобы понять, как что-то работает."
  },
  {
    "english": "API",
    "russian": "способ обмена данными",
    "meaning": "«Язык», на котором одна программа просит другую что-то сделать — например, отправить запрос к ИИ.",
    "example": "Connect via the API.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Подключитесь через API."
  },
  {
    "english": "API key",
    "russian": "ключ API",
    "meaning": "Секретный ключ — пароль для доступа программы к сервису через API.",
    "example": "Keep your API key secret.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Секретный ключ — пароль для доступа программы к сервису через API."
  },
  {
    "english": "app",
    "russian": "приложение",
    "meaning": "Сокращение от «приложение» — программа на телефоне или компьютере.",
    "example": "Open the app on your phone.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Откройте «приложение»."
  },
  {
    "english": "application",
    "russian": "приложение",
    "meaning": "Приложение — программа для конкретных задач.",
    "example": "Download the application from the store.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Скачайте файл на компьютер."
  },
  {
    "english": "Apply",
    "russian": "применить",
    "meaning": "Внести предложенные ИИ изменения в файл — принять правки.",
    "example": "Click Apply to update the file.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Нажмите Apply, чтобы обновить файл."
  },
  {
    "english": "approve",
    "russian": "одобрить",
    "meaning": "Согласиться с чужими изменениями — «всё хорошо, можно вливать».",
    "example": "Approve the pull request.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Approve the pull request — по-русски: «одобрить»."
  },
  {
    "english": "archive",
    "russian": "в архив",
    "meaning": "Убрать из активного списка, но не удалять — можно вернуть позже.",
    "example": "Archive old chats.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Отправьте старые чаты в архив."
  },
  {
    "english": "artifacts",
    "russian": "результаты сборки",
    "meaning": "Файлы, которые создаёт автоматизация — например, готовая программа.",
    "example": "Download the build artifacts.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Скачайте файл на компьютер."
  },
  {
    "english": "artificial intelligence",
    "russian": "искусственный интеллект",
    "meaning": "Искусственный интеллект — программа, которая умеет учиться и отвечать почти как человек.",
    "example": "Artificial intelligence is changing how we work.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Искусственный интеллект — программа, которая умеет учиться и отвечать почти как человек."
  },
  {
    "english": "Ask mode",
    "russian": "режим вопросов",
    "meaning": "Режим, где ИИ только отвечает и советует, но сам не меняет файлы.",
    "example": "Switch to Ask mode to learn without edits.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Переключитесь на «режим вопросов»."
  },
  {
    "english": "assistant",
    "russian": "ассистент",
    "meaning": "Помощник — ИИ или программа, которая помогает решать задачи и отвечает на вопросы.",
    "example": "The assistant helped me write a letter.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Помощник — ИИ или программа, которая помогает решать задачи и отвечает на вопросы."
  },
  {
    "english": "attach",
    "russian": "прикрепить",
    "meaning": "Добавить файл или картинку к сообщению для ИИ.",
    "example": "Attach a screenshot to your message.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Прикрепите файл к сообщению."
  },
  {
    "english": "attach file",
    "russian": "прикрепить файл",
    "meaning": "Отправить документ или картинку в чат для анализа ИИ.",
    "example": "Attach file and ask for a summary.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Прикрепите файл к сообщению."
  },
  {
    "english": "authentication",
    "russian": "проверка личности",
    "meaning": "Проверка личности — подтверждение, что вы действительно тот, за кого себя выдаёте.",
    "example": "Authentication failed. Check your password.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверка личности — подтверждение, что вы действительно тот, за кого себя выдаёте."
  },
  {
    "english": "authorization",
    "russian": "проверка прав",
    "meaning": "Проверка прав — можно ли вам делать то, что вы пытаетесь сделать.",
    "example": "You need authorization to access this page.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверка прав — можно ли вам делать то, что вы пытаетесь сделать."
  },
  {
    "english": "automation",
    "russian": "автоматизация",
    "meaning": "Автоматизация — когда рутинные действия выполняет программа без участия человека.",
    "example": "Automation saves time on routine tasks.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Автоматизация — когда рутинные действия выполняет программа без участия человека."
  },
  {
    "english": "backend",
    "russian": "внутренняя часть сайта",
    "meaning": "Внутренняя часть сайта — логика и данные, которые работают «за кулисами».",
    "example": "The backend handles data and logic.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Внутренняя часть сайта — логика и данные, которые работают «за кулисами»."
  },
  {
    "english": "background agent",
    "russian": "фоновый агент",
    "meaning": "ИИ работает в фоне над задачей, пока вы занимаетесь другим.",
    "example": "The background agent is still running.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "ИИ работает в фоне над задачей, пока вы занимаетесь другим."
  },
  {
    "english": "backup",
    "russian": "резервная копия",
    "meaning": "Резервная копия — запасная копия данных на случай потери.",
    "example": "Make a backup before you update.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Резервная копия — запасная копия данных на случай потери."
  },
  {
    "english": "blame",
    "russian": "кто менял строку",
    "meaning": "Показать, кто и когда изменил каждую строку файла.",
    "example": "Use blame to see who edited this line.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Используйте «кто менял строку»."
  },
  {
    "english": "branch",
    "russian": "ветка",
    "meaning": "Отдельная копия проекта для экспериментов — основная версия при этом не ломается.",
    "example": "Create a new branch.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Создайте новую ветку."
  },
  {
    "english": "browse",
    "russian": "просмотр интернета",
    "meaning": "ИИ ищет свежую информацию в сети прямо во время ответа.",
    "example": "Enable browse to get current news.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Включите «просмотр интернета»."
  },
  {
    "english": "browser",
    "russian": "браузер",
    "meaning": "Браузер — программа для просмотра сайтов: Chrome, Firefox, Edge.",
    "example": "Open the site in your browser.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Откройте «браузер»."
  },
  {
    "english": "bug",
    "russian": "ошибка",
    "meaning": "Ошибка в программе — что-то работает не так, как задумано.",
    "example": "We found a bug in the login form.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Ошибка в программе — что-то работает не так, как задумано."
  },
  {
    "english": "Bugbot",
    "russian": "проверка кода ботом",
    "meaning": "Автоматическая проверка ваших изменений на ошибки, как ревью от робота.",
    "example": "Bugbot found a possible bug in the PR.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Автоматическая проверка ваших изменений на ошибки, как ревью от робота."
  },
  {
    "english": "button",
    "russian": "кнопка",
    "meaning": "Кнопка — элемент на экране, который нажимают для действия.",
    "example": "Press the button to continue.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Нажмите «кнопка»."
  },
  {
    "english": "cache",
    "russian": "кэш",
    "meaning": "Кэш — временное хранение данных для ускорения повторной загрузки.",
    "example": "Clear the cache if the page looks old.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Кэш — временное хранение данных для ускорения повторной загрузки."
  },
  {
    "english": "canvas",
    "russian": "холст для текста",
    "meaning": "Отдельная область, где ИИ и вы вместе редактируете длинный текст или код.",
    "example": "Open the answer in canvas to edit it.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Откройте «холст для текста»."
  },
  {
    "english": "capabilities",
    "russian": "возможности",
    "meaning": "Что умеет бот: искать в сети, рисовать, запускать код и т.д.",
    "example": "Enable web browsing in capabilities.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Включите «возможности»."
  },
  {
    "english": "chart",
    "russian": "диаграмма, график",
    "meaning": "График или диаграмма — наглядное изображение чисел и тенденций.",
    "example": "The chart shows sales by month.",
    "tags": [
      "данные"
    ],
    "exampleRu": "График или диаграмма — наглядное изображение чисел и тенденций."
  },
  {
    "english": "chat history",
    "russian": "история чатов",
    "meaning": "Список прошлых разговоров с ИИ — можно вернуться к любому.",
    "example": "Find it in your chat history.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Найдите в история чатов."
  },
  {
    "english": "chatbot",
    "russian": "чат-бот",
    "meaning": "Чат-бот — программа, с которой можно переписываться в чате.",
    "example": "The chatbot answered my question instantly.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Чат-бот — программа, с которой можно переписываться в чате."
  },
  {
    "english": "ChatGPT",
    "russian": "чат с ИИ от OpenAI",
    "meaning": "Популярный сервис для разговора с искусственным интеллектом в браузере или приложении.",
    "example": "Ask ChatGPT to explain this term.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Спросите ChatGPT, что означает этот термин."
  },
  {
    "english": "ChatGPT Plus",
    "russian": "платная подписка Plus",
    "meaning": "Платный тариф ChatGPT — быстрее, умнее модель и больше возможностей.",
    "example": "Upgrade to ChatGPT Plus for GPT-4.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Платный тариф ChatGPT — быстрее, умнее модель и больше возможностей."
  },
  {
    "english": "checkpoint",
    "russian": "точка сохранения",
    "meaning": "Снимок состояния проекта — можно вернуться, если что-то пошло не так.",
    "example": "Restore from the last checkpoint.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Снимок состояния проекта — можно вернуться, если что-то пошло не так."
  },
  {
    "english": "checks",
    "russian": "автопроверки",
    "meaning": "Результаты автоматических тестов и проверок для ваших изменений.",
    "example": "All checks passed successfully.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "All checks passed successfully — по-русски: «автопроверки»."
  },
  {
    "english": "cherry-pick",
    "russian": "взять один коммит",
    "meaning": "Скопировать одно конкретное сохранение из другой ветки.",
    "example": "Cherry-pick this fix into release.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Скопировать одно конкретное сохранение из другой ветки."
  },
  {
    "english": "CI",
    "russian": "автоматическая сборка",
    "meaning": "Система, которая сама проверяет и собирает код при каждом изменении.",
    "example": "CI failed on the last commit.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Система, которая сама проверяет и собирает код при каждом изменении."
  },
  {
    "english": "classification",
    "russian": "классификация",
    "meaning": "Разделение объектов по категориям — например, спам или не спам.",
    "example": "Classification separates spam from normal mail.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Разделение объектов по категориям — например, спам или не спам."
  },
  {
    "english": "client",
    "russian": "клиент",
    "meaning": "Клиент — ваша программа или браузер, который обращается к серверу.",
    "example": "The client connects to the server.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Клиент — ваша программа или браузер, который обращается к серверу."
  },
  {
    "english": "clone",
    "russian": "клонировать",
    "meaning": "Скопировать чужой проект с GitHub к себе на компьютер.",
    "example": "Clone the repository to get started.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Скопировать чужой проект с GitHub к себе на компьютер."
  },
  {
    "english": "cloud",
    "russian": "облако",
    "meaning": "Облако — хранение и работа с данными через интернет, а не только на своём компьютере.",
    "example": "Your files are saved in the cloud.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Облако — хранение и работа с данными через интернет, а не только на своём компьютере."
  },
  {
    "english": "cloud agent",
    "russian": "облачный агент",
    "meaning": "ИИ выполняет задачу на сервере Cursor, а не только на вашем компьютере.",
    "example": "Start a cloud agent for this task.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Начните: облачный агент."
  },
  {
    "english": "clustering",
    "russian": "кластеризация",
    "meaning": "Группировка похожих объектов без заранее заданных категорий.",
    "example": "Clustering groups similar customers together.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Группировка похожих объектов без заранее заданных категорий."
  },
  {
    "english": "code",
    "russian": "код",
    "meaning": "Код — инструкции для компьютера, написанные на языке программирования.",
    "example": "Review the code before you publish.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Просмотрите код перед сохранением."
  },
  {
    "english": "code interpreter",
    "russian": "выполнение кода",
    "meaning": "ИИ может запускать код и работать с файлами — считать, строить графики.",
    "example": "Use code interpreter to analyze the CSV.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Используйте «выполнение кода»."
  },
  {
    "english": "codebase",
    "russian": "код проекта",
    "meaning": "Все файлы вашего проекта вместе — то, что ИИ может читать и понимать.",
    "example": "Cursor indexes your entire codebase.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Все файлы вашего проекта вместе — то, что ИИ может читать и понимать."
  },
  {
    "english": "Codespaces",
    "russian": "облачный редактор",
    "meaning": "Полноценная среда для кода в браузере — не нужно ничего устанавливать.",
    "example": "Open the project in Codespaces.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Откройте «облачный редактор»."
  },
  {
    "english": "coding",
    "russian": "программирование",
    "meaning": "Программирование — написание кода для создания программ.",
    "example": "Coding skills are useful in many jobs.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Программирование — написание кода для создания программ."
  },
  {
    "english": "comment",
    "russian": "комментарий",
    "meaning": "Текстовое замечание к строке кода или к обсуждению.",
    "example": "Leave a comment on line 42.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Текстовое замечание к строке кода или к обсуждению."
  },
  {
    "english": "commit",
    "russian": "сохранить изменения",
    "meaning": "Зафиксировать правки в проекте с коротким описанием — как сохранить версию черновика.",
    "example": "Commit your changes.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Сохраните свои изменения."
  },
  {
    "english": "compare",
    "russian": "сравнить версии",
    "meaning": "Посмотреть разницу между двумя ветками или коммитами.",
    "example": "Compare main with your branch.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Посмотреть разницу между двумя ветками или коммитами."
  },
  {
    "english": "Composer",
    "russian": "режим создания",
    "meaning": "В Cursor — окно, где ИИ пишет и меняет код по вашему запросу, как соавтор программист.",
    "example": "Open Composer to build a new feature.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Откройте Composer, чтобы создать новую функцию."
  },
  {
    "english": "configuration",
    "russian": "настройка системы",
    "meaning": "Настройка, конфигурация — параметры, определяющие, как работает система.",
    "example": "Check the configuration settings.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверьте настройка системы."
  },
  {
    "english": "conflict",
    "russian": "конфликт изменений",
    "meaning": "Когда два человека изменили одно место по-разному — нужно выбрать, какая версия верная.",
    "example": "Resolve the merge conflict in this file.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Когда два человека изменили одно место по-разному — нужно выбрать, какая версия верная."
  },
  {
    "english": "connection",
    "russian": "соединение, подключение",
    "meaning": "Подключение — связь между вашим устройством и сервером или интернетом.",
    "example": "The connection was lost. Reconnecting...",
    "tags": [
      "IT"
    ],
    "exampleRu": "Подключение — связь между вашим устройством и сервером или интернетом."
  },
  {
    "english": "container",
    "russian": "контейнер",
    "meaning": "Контейнер — упакованная среда для запуска программы одинаково на разных машинах.",
    "example": "The app runs inside a container.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Контейнер — упакованная среда для запуска программы одинаково на разных машинах."
  },
  {
    "english": "context",
    "russian": "контекст, предыстория",
    "meaning": "Вся предыдущая переписка и файлы, которые ИИ «помнит» в рамках одного разговора.",
    "example": "The model lost context.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Модель потеряла контекст переписки."
  },
  {
    "english": "context window",
    "russian": "объём памяти чата",
    "meaning": "Сколько текста ИИ может держать в голове за один раз. Если переписка слишком длинная — он начинает забывать начало.",
    "example": "This chat exceeded the context window.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Этот чат превысил объём памяти."
  },
  {
    "english": "continue",
    "russian": "продолжить",
    "meaning": "Попросить ИИ дописать оборванный или неполный ответ.",
    "example": "Click continue to finish the answer.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Нажмите «продолжить»."
  },
  {
    "english": "contributors",
    "russian": "участники проекта",
    "meaning": "Люди, которые вносили код или правки в проект.",
    "example": "See all contributors on the repo page.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Люди, которые вносили код или правки в проект."
  },
  {
    "english": "conversation",
    "russian": "разговор, беседа",
    "meaning": "Один чат с ИИ от первого сообщения до последнего.",
    "example": "Save this conversation for later.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Сохраните разговор."
  },
  {
    "english": "copy",
    "russian": "скопировать",
    "meaning": "Скопировать текст или ссылку в буфер обмена, чтобы вставить в другое место.",
    "example": "Copy the answer.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Скопируйте ответ."
  },
  {
    "english": "CSS",
    "russian": "стили CSS",
    "meaning": "Язык стилей — задаёт цвета, шрифты и расположение элементов на странице.",
    "example": "CSS controls colors and fonts.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Язык стилей — задаёт цвета, шрифты и расположение элементов на странице."
  },
  {
    "english": "CSV",
    "russian": "формат таблицы CSV",
    "meaning": "Формат таблицы в виде текста — удобен для Excel и импорта данных.",
    "example": "Export the table as a CSV file.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Формат таблицы в виде текста — удобен для Excel и импорта данных."
  },
  {
    "english": "Custom GPT",
    "russian": "свой настроенный GPT",
    "meaning": "Ваш личный чат-бот с инструкциями, файлами и особыми навыками.",
    "example": "Build a Custom GPT for your team.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Ваш личный чат-бот с инструкциями, файлами и особыми навыками."
  },
  {
    "english": "DALL-E",
    "russian": "генератор картинок",
    "meaning": "ИИ, который создаёт изображения по текстовому описанию.",
    "example": "Use DALL-E to create an illustration.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Используйте «генератор картинок»."
  },
  {
    "english": "dashboard",
    "russian": "главная панель",
    "meaning": "Страница со сводкой: здесь видно основную информацию, кнопки и быстрый доступ к разделам.",
    "example": "Go to your dashboard.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Перейдите на главную панель."
  },
  {
    "english": "data",
    "russian": "данные",
    "meaning": "Данные — любая информация: тексты, числа, картинки, таблицы.",
    "example": "Your data is stored securely.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Данные — любая информация: тексты, числа, картинки, таблицы."
  },
  {
    "english": "database",
    "russian": "база данных",
    "meaning": "База данных — место, где программа хранит информацию упорядоченно.",
    "example": "All users are stored in the database.",
    "tags": [
      "данные"
    ],
    "exampleRu": "База данных — место, где программа хранит информацию упорядоченно."
  },
  {
    "english": "dataset",
    "russian": "набор данных",
    "meaning": "Набор данных — коллекция примеров, на которых учат или проверяют ИИ.",
    "example": "We need a larger dataset for training.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Набор данных — коллекция примеров, на которых учат или проверяют ИИ."
  },
  {
    "english": "debug",
    "russian": "найти и исправить ошибку",
    "meaning": "Разобраться, почему что-то не работает, и устранить проблему.",
    "example": "Debug the code.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Найдите и исправьте ошибку в коде."
  },
  {
    "english": "debugging",
    "russian": "отладка",
    "meaning": "Отладка — поиск и исправление ошибок в программе.",
    "example": "Debugging took most of the afternoon.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Отладка — поиск и исправление ошибок в программе."
  },
  {
    "english": "deep learning",
    "russian": "глубокое обучение",
    "meaning": "Глубокое обучение — сложный способ обучения ИИ на больших объёмах данных.",
    "example": "Deep learning powers modern image recognition.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Глубокое обучение — сложный способ обучения ИИ на больших объёмах данных."
  },
  {
    "english": "delete",
    "russian": "удалить",
    "meaning": "Убрать навсегда — чат, файл или запись.",
    "example": "Delete this conversation.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Удалите этот разговор."
  },
  {
    "english": "Dependabot",
    "russian": "бот обновлений",
    "meaning": "Робот GitHub, который предупреждает об устаревших и небезопасных библиотеках.",
    "example": "Dependabot opened a security update.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Робот GitHub, который предупреждает об устаревших и небезопасных библиотеках."
  },
  {
    "english": "deploy",
    "russian": "запустить, опубликовать",
    "meaning": "Выложить готовый проект в интернет, чтобы им могли пользоваться другие.",
    "example": "Deploy the website.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Опубликуйте сайт в интернете."
  },
  {
    "english": "deployment",
    "russian": "развертывание",
    "meaning": "Развёртывание — выкладка готовой программы или сайта, чтобы им можно было пользоваться.",
    "example": "Deployment finished without errors.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Deployment finished without errors — по-русски: «развертывание»."
  },
  {
    "english": "design",
    "russian": "дизайн",
    "meaning": "Дизайн — внешний вид и удобство использования интерфейса.",
    "example": "We improved the design of the app.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Дизайн — внешний вид и удобство использования интерфейса."
  },
  {
    "english": "desktop",
    "russian": "настольный компьютер",
    "meaning": "Настольный — для обычного компьютера или ноутбука.",
    "example": "The desktop version has more features.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Настольный — для обычного компьютера или ноутбука."
  },
  {
    "english": "developer",
    "russian": "разработчик",
    "meaning": "Разработчик — человек, который создаёт программы и сайты.",
    "example": "The developer fixed the issue quickly.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Разработчик — человек, который создаёт программы и сайты."
  },
  {
    "english": "device",
    "russian": "устройство",
    "meaning": "Устройство — компьютер, телефон, планшет или другое оборудование.",
    "example": "This device is not supported.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Устройство — компьютер, телефон, планшет или другое оборудование."
  },
  {
    "english": "diff",
    "russian": "сравнение изменений",
    "meaning": "Показ разницы: что было в файле и что стало после правки — старое и новое рядом.",
    "example": "Review the diff before you apply.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Просмотрите изменения перед применением."
  },
  {
    "english": "Discussions",
    "russian": "обсуждения",
    "meaning": "Раздел для вопросов и разговоров вокруг проекта, не привязанный к коду.",
    "example": "Ask in Discussions if you need help.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Раздел для вопросов и разговоров вокруг проекта, не привязанный к коду."
  },
  {
    "english": "Docker",
    "russian": "Docker",
    "meaning": "Популярная программа для запуска приложений в контейнерах.",
    "example": "We use Docker to deploy the service.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Популярная программа для запуска приложений в контейнерах."
  },
  {
    "english": "domain",
    "russian": "домен",
    "meaning": "Домен — имя сайта, например google.com.",
    "example": "We bought a new domain name.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Домен — имя сайта, например google."
  },
  {
    "english": "download",
    "russian": "скачать",
    "meaning": "Сохранить файл с сайта на свой компьютер.",
    "example": "Download the report.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Скачайте отчёт."
  },
  {
    "english": "draft",
    "russian": "черновик",
    "meaning": "Незавершённая версия — видна вам, но ещё не готова к публикации.",
    "example": "Save the pull request as a draft.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Сохраните черновик."
  },
  {
    "english": "dropdown",
    "russian": "выпадающий список",
    "meaning": "Меню, которое открывается при нажатии и показывает варианты на выбор.",
    "example": "Select a model from the dropdown.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Выберите модель из выпадающего списка."
  },
  {
    "english": "edit message",
    "russian": "изменить сообщение",
    "meaning": "Поправить свой вопрос и получить новый ответ с учётом правки.",
    "example": "Edit message and try a clearer prompt.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Поправить свой вопрос и получить новый ответ с учётом правки."
  },
  {
    "english": "email",
    "russian": "электронная почта",
    "meaning": "Электронная почта — письма через интернет.",
    "example": "Check your email for the confirmation.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверьте электронная почта."
  },
  {
    "english": "embedding",
    "russian": "числовое представление слова",
    "meaning": "Способ представить слово или фразу в виде чисел, чтобы ИИ мог их сравнивать и искать похожие.",
    "example": "The embedding captures the meaning of a word.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Способ представить слово или фразу в виде чисел, чтобы ИИ мог их сравнивать и искать похожие."
  },
  {
    "english": "encryption",
    "russian": "шифрование",
    "meaning": "Шифрование — превращение данных в нечитаемый вид, чтобы их нельзя было украсть.",
    "example": "Encryption protects your messages.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Encryption protects your messages — по-русски: «шифрование»."
  },
  {
    "english": "endpoint",
    "russian": "точка входа",
    "meaning": "Конкретный адрес в системе, куда отправляется запрос — как номер окошка в банке.",
    "example": "Call the chat endpoint.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Отправьте запрос на точку входа чата."
  },
  {
    "english": "engineer",
    "russian": "инженер",
    "meaning": "Инженер — специалист, который проектирует и строит технические системы.",
    "example": "The engineer designed the system.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Инженер — специалист, который проектирует и строит технические системы."
  },
  {
    "english": "environment",
    "russian": "среда",
    "meaning": "Среда — условия, в которых работает программа: тестовая или рабочая.",
    "example": "This environment is for testing only.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Среда — условия, в которых работает программа: тестовая или рабочая."
  },
  {
    "english": "error",
    "russian": "ошибка",
    "meaning": "Ошибка — сообщение о том, что что-то пошло не так.",
    "example": "An error occurred. Please try again.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Ошибка — сообщение о том, что что-то пошло не так."
  },
  {
    "english": "exception",
    "russian": "исключение",
    "meaning": "Сбой в программе — неожиданная ситуация, которую код не смог обработать.",
    "example": "The program threw an exception.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сбой в программе — неожиданная ситуация, которую код не смог обработать."
  },
  {
    "english": "Explore",
    "russian": "обзор, каталог",
    "meaning": "Раздел, где можно найти готовые боты и инструменты.",
    "example": "Go to Explore to find useful GPTs.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Перейдите в обзор."
  },
  {
    "english": "extension",
    "russian": "расширение",
    "meaning": "Дополнение к программе — добавляет новые функции, как приложения на телефоне.",
    "example": "Install an extension from the marketplace.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Установите расширение."
  },
  {
    "english": "feature",
    "russian": "признак, функция",
    "meaning": "Признак — отдельная характеристика в данных, по которой ИИ делает вывод.",
    "example": "Each feature describes one property of the data.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Признак — отдельная характеристика в данных, по которой ИИ делает вывод."
  },
  {
    "english": "feature request",
    "russian": "запрос на функцию",
    "meaning": "Пожелание пользователя добавить новую функцию в продукт.",
    "example": "Send us your feature request.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Пожелание пользователя добавить новую функцию в продукт."
  },
  {
    "english": "feedback",
    "russian": "обратная связь",
    "meaning": "Обратная связь — отзывы и замечания от пользователей.",
    "example": "We appreciate your feedback.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "We appreciate your feedback — по-русски: «обратная связь»."
  },
  {
    "english": "fetch",
    "russian": "проверить обновления",
    "meaning": "Узнать, есть ли новые изменения на сервере, без слияния с вашим кодом.",
    "example": "Fetch from origin to see what's new.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Узнать, есть ли новые изменения на сервере, без слияния с вашим кодом."
  },
  {
    "english": "field",
    "russian": "поле",
    "meaning": "Поле — место, куда можно ввести текст или выбрать значение.",
    "example": "This field is required.",
    "tags": [
      "IT"
    ],
    "exampleRu": "This field is required — по-русски: «поле»."
  },
  {
    "english": "file",
    "russian": "файл",
    "meaning": "Файл — отдельный документ, картинка или другой объект на компьютере.",
    "example": "Save the file to your computer.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сохраните файл."
  },
  {
    "english": "filter",
    "russian": "фильтр",
    "meaning": "Показать только то, что подходит под условие — например, только картинки или только за последнюю неделю.",
    "example": "Filter by date.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Отфильтруйте по дате."
  },
  {
    "english": "fine-tune",
    "russian": "дообучить под задачу",
    "meaning": "Дополнительно настроить ИИ под конкретную тему или стиль — как личный помощник для вашей работы.",
    "example": "Fine-tune the model on your data.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Дообучите модель на своих данных."
  },
  {
    "english": "fine-tuning",
    "russian": "дообучение модели",
    "meaning": "Дообучение — дополнительная настройка готовой модели под вашу конкретную задачу.",
    "example": "Fine-tuning adapts the model to your needs.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Дообучение — дополнительная настройка готовой модели под вашу конкретную задачу."
  },
  {
    "english": "folder",
    "russian": "папка",
    "meaning": "Папка — место для хранения файлов, как папка в шкафу.",
    "example": "Create a new folder for your photos.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Создайте папка."
  },
  {
    "english": "fork",
    "russian": "сделать копию проекта",
    "meaning": "Создать свою копию чужого проекта на GitHub — можно менять отдельно.",
    "example": "Fork the repo and make your changes.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Сделайте форк репозитория и внесите правки."
  },
  {
    "english": "form",
    "russian": "форма",
    "meaning": "Форма — блок с полями для ввода данных, например при регистрации.",
    "example": "Fill out the form and submit it.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Форма — блок с полями для ввода данных, например при регистрации."
  },
  {
    "english": "format",
    "russian": "отформатировать",
    "meaning": "Привести код к аккуратному виду: отступы, переносы строк — автоматически.",
    "example": "Format the document before saving.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Привести код к аккуратному виду: отступы, переносы строк — автоматически."
  },
  {
    "english": "framework",
    "russian": "готовый каркас для разработки",
    "meaning": "Готовый каркас для разработки — набор инструментов, ускоряющих создание программы.",
    "example": "This framework speeds up development.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Готовый каркас для разработки — набор инструментов, ускоряющих создание программы."
  },
  {
    "english": "frontend",
    "russian": "внешняя часть сайта",
    "meaning": "Внешняя часть сайта — то, что видит и нажимает пользователь.",
    "example": "The frontend shows buttons and menus.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Внешняя часть сайта — то, что видит и нажимает пользователь."
  },
  {
    "english": "full-stack",
    "russian": "полный цикл разработки",
    "meaning": "Полный цикл — когда человек умеет и внешнюю, и внутреннюю часть разработки.",
    "example": "She works as a full-stack developer.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Полный цикл — когда человек умеет и внешнюю, и внутреннюю часть разработки."
  },
  {
    "english": "generate",
    "russian": "создать, сгенерировать",
    "meaning": "Кнопка или команда «сделай заново» — ИИ придумает новый текст, картинку или ответ.",
    "example": "Click Generate to create a new image.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Нажмите Generate, чтобы создать новую картинку."
  },
  {
    "english": "Gist",
    "russian": "заметка с кодом",
    "meaning": "Небольшой фрагмент кода или текста на GitHub — удобно быстро поделиться.",
    "example": "Share the snippet as a Gist.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Небольшой фрагмент кода или текста на GitHub — удобно быстро поделиться."
  },
  {
    "english": "Git",
    "russian": "система контроля версий Git",
    "meaning": "Система контроля версий — программа, которая сохраняет все версии вашего кода.",
    "example": "Use Git to track your changes.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Используйте «система контроля версий Git»."
  },
  {
    "english": "GitHub",
    "russian": "платформа для кода GitHub",
    "meaning": "Популярный сайт для хранения кода и совместной работы над проектами.",
    "example": "The project is hosted on GitHub.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Популярный сайт для хранения кода и совместной работы над проектами."
  },
  {
    "english": "GPTs",
    "russian": "готовые боты",
    "meaning": "Каталог чат-ботов от других пользователей — на разные темы и задачи.",
    "example": "Explore GPTs in the store.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Откройте каталог и найдите нужное."
  },
  {
    "english": "hallucination",
    "russian": "выдуманный ответ",
    "meaning": "Когда ИИ уверенно пишет то, чего на самом деле нет — выдумывает факты или ссылки.",
    "example": "Watch out for hallucinations.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Остерегайтесь выдуманных ответов."
  },
  {
    "english": "history",
    "russian": "история изменений",
    "meaning": "Список всех прошлых версий и правок файла или проекта.",
    "example": "Check the file history for older versions.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Проверьте история изменений."
  },
  {
    "english": "Hooks",
    "russian": "автоматические действия",
    "meaning": "Правила, которые срабатывают сами при определённых событиях в редакторе.",
    "example": "Set up hooks to run checks on save.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Правила, которые срабатывают сами при определённых событиях в редакторе."
  },
  {
    "english": "hosting",
    "russian": "хостинг",
    "meaning": "Хостинг — услуга размещения сайта или программы на сервере в интернете.",
    "example": "We bought hosting for our website.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Хостинг — услуга размещения сайта или программы на сервере в интернете."
  },
  {
    "english": "HTML",
    "russian": "язык разметки HTML",
    "meaning": "Язык разметки — описывает структуру веб-страницы: заголовки, кнопки, текст.",
    "example": "HTML defines the structure of a page.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Язык разметки — описывает структуру веб-страницы: заголовки, кнопки, текст."
  },
  {
    "english": "indexing",
    "russian": "индексация проекта",
    "meaning": "Cursor изучает файлы проекта, чтобы быстрее находить нужный код и отвечать точнее.",
    "example": "Indexing helps the AI understand your project.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Cursor изучает файлы проекта, чтобы быстрее находить нужный код и отвечать точнее."
  },
  {
    "english": "inference",
    "russian": "работа ИИ",
    "meaning": "Момент, когда модель думает и выдаёт ответ. Часто говорят о скорости или стоимости этого процесса.",
    "example": "Inference is running.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "ИИ сейчас обрабатывает запрос."
  },
  {
    "english": "inline edit",
    "russian": "правка в строке",
    "meaning": "Быстрое изменение кода прямо в месте, где стоит курсор, с помощью ИИ.",
    "example": "Use inline edit to fix this function.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Используйте «правка в строке»."
  },
  {
    "english": "input",
    "russian": "входные данные",
    "meaning": "Входные данные — то, что вы подаёте на вход программе или ИИ.",
    "example": "Type your input in the text box.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Входные данные — то, что вы подаёте на вход программе или ИИ."
  },
  {
    "english": "Insights",
    "russian": "аналитика репозитория",
    "meaning": "Статистика проекта: активность, участники, популярность кода.",
    "example": "Check Insights for contributor activity.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Проверьте аналитика репозитория."
  },
  {
    "english": "instructions",
    "russian": "инструкции для бота",
    "meaning": "Текст, который задаёт поведение Custom GPT — как он должен отвечать.",
    "example": "Write clear instructions for your GPT.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Напишите инструкции для бота."
  },
  {
    "english": "integration",
    "russian": "подключение к другому сервису",
    "meaning": "Связать одну программу с другой — например, ИИ-чат с почтой или таблицами.",
    "example": "Set up an integration.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Настройте подключение к другому сервису."
  },
  {
    "english": "interface",
    "russian": "интерфейс",
    "meaning": "Интерфейс — всё, что вы видите и нажимаете на экране: кнопки, меню, поля.",
    "example": "The interface is simple and clear.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Интерфейс — всё, что вы видите и нажимаете на экране: кнопки, меню, поля."
  },
  {
    "english": "internet",
    "russian": "интернет",
    "meaning": "Интернет — всемирная сеть, через которую работают сайты и онлайн-сервисы.",
    "example": "You need internet to use this service.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Интернет — всемирная сеть, через которую работают сайты и онлайн-сервисы."
  },
  {
    "english": "issue",
    "russian": "обращение, задача",
    "meaning": "Запись о проблеме или идее в проекте — баг, вопрос или предложение.",
    "example": "Open an issue to report the bug.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Откройте обращение."
  },
  {
    "english": "iterate",
    "russian": "повторять, дорабатывать",
    "meaning": "Снова и снова улучшать результат — менять запрос и смотреть новый ответ.",
    "example": "Let's iterate on this idea.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Давайте доработаем эту идею."
  },
  {
    "english": "JavaScript",
    "russian": "JavaScript",
    "meaning": "Язык программирования для интерактивности на сайтах — анимации, кнопки, формы.",
    "example": "JavaScript makes the page interactive.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Язык программирования для интерактивности на сайтах — анимации, кнопки, формы."
  },
  {
    "english": "JSON",
    "russian": "формат данных JSON",
    "meaning": "Популярный текстовый формат для обмена данными между программами.",
    "example": "The data is saved in JSON format.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Популярный текстовый формат для обмена данными между программами."
  },
  {
    "english": "knowledge",
    "russian": "база знаний",
    "meaning": "Файлы, которые вы загружаете в бота — он отвечает на их основе.",
    "example": "Upload PDFs to the knowledge base.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Загрузите файл на сайт."
  },
  {
    "english": "label",
    "russian": "метка",
    "meaning": "Метка — правильный ответ или категория для примера при обучении.",
    "example": "Add a label to each training example.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Добавьте метка."
  },
  {
    "english": "landing page",
    "russian": "лендинг",
    "meaning": "Посадочная страница — простая страница с одной главной целью, например регистрация.",
    "example": "The landing page explains our product.",
    "tags": [
      "маркетинг"
    ],
    "exampleRu": "Посадочная страница — простая страница с одной главной целью, например регистрация."
  },
  {
    "english": "language model",
    "russian": "языковая модель",
    "meaning": "Языковая модель — ИИ, обученный понимать и создавать текст на человеческом языке.",
    "example": "The language model understands your question.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Языковая модель — ИИ, обученный понимать и создавать текст на человеческом языке."
  },
  {
    "english": "large language model",
    "russian": "большая языковая модель",
    "meaning": "Большая языковая модель — мощная версия ИИ для текста, например ChatGPT или Claude.",
    "example": "A large language model can write long texts.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Большая языковая модель — мощная версия ИИ для текста, например ChatGPT или Claude."
  },
  {
    "english": "layout",
    "russian": "макет",
    "meaning": "Расположение элементов — как разложены кнопки, текст и картинки на странице.",
    "example": "The layout looks good on mobile.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Расположение элементов — как разложены кнопки, текст и картинки на странице."
  },
  {
    "english": "library",
    "russian": "библиотека",
    "meaning": "Библиотека — набор готовых функций, которые можно подключить к своей программе.",
    "example": "Import the library into your project.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Библиотека — набор готовых функций, которые можно подключить к своей программе."
  },
  {
    "english": "license",
    "russian": "лицензия",
    "meaning": "Правила, по которым можно использовать чужой код — можно ли копировать и менять.",
    "example": "This project is under the MIT license.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Правила, по которым можно использовать чужой код — можно ли копировать и менять."
  },
  {
    "english": "link",
    "russian": "ссылка",
    "meaning": "Ссылка — адрес, по которому можно перейти на другую страницу или файл.",
    "example": "Click the link to open the page.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Нажмите «ссылка»."
  },
  {
    "english": "lint",
    "russian": "проверка кода",
    "meaning": "Автоматическая проверка кода на ошибки и плохие привычки.",
    "example": "Lint found three warnings in this file.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Автоматическая проверка кода на ошибки и плохие привычки."
  },
  {
    "english": "LLM",
    "russian": "большая языковая модель",
    "meaning": "Сокращение от «большая языковая модель» — умный текстовый ИИ.",
    "example": "This LLM answers in natural language.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Сокращение от «большая языковая модель» — умный текстовый ИИ."
  },
  {
    "english": "local",
    "russian": "локальный",
    "meaning": "Локальный — на вашем компьютере, а не в интернете.",
    "example": "Files are stored on your local computer.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Локальный — на вашем компьютере, а не в интернете."
  },
  {
    "english": "log",
    "russian": "журнал событий",
    "meaning": "Журнал событий — запись того, что происходило в программе, для поиска проблем.",
    "example": "Check the log for more details.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверьте журнал событий."
  },
  {
    "english": "log out",
    "russian": "выйти",
    "meaning": "Завершить сеанс работы — чтобы никто другой не мог зайти под вашим именем.",
    "example": "Log out when you're done.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Выйдите, когда закончите работу."
  },
  {
    "english": "loss",
    "russian": "ошибка, функция потерь",
    "meaning": "Показатель ошибки при обучении — чем меньше, тем лучше учится модель.",
    "example": "The loss decreased after each training round.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Показатель ошибки при обучении — чем меньше, тем лучше учится модель."
  },
  {
    "english": "machine learning",
    "russian": "машинное обучение",
    "meaning": "Машинное обучение — когда программа учится на примерах, а не по жёстким правилам.",
    "example": "Machine learning improves with more data.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Машинное обучение — когда программа учится на примерах, а не по жёстким правилам."
  },
  {
    "english": "Marketplace",
    "russian": "магазин расширений",
    "meaning": "Каталог приложений и дополнений для GitHub.",
    "example": "Find tools in the GitHub Marketplace.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Найдите в магазин расширений."
  },
  {
    "english": "Max mode",
    "russian": "максимальный режим",
    "meaning": "Режим с более мощной моделью и большим объёмом памяти для сложных задач.",
    "example": "Enable Max mode for this large refactor.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Включите «максимальный режим»."
  },
  {
    "english": "MCP",
    "russian": "подключение внешних сервисов",
    "meaning": "Способ подключить к Cursor другие программы и данные — почту, базы, API.",
    "example": "Configure MCP servers in settings.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Способ подключить к Cursor другие программы и данные — почту, базы, API."
  },
  {
    "english": "Memories",
    "russian": "память ИИ",
    "meaning": "Cursor запоминает ваши предпочтения между сессиями — как личные заметки для ИИ.",
    "example": "Memories help the AI remember your style.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Cursor запоминает ваши предпочтения между сессиями — как личные заметки для ИИ."
  },
  {
    "english": "memory",
    "russian": "память чата",
    "meaning": "ChatGPT запоминает факты о вас между разговорами — имя, предпочтения.",
    "example": "Memory helps ChatGPT remember your job.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "ChatGPT запоминает факты о вас между разговорами — имя, предпочтения."
  },
  {
    "english": "mention",
    "russian": "упомянуть",
    "meaning": "Сослаться на файл или папку в чате через @ — чтобы ИИ их увидел.",
    "example": "Mention the config file with @.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Сослаться на файл или папку в чате через @ — чтобы ИИ их увидел."
  },
  {
    "english": "menu",
    "russian": "меню",
    "meaning": "Меню — список разделов или действий на сайте.",
    "example": "Open the menu in the top corner.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Откройте «меню»."
  },
  {
    "english": "merge",
    "russian": "объединить",
    "meaning": "Слить две ветки правок в одну общую версию файлов.",
    "example": "Merge the pull request.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Объедините запрос на слияние."
  },
  {
    "english": "merge pull request",
    "russian": "влить изменения",
    "meaning": "Окончательно добавить проверенные правки в основную ветку проекта.",
    "example": "Merge pull request when checks pass.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Объедините изменения."
  },
  {
    "english": "message",
    "russian": "сообщение",
    "meaning": "Сообщение — текст, который вы отправляете или получаете в чате или почте.",
    "example": "You have a new message.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сообщение — текст, который вы отправляете или получаете в чате или почте."
  },
  {
    "english": "metrics",
    "russian": "метрики",
    "meaning": "Показатели — числа, по которым судят об успехе: посещения, продажи, скорость.",
    "example": "Track the key metrics every week.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Показатели — числа, по которым судят об успехе: посещения, продажи, скорость."
  },
  {
    "english": "mobile",
    "russian": "мобильный",
    "meaning": "Мобильный — для телефона или планшета.",
    "example": "Use the mobile app on the go.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Используйте «мобильный»."
  },
  {
    "english": "model",
    "russian": "модель ИИ",
    "meaning": "Конкретная версия искусственного интеллекта — например, GPT-4 или Claude. Разные модели по-разному отвечают.",
    "example": "Choose a model.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Выберите модель ИИ."
  },
  {
    "english": "MVP",
    "russian": "минимально жизнеспособный продукт",
    "meaning": "Минимальная версия продукта — только самые нужные функции для первого запуска.",
    "example": "We launched an MVP in three months.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Минимальная версия продукта — только самые нужные функции для первого запуска."
  },
  {
    "english": "network",
    "russian": "сеть",
    "meaning": "Сеть — соединение между компьютерами для обмена данными.",
    "example": "The network connection is unstable.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сеть — соединение между компьютерами для обмена данными."
  },
  {
    "english": "neural network",
    "russian": "нейронная сеть",
    "meaning": "Нейронная сеть — система внутри ИИ, которая обрабатывает информацию слоями, похожими на работу мозга.",
    "example": "A neural network learns from examples.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Нейронная сеть — система внутри ИИ, которая обрабатывает информацию слоями, похожими на работу мозга."
  },
  {
    "english": "new chat",
    "russian": "новый чат",
    "meaning": "Начать разговор с ИИ с чистого листа, без старой переписки.",
    "example": "Start a new chat for this task.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Начните: новый чат."
  },
  {
    "english": "Notepad",
    "russian": "блокнот",
    "meaning": "В Cursor — место для заметок и черновиков, которые ИИ может использовать.",
    "example": "Save ideas in a Notepad for later.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Сохраните блокнот."
  },
  {
    "english": "notification",
    "russian": "уведомление",
    "meaning": "Сообщение от сайта или программы — например, что ответ готов или закончилась подписка.",
    "example": "You have a new notification.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "У вас новое уведомление."
  },
  {
    "english": "onboarding",
    "russian": "знакомство с сервисом",
    "meaning": "Первые шаги для нового пользователя — подсказки, как пользоваться программой.",
    "example": "Complete the onboarding.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Пройдите знакомство с сервисом."
  },
  {
    "english": "open source",
    "russian": "открытый код",
    "meaning": "Проект, исходный код которого доступен всем — можно смотреть и использовать.",
    "example": "This is an open source project.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Проект, исходный код которого доступен всем — можно смотреть и использовать."
  },
  {
    "english": "optimization",
    "russian": "оптимизация",
    "meaning": "Оптимизация — улучшение скорости и эффективности работы.",
    "example": "Optimization reduced loading time.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Optimization reduced loading time — по-русски: «оптимизация»."
  },
  {
    "english": "output",
    "russian": "выходные данные",
    "meaning": "Выходные данные — то, что программа или ИИ выдаёт в ответ.",
    "example": "Check the output before you share it.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверьте выходные данные."
  },
  {
    "english": "Pages",
    "russian": "сайт из репозитория",
    "meaning": "Бесплатный хостинг простого сайта прямо из файлов на GitHub.",
    "example": "Publish your site with GitHub Pages.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Бесплатный хостинг простого сайта прямо из файлов на GitHub."
  },
  {
    "english": "password",
    "russian": "пароль",
    "meaning": "Пароль — секретное слово для входа в аккаунт.",
    "example": "Choose a strong password.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Выберите пароль."
  },
  {
    "english": "paste",
    "russian": "вставить",
    "meaning": "Вставить ранее скопированный текст в поле ввода.",
    "example": "Paste your text here.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Вставьте текст сюда."
  },
  {
    "english": "performance",
    "russian": "производительность",
    "meaning": "Производительность — насколько быстро и плавно работает программа.",
    "example": "Performance improved after the update.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Производительность — насколько быстро и плавно работает программа."
  },
  {
    "english": "permission",
    "russian": "разрешение, права доступа",
    "meaning": "Разрешение — право программы или человека на определённые действия.",
    "example": "The app asks for camera permission.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Разрешение — право программы или человека на определённые действия."
  },
  {
    "english": "pin chat",
    "russian": "закрепить чат",
    "meaning": "Держать важный разговор вверху списка.",
    "example": "Pin chat so you can find it quickly.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Закрепите чат вверху списка."
  },
  {
    "english": "pipeline",
    "russian": "цепочка, цепочка обработки",
    "meaning": "Цепочка шагов обработки — данные проходят через несколько этапов подряд.",
    "example": "The pipeline processes data step by step.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Цепочка шагов обработки — данные проходят через несколько этапов подряд."
  },
  {
    "english": "Plan mode",
    "russian": "режим плана",
    "meaning": "ИИ сначала составляет план действий, вы его смотрите, потом он выполняет.",
    "example": "Plan mode shows steps before any changes.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "ИИ сначала составляет план действий, вы его смотрите, потом он выполняет."
  },
  {
    "english": "platform",
    "russian": "платформа",
    "meaning": "Платформа — основа, на которой работают другие программы или сервисы.",
    "example": "The platform supports many integrations.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Платформа — основа, на которой работают другие программы или сервисы."
  },
  {
    "english": "Playground",
    "russian": "площадка для тестов",
    "meaning": "Раздел для разработчиков — пробовать модели и настройки вручную.",
    "example": "Test the API in the Playground.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Раздел для разработчиков — пробовать модели и настройки вручную."
  },
  {
    "english": "plugins",
    "russian": "плагины",
    "meaning": "Дополнения, которые подключают ChatGPT к другим сервисам.",
    "example": "Enable plugins to book a table.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Включите «плагины»."
  },
  {
    "english": "precision",
    "russian": "точность классификации",
    "meaning": "Точность попадания — из всех ответов «да» сколько действительно верных.",
    "example": "High precision means fewer false alarms.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Точность попадания — из всех ответов «да» сколько действительно верных."
  },
  {
    "english": "prediction",
    "russian": "прогноз, предсказание",
    "meaning": "Прогноз — то, что ИИ предсказывает на основе имеющихся данных.",
    "example": "The prediction was surprisingly accurate.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Прогноз — то, что ИИ предсказывает на основе имеющихся данных."
  },
  {
    "english": "privacy",
    "russian": "конфиденциальность",
    "meaning": "Конфиденциальность — защита ваших личных данных от посторонних.",
    "example": "Read our privacy policy.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Read our privacy policy — по-русски: «конфиденциальность»."
  },
  {
    "english": "Privacy mode",
    "russian": "режим конфиденциальности",
    "meaning": "Ваш код не сохраняется на серверах — больше защиты данных.",
    "example": "Turn on Privacy mode for sensitive projects.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Включите «режим конфиденциальности»."
  },
  {
    "english": "product manager",
    "russian": "продуктовый менеджер",
    "meaning": "Менеджер продукта — человек, который решает, какие функции нужны пользователям.",
    "example": "The product manager planned the release.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Менеджер продукта — человек, который решает, какие функции нужны пользователям."
  },
  {
    "english": "profile",
    "russian": "профиль",
    "meaning": "Профиль — страница с вашими данными: имя, фото, настройки.",
    "example": "Update your profile photo.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Update your profile photo — по-русски: «профиль»."
  },
  {
    "english": "programmer",
    "russian": "программист",
    "meaning": "Программист — специалист, пишущий код.",
    "example": "A programmer writes instructions for computers.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Программист — специалист, пишущий код."
  },
  {
    "english": "project",
    "russian": "проект",
    "meaning": "Проект — работа с целью и сроками, например создание нового сайта.",
    "example": "The project starts next Monday.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Проект — работа с целью и сроками, например создание нового сайта."
  },
  {
    "english": "prompt",
    "russian": "запрос, подсказка",
    "meaning": "Текст, который вы пишете ИИ, чтобы он понял, что вам нужно. Чем яснее запрос — тем лучше ответ.",
    "example": "Write a clear prompt.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Напишите понятный запрос к ИИ."
  },
  {
    "english": "prompt engineering",
    "russian": "составление запросов к ИИ",
    "meaning": "Умение правильно формулировать запросы к ИИ, чтобы получать лучшие ответы.",
    "example": "Good prompt engineering gives better results.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Умение правильно формулировать запросы к ИИ, чтобы получать лучшие ответы."
  },
  {
    "english": "prototype",
    "russian": "прототип",
    "meaning": "Прототип — черновая версия интерфейса для проверки идеи до полной разработки.",
    "example": "We built a prototype in one week.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Прототип — черновая версия интерфейса для проверки идеи до полной разработки."
  },
  {
    "english": "pull",
    "russian": "получить обновления",
    "meaning": "Скачать последние изменения с сервера в свой проект.",
    "example": "Pull the latest changes from main.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Получите последние обновления."
  },
  {
    "english": "pull request",
    "russian": "запрос на слияние",
    "meaning": "Запрос на слияние — предложение добавить свои правки в общий проект.",
    "example": "Open a pull request for review.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Откройте запрос на слияние для проверки."
  },
  {
    "english": "push",
    "russian": "отправить на сервер",
    "meaning": "Отправить свои сохранённые изменения на GitHub или другой сервер.",
    "example": "Push your commits to GitHub.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Отправьте изменения на сервер."
  },
  {
    "english": "Python",
    "russian": "Python",
    "meaning": "Популярный язык программирования, часто используется в ИИ и автоматизации.",
    "example": "Python is popular for AI projects.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Популярный язык программирования, часто используется в ИИ и автоматизации."
  },
  {
    "english": "query",
    "russian": "запрос",
    "meaning": "Запрос — просьба к системе найти или получить нужную информацию.",
    "example": "Enter your query and press Search.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Запрос — просьба к системе найти или получить нужную информацию."
  },
  {
    "english": "rate limit",
    "russian": "лимит запросов",
    "meaning": "Ограничение, сколько сообщений можно отправить за определённое время.",
    "example": "You hit the rate limit. Wait a moment.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Ограничение, сколько сообщений можно отправить за определённое время."
  },
  {
    "english": "README",
    "russian": "описание проекта",
    "meaning": "Главный текст на странице проекта — что это, как установить и пользоваться.",
    "example": "Read the README before you start.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Главный текст на странице проекта — что это, как установить и пользоваться."
  },
  {
    "english": "rebase",
    "russian": "перестроить историю",
    "meaning": "Аккуратно наложить ваши изменения поверх свежей версии проекта.",
    "example": "Rebase your branch onto main.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Аккуратно наложить ваши изменения поверх свежей версии проекта."
  },
  {
    "english": "recall",
    "russian": "полнота",
    "meaning": "Полнота — насколько хорошо ИИ находит все нужные случаи.",
    "example": "Recall shows how many cases we found.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Полнота — насколько хорошо ИИ находит все нужные случаи."
  },
  {
    "english": "redo",
    "russian": "повторить",
    "meaning": "Вернуть отменённое действие — сделать «шаг вперёд» снова.",
    "example": "Redo the change you just undid.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Вернуть отменённое действие — сделать «шаг вперёд» снова."
  },
  {
    "english": "refactor",
    "russian": "улучшить структуру",
    "meaning": "Переписать код так, чтобы он стал понятнее и проще, не меняя суть работы.",
    "example": "Refactor this module.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Улучшите структуру этого модуля."
  },
  {
    "english": "refine",
    "russian": "улучшить, доработать",
    "meaning": "Попросить ИИ сделать ответ точнее, короче или понятнее.",
    "example": "Refine the draft.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Улучшите черновик."
  },
  {
    "english": "regenerate",
    "russian": "переделать",
    "meaning": "Попросить ИИ сделать ответ ещё раз, если первый вариант не понравился.",
    "example": "Regenerate the response.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Переделайте ответ, если он не подошёл."
  },
  {
    "english": "regression",
    "russian": "регрессия",
    "meaning": "Предсказание числа — например, цены или температуры по известным данным.",
    "example": "Regression predicts the price tomorrow.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Предсказание числа — например, цены или температуры по известным данным."
  },
  {
    "english": "Reject",
    "russian": "отклонить",
    "meaning": "Отказаться от предложенного ИИ изменения — не вносить его.",
    "example": "Reject this change and try again.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Отклоните это изменение и попробуйте снова."
  },
  {
    "english": "release",
    "russian": "релиз, выпуск",
    "meaning": "Выпуск — публикация новой версии продукта для пользователей.",
    "example": "The new release is available now.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Выпуск — публикация новой версии продукта для пользователей."
  },
  {
    "english": "remote",
    "russian": "удаленный",
    "meaning": "Удалённый — находится в другом месте, доступен через интернет.",
    "example": "Remote access is enabled.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Remote access is enabled — по-русски: «удаленный»."
  },
  {
    "english": "rename chat",
    "russian": "переименовать чат",
    "meaning": "Дать разговору понятное название вместо «Новый чат».",
    "example": "Rename chat to Project Ideas.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Переименуйте чат."
  },
  {
    "english": "report",
    "russian": "отчет",
    "meaning": "Отчёт — сводка данных в удобном виде для просмотра или печати.",
    "example": "Generate a report for the manager.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Отчёт — сводка данных в удобном виде для просмотра или печати."
  },
  {
    "english": "repository",
    "russian": "хранилище кода",
    "meaning": "Хранилище кода — место, где лежат все файлы проекта и история изменений.",
    "example": "Push your code to the repository.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Отправьте изменения на сервер."
  },
  {
    "english": "request",
    "russian": "запрос",
    "meaning": "Запрос — обращение от вашего браузера или программы к серверу.",
    "example": "Your request has been sent.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Запрос — обращение от вашего браузера или программы к серверу."
  },
  {
    "english": "request changes",
    "russian": "запросить правки",
    "meaning": "При проверке кода попросить автора что-то исправить перед слиянием.",
    "example": "Request changes before approval.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Request changes before approval — по-русски: «запросить правки»."
  },
  {
    "english": "requirement",
    "russian": "требование",
    "meaning": "Требование — чёткое описание того, что должна уметь программа.",
    "example": "Read the requirement carefully.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Read the requirement carefully — по-русски: «требование»."
  },
  {
    "english": "resolve",
    "russian": "разрешить, устранить",
    "meaning": "Исправить конфликт или проблему — выбрать правильный вариант.",
    "example": "Resolve the conflict and save the file.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Исправить конфликт или проблему — выбрать правильный вариант."
  },
  {
    "english": "response",
    "russian": "ответ",
    "meaning": "Ответ — то, что сервер или ИИ возвращает на ваш запрос.",
    "example": "The response arrived in two seconds.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Ответ — то, что сервер или ИИ возвращает на ваш запрос."
  },
  {
    "english": "responsive",
    "russian": "адаптивный",
    "meaning": "Адаптивный — сайт подстраивается под размер экрана телефона или компьютера.",
    "example": "The site is responsive on all devices.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Адаптивный — сайт подстраивается под размер экрана телефона или компьютера."
  },
  {
    "english": "restore",
    "russian": "восстановление",
    "meaning": "Восстановление — возврат данных из резервной копии.",
    "example": "Restore the file from backup.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Восстановление — возврат данных из резервной копии."
  },
  {
    "english": "review",
    "russian": "проверить код",
    "meaning": "Посмотреть чужие изменения и оставить замечания или одобрение.",
    "example": "Please review my changes.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Please review my changes — по-русски: «проверить код»."
  },
  {
    "english": "review changes",
    "russian": "просмотр изменений",
    "meaning": "Проверить все правки, которые предложил ИИ, перед тем как сохранить.",
    "example": "Review changes before accepting them.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Просмотрите просмотр изменений перед сохранением."
  },
  {
    "english": "roadmap",
    "russian": "дорожная карта",
    "meaning": "План развития — что и в каком порядке будут добавлять в продукт.",
    "example": "The roadmap shows plans for next year.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "План развития — что и в каком порядке будут добавлять в продукт."
  },
  {
    "english": "role",
    "russian": "роль",
    "meaning": "Роль — набор прав пользователя в системе, например «редактор» или «гость».",
    "example": "Your role defines what you can do.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Роль — набор прав пользователя в системе, например «редактор» или «гость»."
  },
  {
    "english": "rollback",
    "russian": "откатить назад",
    "meaning": "Вернуться к предыдущей рабочей версии, если новая что-то сломала.",
    "example": "Rollback the deployment.",
    "tags": [
      "разработка"
    ],
    "exampleRu": "Откатите развёртывание назад."
  },
  {
    "english": "rules",
    "russian": "правила для ИИ",
    "meaning": "Ваши инструкции для ИИ в проекте — как он должен писать код и отвечать.",
    "example": "Add rules to guide the AI assistant.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Добавьте правила для ИИ."
  },
  {
    "english": "scalability",
    "russian": "масштабируемость",
    "meaning": "Масштабируемость — способность системы справляться с ростом нагрузки.",
    "example": "Scalability matters for growing apps.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Масштабируемость — способность системы справляться с ростом нагрузки."
  },
  {
    "english": "screen",
    "russian": "экран",
    "meaning": "Экран — отдельная страница или окно в программе.",
    "example": "The next screen shows your results.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Экран — отдельная страница или окно в программе."
  },
  {
    "english": "scroll",
    "russian": "прокрутить",
    "meaning": "Листать страницу вверх или вниз, чтобы увидеть остальной текст.",
    "example": "Scroll down to read more.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Прокрутите вниз, чтобы прочитать дальше."
  },
  {
    "english": "search",
    "russian": "поиск",
    "meaning": "Найти нужное слово, файл или раздел на сайте.",
    "example": "Search your chats.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Найдите нужный чат."
  },
  {
    "english": "secrets",
    "russian": "секретные ключи",
    "meaning": "Скрытые пароли и токены для автоматизации — не видны в коде.",
    "example": "Store the API token in secrets.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Скрытые пароли и токены для автоматизации — не видны в коде."
  },
  {
    "english": "security",
    "russian": "безопасность",
    "meaning": "Безопасность — защита данных и аккаунтов от взлома и кражи.",
    "example": "Security is our top priority.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Безопасность — защита данных и аккаунтов от взлома и кражи."
  },
  {
    "english": "server",
    "russian": "сервер",
    "meaning": "Сервер — мощный компьютер в интернете, который хранит сайт и обрабатывает запросы.",
    "example": "The server is running smoothly.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сервер — мощный компьютер в интернете, который хранит сайт и обрабатывает запросы."
  },
  {
    "english": "settings",
    "russian": "настройки",
    "meaning": "Раздел, где можно изменить язык, тему оформления, уведомления и другие параметры программы.",
    "example": "Open Settings to change the language.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Откройте настройки, чтобы сменить язык."
  },
  {
    "english": "share",
    "russian": "поделиться",
    "meaning": "Отправить ссылку или результат другому человеку.",
    "example": "Share this chat.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Поделитесь этим чатом."
  },
  {
    "english": "shared link",
    "russian": "ссылка на чат",
    "meaning": "Адрес, по которому другой человек может прочитать ваш разговор.",
    "example": "Create a shared link for the chat.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Создайте ссылка на чат."
  },
  {
    "english": "sidebar",
    "russian": "боковая панель",
    "meaning": "Меню слева или справа на экране — там обычно список чатов, файлов или разделов.",
    "example": "Open the sidebar.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Откройте боковую панель."
  },
  {
    "english": "sign in",
    "russian": "войти",
    "meaning": "Войти в свой аккаунт с помощью логина и пароля или через Google.",
    "example": "Sign in to continue.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Войдите, чтобы продолжить."
  },
  {
    "english": "sign up",
    "russian": "зарегистрироваться",
    "meaning": "Создать новый аккаунт на сайте или в программе.",
    "example": "Sign up for free.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Зарегистрируйтесь бесплатно."
  },
  {
    "english": "Skills",
    "russian": "навыки ИИ",
    "meaning": "Готовые инструкции для ИИ под конкретные задачи — как шаблоны поведения.",
    "example": "Add a skill for writing commit messages.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Добавьте навыки ИИ."
  },
  {
    "english": "software",
    "russian": "программное обеспечение",
    "meaning": "Программное обеспечение — любые программы на компьютере или телефоне.",
    "example": "This software runs on Windows and Mac.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Программное обеспечение — любые программы на компьютере или телефоне."
  },
  {
    "english": "sort",
    "russian": "сортировка",
    "meaning": "Сортировка — упорядочивание списка, например по дате или по имени.",
    "example": "Sort the list by date.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сортировка — упорядочивание списка, например по дате или по имени."
  },
  {
    "english": "specification",
    "russian": "техническое задание",
    "meaning": "Техническое задание — подробное описание того, что нужно сделать.",
    "example": "The specification describes all features.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Техническое задание — подробное описание того, что нужно сделать."
  },
  {
    "english": "spreadsheet",
    "russian": "электронная таблица",
    "meaning": "Электронная таблица — как Excel или Google Таблицы.",
    "example": "Open the spreadsheet and fill in the numbers.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Откройте «электронная таблица»."
  },
  {
    "english": "SQL",
    "russian": "язык запросов к базе данных",
    "meaning": "Язык запросов к базе данных — способ попросить компьютер найти или изменить данные в таблице.",
    "example": "Write an SQL query to find the data.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Напишите язык запросов к базе данных."
  },
  {
    "english": "squash",
    "russian": "объединить в один коммит",
    "meaning": "Сжать несколько мелких сохранений в одно — история становится чище.",
    "example": "Squash the commits before merging.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Сжать несколько мелких сохранений в одно — история становится чище."
  },
  {
    "english": "star",
    "russian": "звезда, отметить",
    "meaning": "Поставить «звёздочку» проекту — как лайк, чтобы не потерять и показать интерес.",
    "example": "Star this repository if you find it useful.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Поставить «звёздочку» проекту — как лайк, чтобы не потерять и показать интерес."
  },
  {
    "english": "stash",
    "russian": "отложить изменения",
    "meaning": "Временно убрать незавершённые правки в сторону, чтобы переключиться на другое.",
    "example": "Stash your changes before switching branches.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Временно убрать незавершённые правки в сторону, чтобы переключиться на другое."
  },
  {
    "english": "status",
    "russian": "статус",
    "meaning": "Статус — текущее состояние: выполнено, в процессе, ошибка.",
    "example": "The status is shown in green.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Статус — текущее состояние: выполнено, в процессе, ошибка."
  },
  {
    "english": "stop generating",
    "russian": "остановить ответ",
    "meaning": "Прервать ИИ посередине — если ответ слишком длинный или не туда.",
    "example": "Click stop generating to cancel.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Нажмите «Остановить», чтобы прервать ответ."
  },
  {
    "english": "subscription",
    "russian": "подписка",
    "meaning": "Платный доступ к сервису на месяц или год. Обычно даёт больше возможностей, чем бесплатная версия.",
    "example": "Manage your subscription.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Управляйте своей подпиской."
  },
  {
    "english": "summarize",
    "russian": "кратко пересказать",
    "meaning": "Попросить ИИ выделить главное из длинного текста в нескольких предложениях.",
    "example": "Summarize this article.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Кратко перескажите эту статью."
  },
  {
    "english": "sync",
    "russian": "синхронизация",
    "meaning": "Данные одинаковые на всех устройствах — изменили на телефоне, увидели на компьютере.",
    "example": "Sync across devices.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Синхронизируйте данные между устройствами."
  },
  {
    "english": "system prompt",
    "russian": "системная инструкция",
    "meaning": "Скрытое указание для ИИ, как себя вести — задаётся разработчиком.",
    "example": "The system prompt sets the assistant tone.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Скрытое указание для ИИ, как себя вести — задаётся разработчиком."
  },
  {
    "english": "tab completion",
    "russian": "подсказка при вводе",
    "meaning": "ИИ дописывает код за вас по мере набора — как умное автодополнение.",
    "example": "Tab completion saved me a lot of typing.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "ИИ дописывает код за вас по мере набора — как умное автодополнение."
  },
  {
    "english": "table",
    "russian": "таблица",
    "meaning": "Таблица — данные, расположенные в строках и столбцах.",
    "example": "Data is shown in a table below.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Таблица — данные, расположенные в строках и столбцах."
  },
  {
    "english": "tag",
    "russian": "метка версии",
    "meaning": "Именованная отметка в истории — например v1.0 для выпуска.",
    "example": "Create a tag for this release.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Создайте метка версии."
  },
  {
    "english": "task",
    "russian": "задача",
    "meaning": "Задача — конкретное дело в рамках проекта.",
    "example": "Complete this task by Friday.",
    "tags": [
      "продукт"
    ],
    "exampleRu": "Завершите задача."
  },
  {
    "english": "temperature",
    "russian": "креативность ответа",
    "meaning": "Настройка: низкое значение — ответы строгие и предсказуемые, высокое — более свободные и неожиданные.",
    "example": "Lower the temperature for accuracy.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Понизьте креативность для точности."
  },
  {
    "english": "temporary chat",
    "russian": "временный чат",
    "meaning": "Разговор не сохраняется в истории и не используется для обучения.",
    "example": "Use temporary chat for private questions.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Используйте «временный чат»."
  },
  {
    "english": "terminal",
    "russian": "терминал",
    "meaning": "Окно для команд компьютера — можно запускать скрипты, не выходя из редактора.",
    "example": "Run the command in the terminal.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Окно для команд компьютера — можно запускать скрипты, не выходя из редактора."
  },
  {
    "english": "testing",
    "russian": "тестирование",
    "meaning": "Тестирование — проверка, что программа работает правильно.",
    "example": "Testing starts before every release.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Тестирование — проверка, что программа работает правильно."
  },
  {
    "english": "thread",
    "russian": "цепочка сообщений",
    "meaning": "Последовательность сообщений в одном диалоге — вся переписка целиком.",
    "example": "The thread contains ten messages.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Последовательность сообщений в одном диалоге — вся переписка целиком."
  },
  {
    "english": "thumbs down",
    "russian": "не нравится",
    "meaning": "Отметить ответ как плохой — можно объяснить, что не так.",
    "example": "Thumbs down and explain the problem.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Отметить ответ как плохой — можно объяснить, что не так."
  },
  {
    "english": "thumbs up",
    "russian": "нравится",
    "meaning": "Отметить ответ как хороший — помогает улучшить сервис.",
    "example": "Give a thumbs up if the answer helped.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Оцените ответ."
  },
  {
    "english": "toggle",
    "russian": "переключатель",
    "meaning": "Кнопка-выключатель: нажали — включилось, нажали ещё раз — выключилось.",
    "example": "Toggle dark mode on.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Включите тёмную тему."
  },
  {
    "english": "token",
    "russian": "единица текста",
    "meaning": "ИИ считает текст кусочками — словами и частями слов. Чем больше текста, тем больше единиц тратится.",
    "example": "This request uses many tokens.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Этот запрос использует много единиц текста."
  },
  {
    "english": "tool",
    "russian": "инструмент",
    "meaning": "Инструмент — программа или функция для решения конкретной задачи.",
    "example": "This tool helps you edit images.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Инструмент — программа или функция для решения конкретной задачи."
  },
  {
    "english": "tooltip",
    "russian": "подсказка при наведении",
    "meaning": "Короткое объяснение, которое появляется, когда вы наводите курсор на кнопку или значок.",
    "example": "Hover to see the tooltip.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Наведите курсор, чтобы увидеть подсказку."
  },
  {
    "english": "train",
    "russian": "обучать",
    "meaning": "Обучать — натренировать ИИ на своих данных или примерах.",
    "example": "Train the model on your documents.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Обучать — натренировать ИИ на своих данных или примерах."
  },
  {
    "english": "training",
    "russian": "обучение",
    "meaning": "Обучение модели — процесс, когда ИИ изучает примеры и учится отвечать.",
    "example": "Model training takes several hours.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Обучение модели — процесс, когда ИИ изучает примеры и учится отвечать."
  },
  {
    "english": "translate",
    "russian": "перевести",
    "meaning": "Попросить ИИ перевести текст на другой язык.",
    "example": "Translate to Russian.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Переведите на русский."
  },
  {
    "english": "UI",
    "russian": "пользовательский интерфейс",
    "meaning": "Пользовательский интерфейс — всё, что человек видит и с чем взаимодействует на экране.",
    "example": "The UI is clean and modern.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Пользовательский интерфейс — всё, что человек видит и с чем взаимодействует на экране."
  },
  {
    "english": "undo",
    "russian": "отменить",
    "meaning": "Вернуть последнее действие назад — как «шаг назад».",
    "example": "Press undo to revert the edit.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Нажмите «отменить»."
  },
  {
    "english": "unit test",
    "russian": "модульный тест",
    "meaning": "Проверка одной маленькой части программы отдельно.",
    "example": "Each unit test checks one small part.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Проверка одной маленькой части программы отдельно."
  },
  {
    "english": "update",
    "russian": "обновление",
    "meaning": "Обновление — установка новой версии с исправлениями или улучшениями.",
    "example": "Install the update when you are ready.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Установите обновление."
  },
  {
    "english": "upgrade",
    "russian": "улучшить тариф",
    "meaning": "Перейти на более дорогой план, чтобы получить больше функций.",
    "example": "Upgrade to Pro.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Перейдите на тариф Pro."
  },
  {
    "english": "upload",
    "russian": "загрузить файл",
    "meaning": "Отправить файл с компьютера на сайт — например, фото или документ для анализа ИИ.",
    "example": "Upload a PDF file.",
    "tags": [
      "сайт"
    ],
    "exampleRu": "Загрузите PDF-файл."
  },
  {
    "english": "URL",
    "russian": "адрес страницы",
    "meaning": "Адрес страницы в интернете — то, что написано в строке браузера.",
    "example": "Copy the URL and send it to a colleague.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Адрес страницы в интернете — то, что написано в строке браузера."
  },
  {
    "english": "user",
    "russian": "пользователь",
    "meaning": "Пользователь — человек, который пользуется программой или сайтом.",
    "example": "The user signed in successfully.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Пользователь — человек, который пользуется программой или сайтом."
  },
  {
    "english": "UX",
    "russian": "пользовательский опыт",
    "meaning": "Пользовательский опыт — насколько удобно и приятно пользоваться продуктом.",
    "example": "Good UX makes users happy.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Пользовательский опыт — насколько удобно и приятно пользоваться продуктом."
  },
  {
    "english": "vector",
    "russian": "вектор",
    "meaning": "Набор чисел, которым компьютер описывает смысл слова или объекта.",
    "example": "Each word is stored as a vector.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Набор чисел, которым компьютер описывает смысл слова или объекта."
  },
  {
    "english": "version",
    "russian": "версия",
    "meaning": "Версия — конкретный выпуск программы с номером, например 2.0.",
    "example": "Update to the latest version.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Версия — конкретный выпуск программы с номером, например 2."
  },
  {
    "english": "virtual machine",
    "russian": "виртуальная машина",
    "meaning": "Виртуальный компьютер — программная копия компьютера внутри другого компьютера.",
    "example": "Run the app in a virtual machine.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Виртуальный компьютер — программная копия компьютера внутри другого компьютера."
  },
  {
    "english": "visualization",
    "russian": "визуализация",
    "meaning": "Визуализация — показ данных в виде графиков и диаграмм.",
    "example": "The visualization makes trends clear.",
    "tags": [
      "данные"
    ],
    "exampleRu": "Визуализация — показ данных в виде графиков и диаграмм."
  },
  {
    "english": "voice",
    "russian": "голосовой режим",
    "meaning": "Говорить с ИИ вслух и слушать ответы — как по телефону.",
    "example": "Switch to voice mode on your phone.",
    "tags": [
      "ChatGPT"
    ],
    "exampleRu": "Переключитесь на «голосовой режим»."
  },
  {
    "english": "watch",
    "russian": "следить за проектом",
    "meaning": "Подписаться на обновления репозитория — будут приходить уведомления.",
    "example": "Watch the repo for new releases.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Подписаться на обновления репозитория — будут приходить уведомления."
  },
  {
    "english": "web page",
    "russian": "веб-страница",
    "meaning": "Веб-страница — одна отдельная страница на сайте.",
    "example": "This web page loads very fast.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Веб-страница — одна отдельная страница на сайте."
  },
  {
    "english": "web search",
    "russian": "поиск в интернете",
    "meaning": "ИИ ищет актуальную информацию в сети, а не только в вашем проекте.",
    "example": "Use web search for the latest docs.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Используйте «поиск в интернете»."
  },
  {
    "english": "website",
    "russian": "сайт",
    "meaning": "Сайт — набор страниц в интернете под одним адресом.",
    "example": "Our website launched last month.",
    "tags": [
      "IT"
    ],
    "exampleRu": "Сайт — набор страниц в интернете под одним адресом."
  },
  {
    "english": "Wiki",
    "russian": "вики проекта",
    "meaning": "Страницы с документацией и заметками внутри репозитория.",
    "example": "Add setup steps to the Wiki.",
    "tags": [
      "GitHub"
    ],
    "exampleRu": "Добавьте вики проекта."
  },
  {
    "english": "wireframe",
    "russian": "каркас страницы",
    "meaning": "Черновой макет — схема страницы без цветов и картинок, только структура.",
    "example": "The wireframe shows the page structure.",
    "tags": [
      "дизайн"
    ],
    "exampleRu": "Черновой макет — схема страницы без цветов и картинок, только структура."
  },
  {
    "english": "workflow",
    "russian": "рабочий процесс",
    "meaning": "Последовательность шагов: что делать сначала, что потом — чтобы дойти до результата.",
    "example": "Automate your workflow.",
    "tags": [
      "ИИ"
    ],
    "exampleRu": "Автоматизируйте свой рабочий процесс."
  },
  {
    "english": "workspace",
    "russian": "рабочая область",
    "meaning": "Открытая папка проекта в редакторе — всё, с чем вы сейчас работаете.",
    "example": "Open the workspace folder in Cursor.",
    "tags": [
      "Cursor"
    ],
    "exampleRu": "Откройте «рабочая область»."
  }
];
