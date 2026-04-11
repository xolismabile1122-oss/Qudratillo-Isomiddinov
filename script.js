const questionsDB = {
    it: [
        { q: "SSD nima?", a: ["Xotira qurilmasi", "Protsessor", "Ekran", "Klaviatura"], c: 0 },
        { q: "Kompyuterning 'miyasi' qaysi?", a: ["Protsessor (CPU)", "Monitor", "Operativka", "Klaviatura"], c: 0 },
        { q: "Sichqonchani kim ixtiro qilgan?", a: ["Duglas Engelbart", "Stiv Jobs", "Bill Geyts", "Elon Musk"], c: 0 },
        { q: "Eng mashhur qidiruv tizimi?", a: ["Google", "Yandex", "Yahoo", "Bing"], c: 0 },
        { q: "Wi-Fi nima?", a: ["Simsiz internet", "Kabel turi", "Dastur", "Antivirus"], c: 0 },
        { q: "RAM nima?", a: ["Vaqtinchalik xotira", "Doimiy xotira", "Video karta", "Protsessor"], c: 0 },
        { q: "Caps Lock tugmasi nima qiladi?", a: ["Katta harf qiladi", "O'chiradi", "Yangilaydi", "Saqlaydi"], c: 0 },
        { q: "Email nima?", a: ["Elektron pochta", "O'yin", "Sayt nomi", "Rasm"], c: 0 },
        { q: "Noutbukda sichqoncha o'rnini nima bosadi?", a: ["Touchpad", "Ekran", "Klaviatura", "USB"], c: 0 },
        { q: "URL nima?", a: ["Sayt manzili", "Parol", "Foydalanuvchi nomi", "Rasm formati"], c: 0 },
        { q: "Brauzer nima?", a: ["Internetga kiruvchi dastur", "Antivirus", "O'yin", "Klaviatura"], c: 0 },
        { q: "PDF nima?", a: ["Hujjat formati", "Video turi", "Musiqa", "Rasm"], c: 0 },
        { q: "Spam nima?", a: ["Keraksiz xabarlar", "Virus", "Yaxshi xabar", "Parol"], c: 0 },
        { q: "Printer nima qiladi?", a: ["Qog'ozga chiqaradi", "Rasm oladi", "Musiqa chaladi", "Internetga ulaydi"], c: 0 },
        { q: "Eng ko'p tarqalgan operatsion tizim?", a: ["Windows", "Linux", "MacOS", "Dos"], c: 0 },
        { q: "Fleshkani qayerga ulaymiz?", a: ["USB portga", "Monitorga", "Rozetkaga", "Kameraga"], c: 0 },
        { q: "Bluetooth nima?", a: ["Simsiz aloqa", "Ekran turi", "Batareya", "Klaviatura"], c: 0 },
        { q: "Qaysi biri brauzer emas?", a: ["Photoshop", "Chrome", "Opera", "Safari"], c: 0 },
        { q: "Saytni yangilash tugmasi?", a: ["F5", "F1", "Esc", "Enter"], c: 0 },
        { q: "Instagram nima?", a: ["Ijtimoiy tarmoq", "Operatsion tizim", "Baza", "Antivirus"], c: 0 },
        { q: "Monitor o'lchov birligi?", a: ["Dyuym", "Kilogram", "Metr", "Litr"], c: 0 },
        { q: "Qaysi biri xotira qurilmasi?", a: ["Hard Disk", "Sichqoncha", "Klaviatura", "Kalodka"], c: 0 },
        { q: "Antivirus nima?", a: ["Viruslardan himoya", "Virus turi", "O'yin", "Brauzer"], c: 0 },
        { q: "Windows 10 egasi?", a: ["Microsoft", "Apple", "Google", "Intel"], c: 0 },
        { q: "Eng katta ijtimoiy tarmoq?", a: ["Facebook", "Telegram", "Twitter", "Viber"], c: 0 },
        { q: "YouTube nima?", a: ["Video xosting", "Musiqa pleer", "O'yin", "Pochta"], c: 0 },
        { q: "Klaviaturadagi eng uzun tugma?", a: ["Space (Probel)", "Enter", "Shift", "Backspace"], c: 0 },
        { q: "Modem nima uchun?", a: ["Internetga ulanish", "Rasm chizish", "O'yin", "Ovoz"], c: 0 },
        { q: "iPhone operatsion tizimi?", a: ["iOS", "Android", "Windows", "Linux"], c: 0 },
        { q: "WWW nima?", a: ["World Wide Web", "World War 1", "Word", "Wait"], c: 0 }
    ],
    history: [
        { q: "Amir Temur tug'ilgan yili?", a: ["1336", "1342", "1405", "1300"], c: 0 },
        { q: "O'zbekiston mustaqillik yili?", a: ["1991", "1990", "1992", "1989"], c: 0 },
        { q: "Bobur tug'ilgan shahar?", a: ["Andijon", "Samarqand", "Buxoro", "Toshkent"], c: 0 },
        { q: "Alisher Navoiy asari?", a: ["Xamsa", "Boburnoma", "O'tkan kunlar", "Mehrobdan chayon"], c: 0 },
        { q: "Birinchi Prezidentimiz?", a: ["I. Karimov", "Sh. Mirziyoyev", "Y. Oxunboboyev", "U. Yusupov"], c: 0 },
        { q: "Konstitutsiya kuni?", a: ["8-dekabr", "1-sentyabr", "21-mart", "1-iyun"], c: 0 },
        { q: "Temur poytaxti?", a: ["Samarqand", "Buxoro", "Xiva", "Qarshi"], c: 0 },
        { q: "Ikkinchi jahon urushi tugashi?", a: ["1945", "1941", "1939", "1950"], c: 0 },
        { q: "Samarqandning qadimgi nomi?", a: ["Marokanda", "Shosh", "Xiva", "Termiz"], c: 0 },
        { q: "Buyuk Ipak yo'li o'tgan joy?", a: ["O'rta Osiyo", "Amerika", "Avstraliya", "Yevropa"], c: 0 },
        { q: "Bayroq qabul qilingan kun?", a: ["18-noyabr", "1-sentyabr", "8-dekabr", "2-iyul"], c: 0 },
        { q: "Amir Temur urug'i?", a: ["Barlos", "Nayman", "Mang'it", "Qo'ng'irot"], c: 0 },
        { q: "Navoiy tug'ilgan shahar?", a: ["Hirot", "Andijon", "Samarqand", "Buxoro"], c: 0 },
        { q: "Al-Xorazmiy ixtirosi?", a: ["Algoritm", "Fizika", "Kimyo", "Teleskop"], c: 0 },
        { q: "Beruniy qayerlik?", a: ["Xorazm", "Farg'ona", "Surxondaryo", "Jizzax"], c: 0 },
        { q: "Boburnoma muallifi?", a: ["Bobur", "Navoiy", "Qodiriy", "Cho'lpon"], c: 0 },
        { q: "Piramidalar qayerda?", a: ["Misr", "Turkiya", "Gretsiya", "Iroq"], c: 0 },
        { q: "Napoleon kim bo'lgan?", a: ["Fransiya imperatori", "Olim", "Shoir", "Rassom"], c: 0 },
        { q: "Gerb qabul qilingan yil?", a: ["1992", "1991", "1993", "1994"], c: 0 },
        { q: "Birinchi kosmonavt?", a: ["Gagarin", "Armstrong", "Jonibekov", "Sharipov"], c: 0 },
        { q: "Xiva xonligi markazi?", a: ["Xiva", "Urganch", "Nukus", "Buxoro"], c: 0 },
        { q: "Ibn Sino sohasi?", a: ["Tibbiyot", "Tarix", "Dizayn", "Siyosat"], c: 0 },
        { q: "Amir Temur onasi?", a: ["Takina xotun", "Nodira", "Zulfiya", "Uvaysiy"], c: 0 },
        { q: "Rim poytaxti?", a: ["Italiya", "Gretsiya", "Fransiya", "Ispaniya"], c: 0 },
        { q: "Eng katta imperiya?", a: ["Britaniya", "Rim", "Rossiya", "Mo'g'ul"], c: 0 },
        { q: "Mirzo Ulug'bek kim?", a: ["Astronom", "Shoir", "Rassom", "Raqqos"], c: 0 },
        { q: "Navoiy yashagan asr?", a: ["XV asr", "XII asr", "X asr", "XIX asr"], c: 0 },
        { q: "Qadimgi yozuv turi?", a: ["Mixxat", "Lotin", "Kirill", "Ieroglif"], c: 0 },
        { q: "Mustaqillik bayrami?", a: ["1-sentyabr", "21-mart", "1-oktyabr", "14-yanvar"], c: 0 },
        { q: "Buyuk sarkarda Jaloliddin?", a: ["Manguberdi", "Temur", "Bobur", "Navoiy"], c: 0 }
    ],
    english: [
        { q: "Apple nima degani?", a: ["Olma", "Nok", "Uzum", "Behi"], c: 0 },
        { q: "Book nima?", a: ["Kitob", "Daftar", "Ruchka", "Parta"], c: 0 },
        { q: "School nima?", a: ["Maktab", "Bog'cha", "Klub", "Uy"], c: 0 },
        { q: "Mother nima?", a: ["Ona", "Ota", "Aka", "Opa"], c: 0 },
        { q: "Water nima?", a: ["Suv", "Sut", "Choy", "Sharbat"], c: 0 },
        { q: "Red qaysi rang?", a: ["Qizil", "Qora", "Oq", "Ko'k"], c: 0 },
        { q: "Hello tarjimasi?", a: ["Salom", "Xayr", "Rahmat", "Mayli"], c: 0 },
        { q: "Dog qaysi hayvon?", a: ["It", "Mushuk", "Ot", "Eshak"], c: 0 },
        { q: "Sun nima?", a: ["Quyosh", "Oy", "Yulduz", "Yer"], c: 0 },
        { q: "Pen nima?", a: ["Ruchka", "Qalam", "O'chirg'ich", "Chizg'ich"], c: 0 },
        { q: "Teacher kim?", a: ["O'qituvchi", "O'quvchi", "Oshpaz", "Haydovchi"], c: 0 },
        { q: "Friend nima?", a: ["Do'st", "Dushman", "Aka", "Uka"], c: 0 },
        { q: "Cat nima?", a: ["Mushuk", "It", "Sichqon", "Quyon"], c: 0 },
        { q: "Green nima?", a: ["Yashil", "Sariq", "Ko'k", "Oq"], c: 0 },
        { q: "Father nima?", a: ["Ota", "Ona", "Amaki", "Tog'a"], c: 0 },
        { q: "How are you?", a: ["Qalaysiz?", "Ismingiz?", "Kim bu?", "Rahmat"], c: 0 },
        { q: "Goodbye?", a: ["Xayr", "Salom", "Tong", "Tun"], c: 0 },
        { q: "Morning?", a: ["Tong", "Tun", "Tush", "Kech"], c: 0 },
        { q: "Night?", a: ["Tun", "Kun", "Ertalab", "Hozir"], c: 0 },
        { q: "Boy?", a: ["Bolakay", "Qizaloq", "Ayol", "Chol"], c: 0 },
        { q: "Girl?", a: ["Qizaloq", "Bolakay", "Erkak", "Kampir"], c: 0 },
        { q: "White qaysi rang?", a: ["Oq", "Qora", "Sariq", "Pushti"], c: 0 },
        { q: "Black qaysi rang?", a: ["Qora", "Oq", "Kulrang", "Moviy"], c: 0 },
        { q: "Blue qaysi rang?", a: ["Ko'k", "Yashil", "Qizil", "Sariq"], c: 0 },
        { q: "Table nima?", a: ["Stol", "Stul", "Shkaf", "Deraza"], c: 0 },
        { q: "Door nima?", a: ["Eshik", "Deraza", "Tom", "Devor"], c: 0 },
        { q: "Window nima?", a: ["Deraza", "Eshik", "Zina", "Pol"], c: 0 },
        { q: "Bread nima?", a: ["Non", "Tuz", "Shakar", "Choy"], c: 0 },
        { q: "Milk nima?", a: ["Sut", "Suv", "Moy", "Sharbat"], c: 0 },
        { q: "Thank you?", a: ["Rahmat", "Salom", "Xayr", "Kechirasiz"], c: 0 }
    ],
    programming: [
        { q: "HTML nima?", a: ["Markalash tili", "Dastur", "Baza", "O'yin"], c: 0 },
        { q: "CSS nima?", a: ["Dizayn (Stil)", "Mantiq", "Baza", "Xavfsizlik"], c: 0 },
        { q: "JavaScript nima?", a: ["Dasturlash tili", "Markalash", "Rasm", "Video"], c: 0 },
        { q: "VS Code nima?", a: ["Kod muharriri", "Brauzer", "O'yin", "Video pleer"], c: 0 },
        { q: "Bug dasturlashda nima?", a: ["Xatolik", "Yutuq", "Rasm", "Tugma"], c: 0 },
        { q: "HTML-da sarlavha tegi?", a: ["h1", "p", "div", "span"], c: 0 },
        { q: "Dasturlashda '=' nima?", a: ["Qiymat berish", "Tenglik", "Qo'shish", "Ayirish"], c: 0 },
        { q: "Frontend nima?", a: ["Mijoz ko'radigan qism", "Server", "Baza", "Xavfsizlik"], c: 0 },
        { q: "Backend nima?", a: ["Server qismi", "Dizayn", "Rasm", "Mijoz"], c: 0 },
        { q: "Array nima?", a: ["Massiv", "Son", "Matn", "Shart"], c: 0 },
        { q: "If operatori nima?", a: ["Shart", "Sikl", "O'zgaruvchi", "Funksiya"], c: 0 },
        { q: "For operatori nima?", a: ["Sikl", "Shart", "Matn", "Baza"], c: 0 },
        { q: "JS-da o'zgaruvchi?", a: ["let / const", "if / else", "for / while", "tag"], c: 0 },
        { q: "Python nima?", a: ["Dasturlash tili", "Ilon turi", "Markalash", "Dizayn"], c: 0 },
        { q: "PHP nima?", a: ["Backend tili", "Frontend", "Rasm", "Video"], c: 0 },
        { q: "SQL nima?", a: ["Ma'lumotlar bazasi tili", "Dizayn", "Mantiq", "Markalash"], c: 0 },
        { q: "React nima?", a: ["JS kutubxonasi", "Dastur", "Baza", "Rasm"], c: 0 },
        { q: "Github nima?", a: ["Kod xostingi", "Brauzer", "O'yin", "Video"], c: 0 },
        { q: "Commit nima?", a: ["O'zgarishni saqlash", "O'chirish", "Yangilash", "Ko'rish"], c: 0 },
        { q: "API nima?", a: ["Interfeys", "Rasm", "Video", "Musiqa"], c: 0 },
        { q: "HTML-da div tegi?", a: ["Blok yaratish", "Sarlavha", "Rasm", "Link"], c: 0 },
        { q: "Img tegi nima uchun?", a: ["Rasm", "Video", "Ovoz", "Matn"], c: 0 },
        { q: "Boolean qiymatlari?", a: ["True/False", "Sonlar", "Harflar", "Massiv"], c: 0 },
        { q: "String nima?", a: ["Matnli tur", "Sonli tur", "Mantiq", "Massiv"], c: 0 },
        { q: "Integer nima?", a: ["Butun son", "Harf", "Belgi", "Haqiqiy son"], c: 0 },
        { q: "Style qaysi fayl?", a: ["CSS", "HTML", "JS", "JSON"], c: 0 },
        { q: "Script qaysi fayl?", a: ["JS", "CSS", "HTML", "TXT"], c: 0 },
        { q: "JS yaratuvchisi?", a: ["Brendan Eich", "Stiv Jobs", "Bill Geyts", "Musk"], c: 0 },
        { q: "Alt nima uchun?", a: ["Rasm matni", "Link", "Sarlavha", "Rasm"], c: 0 },
        { q: "Hozirgi kunda eng mashhur til?", a: ["JavaScript / Python", "C++", "Pascal", "Basic"], c: 0 }
    ]
};

