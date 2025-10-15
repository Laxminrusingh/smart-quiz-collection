const allQuestions = [
    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Leonardo da Vinci",
            "Michelangelo",
            "Pablo Picasso",
            "Vincent van Gogh"
        ],
        answer: 0
    },
    {
        question: "What is the capital city of Australia?",
        options: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane"
        ],
        answer: 2
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: [
            "Jupiter",
            "Mars",
            "Venus",
            "Saturn"
        ],
        answer: 1
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain"
        ],
        answer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: [
            "Indian Ocean",
            "Atlantic Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ],
        answer: 3
    },
    {
        question: "Who was the first person to step on the Moon?",
        options: [
            "Neil Armstrong",
            "Buzz Aldrin",
            "Yuri Gagarin",
            "Alan Shepard"
        ],
        answer: 0
    }
,
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Silver", "Oxygen", "Iron"],
        answer: 2
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Rupee"],
        answer: 2
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: 1
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        answer: 1
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Italy", "Spain", "France", "Germany"],
        answer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "How many days are there in a leap year?",
        options: ["365", "366", "367", "364"],
        answer: 1
    },
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Naples", "Rome", "Florence"],
        answer: 2
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Leopard", "Tiger"],
        answer: 1
    },
    {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
        answer: 2
    },
    {
        question: "Which instrument is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        answer: 1
    },
    {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "NaCl", "O2"],
        answer: 1
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    },
    {
        question: "How many bones are in an adult human body?",
        options: ["206", "208", "210", "212"],
        answer: 0
    },
    {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Madrid", "Seville", "Valencia"],
        answer: 1
    },
    {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: 3
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: 2
    },
    {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What is the smallest unit of matter?",
        options: ["Molecule", "Atom", "Cell", "Electron"],
        answer: 1
    },
    {
        question: "Which country invented pizza?",
        options: ["France", "Greece", "Italy", "Spain"],
        answer: 2
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        answer: 1
    },
    {
        question: "How many minutes are in an hour?",
        options: ["50", "60", "70", "80"],
        answer: 1
    },
    {
        question: "What is the capital of Germany?",
        options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
        answer: 2
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        answer: 1
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: 1
    },
    {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        answer: 1
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: ["Manchester", "Birmingham", "London", "Liverpool"],
        answer: 2
    },
    {
        question: "Which planet is known as the Blue Planet?",
        options: ["Neptune", "Uranus", "Earth", "Venus"],
        answer: 2
    },
    {
        question: "What is the largest bird in the world?",
        options: ["Eagle", "Ostrich", "Penguin", "Albatross"],
        answer: 1
    },
    {
        question: "How many seconds are in a minute?",
        options: ["50", "60", "70", "80"],
        answer: 1
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: 2
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Gold", "Silver", "Mercury", "Copper"],
        answer: 2
    },
    {
        question: "What is the freezing point of water in Celsius?",
        options: ["0°C", "10°C", "-10°C", "5°C"],
        answer: 0
    },
    {
        question: "How many players are on a soccer team on the field?",
        options: ["10", "11", "12", "9"],
        answer: 1
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"],
        answer: 1
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        answer: 2
    },
    {
        question: "What is the largest country by land area?",
        options: ["China", "USA", "Canada", "Russia"],
        answer: 3
    },
    {
        question: "How many colors are in a rainbow?",
        options: ["6", "7", "8", "9"],
        answer: 1
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: 2
    },
    {
        question: "Which animal is the fastest in water?",
        options: ["Dolphin", "Shark", "Sailfish", "Tuna"],
        answer: 2
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Pluto"],
        answer: 0
    },
    {
        question: "How many chambers does a human heart have?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Luxor", "Aswan"],
        answer: 1
    },
    {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: 2
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Liver", "Lungs", "Skin"],
        answer: 3
    },
    {
        question: "How many teeth does an adult human typically have?",
        options: ["28", "30", "32", "34"],
        answer: 2
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "Which animal never sleeps?",
        options: ["Shark", "Dolphin", "Bullfrog", "Elephant"],
        answer: 2
    },
    {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
        answer: 2
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },
    {
        question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
        answer: 1
    },
    {
        question: "Which bird cannot fly?",
        options: ["Eagle", "Sparrow", "Penguin", "Parrot"],
        answer: 2
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: 0
    },
    {
        question: "How many days are in February during a leap year?",
        options: ["28", "29", "30", "31"],
        answer: 1
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
        answer: 2
    },
    {
        question: "Which mammal can fly?",
        options: ["Squirrel", "Bat", "Monkey", "Rat"],
        answer: 1
    },
    {
        question: "What is the largest lake in the world?",
        options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"],
        answer: 1
    },
    {
        question: "How many strings does a standard guitar have?",
        options: ["4", "5", "6", "7"],
        answer: 2
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Guadalajara", "Monterrey", "Mexico City", "Cancun"],
        answer: 2
    },
    {
        question: "Which animal has the longest neck?",
        options: ["Elephant", "Giraffe", "Horse", "Camel"],
        answer: 1
    },
    {
        question: "What is the main ingredient in bread?",
        options: ["Rice", "Corn", "Flour", "Sugar"],
        answer: 2
    },
    {
        question: "How many wheels does a bicycle have?",
        options: ["1", "2", "3", "4"],
        answer: 1
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
        answer: 2
    },
    {
        question: "Which season comes after winter?",
        options: ["Summer", "Fall", "Spring", "Autumn"],
        answer: 2
    },
    {
        question: "What is the primary color that is not red or blue?",
        options: ["Green", "Yellow", "Orange", "Purple"],
        answer: 1
    },
    {
        question: "How many months have 31 days?",
        options: ["6", "7", "8", "9"],
        answer: 1
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
        answer: 1
    },
    {
        question: "Which fruit is known for keeping doctors away?",
        options: ["Orange", "Banana", "Apple", "Grape"],
        answer: 2
    },
    {
        question: "What is the largest island in the world?",
        options: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
        answer: 1
    },
    {
        question: "How many minutes are in half an hour?",
        options: ["20", "25", "30", "35"],
        answer: 2
    },
    {
        question: "What is the capital of Greece?",
        options: ["Thessaloniki", "Athens", "Patras", "Heraklion"],
        answer: 1
    },
    {
        question: "Which animal is known for its black and white stripes?",
        options: ["Horse", "Cow", "Zebra", "Panda"],
        answer: 2
    },
    {
        question: "What is the most spoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        answer: 2
    },
    {
        question: "How many hours are in a day?",
        options: ["20", "22", "24", "26"],
        answer: 2
    },
    {
        question: "What is the capital of Sweden?",
        options: ["Gothenburg", "Stockholm", "Malmö", "Uppsala"],
        answer: 1
    },
    {
        question: "Which planet has rings around it?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        answer: 2
    },
    {
        question: "What is the currency of the United States?",
        options: ["Pound", "Euro", "Dollar", "Yen"],
        answer: 2
    },
    {
        question: "How many legs does an insect have?",
        options: ["4", "6", "8", "10"],
        answer: 1
    },
    {
        question: "What is the capital of Norway?",
        options: ["Bergen", "Trondheim", "Oslo", "Stavanger"],
        answer: 2
    },
    {
        question: "Which animal produces milk?",
        options: ["Fish", "Bird", "Cow", "Reptile"],
        answer: 2
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Femur", "Tibia", "Radius"],
        answer: 0
    },
    {
        question: "How many sides does a square have?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Porto", "Lisbon", "Braga", "Coimbra"],
        answer: 1
    },
    {
        question: "Which sense is associated with the nose?",
        options: ["Sight", "Hearing", "Smell", "Taste"],
        answer: 2
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Tibia", "Femur", "Humerus", "Radius"],
        answer: 1
    },
    {
        question: "How many degrees are in a circle?",
        options: ["180", "270", "360", "450"],
        answer: 2
    },
    {
        question: "What is the capital of Denmark?",
        options: ["Aarhus", "Odense", "Copenhagen", "Aalborg"],
        answer: 2
    },
    {
        question: "Which animal is known for changing colors?",
        options: ["Lizard", "Chameleon", "Snake", "Frog"],
        answer: 1
    },
    {
        question: "What is the main gas in the air we breathe?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: 2
    },
    {
        question: "How many weeks are in a year?",
        options: ["50", "51", "52", "53"],
        answer: 2
    },
    {
        question: "What is the capital of Finland?",
        options: ["Tampere", "Turku", "Helsinki", "Espoo"],
        answer: 2
    },
    {
        question: "Which organ pumps blood through the body?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        answer: 2
    }
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Select 10 random questions
const questions = shuffleArray(allQuestions).slice(0, 10);

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<h4>${q.question}</h4>`;

        q.options.forEach((option, index) => {
            questionElement.innerHTML += `
                <div>
                    <input type="radio" name="option" value="${index}">
                    ${option}
                </div>
            `;
        });

        quizContainer.appendChild(questionElement);

        const nextButton = document.createElement('button');
        nextButton.className = 'btn btn-primary mt-3';
        nextButton.innerText = 'Next';
        nextButton.onclick = checkAnswer;
        quizContainer.appendChild(nextButton);

        setTimeout(() => {
            if (currentQuestion < questions.length) {
                checkAnswer();
            }
        }, 25000);
    } else {
        showResult();
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function showResult() {
    localStorage.setItem('lastScore_gk_easy', `${score}/10`);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>
                                 <a href="../index.html" class="btn btn-success mt-3">Back to Home</a>`;
}

window.onload = function() {
    const lastScore = localStorage.getItem('lastScore_gk_easy');
    if (lastScore) {
        const quizContainer = document.getElementById('quiz');
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = `<p style="color: yellow; font-weight: bold;">Last Score: ${lastScore}</p>`;
        quizContainer.parentNode.insertBefore(scoreDisplay, quizContainer);
    }
    showQuestion();
};
