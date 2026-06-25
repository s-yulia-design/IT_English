const fs = require('fs');

function parseDictionaryMd() {
  const text = fs.readFileSync('словарь.md', 'utf8');
  const entries = [];
  for (const line of text.split('\n')) {
    const m = line.match(/`([^`]+)`/);
    if (!m) continue;
    const inner = m[1];
    if (!inner.includes(';') || inner.startsWith('English')) continue;
    const parts = inner.split(';');
    const english = parts[0]?.trim();
    const russian = parts[1]?.trim();
    const category = (parts[2] || 'IT').trim();
    if (english && russian) entries.push({ english, russian, category });
  }
  return entries;
}

const dict = parseDictionaryMd();
const UI_CARDS = require('./ui-interface-cards.js');
const EXAMPLE_BY_TEXT = fs.existsSync('example-translations.json')
  ? JSON.parse(fs.readFileSync('example-translations.json', 'utf8'))
  : {};
const EXAMPLE_FIXES = {
  "Create an account to get started.": "Создайте аккаунт, чтобы начать.",
  "Go to your dashboard.": "Перейдите на главную панель.",
  "Cherry-pick this fix into release.": "Перенесите это исправление в релиз.",
  "Sort the list by date.": "Отсортируйте список по дате.",
  "Filter by date.": "Отфильтруйте по дате.",
  "Translate to Russian.": "Переведите на русский.",
  "Use blame to see who edited this line.": "Узнайте, кто изменил эту строку.",
  "Commit your changes.": "Сохраните свои изменения.",
  "Download the report.": "Скачайте отчёт.",
  "Delete this conversation.": "Удалите этот разговор.",
  "Share this chat.": "Поделитесь этим чатом.",
  "Search your chats.": "Найдите нужный чат.",
  "Upload a PDF file.": "Загрузите PDF-файл.",
  "Sync across devices.": "Синхронизируйте данные между устройствами.",
  "Manage your subscription.": "Управляйте подпиской.",
  "Sign up for free.": "Зарегистрируйтесь бесплатно.",
  "You have a new notification.": "У вас новое уведомление.",
  "Approve the pull request.": "Одобрите запрос на слияние.",
  "Archive old chats.": "Отправьте старые чаты в архив.",
  "Create a new branch.": "Создайте новую ветку.",
  "Open the site in your browser.": "Откройте сайт в браузере.",
  "CI failed on the last commit.": "Автопроверка не прошла на последнем коммите.",
  "Good prompt engineering gives better results.": "Умение составлять запросы даёт лучшие результаты.",
  "Toggle dark mode on.": "Включите тёмную тему.",
  "Update to the latest version.": "Обновитесь до последней версии.",
  "Upgrade to Pro.": "Перейдите на тариф Pro.",
  "The embedding captures the meaning of a word.": "Числовое представление передаёт смысл слова.",
  "GitHub Actions runs tests on every push.": "GitHub Actions запускает тесты при каждой отправке кода.",
  "Write a clear prompt.": "Напишите понятный запрос к ИИ.",
  "Click Generate to create a new image.": "Нажмите Generate, чтобы создать новую картинку.",
  "Regenerate the response.": "Переделайте ответ, если он не подошёл.",
  "Open Settings to change the language.": "Откройте настройки, чтобы сменить язык.",
  "Sign in to continue.": "Войдите, чтобы продолжить.",
  "Log out when you're done.": "Выйдите, когда закончите работу.",
  "Select a model from the dropdown.": "Выберите модель из выпадающего списка.",
  "Open the sidebar.": "Откройте боковую панель.",
  "Hover to see the tooltip.": "Наведите курсор, чтобы увидеть подсказку.",
  "Scroll down to read more.": "Прокрутите вниз, чтобы прочитать дальше.",
  "Copy the response.": "Скопируйте ответ.",
  "Paste your text here.": "Вставьте текст сюда."
};

const ORIGINAL_SEED = [
  { english: "prompt", russian: "запрос, подсказка", meaning: "Текст, который вы пишете ИИ, чтобы он понял, что вам нужно. Чем яснее запрос — тем лучше ответ.", example: "Write a clear prompt.", tags: ["ИИ"] },
  { english: "generate", russian: "создать, сгенерировать", meaning: "Кнопка или команда «сделай заново» — ИИ придумает новый текст, картинку или ответ.", example: "Click Generate to create a new image.", tags: ["ИИ"] },
  { english: "regenerate", russian: "переделать", meaning: "Попросить ИИ сделать ответ ещё раз, если первый вариант не понравился.", example: "Regenerate the response.", tags: ["ИИ"] },
  { english: "settings", russian: "настройки", meaning: "Раздел, где можно изменить язык, тему оформления, уведомления и другие параметры программы.", example: "Open Settings to change the language.", tags: ["сайт"] },
  { english: "dashboard", russian: "главная панель", meaning: "Страница со сводкой: здесь видно основную информацию, кнопки и быстрый доступ к разделам.", example: "Go to your dashboard.", tags: ["сайт"] },
  { english: "sign in", russian: "войти", meaning: "Войти в свой аккаунт с помощью логина и пароля или через Google.", example: "Sign in to continue.", tags: ["сайт"] },
  { english: "sign up", russian: "зарегистрироваться", meaning: "Создать новый аккаунт на сайте или в программе.", example: "Sign up for free.", tags: ["сайт"] },
  { english: "log out", russian: "выйти", meaning: "Завершить сеанс работы — чтобы никто другой не мог зайти под вашим именем.", example: "Log out when you're done.", tags: ["сайт"] },
  { english: "subscription", russian: "подписка", meaning: "Платный доступ к сервису на месяц или год. Обычно даёт больше возможностей, чем бесплатная версия.", example: "Manage your subscription.", tags: ["сайт"] },
  { english: "upgrade", russian: "улучшить тариф", meaning: "Перейти на более дорогой план, чтобы получить больше функций.", example: "Upgrade to Pro.", tags: ["сайт"] },
  { english: "notification", russian: "уведомление", meaning: "Сообщение от сайта или программы — например, что ответ готов или закончилась подписка.", example: "You have a new notification.", tags: ["сайт"] },
  { english: "toggle", russian: "переключатель", meaning: "Кнопка-выключатель: нажали — включилось, нажали ещё раз — выключилось.", example: "Toggle dark mode on.", tags: ["сайт"] },
  { english: "dropdown", russian: "выпадающий список", meaning: "Меню, которое открывается при нажатии и показывает варианты на выбор.", example: "Select a model from the dropdown.", tags: ["сайт"] },
  { english: "sidebar", russian: "боковая панель", meaning: "Меню слева или справа на экране — там обычно список чатов, файлов или разделов.", example: "Open the sidebar.", tags: ["сайт"] },
  { english: "tooltip", russian: "подсказка при наведении", meaning: "Короткое объяснение, которое появляется, когда вы наводите курсор на кнопку или значок.", example: "Hover to see the tooltip.", tags: ["сайт"] },
  { english: "scroll", russian: "прокрутить", meaning: "Листать страницу вверх или вниз, чтобы увидеть остальной текст.", example: "Scroll down to read more.", tags: ["сайт"] },
  { english: "upload", russian: "загрузить файл", meaning: "Отправить файл с компьютера на сайт — например, фото или документ для анализа ИИ.", example: "Upload a PDF file.", tags: ["сайт"] },
  { english: "download", russian: "скачать", meaning: "Сохранить файл с сайта на свой компьютер.", example: "Download the report.", tags: ["сайт"] },
  { english: "copy", russian: "скопировать", meaning: "Скопировать текст или ссылку в буфер обмена, чтобы вставить в другое место.", example: "Copy the answer.", tags: ["сайт"] },
  { english: "paste", russian: "вставить", meaning: "Вставить ранее скопированный текст в поле ввода.", example: "Paste your text here.", tags: ["сайт"] },
  { english: "search", russian: "поиск", meaning: "Найти нужное слово, файл или раздел на сайте.", example: "Search your chats.", tags: ["сайт"] },
  { english: "filter", russian: "фильтр", meaning: "Показать только то, что подходит под условие — например, только картинки или только за последнюю неделю.", example: "Filter by date.", tags: ["сайт"] },
  { english: "share", russian: "поделиться", meaning: "Отправить ссылку или результат другому человеку.", example: "Share this chat.", tags: ["сайт"] },
  { english: "delete", russian: "удалить", meaning: "Убрать навсегда — чат, файл или запись.", example: "Delete this conversation.", tags: ["сайт"] },
  { english: "archive", russian: "в архив", meaning: "Убрать из активного списка, но не удалять — можно вернуть позже.", example: "Archive old chats.", tags: ["сайт"] },
  { english: "summarize", russian: "кратко пересказать", meaning: "Попросить ИИ выделить главное из длинного текста в нескольких предложениях.", example: "Summarize this article.", tags: ["ИИ"] },
  { english: "translate", russian: "перевести", meaning: "Попросить ИИ перевести текст на другой язык.", example: "Translate to Russian.", tags: ["ИИ"] },
  { english: "refine", russian: "улучшить, доработать", meaning: "Попросить ИИ сделать ответ точнее, короче или понятнее.", example: "Refine the draft.", tags: ["ИИ"] },
  { english: "iterate", russian: "повторять, дорабатывать", meaning: "Снова и снова улучшать результат — менять запрос и смотреть новый ответ.", example: "Let's iterate on this idea.", tags: ["ИИ"] },
  { english: "context", russian: "контекст, предыстория", meaning: "Вся предыдущая переписка и файлы, которые ИИ «помнит» в рамках одного разговора.", example: "The model lost context.", tags: ["ИИ"] },
  { english: "context window", russian: "объём памяти чата", meaning: "Сколько текста ИИ может держать в голове за один раз. Если переписка слишком длинная — он начинает забывать начало.", example: "This chat exceeded the context window.", tags: ["ИИ"] },
  { english: "token", russian: "единица текста", meaning: "ИИ считает текст кусочками — словами и частями слов. Чем больше текста, тем больше единиц тратится.", example: "This request uses many tokens.", tags: ["ИИ"] },
  { english: "model", russian: "модель ИИ", meaning: "Конкретная версия искусственного интеллекта — например, GPT-4 или Claude. Разные модели по-разному отвечают.", example: "Choose a model.", tags: ["ИИ"] },
  { english: "temperature", russian: "креативность ответа", meaning: "Настройка: низкое значение — ответы строгие и предсказуемые, высокое — более свободные и неожиданные.", example: "Lower the temperature for accuracy.", tags: ["ИИ"] },
  { english: "hallucination", russian: "выдуманный ответ", meaning: "Когда ИИ уверенно пишет то, чего на самом деле нет — выдумывает факты или ссылки.", example: "Watch out for hallucinations.", tags: ["ИИ"] },
  { english: "fine-tune", russian: "дообучить под задачу", meaning: "Дополнительно настроить ИИ под конкретную тему или стиль — как личный помощник для вашей работы.", example: "Fine-tune the model on your data.", tags: ["ИИ"] },
  { english: "inference", russian: "работа ИИ", meaning: "Момент, когда модель думает и выдаёт ответ. Часто говорят о скорости или стоимости этого процесса.", example: "Inference is running.", tags: ["ИИ"] },
  { english: "workflow", russian: "рабочий процесс", meaning: "Последовательность шагов: что делать сначала, что потом — чтобы дойти до результата.", example: "Automate your workflow.", tags: ["ИИ"] },
  { english: "integration", russian: "подключение к другому сервису", meaning: "Связать одну программу с другой — например, ИИ-чат с почтой или таблицами.", example: "Set up an integration.", tags: ["ИИ"] },
  { english: "sync", russian: "синхронизация", meaning: "Данные одинаковые на всех устройствах — изменили на телефоне, увидели на компьютере.", example: "Sync across devices.", tags: ["сайт"] },
  { english: "deploy", russian: "запустить, опубликовать", meaning: "Выложить готовый проект в интернет, чтобы им могли пользоваться другие.", example: "Deploy the website.", tags: ["разработка"] },
  { english: "debug", russian: "найти и исправить ошибку", meaning: "Разобраться, почему что-то не работает, и устранить проблему.", example: "Debug the code.", tags: ["разработка"] },
  { english: "API", russian: "способ обмена данными", meaning: "«Язык», на котором одна программа просит другую что-то сделать — например, отправить запрос к ИИ.", example: "Connect via the API.", tags: ["разработка"] },
  { english: "endpoint", russian: "точка входа", meaning: "Конкретный адрес в системе, куда отправляется запрос — как номер окошка в банке.", example: "Call the chat endpoint.", tags: ["разработка"] },
  { english: "commit", russian: "сохранить изменения", meaning: "Зафиксировать правки в проекте с коротким описанием — как сохранить версию черновика.", example: "Commit your changes.", tags: ["разработка"] },
  { english: "merge", russian: "объединить", meaning: "Слить две ветки правок в одну общую версию файлов.", example: "Merge the pull request.", tags: ["разработка"] },
  { english: "branch", russian: "ветка", meaning: "Отдельная копия проекта для экспериментов — основная версия при этом не ломается.", example: "Create a new branch.", tags: ["разработка"] },
  { english: "refactor", russian: "улучшить структуру", meaning: "Переписать код так, чтобы он стал понятнее и проще, не меняя суть работы.", example: "Refactor this module.", tags: ["разработка"] },
  { english: "rollback", russian: "откатить назад", meaning: "Вернуться к предыдущей рабочей версии, если новая что-то сломала.", example: "Rollback the deployment.", tags: ["разработка"] },
  { english: "onboarding", russian: "знакомство с сервисом", meaning: "Первые шаги для нового пользователя — подсказки, как пользоваться программой.", example: "Complete the onboarding.", tags: ["сайт"] }
];

const MEANINGS = {
  "algorithm": "Пошаговая инструкция для решения задачи — как рецепт, только для компьютера.",
  "artificial intelligence": "Искусственный интеллект — программа, которая умеет учиться и отвечать почти как человек.",
  "ai": "Сокращение от «искусственный интеллект». Так называют умные программы вроде ChatGPT.",
  "machine learning": "Машинное обучение — когда программа учится на примерах, а не по жёстким правилам.",
  "deep learning": "Глубокое обучение — сложный способ обучения ИИ на больших объёмах данных.",
  "neural network": "Нейронная сеть — система внутри ИИ, которая обрабатывает информацию слоями, похожими на работу мозга.",
  "language model": "Языковая модель — ИИ, обученный понимать и создавать текст на человеческом языке.",
  "large language model": "Большая языковая модель — мощная версия ИИ для текста, например ChatGPT или Claude.",
  "llm": "Сокращение от «большая языковая модель» — умный текстовый ИИ.",
  "prompt engineering": "Умение правильно формулировать запросы к ИИ, чтобы получать лучшие ответы.",
  "embedding": "Способ представить слово или фразу в виде чисел, чтобы ИИ мог их сравнивать и искать похожие.",
  "vector": "Набор чисел, которым компьютер описывает смысл слова или объекта.",
  "dataset": "Набор данных — коллекция примеров, на которых учат или проверяют ИИ.",
  "data": "Данные — любая информация: тексты, числа, картинки, таблицы.",
  "training": "Обучение модели — процесс, когда ИИ изучает примеры и учится отвечать.",
  "train": "Обучать — натренировать ИИ на своих данных или примерах.",
  "fine-tuning": "Дообучение — дополнительная настройка готовой модели под вашу конкретную задачу.",
  "prediction": "Прогноз — то, что ИИ предсказывает на основе имеющихся данных.",
  "classification": "Разделение объектов по категориям — например, спам или не спам.",
  "regression": "Предсказание числа — например, цены или температуры по известным данным.",
  "clustering": "Группировка похожих объектов без заранее заданных категорий.",
  "accuracy": "Точность — насколько часто ИИ отвечает правильно.",
  "precision": "Точность попадания — из всех ответов «да» сколько действительно верных.",
  "recall": "Полнота — насколько хорошо ИИ находит все нужные случаи.",
  "loss": "Показатель ошибки при обучении — чем меньше, тем лучше учится модель.",
  "feature": "Признак — отдельная характеристика в данных, по которой ИИ делает вывод.",
  "label": "Метка — правильный ответ или категория для примера при обучении.",
  "input": "Входные данные — то, что вы подаёте на вход программе или ИИ.",
  "output": "Выходные данные — то, что программа или ИИ выдаёт в ответ.",
  "automation": "Автоматизация — когда рутинные действия выполняет программа без участия человека.",
  "agent": "ИИ-агент — программа, которая сама выполняет задачи по шагам, а не только отвечает на вопросы.",
  "chatbot": "Чат-бот — программа, с которой можно переписываться в чате.",
  "assistant": "Помощник — ИИ или программа, которая помогает решать задачи и отвечает на вопросы.",
  "pipeline": "Цепочка шагов обработки — данные проходят через несколько этапов подряд.",
  "interface": "Интерфейс — всё, что вы видите и нажимаете на экране: кнопки, меню, поля.",
  "database": "База данных — место, где программа хранит информацию упорядоченно.",
  "sql": "Язык запросов к базе данных — способ попросить компьютер найти или изменить данные в таблице.",
  "query": "Запрос — просьба к системе найти или получить нужную информацию.",
  "server": "Сервер — мощный компьютер в интернете, который хранит сайт и обрабатывает запросы.",
  "client": "Клиент — ваша программа или браузер, который обращается к серверу.",
  "cloud": "Облако — хранение и работа с данными через интернет, а не только на своём компьютере.",
  "hosting": "Хостинг — услуга размещения сайта или программы на сервере в интернете.",
  "deployment": "Развёртывание — выкладка готовой программы или сайта, чтобы им можно было пользоваться.",
  "frontend": "Внешняя часть сайта — то, что видит и нажимает пользователь.",
  "backend": "Внутренняя часть сайта — логика и данные, которые работают «за кулисами».",
  "full-stack": "Полный цикл — когда человек умеет и внешнюю, и внутреннюю часть разработки.",
  "framework": "Готовый каркас для разработки — набор инструментов, ускоряющих создание программы.",
  "library": "Библиотека — набор готовых функций, которые можно подключить к своей программе.",
  "repository": "Хранилище кода — место, где лежат все файлы проекта и история изменений.",
  "git": "Система контроля версий — программа, которая сохраняет все версии вашего кода.",
  "github": "Популярный сайт для хранения кода и совместной работы над проектами.",
  "pull request": "Запрос на слияние — предложение добавить свои правки в общий проект.",
  "bug": "Ошибка в программе — что-то работает не так, как задумано.",
  "debugging": "Отладка — поиск и исправление ошибок в программе.",
  "error": "Ошибка — сообщение о том, что что-то пошло не так.",
  "exception": "Сбой в программе — неожиданная ситуация, которую код не смог обработать.",
  "log": "Журнал событий — запись того, что происходило в программе, для поиска проблем.",
  "testing": "Тестирование — проверка, что программа работает правильно.",
  "unit test": "Проверка одной маленькой части программы отдельно.",
  "version": "Версия — конкретный выпуск программы с номером, например 2.0.",
  "update": "Обновление — установка новой версии с исправлениями или улучшениями.",
  "software": "Программное обеспечение — любые программы на компьютере или телефоне.",
  "application": "Приложение — программа для конкретных задач.",
  "app": "Сокращение от «приложение» — программа на телефоне или компьютере.",
  "platform": "Платформа — основа, на которой работают другие программы или сервисы.",
  "tool": "Инструмент — программа или функция для решения конкретной задачи.",
  "analytics": "Аналитика — сбор и разбор данных, чтобы понять, как что-то работает.",
  "metrics": "Показатели — числа, по которым судят об успехе: посещения, продажи, скорость.",
  "report": "Отчёт — сводка данных в удобном виде для просмотра или печати.",
  "visualization": "Визуализация — показ данных в виде графиков и диаграмм.",
  "chart": "График или диаграмма — наглядное изображение чисел и тенденций.",
  "table": "Таблица — данные, расположенные в строках и столбцах.",
  "spreadsheet": "Электронная таблица — как Excel или Google Таблицы.",
  "file": "Файл — отдельный документ, картинка или другой объект на компьютере.",
  "folder": "Папка — место для хранения файлов, как папка в шкафу.",
  "link": "Ссылка — адрес, по которому можно перейти на другую страницу или файл.",
  "url": "Адрес страницы в интернете — то, что написано в строке браузера.",
  "browser": "Браузер — программа для просмотра сайтов: Chrome, Firefox, Edge.",
  "website": "Сайт — набор страниц в интернете под одним адресом.",
  "web page": "Веб-страница — одна отдельная страница на сайте.",
  "landing page": "Посадочная страница — простая страница с одной главной целью, например регистрация.",
  "domain": "Домен — имя сайта, например google.com.",
  "security": "Безопасность — защита данных и аккаунтов от взлома и кражи.",
  "authentication": "Проверка личности — подтверждение, что вы действительно тот, за кого себя выдаёте.",
  "authorization": "Проверка прав — можно ли вам делать то, что вы пытаетесь сделать.",
  "password": "Пароль — секретное слово для входа в аккаунт.",
  "encryption": "Шифрование — превращение данных в нечитаемый вид, чтобы их нельзя было украсть.",
  "privacy": "Конфиденциальность — защита ваших личных данных от посторонних.",
  "permission": "Разрешение — право программы или человека на определённые действия.",
  "access": "Доступ — возможность открыть, посмотреть или изменить что-то.",
  "user": "Пользователь — человек, который пользуется программой или сайтом.",
  "admin": "Администратор — человек с полными правами управления системой.",
  "role": "Роль — набор прав пользователя в системе, например «редактор» или «гость».",
  "account": "Аккаунт — ваш личный профиль в сервисе с логином и настройками.",
  "profile": "Профиль — страница с вашими данными: имя, фото, настройки.",
  "message": "Сообщение — текст, который вы отправляете или получаете в чате или почте.",
  "email": "Электронная почта — письма через интернет.",
  "sort": "Сортировка — упорядочивание списка, например по дате или по имени.",
  "button": "Кнопка — элемент на экране, который нажимают для действия.",
  "form": "Форма — блок с полями для ввода данных, например при регистрации.",
  "field": "Поле — место, куда можно ввести текст или выбрать значение.",
  "menu": "Меню — список разделов или действий на сайте.",
  "screen": "Экран — отдельная страница или окно в программе.",
  "layout": "Расположение элементов — как разложены кнопки, текст и картинки на странице.",
  "design": "Дизайн — внешний вид и удобство использования интерфейса.",
  "ux": "Пользовательский опыт — насколько удобно и приятно пользоваться продуктом.",
  "ui": "Пользовательский интерфейс — всё, что человек видит и с чем взаимодействует на экране.",
  "prototype": "Прототип — черновая версия интерфейса для проверки идеи до полной разработки.",
  "wireframe": "Черновой макет — схема страницы без цветов и картинок, только структура.",
  "responsive": "Адаптивный — сайт подстраивается под размер экрана телефона или компьютера.",
  "mobile": "Мобильный — для телефона или планшета.",
  "desktop": "Настольный — для обычного компьютера или ноутбука.",
  "device": "Устройство — компьютер, телефон, планшет или другое оборудование.",
  "network": "Сеть — соединение между компьютерами для обмена данными.",
  "internet": "Интернет — всемирная сеть, через которую работают сайты и онлайн-сервисы.",
  "connection": "Подключение — связь между вашим устройством и сервером или интернетом.",
  "request": "Запрос — обращение от вашего браузера или программы к серверу.",
  "response": "Ответ — то, что сервер или ИИ возвращает на ваш запрос.",
  "status": "Статус — текущее состояние: выполнено, в процессе, ошибка.",
  "cache": "Кэш — временное хранение данных для ускорения повторной загрузки.",
  "performance": "Производительность — насколько быстро и плавно работает программа.",
  "optimization": "Оптимизация — улучшение скорости и эффективности работы.",
  "scalability": "Масштабируемость — способность системы справляться с ростом нагрузки.",
  "backup": "Резервная копия — запасная копия данных на случай потери.",
  "restore": "Восстановление — возврат данных из резервной копии.",
  "configuration": "Настройка, конфигурация — параметры, определяющие, как работает система.",
  "environment": "Среда — условия, в которых работает программа: тестовая или рабочая.",
  "local": "Локальный — на вашем компьютере, а не в интернете.",
  "remote": "Удалённый — находится в другом месте, доступен через интернет.",
  "virtual machine": "Виртуальный компьютер — программная копия компьютера внутри другого компьютера.",
  "container": "Контейнер — упакованная среда для запуска программы одинаково на разных машинах.",
  "docker": "Популярная программа для запуска приложений в контейнерах.",
  "api key": "Секретный ключ — пароль для доступа программы к сервису через API.",
  "json": "Популярный текстовый формат для обмена данными между программами.",
  "csv": "Формат таблицы в виде текста — удобен для Excel и импорта данных.",
  "html": "Язык разметки — описывает структуру веб-страницы: заголовки, кнопки, текст.",
  "css": "Язык стилей — задаёт цвета, шрифты и расположение элементов на странице.",
  "javascript": "Язык программирования для интерактивности на сайтах — анимации, кнопки, формы.",
  "python": "Популярный язык программирования, часто используется в ИИ и автоматизации.",
  "code": "Код — инструкции для компьютера, написанные на языке программирования.",
  "coding": "Программирование — написание кода для создания программ.",
  "developer": "Разработчик — человек, который создаёт программы и сайты.",
  "programmer": "Программист — специалист, пишущий код.",
  "engineer": "Инженер — специалист, который проектирует и строит технические системы.",
  "product manager": "Менеджер продукта — человек, который решает, какие функции нужны пользователям.",
  "project": "Проект — работа с целью и сроками, например создание нового сайта.",
  "task": "Задача — конкретное дело в рамках проекта.",
  "feature request": "Пожелание пользователя добавить новую функцию в продукт.",
  "requirement": "Требование — чёткое описание того, что должна уметь программа.",
  "specification": "Техническое задание — подробное описание того, что нужно сделать.",
  "mvp": "Минимальная версия продукта — только самые нужные функции для первого запуска.",
  "roadmap": "План развития — что и в каком порядке будут добавлять в продукт.",
  "release": "Выпуск — публикация новой версии продукта для пользователей.",
  "feedback": "Обратная связь — отзывы и замечания от пользователей."
};

const RUSSIAN_SIMPLE = {
  "prompt engineering": "составление запросов к ИИ",
  "token": "единица текста",
  "embedding": "числовое представление слова",
  "dashboard": "главная панель",
  "upload": "загрузить файл",
  "download": "скачать",
  "upgrade": "улучшить тариф",
  "commit": "сохранить изменения",
  "merge": "объединить",
  "api": "способ обмена данными",
  "integration": "подключение к сервису",
  "inference": "работа ИИ",
  "fine-tuning": "дообучение модели",
  "authentication": "проверка личности",
  "authorization": "проверка прав",
  "frontend": "внешняя часть сайта",
  "backend": "внутренняя часть сайта",
  "full-stack": "полный цикл разработки",
  "framework": "готовый каркас для разработки",
  "repository": "хранилище кода",
  "configuration": "настройка системы",
  "endpoint": "точка входа для запроса"
};

function catToTag(category) {
  if (!category) return ["IT"];
  if (category.startsWith("AI")) return ["ИИ"];
  if (category.includes("Data")) return ["данные"];
  if (category.includes("Design")) return ["дизайн"];
  if (category.includes("Product")) return ["продукт"];
  if (category.includes("Marketing")) return ["маркетинг"];
  return ["IT"];
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const EXAMPLE_OVERRIDES = {
  "algorithm": "This algorithm sorts the list quickly.",
  "artificial intelligence": "Artificial intelligence is changing how we work.",
  "ai": "AI can help you write emails faster.",
  "machine learning": "Machine learning improves with more data.",
  "deep learning": "Deep learning powers modern image recognition.",
  "neural network": "A neural network learns from examples.",
  "language model": "The language model understands your question.",
  "large language model": "A large language model can write long texts.",
  "llm": "This LLM answers in natural language.",
  "prompt engineering": "Good prompt engineering gives better results.",
  "embedding": "The embedding captures the meaning of a word.",
  "vector": "Each word is stored as a vector.",
  "dataset": "We need a larger dataset for training.",
  "data": "Your data is stored securely.",
  "training": "Model training takes several hours.",
  "train": "Train the model on your documents.",
  "fine-tuning": "Fine-tuning adapts the model to your needs.",
  "prediction": "The prediction was surprisingly accurate.",
  "classification": "Classification separates spam from normal mail.",
  "regression": "Regression predicts the price tomorrow.",
  "clustering": "Clustering groups similar customers together.",
  "accuracy": "The accuracy of the model is 95%.",
  "precision": "High precision means fewer false alarms.",
  "recall": "Recall shows how many cases we found.",
  "loss": "The loss decreased after each training round.",
  "feature": "Each feature describes one property of the data.",
  "label": "Add a label to each training example.",
  "input": "Type your input in the text box.",
  "output": "Check the output before you share it.",
  "automation": "Automation saves time on routine tasks.",
  "agent": "The AI agent completed the task for you.",
  "chatbot": "The chatbot answered my question instantly.",
  "assistant": "The assistant helped me write a letter.",
  "pipeline": "The pipeline processes data step by step.",
  "interface": "The interface is simple and clear.",
  "database": "All users are stored in the database.",
  "sql": "Write an SQL query to find the data.",
  "query": "Enter your query and press Search.",
  "server": "The server is running smoothly.",
  "client": "The client connects to the server.",
  "cloud": "Your files are saved in the cloud.",
  "hosting": "We bought hosting for our website.",
  "deployment": "Deployment finished without errors.",
  "frontend": "The frontend shows buttons and menus.",
  "backend": "The backend handles data and logic.",
  "full-stack": "She works as a full-stack developer.",
  "framework": "This framework speeds up development.",
  "library": "Import the library into your project.",
  "repository": "Push your code to the repository.",
  "git": "Use Git to track your changes.",
  "github": "The project is hosted on GitHub.",
  "pull request": "Open a pull request for review.",
  "bug": "We found a bug in the login form.",
  "debugging": "Debugging took most of the afternoon.",
  "error": "An error occurred. Please try again.",
  "exception": "The program threw an exception.",
  "log": "Check the log for more details.",
  "testing": "Testing starts before every release.",
  "unit test": "Each unit test checks one small part.",
  "version": "Update to the latest version.",
  "update": "Install the update when you are ready.",
  "software": "This software runs on Windows and Mac.",
  "application": "Download the application from the store.",
  "app": "Open the app on your phone.",
  "platform": "The platform supports many integrations.",
  "tool": "This tool helps you edit images.",
  "analytics": "Analytics shows how users behave.",
  "metrics": "Track the key metrics every week.",
  "report": "Generate a report for the manager.",
  "visualization": "The visualization makes trends clear.",
  "chart": "The chart shows sales by month.",
  "table": "Data is shown in a table below.",
  "spreadsheet": "Open the spreadsheet and fill in the numbers.",
  "file": "Save the file to your computer.",
  "folder": "Create a new folder for your photos.",
  "link": "Click the link to open the page.",
  "url": "Copy the URL and send it to a colleague.",
  "browser": "Open the site in your browser.",
  "website": "Our website launched last month.",
  "web page": "This web page loads very fast.",
  "landing page": "The landing page explains our product.",
  "domain": "We bought a new domain name.",
  "security": "Security is our top priority.",
  "authentication": "Authentication failed. Check your password.",
  "authorization": "You need authorization to access this page.",
  "password": "Choose a strong password.",
  "encryption": "Encryption protects your messages.",
  "privacy": "Read our privacy policy.",
  "permission": "The app asks for camera permission.",
  "access": "You do not have access to this file.",
  "user": "The user signed in successfully.",
  "admin": "Contact the admin for help.",
  "role": "Your role defines what you can do.",
  "account": "Create an account to get started.",
  "profile": "Update your profile photo.",
  "message": "You have a new message.",
  "email": "Check your email for the confirmation.",
  "sort": "Sort the list by date.",
  "button": "Press the button to continue.",
  "form": "Fill out the form and submit it.",
  "field": "This field is required.",
  "menu": "Open the menu in the top corner.",
  "screen": "The next screen shows your results.",
  "layout": "The layout looks good on mobile.",
  "design": "We improved the design of the app.",
  "ux": "Good UX makes users happy.",
  "ui": "The UI is clean and modern.",
  "prototype": "We built a prototype in one week.",
  "wireframe": "The wireframe shows the page structure.",
  "responsive": "The site is responsive on all devices.",
  "mobile": "Use the mobile app on the go.",
  "desktop": "The desktop version has more features.",
  "device": "This device is not supported.",
  "network": "The network connection is unstable.",
  "internet": "You need internet to use this service.",
  "connection": "The connection was lost. Reconnecting...",
  "request": "Your request has been sent.",
  "response": "The response arrived in two seconds.",
  "status": "The status is shown in green.",
  "cache": "Clear the cache if the page looks old.",
  "performance": "Performance improved after the update.",
  "optimization": "Optimization reduced loading time.",
  "scalability": "Scalability matters for growing apps.",
  "backup": "Make a backup before you update.",
  "restore": "Restore the file from backup.",
  "configuration": "Check the configuration settings.",
  "environment": "This environment is for testing only.",
  "local": "Files are stored on your local computer.",
  "remote": "Remote access is enabled.",
  "virtual machine": "Run the app in a virtual machine.",
  "container": "The app runs inside a container.",
  "docker": "We use Docker to deploy the service.",
  "api key": "Keep your API key secret.",
  "json": "The data is saved in JSON format.",
  "csv": "Export the table as a CSV file.",
  "html": "HTML defines the structure of a page.",
  "css": "CSS controls colors and fonts.",
  "javascript": "JavaScript makes the page interactive.",
  "python": "Python is popular for AI projects.",
  "code": "Review the code before you publish.",
  "coding": "Coding skills are useful in many jobs.",
  "developer": "The developer fixed the issue quickly.",
  "programmer": "A programmer writes instructions for computers.",
  "engineer": "The engineer designed the system.",
  "product manager": "The product manager planned the release.",
  "project": "The project starts next Monday.",
  "task": "Complete this task by Friday.",
  "feature request": "Send us your feature request.",
  "requirement": "Read the requirement carefully.",
  "specification": "The specification describes all features.",
  "mvp": "We launched an MVP in three months.",
  "roadmap": "The roadmap shows plans for next year.",
  "release": "The new release is available now.",
  "feedback": "We appreciate your feedback."
};

function generateExample(english, tags) {
  const key = english.toLowerCase();
  if (EXAMPLE_OVERRIDES[key]) return EXAMPLE_OVERRIDES[key];

  const verbs = new Set([
    'upload', 'download', 'search', 'filter', 'share', 'copy', 'paste', 'delete',
    'merge', 'commit', 'deploy', 'debug', 'train', 'summarize', 'translate',
    'refine', 'generate', 'regenerate', 'toggle', 'scroll', 'archive', 'sync',
    'update', 'upgrade', 'restore', 'backup', 'connect', 'install', 'configure',
    'authenticate', 'authorize', 'encrypt', 'iterate', 'refine', 'summarize'
  ]);

  const low = key;
  const first = low.split(' ')[0];
  if (verbs.has(first) || verbs.has(low)) {
    return capitalize(english) + '.';
  }
  if (low.startsWith('sign ')) return capitalize(english) + ' to continue.';
  if (low === 'log out') return 'Log out when you finish work.';
  if (low.includes(' ')) return `Learn how to use ${english} in IT.`;
  if (tags.includes('ИИ')) return `The ${low} is common in AI tools.`;
  return `Open the ${low} in the settings.`;
}

function ruWord(card) {
  return (card.russian || '').split(',')[0].trim();
}

function generateExampleRu(card) {
  const ex = (card.example || '').trim();
  if (!ex) return '';
  if (EXAMPLE_FIXES[ex]) return EXAMPLE_FIXES[ex];
  if (EXAMPLE_BY_TEXT[ex]) return EXAMPLE_BY_TEXT[ex];
  const key = card.english.toLowerCase();
  if (EXAMPLE_RU[key]) return EXAMPLE_RU[key];
  const ru = ruWord(card);

  const rules = [
    [/^open the /i, `Откройте «${ru}».`],
    [/^open /i, `Откройте ${ru}.`],
    [/^click /i, `Нажмите «${ru}».`],
    [/^press /i, `Нажмите «${ru}».`],
    [/^use /i, `Используйте «${ru}».`],
    [/^check /i, `Проверьте: ${ru}.`],
    [/^enable /i, `Включите «${ru}».`],
    [/^turn on /i, `Включите «${ru}».`],
    [/^switch to /i, `Переключитесь на «${ru}».`],
    [/^start /i, `Начните: ${ru}.`],
    [/^find /i, `Найдите в ${ru}.`],
    [/^save /i, `Сохраните ${ru}.`],
    [/^create /i, `Создайте ${ru}.`],
    [/^add /i, `Добавьте ${ru}.`],
    [/^go to /i, `Перейдите в ${ru}.`],
    [/^learn how to use /i, `Узнайте, как использовать «${ru}» в IT.`],
    [/^the .+ is common in ai tools/i, `«${ru}» часто встречается в ИИ-инструментах.`],
    [/^review /i, `Просмотрите ${ru} перед сохранением.`],
    [/^merge /i, `Объедините изменения.`],
    [/^push /i, `Отправьте изменения на сервер.`],
    [/^pull /i, `Получите последние обновления.`],
    [/^upload /i, `Загрузите файл на сайт.`],
    [/^download /i, `Скачайте файл на компьютер.`],
    [/^sign in/i, `Войдите, чтобы продолжить.`],
    [/^sign up/i, `Зарегистрируйтесь бесплатно.`],
    [/^log out/i, `Выйдите, когда закончите работу.`],
    [/^write /i, `Напишите ${ru}.`],
    [/^choose /i, `Выберите ${ru}.`],
    [/^select /i, `Выберите ${ru}.`],
    [/^install /i, `Установите ${ru}.`],
    [/^manage /i, `Управляйте ${ru}.`],
    [/^complete /i, `Завершите ${ru}.`],
    [/^attach /i, `Прикрепите файл к сообщению.`],
    [/^explore /i, `Откройте каталог и найдите нужное.`],
    [/^give /i, `Оцените ответ.`],
    [/^rename /i, `Переименуйте чат.`],
    [/^pin /i, `Закрепите чат вверху списка.`],
  ];
  for (const [re, text] of rules) {
    if (re.test(ex)) return text;
  }
  return ex;
}

const EXAMPLE_RU = {
  "prompt": "Напишите понятный запрос к ИИ.",
  "generate": "Нажмите Generate, чтобы создать новую картинку.",
  "regenerate": "Переделайте ответ, если он не подошёл.",
  "settings": "Откройте настройки, чтобы сменить язык.",
  "dashboard": "Перейдите на главную панель.",
  "sign in": "Войдите, чтобы продолжить.",
  "sign up": "Зарегистрируйтесь бесплатно.",
  "log out": "Выйдите, когда закончите работу.",
  "subscription": "Управляйте своей подпиской.",
  "upgrade": "Перейдите на тариф Pro.",
  "notification": "У вас новое уведомление.",
  "toggle": "Включите тёмную тему.",
  "dropdown": "Выберите модель из выпадающего списка.",
  "sidebar": "Откройте боковую панель.",
  "tooltip": "Наведите курсор, чтобы увидеть подсказку.",
  "scroll": "Прокрутите вниз, чтобы прочитать дальше.",
  "upload": "Загрузите PDF-файл.",
  "download": "Скачайте отчёт.",
  "copy": "Скопируйте ответ.",
  "paste": "Вставьте текст сюда.",
  "search": "Найдите нужный чат.",
  "filter": "Отфильтруйте по дате.",
  "share": "Поделитесь этим чатом.",
  "delete": "Удалите этот разговор.",
  "archive": "Отправьте старые чаты в архив.",
  "summarize": "Кратко перескажите эту статью.",
  "translate": "Переведите на русский.",
  "refine": "Улучшите черновик.",
  "iterate": "Давайте доработаем эту идею.",
  "context": "Модель потеряла контекст переписки.",
  "context window": "Этот чат превысил объём памяти.",
  "token": "Этот запрос использует много единиц текста.",
  "model": "Выберите модель ИИ.",
  "temperature": "Понизьте креативность для точности.",
  "hallucination": "Остерегайтесь выдуманных ответов.",
  "fine-tune": "Дообучите модель на своих данных.",
  "inference": "ИИ сейчас обрабатывает запрос.",
  "workflow": "Автоматизируйте свой рабочий процесс.",
  "integration": "Настройте подключение к другому сервису.",
  "sync": "Синхронизируйте данные между устройствами.",
  "deploy": "Опубликуйте сайт в интернете.",
  "debug": "Найдите и исправьте ошибку в коде.",
  "api": "Подключитесь через API.",
  "endpoint": "Отправьте запрос на точку входа чата.",
  "commit": "Сохраните свои изменения.",
  "merge": "Объедините запрос на слияние.",
  "branch": "Создайте новую ветку.",
  "refactor": "Улучшите структуру этого модуля.",
  "rollback": "Откатите развёртывание назад.",
  "onboarding": "Пройдите знакомство с сервисом.",
  "composer": "Откройте Composer, чтобы создать новую функцию.",
  "apply": "Нажмите Apply, чтобы обновить файл.",
  "accept": "Примите предложенное исправление.",
  "reject": "Отклоните это изменение и попробуйте снова.",
  "diff": "Просмотрите изменения перед применением.",
  "chatgpt": "Спросите ChatGPT, что означает этот термин.",
  "stop generating": "Нажмите «Остановить», чтобы прервать ответ.",
  "fork": "Сделайте форк репозитория и внесите правки.",
  "pull request": "Откройте запрос на слияние для проверки."
};

function enrichCard(card) {
  const key = card.english.toLowerCase();
  const russian = card.russian || RUSSIAN_SIMPLE[key] || card.russian;
  let meaning = card.meaning;
  if (!meaning || meaning.startsWith('Термин из сферы IT:')) {
    meaning = MEANINGS[key] || meaning || `Слово «${card.english}» в IT означает: ${russian}.`;
  }
  const example = card.example || generateExample(card.english, card.tags || []);
  const enriched = { ...card, russian, meaning, example };
  enriched.exampleRu = generateExampleRu(enriched);
  return enriched;
}

function dictToCard(entry) {
  const key = entry.english.toLowerCase();
  const russian = RUSSIAN_SIMPLE[key] || entry.russian.replace(/промпт/gi, "запрос").replace(/дашборд/gi, "панель").replace(/токен/gi, "единица текста").replace(/эмбеддинг/gi, "числовое представление").replace(/пайплайн/gi, "цепочка").replace(/фронтенд/gi, "внешняя часть").replace(/бэкенд/gi, "внутренняя часть").replace(/коммит/gi, "сохранение").replace(/аутентификация/gi, "проверка личности").replace(/авторизация/gi, "проверка прав");
  const meaning = MEANINGS[key] || `Термин из сферы IT: ${russian}.`;
  return enrichCard({
    english: entry.english,
    russian,
    meaning,
    example: '',
    tags: catToTag(entry.category)
  });
}

const seedMap = new Map();
for (const card of ORIGINAL_SEED) {
  seedMap.set(card.english.toLowerCase(), enrichCard(card));
}
for (const entry of dict) {
  const key = entry.english.toLowerCase();
  if (!seedMap.has(key)) {
    seedMap.set(key, dictToCard(entry));
  }
}
for (const card of UI_CARDS) {
  const key = card.english.toLowerCase();
  if (!seedMap.has(key)) {
    seedMap.set(key, enrichCard(card));
  }
}

const merged = Array.from(seedMap.values()).map(enrichCard);
merged.sort((a, b) => a.english.localeCompare(b.english, 'en'));

const out = `// Сгенерировано: словарь.md + UI Cursor/GitHub/ChatGPT + стартовый набор\nconst SEED_CARDS = ${JSON.stringify(merged, null, 2)};\n`;
fs.writeFileSync('cards-data.js', out, 'utf8');
console.log('cards:', merged.length);
console.log('from dict:', dict.length);
console.log('from UI:', UI_CARDS.length);