let currentQuestions = [];
let currentIdx = 0;
let score = 0;
let canClick = true;
let timerInterval;
const TIME_LIMIT = 15;

function startQuiz(cat) {
    document.getElementById('category-box').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    currentQuestions = [...questionsDB[cat]];
    document.getElementById('current-cat').innerText = cat.toUpperCase();
    currentIdx = 0;
    score = 0;
    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    clearInterval(timerInterval);
    canClick = true;
    document.getElementById('next-btn').disabled = true;
    
    const qData = currentQuestions[currentIdx];
    document.getElementById('question').innerText = qData.q;
    const container = document.getElementById('options-container');
    container.innerHTML = "";

    const correctAnswerText = qData.a[qData.c];
    let shuffledOptions = [...qData.a];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((opt) => {
        const div = document.createElement('div');
        div.className = 'option-card';
        div.innerText = opt;
        div.onclick = () => selectOption(div, opt === correctAnswerText);
        container.appendChild(div);
    });

    startTimer();
    updateProgress();
}

function selectOption(el, isCorrect) {
    if (!canClick) return;
    canClick = false;
    clearInterval(timerInterval);

    if (isCorrect) {
        score++;
        el.style.background = "#28a745";
        el.style.borderColor = "#28a745";
    } else {
        el.style.background = "#dc3545";
        el.style.borderColor = "#dc3545";
        document.querySelectorAll('.option-card').forEach(card => {
            if (card.innerText === currentQuestions[currentIdx].a[currentQuestions[currentIdx].c]) {
                card.style.background = "#28a745";
                card.style.borderColor = "#28a745";
            }
        });
    }
    document.getElementById('next-btn').disabled = false;
}

