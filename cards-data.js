// Сгенерировано: словарь.md + UI Cursor/GitHub/ChatGPT + стартовый набор
const SEED_CARDS = [
  {
    "english": "Accept",
    "russian": "принять",
    "meaning": "Согласиться с предложенным изменением — оставить его в коде.",
    "example": "Accept the suggested fix.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "access",
    "russian": "доступ",
    "meaning": "Доступ — возможность открыть, посмотреть или изменить что-то.",
    "example": "You do not have access to this file.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "account",
    "russian": "аккаунт",
    "meaning": "Аккаунт — ваш личный профиль в сервисе с логином и настройками.",
    "example": "Create an account to get started.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "accuracy",
    "russian": "точность",
    "meaning": "Точность — насколько часто ИИ отвечает правильно.",
    "example": "The accuracy of the model is 95%.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "Actions",
    "russian": "автоматизация на GitHub",
    "meaning": "Автоматические задачи при изменении кода: тесты, сборка, публикация.",
    "example": "GitHub Actions runs tests on every push.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "admin",
    "russian": "администратор",
    "meaning": "Администратор — человек с полными правами управления системой.",
    "example": "Contact the admin for help.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "agent",
    "russian": "агент",
    "meaning": "ИИ-агент — программа, которая сама выполняет задачи по шагам, а не только отвечает на вопросы.",
    "example": "The AI agent completed the task for you.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "Agent mode",
    "russian": "режим агента",
    "meaning": "Режим, где ИИ сам выполняет задачи: ищет файлы, пишет и меняет код.",
    "example": "Use Agent mode to implement the feature.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "AI",
    "russian": "ИИ",
    "meaning": "Сокращение от «искусственный интеллект». Так называют умные программы вроде ChatGPT.",
    "example": "AI can help you write emails faster.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "algorithm",
    "russian": "алгоритм",
    "meaning": "Пошаговая инструкция для решения задачи — как рецепт, только для компьютера.",
    "example": "This algorithm sorts the list quickly.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "analytics",
    "russian": "аналитика",
    "meaning": "Аналитика — сбор и разбор данных, чтобы понять, как что-то работает.",
    "example": "Analytics shows how users behave.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "API",
    "russian": "способ обмена данными",
    "meaning": "«Язык», на котором одна программа просит другую что-то сделать — например, отправить запрос к ИИ.",
    "example": "Connect via the API.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "API key",
    "russian": "ключ API",
    "meaning": "Секретный ключ — пароль для доступа программы к сервису через API.",
    "example": "Keep your API key secret.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "app",
    "russian": "приложение",
    "meaning": "Сокращение от «приложение» — программа на телефоне или компьютере.",
    "example": "Open the app on your phone.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "application",
    "russian": "приложение",
    "meaning": "Приложение — программа для конкретных задач.",
    "example": "Download the application from the store.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Apply",
    "russian": "применить",
    "meaning": "Внести предложенные ИИ изменения в файл — принять правки.",
    "example": "Click Apply to update the file.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "approve",
    "russian": "одобрить",
    "meaning": "Согласиться с чужими изменениями — «всё хорошо, можно вливать».",
    "example": "Approve the pull request.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "archive",
    "russian": "в архив",
    "meaning": "Убрать из активного списка, но не удалять — можно вернуть позже.",
    "example": "Archive old chats.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "artifacts",
    "russian": "результаты сборки",
    "meaning": "Файлы, которые создаёт автоматизация — например, готовая программа.",
    "example": "Download the build artifacts.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "artificial intelligence",
    "russian": "искусственный интеллект",
    "meaning": "Искусственный интеллект — программа, которая умеет учиться и отвечать почти как человек.",
    "example": "Artificial intelligence is changing how we work.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "Ask mode",
    "russian": "режим вопросов",
    "meaning": "Режим, где ИИ только отвечает и советует, но сам не меняет файлы.",
    "example": "Switch to Ask mode to learn without edits.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "assistant",
    "russian": "ассистент",
    "meaning": "Помощник — ИИ или программа, которая помогает решать задачи и отвечает на вопросы.",
    "example": "The assistant helped me write a letter.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "attach",
    "russian": "прикрепить",
    "meaning": "Добавить файл или картинку к сообщению для ИИ.",
    "example": "Attach a screenshot to your message.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "attach file",
    "russian": "прикрепить файл",
    "meaning": "Отправить документ или картинку в чат для анализа ИИ.",
    "example": "Attach file and ask for a summary.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "authentication",
    "russian": "проверка личности",
    "meaning": "Проверка личности — подтверждение, что вы действительно тот, за кого себя выдаёте.",
    "example": "Authentication failed. Check your password.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "authorization",
    "russian": "проверка прав",
    "meaning": "Проверка прав — можно ли вам делать то, что вы пытаетесь сделать.",
    "example": "You need authorization to access this page.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "automation",
    "russian": "автоматизация",
    "meaning": "Автоматизация — когда рутинные действия выполняет программа без участия человека.",
    "example": "Automation saves time on routine tasks.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "backend",
    "russian": "внутренняя часть сайта",
    "meaning": "Внутренняя часть сайта — логика и данные, которые работают «за кулисами».",
    "example": "The backend handles data and logic.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "background agent",
    "russian": "фоновый агент",
    "meaning": "ИИ работает в фоне над задачей, пока вы занимаетесь другим.",
    "example": "The background agent is still running.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "backup",
    "russian": "резервная копия",
    "meaning": "Резервная копия — запасная копия данных на случай потери.",
    "example": "Make a backup before you update.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "blame",
    "russian": "кто менял строку",
    "meaning": "Показать, кто и когда изменил каждую строку файла.",
    "example": "Use blame to see who edited this line.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "branch",
    "russian": "ветка",
    "meaning": "Отдельная копия проекта для экспериментов — основная версия при этом не ломается.",
    "example": "Create a new branch.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "browse",
    "russian": "просмотр интернета",
    "meaning": "ИИ ищет свежую информацию в сети прямо во время ответа.",
    "example": "Enable browse to get current news.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "browser",
    "russian": "браузер",
    "meaning": "Браузер — программа для просмотра сайтов: Chrome, Firefox, Edge.",
    "example": "Open the site in your browser.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "bug",
    "russian": "ошибка",
    "meaning": "Ошибка в программе — что-то работает не так, как задумано.",
    "example": "We found a bug in the login form.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Bugbot",
    "russian": "проверка кода ботом",
    "meaning": "Автоматическая проверка ваших изменений на ошибки, как ревью от робота.",
    "example": "Bugbot found a possible bug in the PR.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "button",
    "russian": "кнопка",
    "meaning": "Кнопка — элемент на экране, который нажимают для действия.",
    "example": "Press the button to continue.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "cache",
    "russian": "кэш",
    "meaning": "Кэш — временное хранение данных для ускорения повторной загрузки.",
    "example": "Clear the cache if the page looks old.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "canvas",
    "russian": "холст для текста",
    "meaning": "Отдельная область, где ИИ и вы вместе редактируете длинный текст или код.",
    "example": "Open the answer in canvas to edit it.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "capabilities",
    "russian": "возможности",
    "meaning": "Что умеет бот: искать в сети, рисовать, запускать код и т.д.",
    "example": "Enable web browsing in capabilities.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "chart",
    "russian": "диаграмма, график",
    "meaning": "График или диаграмма — наглядное изображение чисел и тенденций.",
    "example": "The chart shows sales by month.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "chat history",
    "russian": "история чатов",
    "meaning": "Список прошлых разговоров с ИИ — можно вернуться к любому.",
    "example": "Find it in your chat history.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "chatbot",
    "russian": "чат-бот",
    "meaning": "Чат-бот — программа, с которой можно переписываться в чате.",
    "example": "The chatbot answered my question instantly.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "ChatGPT",
    "russian": "чат с ИИ от OpenAI",
    "meaning": "Популярный сервис для разговора с искусственным интеллектом в браузере или приложении.",
    "example": "Ask ChatGPT to explain this term.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "ChatGPT Plus",
    "russian": "платная подписка Plus",
    "meaning": "Платный тариф ChatGPT — быстрее, умнее модель и больше возможностей.",
    "example": "Upgrade to ChatGPT Plus for GPT-4.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "checkpoint",
    "russian": "точка сохранения",
    "meaning": "Снимок состояния проекта — можно вернуться, если что-то пошло не так.",
    "example": "Restore from the last checkpoint.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "checks",
    "russian": "автопроверки",
    "meaning": "Результаты автоматических тестов и проверок для ваших изменений.",
    "example": "All checks passed successfully.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "cherry-pick",
    "russian": "взять один коммит",
    "meaning": "Скопировать одно конкретное сохранение из другой ветки.",
    "example": "Cherry-pick this fix into release.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "CI",
    "russian": "автоматическая сборка",
    "meaning": "Система, которая сама проверяет и собирает код при каждом изменении.",
    "example": "CI failed on the last commit.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "classification",
    "russian": "классификация",
    "meaning": "Разделение объектов по категориям — например, спам или не спам.",
    "example": "Classification separates spam from normal mail.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "client",
    "russian": "клиент",
    "meaning": "Клиент — ваша программа или браузер, который обращается к серверу.",
    "example": "The client connects to the server.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "clone",
    "russian": "клонировать",
    "meaning": "Скопировать чужой проект с GitHub к себе на компьютер.",
    "example": "Clone the repository to get started.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "cloud",
    "russian": "облако",
    "meaning": "Облако — хранение и работа с данными через интернет, а не только на своём компьютере.",
    "example": "Your files are saved in the cloud.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "cloud agent",
    "russian": "облачный агент",
    "meaning": "ИИ выполняет задачу на сервере Cursor, а не только на вашем компьютере.",
    "example": "Start a cloud agent for this task.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "clustering",
    "russian": "кластеризация",
    "meaning": "Группировка похожих объектов без заранее заданных категорий.",
    "example": "Clustering groups similar customers together.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "code",
    "russian": "код",
    "meaning": "Код — инструкции для компьютера, написанные на языке программирования.",
    "example": "Review the code before you publish.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "code interpreter",
    "russian": "выполнение кода",
    "meaning": "ИИ может запускать код и работать с файлами — считать, строить графики.",
    "example": "Use code interpreter to analyze the CSV.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "codebase",
    "russian": "код проекта",
    "meaning": "Все файлы вашего проекта вместе — то, что ИИ может читать и понимать.",
    "example": "Cursor indexes your entire codebase.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "Codespaces",
    "russian": "облачный редактор",
    "meaning": "Полноценная среда для кода в браузере — не нужно ничего устанавливать.",
    "example": "Open the project in Codespaces.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "coding",
    "russian": "программирование",
    "meaning": "Программирование — написание кода для создания программ.",
    "example": "Coding skills are useful in many jobs.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "comment",
    "russian": "комментарий",
    "meaning": "Текстовое замечание к строке кода или к обсуждению.",
    "example": "Leave a comment on line 42.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "commit",
    "russian": "сохранить изменения",
    "meaning": "Зафиксировать правки в проекте с коротким описанием — как сохранить версию черновика.",
    "example": "Commit your changes.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "compare",
    "russian": "сравнить версии",
    "meaning": "Посмотреть разницу между двумя ветками или коммитами.",
    "example": "Compare main with your branch.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "Composer",
    "russian": "режим создания",
    "meaning": "В Cursor — окно, где ИИ пишет и меняет код по вашему запросу, как соавтор программист.",
    "example": "Open Composer to build a new feature.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "configuration",
    "russian": "настройка системы",
    "meaning": "Настройка, конфигурация — параметры, определяющие, как работает система.",
    "example": "Check the configuration settings.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "conflict",
    "russian": "конфликт изменений",
    "meaning": "Когда два человека изменили одно место по-разному — нужно выбрать, какая версия верная.",
    "example": "Resolve the merge conflict in this file.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "connection",
    "russian": "соединение, подключение",
    "meaning": "Подключение — связь между вашим устройством и сервером или интернетом.",
    "example": "The connection was lost. Reconnecting...",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "container",
    "russian": "контейнер",
    "meaning": "Контейнер — упакованная среда для запуска программы одинаково на разных машинах.",
    "example": "The app runs inside a container.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "context",
    "russian": "контекст, предыстория",
    "meaning": "Вся предыдущая переписка и файлы, которые ИИ «помнит» в рамках одного разговора.",
    "example": "The model lost context.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "context window",
    "russian": "объём памяти чата",
    "meaning": "Сколько текста ИИ может держать в голове за один раз. Если переписка слишком длинная — он начинает забывать начало.",
    "example": "This chat exceeded the context window.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "continue",
    "russian": "продолжить",
    "meaning": "Попросить ИИ дописать оборванный или неполный ответ.",
    "example": "Click continue to finish the answer.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "contributors",
    "russian": "участники проекта",
    "meaning": "Люди, которые вносили код или правки в проект.",
    "example": "See all contributors on the repo page.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "conversation",
    "russian": "разговор, беседа",
    "meaning": "Один чат с ИИ от первого сообщения до последнего.",
    "example": "Save this conversation for later.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "copy",
    "russian": "скопировать",
    "meaning": "Скопировать текст или ссылку в буфер обмена, чтобы вставить в другое место.",
    "example": "Copy the answer.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "CSS",
    "russian": "стили CSS",
    "meaning": "Язык стилей — задаёт цвета, шрифты и расположение элементов на странице.",
    "example": "CSS controls colors and fonts.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "CSV",
    "russian": "формат таблицы CSV",
    "meaning": "Формат таблицы в виде текста — удобен для Excel и импорта данных.",
    "example": "Export the table as a CSV file.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "Custom GPT",
    "russian": "свой настроенный GPT",
    "meaning": "Ваш личный чат-бот с инструкциями, файлами и особыми навыками.",
    "example": "Build a Custom GPT for your team.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "DALL-E",
    "russian": "генератор картинок",
    "meaning": "ИИ, который создаёт изображения по текстовому описанию.",
    "example": "Use DALL-E to create an illustration.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "dashboard",
    "russian": "главная панель",
    "meaning": "Страница со сводкой: здесь видно основную информацию, кнопки и быстрый доступ к разделам.",
    "example": "Go to your dashboard.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "data",
    "russian": "данные",
    "meaning": "Данные — любая информация: тексты, числа, картинки, таблицы.",
    "example": "Your data is stored securely.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "database",
    "russian": "база данных",
    "meaning": "База данных — место, где программа хранит информацию упорядоченно.",
    "example": "All users are stored in the database.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "dataset",
    "russian": "набор данных",
    "meaning": "Набор данных — коллекция примеров, на которых учат или проверяют ИИ.",
    "example": "We need a larger dataset for training.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "debug",
    "russian": "найти и исправить ошибку",
    "meaning": "Разобраться, почему что-то не работает, и устранить проблему.",
    "example": "Debug the code.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "debugging",
    "russian": "отладка",
    "meaning": "Отладка — поиск и исправление ошибок в программе.",
    "example": "Debugging took most of the afternoon.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "deep learning",
    "russian": "глубокое обучение",
    "meaning": "Глубокое обучение — сложный способ обучения ИИ на больших объёмах данных.",
    "example": "Deep learning powers modern image recognition.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "delete",
    "russian": "удалить",
    "meaning": "Убрать навсегда — чат, файл или запись.",
    "example": "Delete this conversation.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "Dependabot",
    "russian": "бот обновлений",
    "meaning": "Робот GitHub, который предупреждает об устаревших и небезопасных библиотеках.",
    "example": "Dependabot opened a security update.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "deploy",
    "russian": "запустить, опубликовать",
    "meaning": "Выложить готовый проект в интернет, чтобы им могли пользоваться другие.",
    "example": "Deploy the website.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "deployment",
    "russian": "развертывание",
    "meaning": "Развёртывание — выкладка готовой программы или сайта, чтобы им можно было пользоваться.",
    "example": "Deployment finished without errors.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "design",
    "russian": "дизайн",
    "meaning": "Дизайн — внешний вид и удобство использования интерфейса.",
    "example": "We improved the design of the app.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "desktop",
    "russian": "настольный компьютер",
    "meaning": "Настольный — для обычного компьютера или ноутбука.",
    "example": "The desktop version has more features.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "developer",
    "russian": "разработчик",
    "meaning": "Разработчик — человек, который создаёт программы и сайты.",
    "example": "The developer fixed the issue quickly.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "device",
    "russian": "устройство",
    "meaning": "Устройство — компьютер, телефон, планшет или другое оборудование.",
    "example": "This device is not supported.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "diff",
    "russian": "сравнение изменений",
    "meaning": "Показ разницы: что было в файле и что стало после правки — старое и новое рядом.",
    "example": "Review the diff before you apply.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "Discussions",
    "russian": "обсуждения",
    "meaning": "Раздел для вопросов и разговоров вокруг проекта, не привязанный к коду.",
    "example": "Ask in Discussions if you need help.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "Docker",
    "russian": "Docker",
    "meaning": "Популярная программа для запуска приложений в контейнерах.",
    "example": "We use Docker to deploy the service.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "domain",
    "russian": "домен",
    "meaning": "Домен — имя сайта, например google.com.",
    "example": "We bought a new domain name.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "download",
    "russian": "скачать",
    "meaning": "Сохранить файл с сайта на свой компьютер.",
    "example": "Download the report.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "draft",
    "russian": "черновик",
    "meaning": "Незавершённая версия — видна вам, но ещё не готова к публикации.",
    "example": "Save the pull request as a draft.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "dropdown",
    "russian": "выпадающий список",
    "meaning": "Меню, которое открывается при нажатии и показывает варианты на выбор.",
    "example": "Select a model from the dropdown.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "edit message",
    "russian": "изменить сообщение",
    "meaning": "Поправить свой вопрос и получить новый ответ с учётом правки.",
    "example": "Edit message and try a clearer prompt.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "email",
    "russian": "электронная почта",
    "meaning": "Электронная почта — письма через интернет.",
    "example": "Check your email for the confirmation.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "embedding",
    "russian": "числовое представление слова",
    "meaning": "Способ представить слово или фразу в виде чисел, чтобы ИИ мог их сравнивать и искать похожие.",
    "example": "The embedding captures the meaning of a word.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "encryption",
    "russian": "шифрование",
    "meaning": "Шифрование — превращение данных в нечитаемый вид, чтобы их нельзя было украсть.",
    "example": "Encryption protects your messages.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "endpoint",
    "russian": "точка входа",
    "meaning": "Конкретный адрес в системе, куда отправляется запрос — как номер окошка в банке.",
    "example": "Call the chat endpoint.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "engineer",
    "russian": "инженер",
    "meaning": "Инженер — специалист, который проектирует и строит технические системы.",
    "example": "The engineer designed the system.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "environment",
    "russian": "среда",
    "meaning": "Среда — условия, в которых работает программа: тестовая или рабочая.",
    "example": "This environment is for testing only.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "error",
    "russian": "ошибка",
    "meaning": "Ошибка — сообщение о том, что что-то пошло не так.",
    "example": "An error occurred. Please try again.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "exception",
    "russian": "исключение",
    "meaning": "Сбой в программе — неожиданная ситуация, которую код не смог обработать.",
    "example": "The program threw an exception.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Explore",
    "russian": "обзор, каталог",
    "meaning": "Раздел, где можно найти готовые боты и инструменты.",
    "example": "Go to Explore to find useful GPTs.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "extension",
    "russian": "расширение",
    "meaning": "Дополнение к программе — добавляет новые функции, как приложения на телефоне.",
    "example": "Install an extension from the marketplace.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "feature",
    "russian": "признак, функция",
    "meaning": "Признак — отдельная характеристика в данных, по которой ИИ делает вывод.",
    "example": "Each feature describes one property of the data.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "feature request",
    "russian": "запрос на функцию",
    "meaning": "Пожелание пользователя добавить новую функцию в продукт.",
    "example": "Send us your feature request.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "feedback",
    "russian": "обратная связь",
    "meaning": "Обратная связь — отзывы и замечания от пользователей.",
    "example": "We appreciate your feedback.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "fetch",
    "russian": "проверить обновления",
    "meaning": "Узнать, есть ли новые изменения на сервере, без слияния с вашим кодом.",
    "example": "Fetch from origin to see what's new.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "field",
    "russian": "поле",
    "meaning": "Поле — место, куда можно ввести текст или выбрать значение.",
    "example": "This field is required.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "file",
    "russian": "файл",
    "meaning": "Файл — отдельный документ, картинка или другой объект на компьютере.",
    "example": "Save the file to your computer.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "filter",
    "russian": "фильтр",
    "meaning": "Показать только то, что подходит под условие — например, только картинки или только за последнюю неделю.",
    "example": "Filter by date.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "fine-tune",
    "russian": "дообучить под задачу",
    "meaning": "Дополнительно настроить ИИ под конкретную тему или стиль — как личный помощник для вашей работы.",
    "example": "Fine-tune the model on your data.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "fine-tuning",
    "russian": "дообучение модели",
    "meaning": "Дообучение — дополнительная настройка готовой модели под вашу конкретную задачу.",
    "example": "Fine-tuning adapts the model to your needs.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "folder",
    "russian": "папка",
    "meaning": "Папка — место для хранения файлов, как папка в шкафу.",
    "example": "Create a new folder for your photos.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "fork",
    "russian": "сделать копию проекта",
    "meaning": "Создать свою копию чужого проекта на GitHub — можно менять отдельно.",
    "example": "Fork the repo and make your changes.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "form",
    "russian": "форма",
    "meaning": "Форма — блок с полями для ввода данных, например при регистрации.",
    "example": "Fill out the form and submit it.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "format",
    "russian": "отформатировать",
    "meaning": "Привести код к аккуратному виду: отступы, переносы строк — автоматически.",
    "example": "Format the document before saving.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "framework",
    "russian": "готовый каркас для разработки",
    "meaning": "Готовый каркас для разработки — набор инструментов, ускоряющих создание программы.",
    "example": "This framework speeds up development.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "frontend",
    "russian": "внешняя часть сайта",
    "meaning": "Внешняя часть сайта — то, что видит и нажимает пользователь.",
    "example": "The frontend shows buttons and menus.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "full-stack",
    "russian": "полный цикл разработки",
    "meaning": "Полный цикл — когда человек умеет и внешнюю, и внутреннюю часть разработки.",
    "example": "She works as a full-stack developer.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "generate",
    "russian": "создать, сгенерировать",
    "meaning": "Кнопка или команда «сделай заново» — ИИ придумает новый текст, картинку или ответ.",
    "example": "Click Generate to create a new image.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "Gist",
    "russian": "заметка с кодом",
    "meaning": "Небольшой фрагмент кода или текста на GitHub — удобно быстро поделиться.",
    "example": "Share the snippet as a Gist.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "Git",
    "russian": "система контроля версий Git",
    "meaning": "Система контроля версий — программа, которая сохраняет все версии вашего кода.",
    "example": "Use Git to track your changes.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "GitHub",
    "russian": "платформа для кода GitHub",
    "meaning": "Популярный сайт для хранения кода и совместной работы над проектами.",
    "example": "The project is hosted on GitHub.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "GPTs",
    "russian": "готовые боты",
    "meaning": "Каталог чат-ботов от других пользователей — на разные темы и задачи.",
    "example": "Explore GPTs in the store.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "hallucination",
    "russian": "выдуманный ответ",
    "meaning": "Когда ИИ уверенно пишет то, чего на самом деле нет — выдумывает факты или ссылки.",
    "example": "Watch out for hallucinations.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "history",
    "russian": "история изменений",
    "meaning": "Список всех прошлых версий и правок файла или проекта.",
    "example": "Check the file history for older versions.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "Hooks",
    "russian": "автоматические действия",
    "meaning": "Правила, которые срабатывают сами при определённых событиях в редакторе.",
    "example": "Set up hooks to run checks on save.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "hosting",
    "russian": "хостинг",
    "meaning": "Хостинг — услуга размещения сайта или программы на сервере в интернете.",
    "example": "We bought hosting for our website.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "HTML",
    "russian": "язык разметки HTML",
    "meaning": "Язык разметки — описывает структуру веб-страницы: заголовки, кнопки, текст.",
    "example": "HTML defines the structure of a page.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "indexing",
    "russian": "индексация проекта",
    "meaning": "Cursor изучает файлы проекта, чтобы быстрее находить нужный код и отвечать точнее.",
    "example": "Indexing helps the AI understand your project.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "inference",
    "russian": "работа ИИ",
    "meaning": "Момент, когда модель думает и выдаёт ответ. Часто говорят о скорости или стоимости этого процесса.",
    "example": "Inference is running.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "inline edit",
    "russian": "правка в строке",
    "meaning": "Быстрое изменение кода прямо в месте, где стоит курсор, с помощью ИИ.",
    "example": "Use inline edit to fix this function.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "input",
    "russian": "входные данные",
    "meaning": "Входные данные — то, что вы подаёте на вход программе или ИИ.",
    "example": "Type your input in the text box.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Insights",
    "russian": "аналитика репозитория",
    "meaning": "Статистика проекта: активность, участники, популярность кода.",
    "example": "Check Insights for contributor activity.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "instructions",
    "russian": "инструкции для бота",
    "meaning": "Текст, который задаёт поведение Custom GPT — как он должен отвечать.",
    "example": "Write clear instructions for your GPT.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "integration",
    "russian": "подключение к другому сервису",
    "meaning": "Связать одну программу с другой — например, ИИ-чат с почтой или таблицами.",
    "example": "Set up an integration.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "interface",
    "russian": "интерфейс",
    "meaning": "Интерфейс — всё, что вы видите и нажимаете на экране: кнопки, меню, поля.",
    "example": "The interface is simple and clear.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "internet",
    "russian": "интернет",
    "meaning": "Интернет — всемирная сеть, через которую работают сайты и онлайн-сервисы.",
    "example": "You need internet to use this service.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "issue",
    "russian": "обращение, задача",
    "meaning": "Запись о проблеме или идее в проекте — баг, вопрос или предложение.",
    "example": "Open an issue to report the bug.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "iterate",
    "russian": "повторять, дорабатывать",
    "meaning": "Снова и снова улучшать результат — менять запрос и смотреть новый ответ.",
    "example": "Let's iterate on this idea.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "JavaScript",
    "russian": "JavaScript",
    "meaning": "Язык программирования для интерактивности на сайтах — анимации, кнопки, формы.",
    "example": "JavaScript makes the page interactive.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "JSON",
    "russian": "формат данных JSON",
    "meaning": "Популярный текстовый формат для обмена данными между программами.",
    "example": "The data is saved in JSON format.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "knowledge",
    "russian": "база знаний",
    "meaning": "Файлы, которые вы загружаете в бота — он отвечает на их основе.",
    "example": "Upload PDFs to the knowledge base.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "label",
    "russian": "метка",
    "meaning": "Метка — правильный ответ или категория для примера при обучении.",
    "example": "Add a label to each training example.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "landing page",
    "russian": "лендинг",
    "meaning": "Посадочная страница — простая страница с одной главной целью, например регистрация.",
    "example": "The landing page explains our product.",
    "tags": [
      "маркетинг"
    ]
  },
  {
    "english": "language model",
    "russian": "языковая модель",
    "meaning": "Языковая модель — ИИ, обученный понимать и создавать текст на человеческом языке.",
    "example": "The language model understands your question.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "large language model",
    "russian": "большая языковая модель",
    "meaning": "Большая языковая модель — мощная версия ИИ для текста, например ChatGPT или Claude.",
    "example": "A large language model can write long texts.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "layout",
    "russian": "макет",
    "meaning": "Расположение элементов — как разложены кнопки, текст и картинки на странице.",
    "example": "The layout looks good on mobile.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "library",
    "russian": "библиотека",
    "meaning": "Библиотека — набор готовых функций, которые можно подключить к своей программе.",
    "example": "Import the library into your project.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "license",
    "russian": "лицензия",
    "meaning": "Правила, по которым можно использовать чужой код — можно ли копировать и менять.",
    "example": "This project is under the MIT license.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "link",
    "russian": "ссылка",
    "meaning": "Ссылка — адрес, по которому можно перейти на другую страницу или файл.",
    "example": "Click the link to open the page.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "lint",
    "russian": "проверка кода",
    "meaning": "Автоматическая проверка кода на ошибки и плохие привычки.",
    "example": "Lint found three warnings in this file.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "LLM",
    "russian": "большая языковая модель",
    "meaning": "Сокращение от «большая языковая модель» — умный текстовый ИИ.",
    "example": "This LLM answers in natural language.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "local",
    "russian": "локальный",
    "meaning": "Локальный — на вашем компьютере, а не в интернете.",
    "example": "Files are stored on your local computer.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "log",
    "russian": "журнал событий",
    "meaning": "Журнал событий — запись того, что происходило в программе, для поиска проблем.",
    "example": "Check the log for more details.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "log out",
    "russian": "выйти",
    "meaning": "Завершить сеанс работы — чтобы никто другой не мог зайти под вашим именем.",
    "example": "Log out when you're done.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "loss",
    "russian": "ошибка, функция потерь",
    "meaning": "Показатель ошибки при обучении — чем меньше, тем лучше учится модель.",
    "example": "The loss decreased after each training round.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "machine learning",
    "russian": "машинное обучение",
    "meaning": "Машинное обучение — когда программа учится на примерах, а не по жёстким правилам.",
    "example": "Machine learning improves with more data.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "Marketplace",
    "russian": "магазин расширений",
    "meaning": "Каталог приложений и дополнений для GitHub.",
    "example": "Find tools in the GitHub Marketplace.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "Max mode",
    "russian": "максимальный режим",
    "meaning": "Режим с более мощной моделью и большим объёмом памяти для сложных задач.",
    "example": "Enable Max mode for this large refactor.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "MCP",
    "russian": "подключение внешних сервисов",
    "meaning": "Способ подключить к Cursor другие программы и данные — почту, базы, API.",
    "example": "Configure MCP servers in settings.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "Memories",
    "russian": "память ИИ",
    "meaning": "Cursor запоминает ваши предпочтения между сессиями — как личные заметки для ИИ.",
    "example": "Memories help the AI remember your style.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "memory",
    "russian": "память чата",
    "meaning": "ChatGPT запоминает факты о вас между разговорами — имя, предпочтения.",
    "example": "Memory helps ChatGPT remember your job.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "mention",
    "russian": "упомянуть",
    "meaning": "Сослаться на файл или папку в чате через @ — чтобы ИИ их увидел.",
    "example": "Mention the config file with @.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "menu",
    "russian": "меню",
    "meaning": "Меню — список разделов или действий на сайте.",
    "example": "Open the menu in the top corner.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "merge",
    "russian": "объединить",
    "meaning": "Слить две ветки правок в одну общую версию файлов.",
    "example": "Merge the pull request.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "merge pull request",
    "russian": "влить изменения",
    "meaning": "Окончательно добавить проверенные правки в основную ветку проекта.",
    "example": "Merge pull request when checks pass.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "message",
    "russian": "сообщение",
    "meaning": "Сообщение — текст, который вы отправляете или получаете в чате или почте.",
    "example": "You have a new message.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "metrics",
    "russian": "метрики",
    "meaning": "Показатели — числа, по которым судят об успехе: посещения, продажи, скорость.",
    "example": "Track the key metrics every week.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "mobile",
    "russian": "мобильный",
    "meaning": "Мобильный — для телефона или планшета.",
    "example": "Use the mobile app on the go.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "model",
    "russian": "модель ИИ",
    "meaning": "Конкретная версия искусственного интеллекта — например, GPT-4 или Claude. Разные модели по-разному отвечают.",
    "example": "Choose a model.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "MVP",
    "russian": "минимально жизнеспособный продукт",
    "meaning": "Минимальная версия продукта — только самые нужные функции для первого запуска.",
    "example": "We launched an MVP in three months.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "network",
    "russian": "сеть",
    "meaning": "Сеть — соединение между компьютерами для обмена данными.",
    "example": "The network connection is unstable.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "neural network",
    "russian": "нейронная сеть",
    "meaning": "Нейронная сеть — система внутри ИИ, которая обрабатывает информацию слоями, похожими на работу мозга.",
    "example": "A neural network learns from examples.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "new chat",
    "russian": "новый чат",
    "meaning": "Начать разговор с ИИ с чистого листа, без старой переписки.",
    "example": "Start a new chat for this task.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "Notepad",
    "russian": "блокнот",
    "meaning": "В Cursor — место для заметок и черновиков, которые ИИ может использовать.",
    "example": "Save ideas in a Notepad for later.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "notification",
    "russian": "уведомление",
    "meaning": "Сообщение от сайта или программы — например, что ответ готов или закончилась подписка.",
    "example": "You have a new notification.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "onboarding",
    "russian": "знакомство с сервисом",
    "meaning": "Первые шаги для нового пользователя — подсказки, как пользоваться программой.",
    "example": "Complete the onboarding.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "open source",
    "russian": "открытый код",
    "meaning": "Проект, исходный код которого доступен всем — можно смотреть и использовать.",
    "example": "This is an open source project.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "optimization",
    "russian": "оптимизация",
    "meaning": "Оптимизация — улучшение скорости и эффективности работы.",
    "example": "Optimization reduced loading time.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "output",
    "russian": "выходные данные",
    "meaning": "Выходные данные — то, что программа или ИИ выдаёт в ответ.",
    "example": "Check the output before you share it.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Pages",
    "russian": "сайт из репозитория",
    "meaning": "Бесплатный хостинг простого сайта прямо из файлов на GitHub.",
    "example": "Publish your site with GitHub Pages.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "password",
    "russian": "пароль",
    "meaning": "Пароль — секретное слово для входа в аккаунт.",
    "example": "Choose a strong password.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "paste",
    "russian": "вставить",
    "meaning": "Вставить ранее скопированный текст в поле ввода.",
    "example": "Paste your text here.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "performance",
    "russian": "производительность",
    "meaning": "Производительность — насколько быстро и плавно работает программа.",
    "example": "Performance improved after the update.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "permission",
    "russian": "разрешение, права доступа",
    "meaning": "Разрешение — право программы или человека на определённые действия.",
    "example": "The app asks for camera permission.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "pin chat",
    "russian": "закрепить чат",
    "meaning": "Держать важный разговор вверху списка.",
    "example": "Pin chat so you can find it quickly.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "pipeline",
    "russian": "цепочка, цепочка обработки",
    "meaning": "Цепочка шагов обработки — данные проходят через несколько этапов подряд.",
    "example": "The pipeline processes data step by step.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "Plan mode",
    "russian": "режим плана",
    "meaning": "ИИ сначала составляет план действий, вы его смотрите, потом он выполняет.",
    "example": "Plan mode shows steps before any changes.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "platform",
    "russian": "платформа",
    "meaning": "Платформа — основа, на которой работают другие программы или сервисы.",
    "example": "The platform supports many integrations.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Playground",
    "russian": "площадка для тестов",
    "meaning": "Раздел для разработчиков — пробовать модели и настройки вручную.",
    "example": "Test the API in the Playground.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "plugins",
    "russian": "плагины",
    "meaning": "Дополнения, которые подключают ChatGPT к другим сервисам.",
    "example": "Enable plugins to book a table.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "precision",
    "russian": "точность классификации",
    "meaning": "Точность попадания — из всех ответов «да» сколько действительно верных.",
    "example": "High precision means fewer false alarms.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "prediction",
    "russian": "прогноз, предсказание",
    "meaning": "Прогноз — то, что ИИ предсказывает на основе имеющихся данных.",
    "example": "The prediction was surprisingly accurate.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "privacy",
    "russian": "конфиденциальность",
    "meaning": "Конфиденциальность — защита ваших личных данных от посторонних.",
    "example": "Read our privacy policy.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Privacy mode",
    "russian": "режим конфиденциальности",
    "meaning": "Ваш код не сохраняется на серверах — больше защиты данных.",
    "example": "Turn on Privacy mode for sensitive projects.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "product manager",
    "russian": "продуктовый менеджер",
    "meaning": "Менеджер продукта — человек, который решает, какие функции нужны пользователям.",
    "example": "The product manager planned the release.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "profile",
    "russian": "профиль",
    "meaning": "Профиль — страница с вашими данными: имя, фото, настройки.",
    "example": "Update your profile photo.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "programmer",
    "russian": "программист",
    "meaning": "Программист — специалист, пишущий код.",
    "example": "A programmer writes instructions for computers.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "project",
    "russian": "проект",
    "meaning": "Проект — работа с целью и сроками, например создание нового сайта.",
    "example": "The project starts next Monday.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "prompt",
    "russian": "запрос, подсказка",
    "meaning": "Текст, который вы пишете ИИ, чтобы он понял, что вам нужно. Чем яснее запрос — тем лучше ответ.",
    "example": "Write a clear prompt.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "prompt engineering",
    "russian": "составление запросов к ИИ",
    "meaning": "Умение правильно формулировать запросы к ИИ, чтобы получать лучшие ответы.",
    "example": "Good prompt engineering gives better results.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "prototype",
    "russian": "прототип",
    "meaning": "Прототип — черновая версия интерфейса для проверки идеи до полной разработки.",
    "example": "We built a prototype in one week.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "pull",
    "russian": "получить обновления",
    "meaning": "Скачать последние изменения с сервера в свой проект.",
    "example": "Pull the latest changes from main.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "pull request",
    "russian": "запрос на слияние",
    "meaning": "Запрос на слияние — предложение добавить свои правки в общий проект.",
    "example": "Open a pull request for review.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "push",
    "russian": "отправить на сервер",
    "meaning": "Отправить свои сохранённые изменения на GitHub или другой сервер.",
    "example": "Push your commits to GitHub.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "Python",
    "russian": "Python",
    "meaning": "Популярный язык программирования, часто используется в ИИ и автоматизации.",
    "example": "Python is popular for AI projects.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "query",
    "russian": "запрос",
    "meaning": "Запрос — просьба к системе найти или получить нужную информацию.",
    "example": "Enter your query and press Search.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "rate limit",
    "russian": "лимит запросов",
    "meaning": "Ограничение, сколько сообщений можно отправить за определённое время.",
    "example": "You hit the rate limit. Wait a moment.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "README",
    "russian": "описание проекта",
    "meaning": "Главный текст на странице проекта — что это, как установить и пользоваться.",
    "example": "Read the README before you start.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "rebase",
    "russian": "перестроить историю",
    "meaning": "Аккуратно наложить ваши изменения поверх свежей версии проекта.",
    "example": "Rebase your branch onto main.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "recall",
    "russian": "полнота",
    "meaning": "Полнота — насколько хорошо ИИ находит все нужные случаи.",
    "example": "Recall shows how many cases we found.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "redo",
    "russian": "повторить",
    "meaning": "Вернуть отменённое действие — сделать «шаг вперёд» снова.",
    "example": "Redo the change you just undid.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "refactor",
    "russian": "улучшить структуру",
    "meaning": "Переписать код так, чтобы он стал понятнее и проще, не меняя суть работы.",
    "example": "Refactor this module.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "refine",
    "russian": "улучшить, доработать",
    "meaning": "Попросить ИИ сделать ответ точнее, короче или понятнее.",
    "example": "Refine the draft.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "regenerate",
    "russian": "переделать",
    "meaning": "Попросить ИИ сделать ответ ещё раз, если первый вариант не понравился.",
    "example": "Regenerate the response.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "regression",
    "russian": "регрессия",
    "meaning": "Предсказание числа — например, цены или температуры по известным данным.",
    "example": "Regression predicts the price tomorrow.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "Reject",
    "russian": "отклонить",
    "meaning": "Отказаться от предложенного ИИ изменения — не вносить его.",
    "example": "Reject this change and try again.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "release",
    "russian": "релиз, выпуск",
    "meaning": "Выпуск — публикация новой версии продукта для пользователей.",
    "example": "The new release is available now.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "remote",
    "russian": "удаленный",
    "meaning": "Удалённый — находится в другом месте, доступен через интернет.",
    "example": "Remote access is enabled.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "rename chat",
    "russian": "переименовать чат",
    "meaning": "Дать разговору понятное название вместо «Новый чат».",
    "example": "Rename chat to Project Ideas.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "report",
    "russian": "отчет",
    "meaning": "Отчёт — сводка данных в удобном виде для просмотра или печати.",
    "example": "Generate a report for the manager.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "repository",
    "russian": "хранилище кода",
    "meaning": "Хранилище кода — место, где лежат все файлы проекта и история изменений.",
    "example": "Push your code to the repository.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "request",
    "russian": "запрос",
    "meaning": "Запрос — обращение от вашего браузера или программы к серверу.",
    "example": "Your request has been sent.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "request changes",
    "russian": "запросить правки",
    "meaning": "При проверке кода попросить автора что-то исправить перед слиянием.",
    "example": "Request changes before approval.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "requirement",
    "russian": "требование",
    "meaning": "Требование — чёткое описание того, что должна уметь программа.",
    "example": "Read the requirement carefully.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "resolve",
    "russian": "разрешить, устранить",
    "meaning": "Исправить конфликт или проблему — выбрать правильный вариант.",
    "example": "Resolve the conflict and save the file.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "response",
    "russian": "ответ",
    "meaning": "Ответ — то, что сервер или ИИ возвращает на ваш запрос.",
    "example": "The response arrived in two seconds.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "responsive",
    "russian": "адаптивный",
    "meaning": "Адаптивный — сайт подстраивается под размер экрана телефона или компьютера.",
    "example": "The site is responsive on all devices.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "restore",
    "russian": "восстановление",
    "meaning": "Восстановление — возврат данных из резервной копии.",
    "example": "Restore the file from backup.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "review",
    "russian": "проверить код",
    "meaning": "Посмотреть чужие изменения и оставить замечания или одобрение.",
    "example": "Please review my changes.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "review changes",
    "russian": "просмотр изменений",
    "meaning": "Проверить все правки, которые предложил ИИ, перед тем как сохранить.",
    "example": "Review changes before accepting them.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "roadmap",
    "russian": "дорожная карта",
    "meaning": "План развития — что и в каком порядке будут добавлять в продукт.",
    "example": "The roadmap shows plans for next year.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "role",
    "russian": "роль",
    "meaning": "Роль — набор прав пользователя в системе, например «редактор» или «гость».",
    "example": "Your role defines what you can do.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "rollback",
    "russian": "откатить назад",
    "meaning": "Вернуться к предыдущей рабочей версии, если новая что-то сломала.",
    "example": "Rollback the deployment.",
    "tags": [
      "разработка"
    ]
  },
  {
    "english": "rules",
    "russian": "правила для ИИ",
    "meaning": "Ваши инструкции для ИИ в проекте — как он должен писать код и отвечать.",
    "example": "Add rules to guide the AI assistant.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "scalability",
    "russian": "масштабируемость",
    "meaning": "Масштабируемость — способность системы справляться с ростом нагрузки.",
    "example": "Scalability matters for growing apps.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "screen",
    "russian": "экран",
    "meaning": "Экран — отдельная страница или окно в программе.",
    "example": "The next screen shows your results.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "scroll",
    "russian": "прокрутить",
    "meaning": "Листать страницу вверх или вниз, чтобы увидеть остальной текст.",
    "example": "Scroll down to read more.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "search",
    "russian": "поиск",
    "meaning": "Найти нужное слово, файл или раздел на сайте.",
    "example": "Search your chats.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "secrets",
    "russian": "секретные ключи",
    "meaning": "Скрытые пароли и токены для автоматизации — не видны в коде.",
    "example": "Store the API token in secrets.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "security",
    "russian": "безопасность",
    "meaning": "Безопасность — защита данных и аккаунтов от взлома и кражи.",
    "example": "Security is our top priority.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "server",
    "russian": "сервер",
    "meaning": "Сервер — мощный компьютер в интернете, который хранит сайт и обрабатывает запросы.",
    "example": "The server is running smoothly.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "settings",
    "russian": "настройки",
    "meaning": "Раздел, где можно изменить язык, тему оформления, уведомления и другие параметры программы.",
    "example": "Open Settings to change the language.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "share",
    "russian": "поделиться",
    "meaning": "Отправить ссылку или результат другому человеку.",
    "example": "Share this chat.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "shared link",
    "russian": "ссылка на чат",
    "meaning": "Адрес, по которому другой человек может прочитать ваш разговор.",
    "example": "Create a shared link for the chat.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "sidebar",
    "russian": "боковая панель",
    "meaning": "Меню слева или справа на экране — там обычно список чатов, файлов или разделов.",
    "example": "Open the sidebar.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "sign in",
    "russian": "войти",
    "meaning": "Войти в свой аккаунт с помощью логина и пароля или через Google.",
    "example": "Sign in to continue.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "sign up",
    "russian": "зарегистрироваться",
    "meaning": "Создать новый аккаунт на сайте или в программе.",
    "example": "Sign up for free.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "Skills",
    "russian": "навыки ИИ",
    "meaning": "Готовые инструкции для ИИ под конкретные задачи — как шаблоны поведения.",
    "example": "Add a skill for writing commit messages.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "software",
    "russian": "программное обеспечение",
    "meaning": "Программное обеспечение — любые программы на компьютере или телефоне.",
    "example": "This software runs on Windows and Mac.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "sort",
    "russian": "сортировка",
    "meaning": "Сортировка — упорядочивание списка, например по дате или по имени.",
    "example": "Sort the list by date.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "specification",
    "russian": "техническое задание",
    "meaning": "Техническое задание — подробное описание того, что нужно сделать.",
    "example": "The specification describes all features.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "spreadsheet",
    "russian": "электронная таблица",
    "meaning": "Электронная таблица — как Excel или Google Таблицы.",
    "example": "Open the spreadsheet and fill in the numbers.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "SQL",
    "russian": "язык запросов к базе данных",
    "meaning": "Язык запросов к базе данных — способ попросить компьютер найти или изменить данные в таблице.",
    "example": "Write an SQL query to find the data.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "squash",
    "russian": "объединить в один коммит",
    "meaning": "Сжать несколько мелких сохранений в одно — история становится чище.",
    "example": "Squash the commits before merging.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "star",
    "russian": "звезда, отметить",
    "meaning": "Поставить «звёздочку» проекту — как лайк, чтобы не потерять и показать интерес.",
    "example": "Star this repository if you find it useful.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "stash",
    "russian": "отложить изменения",
    "meaning": "Временно убрать незавершённые правки в сторону, чтобы переключиться на другое.",
    "example": "Stash your changes before switching branches.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "status",
    "russian": "статус",
    "meaning": "Статус — текущее состояние: выполнено, в процессе, ошибка.",
    "example": "The status is shown in green.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "stop generating",
    "russian": "остановить ответ",
    "meaning": "Прервать ИИ посередине — если ответ слишком длинный или не туда.",
    "example": "Click stop generating to cancel.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "subscription",
    "russian": "подписка",
    "meaning": "Платный доступ к сервису на месяц или год. Обычно даёт больше возможностей, чем бесплатная версия.",
    "example": "Manage your subscription.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "summarize",
    "russian": "кратко пересказать",
    "meaning": "Попросить ИИ выделить главное из длинного текста в нескольких предложениях.",
    "example": "Summarize this article.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "sync",
    "russian": "синхронизация",
    "meaning": "Данные одинаковые на всех устройствах — изменили на телефоне, увидели на компьютере.",
    "example": "Sync across devices.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "system prompt",
    "russian": "системная инструкция",
    "meaning": "Скрытое указание для ИИ, как себя вести — задаётся разработчиком.",
    "example": "The system prompt sets the assistant tone.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "tab completion",
    "russian": "подсказка при вводе",
    "meaning": "ИИ дописывает код за вас по мере набора — как умное автодополнение.",
    "example": "Tab completion saved me a lot of typing.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "table",
    "russian": "таблица",
    "meaning": "Таблица — данные, расположенные в строках и столбцах.",
    "example": "Data is shown in a table below.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "tag",
    "russian": "метка версии",
    "meaning": "Именованная отметка в истории — например v1.0 для выпуска.",
    "example": "Create a tag for this release.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "task",
    "russian": "задача",
    "meaning": "Задача — конкретное дело в рамках проекта.",
    "example": "Complete this task by Friday.",
    "tags": [
      "продукт"
    ]
  },
  {
    "english": "temperature",
    "russian": "креативность ответа",
    "meaning": "Настройка: низкое значение — ответы строгие и предсказуемые, высокое — более свободные и неожиданные.",
    "example": "Lower the temperature for accuracy.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "temporary chat",
    "russian": "временный чат",
    "meaning": "Разговор не сохраняется в истории и не используется для обучения.",
    "example": "Use temporary chat for private questions.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "terminal",
    "russian": "терминал",
    "meaning": "Окно для команд компьютера — можно запускать скрипты, не выходя из редактора.",
    "example": "Run the command in the terminal.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "testing",
    "russian": "тестирование",
    "meaning": "Тестирование — проверка, что программа работает правильно.",
    "example": "Testing starts before every release.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "thread",
    "russian": "цепочка сообщений",
    "meaning": "Последовательность сообщений в одном диалоге — вся переписка целиком.",
    "example": "The thread contains ten messages.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "thumbs down",
    "russian": "не нравится",
    "meaning": "Отметить ответ как плохой — можно объяснить, что не так.",
    "example": "Thumbs down and explain the problem.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "thumbs up",
    "russian": "нравится",
    "meaning": "Отметить ответ как хороший — помогает улучшить сервис.",
    "example": "Give a thumbs up if the answer helped.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "toggle",
    "russian": "переключатель",
    "meaning": "Кнопка-выключатель: нажали — включилось, нажали ещё раз — выключилось.",
    "example": "Toggle dark mode on.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "token",
    "russian": "единица текста",
    "meaning": "ИИ считает текст кусочками — словами и частями слов. Чем больше текста, тем больше единиц тратится.",
    "example": "This request uses many tokens.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "tool",
    "russian": "инструмент",
    "meaning": "Инструмент — программа или функция для решения конкретной задачи.",
    "example": "This tool helps you edit images.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "tooltip",
    "russian": "подсказка при наведении",
    "meaning": "Короткое объяснение, которое появляется, когда вы наводите курсор на кнопку или значок.",
    "example": "Hover to see the tooltip.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "train",
    "russian": "обучать",
    "meaning": "Обучать — натренировать ИИ на своих данных или примерах.",
    "example": "Train the model on your documents.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "training",
    "russian": "обучение",
    "meaning": "Обучение модели — процесс, когда ИИ изучает примеры и учится отвечать.",
    "example": "Model training takes several hours.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "translate",
    "russian": "перевести",
    "meaning": "Попросить ИИ перевести текст на другой язык.",
    "example": "Translate to Russian.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "UI",
    "russian": "пользовательский интерфейс",
    "meaning": "Пользовательский интерфейс — всё, что человек видит и с чем взаимодействует на экране.",
    "example": "The UI is clean and modern.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "undo",
    "russian": "отменить",
    "meaning": "Вернуть последнее действие назад — как «шаг назад».",
    "example": "Press undo to revert the edit.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "unit test",
    "russian": "модульный тест",
    "meaning": "Проверка одной маленькой части программы отдельно.",
    "example": "Each unit test checks one small part.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "update",
    "russian": "обновление",
    "meaning": "Обновление — установка новой версии с исправлениями или улучшениями.",
    "example": "Install the update when you are ready.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "upgrade",
    "russian": "улучшить тариф",
    "meaning": "Перейти на более дорогой план, чтобы получить больше функций.",
    "example": "Upgrade to Pro.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "upload",
    "russian": "загрузить файл",
    "meaning": "Отправить файл с компьютера на сайт — например, фото или документ для анализа ИИ.",
    "example": "Upload a PDF file.",
    "tags": [
      "сайт"
    ]
  },
  {
    "english": "URL",
    "russian": "адрес страницы",
    "meaning": "Адрес страницы в интернете — то, что написано в строке браузера.",
    "example": "Copy the URL and send it to a colleague.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "user",
    "russian": "пользователь",
    "meaning": "Пользователь — человек, который пользуется программой или сайтом.",
    "example": "The user signed in successfully.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "UX",
    "russian": "пользовательский опыт",
    "meaning": "Пользовательский опыт — насколько удобно и приятно пользоваться продуктом.",
    "example": "Good UX makes users happy.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "vector",
    "russian": "вектор",
    "meaning": "Набор чисел, которым компьютер описывает смысл слова или объекта.",
    "example": "Each word is stored as a vector.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "version",
    "russian": "версия",
    "meaning": "Версия — конкретный выпуск программы с номером, например 2.0.",
    "example": "Update to the latest version.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "virtual machine",
    "russian": "виртуальная машина",
    "meaning": "Виртуальный компьютер — программная копия компьютера внутри другого компьютера.",
    "example": "Run the app in a virtual machine.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "visualization",
    "russian": "визуализация",
    "meaning": "Визуализация — показ данных в виде графиков и диаграмм.",
    "example": "The visualization makes trends clear.",
    "tags": [
      "данные"
    ]
  },
  {
    "english": "voice",
    "russian": "голосовой режим",
    "meaning": "Говорить с ИИ вслух и слушать ответы — как по телефону.",
    "example": "Switch to voice mode on your phone.",
    "tags": [
      "ChatGPT"
    ]
  },
  {
    "english": "watch",
    "russian": "следить за проектом",
    "meaning": "Подписаться на обновления репозитория — будут приходить уведомления.",
    "example": "Watch the repo for new releases.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "web page",
    "russian": "веб-страница",
    "meaning": "Веб-страница — одна отдельная страница на сайте.",
    "example": "This web page loads very fast.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "web search",
    "russian": "поиск в интернете",
    "meaning": "ИИ ищет актуальную информацию в сети, а не только в вашем проекте.",
    "example": "Use web search for the latest docs.",
    "tags": [
      "Cursor"
    ]
  },
  {
    "english": "website",
    "russian": "сайт",
    "meaning": "Сайт — набор страниц в интернете под одним адресом.",
    "example": "Our website launched last month.",
    "tags": [
      "IT"
    ]
  },
  {
    "english": "Wiki",
    "russian": "вики проекта",
    "meaning": "Страницы с документацией и заметками внутри репозитория.",
    "example": "Add setup steps to the Wiki.",
    "tags": [
      "GitHub"
    ]
  },
  {
    "english": "wireframe",
    "russian": "каркас страницы",
    "meaning": "Черновой макет — схема страницы без цветов и картинок, только структура.",
    "example": "The wireframe shows the page structure.",
    "tags": [
      "дизайн"
    ]
  },
  {
    "english": "workflow",
    "russian": "рабочий процесс",
    "meaning": "Последовательность шагов: что делать сначала, что потом — чтобы дойти до результата.",
    "example": "Automate your workflow.",
    "tags": [
      "ИИ"
    ]
  },
  {
    "english": "workspace",
    "russian": "рабочая область",
    "meaning": "Открытая папка проекта в редакторе — всё, с чем вы сейчас работаете.",
    "example": "Open the workspace folder in Cursor.",
    "tags": [
      "Cursor"
    ]
  }
];
