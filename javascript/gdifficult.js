const allQuestions = [
    {
        question: "Which ancient wonder of the world was located in Alexandria?",
        options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Statue of Zeus"],
        answer: 1
    },
    {
        question: "What is the rarest blood type?",
        options: ["AB-", "O-", "Rh-null", "B-"],
        answer: 2
    },
    {
        question: "Which element has the highest melting point?",
        options: ["Tungsten", "Carbon", "Rhenium", "Osmium"],
        answer: 0
    },
    {
        question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1989", "1991", "1993"],
        answer: 1
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Malleus", "Incus", "Stapes", "Hyoid"],
        answer: 2
    },
    {
        question: "Which composer wrote 'The Four Seasons'?",
        options: ["Bach", "Vivaldi", "Mozart", "Beethoven"],
        answer: 1
    },
    {
        question: "What is the deepest point in Earth's oceans?",
        options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
        answer: 2
    },
    {
        question: "Which gas makes up approximately 78% of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"],
        answer: 3
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Picasso", "Dalí", "Magritte", "Miró"],
        answer: 1
    },
    {
        question: "What is the capital of Bhutan?",
        options: ["Thimphu", "Paro", "Punakha", "Jakar"],
        answer: 0
    },
    {
        question: "Which isotope is used in carbon dating?",
        options: ["Carbon-12", "Carbon-13", "Carbon-14", "Carbon-15"],
        answer: 2
    },
    {
        question: "Who wrote 'One Hundred Years of Solitude'?",
        options: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa", "Octavio Paz"],
        answer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Quartz", "Corundum", "Diamond", "Graphite"],
        answer: 2
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 1
    },
    {
        question: "What is the study of earthquakes called?",
        options: ["Geology", "Seismology", "Volcanology", "Meteorology"],
        answer: 1
    },
    {
        question: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Joseph Lister"],
        answer: 1
    },
    {
        question: "What is the largest organ inside the human body?",
        options: ["Brain", "Lungs", "Liver", "Heart"],
        answer: 2
    },
    {
        question: "Which ancient civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        answer: 2
    },
    {
        question: "What is the speed of sound in air at room temperature?",
        options: ["343 m/s", "299 m/s", "400 m/s", "500 m/s"],
        answer: 0
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Newton", "Einstein", "Hawking", "Bohr"],
        answer: 1
    },
    {
        question: "What is the most abundant gas in the universe?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        answer: 1
    },
    {
        question: "Which country has the most time zones?",
        options: ["Russia", "USA", "China", "France"],
        answer: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: 2
    },
    {
        question: "Who wrote 'The Origin of Species'?",
        options: ["Darwin", "Mendel", "Wallace", "Lamarck"],
        answer: 0
    },
    {
        question: "What is the largest desert in Asia?",
        options: ["Thar", "Gobi", "Karakum", "Taklamakan"],
        answer: 1
    },
    {
        question: "Which vitamin deficiency causes scurvy?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: 2
    },
    {
        question: "What is the smallest country in South America?",
        options: ["Uruguay", "Suriname", "Guyana", "French Guiana"],
        answer: 1
    },
    {
        question: "Who painted 'Guernica'?",
        options: ["Dalí", "Picasso", "Miró", "Goya"],
        answer: 1
    },
    {
        question: "What is the longest mountain range in the world?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
        answer: 2
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
        answer: 1
    },
    {
        question: "Who composed 'The Magic Flute'?",
        options: ["Bach", "Beethoven", "Mozart", "Haydn"],
        answer: 2
    },
    {
        question: "What is the study of fungi called?",
        options: ["Botany", "Mycology", "Zoology", "Ecology"],
        answer: 1
    },
    {
        question: "Which ocean is the deepest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: 2
    },
    {
        question: "Who invented the telephone?",
        options: ["Edison", "Bell", "Tesla", "Marconi"],
        answer: 1
    },
    {
        question: "What is the largest moon of Saturn?",
        options: ["Titan", "Enceladus", "Mimas", "Iapetus"],
        answer: 0
    },
    {
        question: "Which war was fought between 1914-1918?",
        options: ["World War II", "World War I", "Korean War", "Vietnam War"],
        answer: 1
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        answer: 0
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "George Eliot"],
        answer: 2
    },
    {
        question: "What is the largest lake in Africa?",
        options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Chad"],
        answer: 1
    },
    {
        question: "Which particle has no electric charge?",
        options: ["Proton", "Electron", "Neutron", "Positron"],
        answer: 2
    },
    {
        question: "Who painted 'The Starry Night'?",
        options: ["Monet", "Van Gogh", "Renoir", "Degas"],
        answer: 1
    },
    {
        question: "What is the capital of Kazakhstan?",
        options: ["Almaty", "Nur-Sultan", "Shymkent", "Aktobe"],
        answer: 1
    },
    {
        question: "Which hormone regulates blood sugar?",
        options: ["Adrenaline", "Insulin", "Cortisol", "Thyroxine"],
        answer: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2
    },
    {
        question: "Who discovered radioactivity?",
        options: ["Marie Curie", "Henri Becquerel", "Pierre Curie", "Ernest Rutherford"],
        answer: 1
    },
    {
        question: "What is the largest volcano in the solar system?",
        options: ["Mount Vesuvius", "Olympus Mons", "Mauna Loa", "Mount Fuji"],
        answer: 1
    },
    {
        question: "Which country invented paper?",
        options: ["Egypt", "Greece", "China", "India"],
        answer: 2
    },
    {
        question: "What is the study of heredity called?",
        options: ["Genetics", "Evolution", "Ecology", "Taxonomy"],
        answer: 0
    },
    {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        answer: 1
    },
    {
        question: "What is the most electronegative element?",
        options: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
        answer: 2
    },
    {
        question: "Which empire was ruled by Justinian I?",
        options: ["Roman", "Byzantine", "Ottoman", "Persian"],
        answer: 1
    },
    {
        question: "What is the largest artery in the human body?",
        options: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
        answer: 2
    },
    {
        question: "Who developed the periodic table?",
        options: ["Lavoisier", "Mendeleev", "Dalton", "Avogadro"],
        answer: 1
    },
    {
        question: "What is the capital of Myanmar?",
        options: ["Yangon", "Naypyidaw", "Mandalay", "Bagan"],
        answer: 1
    },
    {
        question: "Which gas is known as laughing gas?",
        options: ["Carbon dioxide", "Nitrous oxide", "Methane", "Ammonia"],
        answer: 1
    },
    {
        question: "Who painted 'The Birth of Venus'?",
        options: ["Leonardo da Vinci", "Michelangelo", "Botticelli", "Raphael"],
        answer: 2
    },
    {
        question: "What is the largest island in the Mediterranean?",
        options: ["Sardinia", "Sicily", "Cyprus", "Corsica"],
        answer: 1
    },
    {
        question: "Which scientist proposed the continental drift theory?",
        options: ["Darwin", "Wegener", "Lyell", "Hutton"],
        answer: 1
    },
    {
        question: "What is the study of weather called?",
        options: ["Climatology", "Meteorology", "Geology", "Oceanography"],
        answer: 1
    },
    {
        question: "Who wrote 'The Canterbury Tales'?",
        options: ["Shakespeare", "Chaucer", "Milton", "Spenser"],
        answer: 1
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Tibia", "Femur", "Humerus", "Fibula"],
        answer: 1
    },
    {
        question: "Which planet rotates on its side?",
        options: ["Venus", "Mars", "Uranus", "Neptune"],
        answer: 2
    },
    {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Larry Page"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Al", "S"],
        answer: 1
    },
    {
        question: "Which ancient city was destroyed by Mount Vesuvius?",
        options: ["Rome", "Athens", "Pompeii", "Sparta"],
        answer: 2
    },
    {
        question: "What is the study of birds called?",
        options: ["Entomology", "Ornithology", "Herpetology", "Ichthyology"],
        answer: 1
    },
    {
        question: "Who composed 'The Rite of Spring'?",
        options: ["Debussy", "Ravel", "Stravinsky", "Prokofiev"],
        answer: 2
    },
    {
        question: "What is the largest country in Africa?",
        options: ["Libya", "Algeria", "Sudan", "Chad"],
        answer: 1
    },
    {
        question: "Which vitamin is synthesized by skin exposure to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        answer: 2
    },
    {
        question: "Who wrote 'Don Quixote'?",
        options: ["Lope de Vega", "Cervantes", "Calderón", "Quevedo"],
        answer: 1
    },
    {
        question: "What is the most abundant metal in Earth's crust?",
        options: ["Iron", "Aluminum", "Calcium", "Sodium"],
        answer: 1
    },
    {
        question: "Which river flows through Baghdad?",
        options: ["Euphrates", "Tigris", "Jordan", "Nile"],
        answer: 1
    },
    {
        question: "Who discovered the structure of DNA?",
        options: ["Watson and Crick", "Mendel", "Darwin", "Pasteur"],
        answer: 0
    },
    {
        question: "What is the capital of Estonia?",
        options: ["Riga", "Vilnius", "Tallinn", "Helsinki"],
        answer: 2
    },
    {
        question: "Which element is essential for thyroid function?",
        options: ["Iron", "Iodine", "Calcium", "Zinc"],
        answer: 1
    },
    {
        question: "Who painted 'Las Meninas'?",
        options: ["Goya", "El Greco", "Velázquez", "Murillo"],
        answer: 2
    },
    {
        question: "What is the largest moon of Jupiter?",
        options: ["Europa", "Io", "Ganymede", "Callisto"],
        answer: 2
    },
    {
        question: "Which war ended with the Treaty of Versailles?",
        options: ["World War I", "World War II", "Franco-Prussian War", "Napoleonic Wars"],
        answer: 0
    },
    {
        question: "What is the study of insects called?",
        options: ["Entomology", "Arachnology", "Malacology", "Herpetology"],
        answer: 0
    },
    {
        question: "Who wrote 'The Divine Comedy'?",
        options: ["Petrarch", "Boccaccio", "Dante", "Machiavelli"],
        answer: 2
    },
    {
        question: "What is the hardest part of the human body?",
        options: ["Bone", "Tooth enamel", "Cartilage", "Nail"],
        answer: 1
    },
    {
        question: "Which planet has the shortest day?",
        options: ["Mercury", "Venus", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "Who invented the printing press?",
        options: ["Caxton", "Gutenberg", "Aldus", "Plantin"],
        answer: 1
    },
    {
        question: "What is the chemical symbol for lead?",
        options: ["Le", "Pb", "Ld", "L"],
        answer: 1
    },
    {
        question: "Which ancient wonder was in Rhodes?",
        options: ["Lighthouse", "Colossus", "Mausoleum", "Temple"],
        answer: 1
    },
    {
        question: "What is the study of fossils called?",
        options: ["Archaeology", "Paleontology", "Anthropology", "Geology"],
        answer: 1
    },
    {
        question: "Who composed 'Carmen'?",
        options: ["Verdi", "Puccini", "Bizet", "Wagner"],
        answer: 2
    },
    {
        question: "What is the largest country in Oceania?",
        options: ["New Zealand", "Papua New Guinea", "Australia", "Fiji"],
        answer: 2
    },
    {
        question: "Which blood type is the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        answer: 3
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: ["Dostoevsky", "Tolstoy", "Chekhov", "Turgenev"],
        answer: 1
    },
    {
        question: "What is the most reactive metal?",
        options: ["Sodium", "Potassium", "Cesium", "Francium"],
        answer: 3
    },
    {
        question: "Which river is the longest in Europe?",
        options: ["Danube", "Rhine", "Volga", "Dnieper"],
        answer: 2
    },
    {
        question: "Who discovered X-rays?",
        options: ["Curie", "Röntgen", "Becquerel", "Thomson"],
        answer: 1
    },
    {
        question: "What is the capital of Slovenia?",
        options: ["Zagreb", "Ljubljana", "Sarajevo", "Skopje"],
        answer: 1
    },
    {
        question: "Which organ produces bile?",
        options: ["Pancreas", "Liver", "Gallbladder", "Stomach"],
        answer: 1
    },
    {
        question: "Who painted 'The School of Athens'?",
        options: ["Leonardo", "Michelangelo", "Raphael", "Donatello"],
        answer: 2
    },
    {
        question: "What is the largest satellite of Neptune?",
        options: ["Triton", "Nereid", "Proteus", "Larissa"],
        answer: 0
    },
    {
        question: "Which empire built Angkor Wat?",
        options: ["Thai", "Khmer", "Vietnamese", "Burmese"],
        answer: 1
    },
    {
        question: "What is the study of earthquakes called?",
        options: ["Volcanology", "Seismology", "Geology", "Tectonics"],
        answer: 1
    },
    {
        question: "Who wrote 'Ulysses'?",
        options: ["Yeats", "Joyce", "Wilde", "Shaw"],
        answer: 1
    },
    {
        question: "What is the lightest element?",
        options: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
        answer: 1
    },
    {
        question: "Which mountain range separates Europe and Asia?",
        options: ["Caucasus", "Urals", "Carpathians", "Alps"],
        answer: 1
    },
    {
        question: "Who invented dynamite?",
        options: ["Nobel", "Edison", "Tesla", "Marconi"],
        answer: 0
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
        }, 15000);
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
    localStorage.setItem('lastScore_gk_difficult', `${score}/10`);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>
                                 <a href="../index.html" class="btn btn-success mt-3">Back to Home</a>`;
}

window.onload = function() {
    const lastScore = localStorage.getItem('lastScore_gk_difficult');
    if (lastScore) {
        const quizContainer = document.getElementById('quiz');
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = `<p style="color: yellow; font-weight: bold;">Last Score: ${lastScore}</p>`;
        quizContainer.parentNode.insertBefore(scoreDisplay, quizContainer);
    }
    showQuestion();
};