function startTimer() {
    let timeLeft = TIME_LIMIT;
    const progressBar = document.getElementById('progress');
    progressBar.style.background = "#d4af37";

    timerInterval = setInterval(() => {
        timeLeft--;
        const percent = (timeLeft / TIME_LIMIT) * 100;
        progressBar.style.width = percent + "%";
        if (timeLeft <= 5) progressBar.style.background = "#dc3545";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoNext();
        }
    }, 1000);
}

function autoNext() {
    canClick = false;
    document.querySelectorAll('.option-card').forEach(card => {
        if (card.innerText === currentQuestions[currentIdx].a[currentQuestions[currentIdx].c]) {
            card.style.background = "#28a745";
            card.style.borderColor = "#28a745";
        }
    });
    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < currentQuestions.length) loadQuestion();
    else showResult();
}

function updateProgress() {
    const mainProgress = (currentIdx / currentQuestions.length) * 100;
    // Asosiy progress barni o'rniga taymer ishlatilgani uchun bu yerda qoldirildi
}

function showResult() {
    document.getElementById('quiz-box').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');
    const final = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('score').innerText = final;
    
    const feedback = document.getElementById('feedback');
    if (final >= 80) feedback.innerText = "Daho! Premium bilim egasisiz!";
    else if (final >= 50) feedback.innerText = "Yaxshi! Apple darajasiga yaqinsiz.";
    else feedback.innerText = "Ko'proq o'qing, muvaffaqiyat kutilmoqda!";
}
