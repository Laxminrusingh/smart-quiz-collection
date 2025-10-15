const allQuestions = [
    {
        question: "If all cats have tails, and Felix is a cat, what can you conclude?",
        options: ["Felix has a tail", "Felix is black", "Felix is a dog", "Felix can fly"],
        answer: 0
    },
    {
        question: "If some birds can swim and all ducks are birds, what can you infer about ducks?",
        options: ["Ducks can fly", "Ducks can swim", "Ducks are mammals", "Ducks are reptiles"],
        answer: 1
    },
    {
        question: "All roses are flowers. Some flowers fade quickly. What can you conclude about roses?",
        options: ["Roses are colorful", "Roses do not fade quickly", "Roses may fade quickly", "Roses are not flowers"],
        answer: 2
    },
    {
        question: "If all rectangles have four sides and all squares are rectangles, what can be said about squares?",
        options: ["Squares have three sides", "Squares are rectangles", "Squares are circles", "Squares are hexagons"],
        answer: 1
    },
    {
        question: "If all dogs bark and Max barks, what can you conclude about Max?",
        options: ["Max is a cat", "Max is a dog", "Max does not bark", "Max is a bird"],
        answer: 1
    },
    {
        question: "Some swans are black and all swans have feathers. What can you conclude about all swans?",
        options: ["All swans are black", "All swans are white", "All swans have feathers", "All swans do not have feathers"],
        answer: 2
    },
    {
        question: "If A is taller than B, and B is taller than C, who is the tallest?",
        options: ["A", "B", "C", "Cannot determine"],
        answer: 0
    },
    {
        question: "All fruits are sweet. Apples are fruits. What can you conclude?",
        options: ["Apples are red", "Apples are sweet", "Apples are sour", "Apples are vegetables"],
        answer: 1
    },
    {
        question: "If it rains, the ground gets wet. The ground is wet. What can you conclude?",
        options: ["It rained", "It might have rained", "It did not rain", "The sun is shining"],
        answer: 1
    },
    {
        question: "All birds have wings. Penguins are birds. What follows?",
        options: ["Penguins can fly", "Penguins have wings", "Penguins are mammals", "Penguins live in trees"],
        answer: 1
    },
    {
        question: "If John is older than Mary, and Mary is older than Tom, who is youngest?",
        options: ["John", "Mary", "Tom", "Cannot determine"],
        answer: 2
    },
    {
        question: "All cars need fuel. This vehicle needs fuel. What can you conclude?",
        options: ["This vehicle is a car", "This vehicle might be a car", "This vehicle is not a car", "This vehicle is a bicycle"],
        answer: 1
    },
    {
        question: "If all students study, and Sarah studies, what can you conclude?",
        options: ["Sarah is a student", "Sarah might be a student", "Sarah is not a student", "Sarah is a teacher"],
        answer: 1
    },
    {
        question: "Some books are interesting. This book is interesting. What follows?",
        options: ["All books are interesting", "This book might be one of those books", "No books are interesting", "This is not a book"],
        answer: 1
    },
    {
        question: "If all fish live in water, and salmon are fish, where do salmon live?",
        options: ["On land", "In water", "In trees", "In the air"],
        answer: 1
    },
    {
        question: "All triangles have three sides. This shape has three sides. What can you conclude?",
        options: ["This shape is a triangle", "This shape might be a triangle", "This shape is not a triangle", "This shape is a circle"],
        answer: 1
    },
    {
        question: "If all teachers are educated, and Mr. Smith is a teacher, what follows?",
        options: ["Mr. Smith is educated", "Mr. Smith is not educated", "Mr. Smith might be educated", "Mr. Smith is a student"],
        answer: 0
    },
    {
        question: "Some flowers are red. Roses are flowers. What can you conclude?",
        options: ["All roses are red", "Some roses might be red", "No roses are red", "Roses are not flowers"],
        answer: 1
    },
    {
        question: "If all mammals breathe air, and whales are mammals, what follows?",
        options: ["Whales breathe air", "Whales breathe water", "Whales don't breathe", "Whales are fish"],
        answer: 0
    },
    {
        question: "All planets orbit the sun. Earth orbits the sun. What can you conclude?",
        options: ["Earth is a planet", "Earth might be a planet", "Earth is not a planet", "Earth is a star"],
        answer: 1
    },
    {
        question: "If all metals conduct electricity, and copper is a metal, what follows?",
        options: ["Copper conducts electricity", "Copper doesn't conduct electricity", "Copper might conduct electricity", "Copper is not a metal"],
        answer: 0
    },
    {
        question: "Some animals are wild. Lions are animals. What can you conclude?",
        options: ["All lions are wild", "Lions might be wild", "No lions are wild", "Lions are not animals"],
        answer: 1
    },
    {
        question: "If all circles are round, and this shape is round, what follows?",
        options: ["This shape is a circle", "This shape might be a circle", "This shape is not a circle", "This shape is square"],
        answer: 1
    },
    {
        question: "All doctors have medical degrees. Dr. Jones has a medical degree. What can you conclude?",
        options: ["Dr. Jones is a doctor", "Dr. Jones might be a doctor", "Dr. Jones is not a doctor", "Dr. Jones is a nurse"],
        answer: 1
    },
    {
        question: "If all birds can fly, and ostriches are birds, what follows?",
        options: ["Ostriches can fly", "Ostriches cannot fly", "The premise is incorrect", "Ostriches are not birds"],
        answer: 2
    },
    {
        question: "Some students are smart. Alice is a student. What can you conclude?",
        options: ["Alice is smart", "Alice might be smart", "Alice is not smart", "Alice is not a student"],
        answer: 1
    },
    {
        question: "If all tools are useful, and hammers are tools, what follows?",
        options: ["Hammers are useful", "Hammers are not useful", "Hammers might be useful", "Hammers are not tools"],
        answer: 0
    },
    {
        question: "All computers process data. This machine processes data. What can you conclude?",
        options: ["This machine is a computer", "This machine might be a computer", "This machine is not a computer", "This machine is broken"],
        answer: 1
    },
    {
        question: "If all musicians play instruments, and John plays piano, what follows?",
        options: ["John is a musician", "John might be a musician", "John is not a musician", "John doesn't play piano"],
        answer: 1
    },
    {
        question: "Some houses are big. This building is big. What can you conclude?",
        options: ["This building is a house", "This building might be a house", "This building is not a house", "All houses are big"],
        answer: 1
    },
    {
        question: "If all liquids flow, and water is a liquid, what follows?",
        options: ["Water flows", "Water doesn't flow", "Water might flow", "Water is not a liquid"],
        answer: 0
    },
    {
        question: "All athletes train regularly. Mike trains regularly. What can you conclude?",
        options: ["Mike is an athlete", "Mike might be an athlete", "Mike is not an athlete", "Mike doesn't train"],
        answer: 1
    },
    {
        question: "If all games are fun, and chess is a game, what follows?",
        options: ["Chess is fun", "Chess is not fun", "Chess might be fun", "Chess is not a game"],
        answer: 0
    },
    {
        question: "Some vehicles have wheels. Bicycles have wheels. What can you conclude?",
        options: ["Bicycles are vehicles", "Bicycles might be vehicles", "Bicycles are not vehicles", "All vehicles have wheels"],
        answer: 1
    },
    {
        question: "If all flowers need sunlight, and tulips are flowers, what follows?",
        options: ["Tulips need sunlight", "Tulips don't need sunlight", "Tulips might need sunlight", "Tulips are not flowers"],
        answer: 0
    },
    {
        question: "All books contain information. This object contains information. What can you conclude?",
        options: ["This object is a book", "This object might be a book", "This object is not a book", "This object is empty"],
        answer: 1
    },
    {
        question: "If all phones can make calls, and smartphones are phones, what follows?",
        options: ["Smartphones can make calls", "Smartphones cannot make calls", "Smartphones might make calls", "Smartphones are not phones"],
        answer: 0
    },
    {
        question: "Some foods are healthy. Vegetables are foods. What can you conclude?",
        options: ["All vegetables are healthy", "Vegetables might be healthy", "No vegetables are healthy", "Vegetables are not foods"],
        answer: 1
    },
    {
        question: "If all clocks tell time, and watches are clocks, what follows?",
        options: ["Watches tell time", "Watches don't tell time", "Watches might tell time", "Watches are not clocks"],
        answer: 0
    },
    {
        question: "All rivers flow to the sea. This water flows to the sea. What can you conclude?",
        options: ["This water is a river", "This water might be a river", "This water is not a river", "This water is the sea"],
        answer: 1
    },
    {
        question: "If all artists are creative, and painters are artists, what follows?",
        options: ["Painters are creative", "Painters are not creative", "Painters might be creative", "Painters are not artists"],
        answer: 0
    },
    {
        question: "Some drinks are cold. Ice tea is cold. What can you conclude?",
        options: ["Ice tea is a drink", "Ice tea might be a drink", "Ice tea is not a drink", "All drinks are cold"],
        answer: 1
    },
    {
        question: "If all shoes protect feet, and boots are shoes, what follows?",
        options: ["Boots protect feet", "Boots don't protect feet", "Boots might protect feet", "Boots are not shoes"],
        answer: 0
    },
    {
        question: "All mountains are high. This landform is high. What can you conclude?",
        options: ["This landform is a mountain", "This landform might be a mountain", "This landform is not a mountain", "This landform is flat"],
        answer: 1
    },
    {
        question: "If all windows let in light, and this opening lets in light, what follows?",
        options: ["This opening is a window", "This opening might be a window", "This opening is not a window", "This opening is closed"],
        answer: 1
    },
    {
        question: "Some colors are bright. Yellow is bright. What can you conclude?",
        options: ["Yellow is a color", "Yellow might be a color", "Yellow is not a color", "All colors are bright"],
        answer: 1
    },
    {
        question: "If all engines produce power, and motors are engines, what follows?",
        options: ["Motors produce power", "Motors don't produce power", "Motors might produce power", "Motors are not engines"],
        answer: 0
    },
    {
        question: "All keys open locks. This object opens locks. What can you conclude?",
        options: ["This object is a key", "This object might be a key", "This object is not a key", "This object is a lock"],
        answer: 1
    },
    {
        question: "If all chairs have seats, and stools have seats, what follows?",
        options: ["Stools are chairs", "Stools might be chairs", "Stools are not chairs", "Stools don't have seats"],
        answer: 1
    },
    {
        question: "Some numbers are even. Six is even. What can you conclude?",
        options: ["Six is a number", "Six might be a number", "Six is not a number", "All numbers are even"],
        answer: 1
    },
    {
        question: "If all roads lead somewhere, and highways are roads, what follows?",
        options: ["Highways lead somewhere", "Highways don't lead anywhere", "Highways might lead somewhere", "Highways are not roads"],
        answer: 0
    },
    {
        question: "All batteries store energy. This device stores energy. What can you conclude?",
        options: ["This device is a battery", "This device might be a battery", "This device is not a battery", "This device is broken"],
        answer: 1
    },
    {
        question: "If all mirrors reflect light, and this surface reflects light, what follows?",
        options: ["This surface is a mirror", "This surface might be a mirror", "This surface is not a mirror", "This surface is dark"],
        answer: 1
    },
    {
        question: "Some shapes have corners. Squares have corners. What can you conclude?",
        options: ["Squares are shapes", "Squares might be shapes", "Squares are not shapes", "All shapes have corners"],
        answer: 1
    },
    {
        question: "If all ovens heat food, and microwaves heat food, what follows?",
        options: ["Microwaves are ovens", "Microwaves might be ovens", "Microwaves are not ovens", "Microwaves don't heat food"],
        answer: 1
    },
    {
        question: "All pencils write. This tool writes. What can you conclude?",
        options: ["This tool is a pencil", "This tool might be a pencil", "This tool is not a pencil", "This tool is broken"],
        answer: 1
    },
    {
        question: "If all cups hold liquid, and mugs hold liquid, what follows?",
        options: ["Mugs are cups", "Mugs might be cups", "Mugs are not cups", "Mugs don't hold liquid"],
        answer: 1
    },
    {
        question: "Some insects fly. Bees fly. What can you conclude?",
        options: ["Bees are insects", "Bees might be insects", "Bees are not insects", "All insects fly"],
        answer: 1
    },
    {
        question: "If all lamps give light, and flashlights give light, what follows?",
        options: ["Flashlights are lamps", "Flashlights might be lamps", "Flashlights are not lamps", "Flashlights don't give light"],
        answer: 1
    },
    {
        question: "All boxes contain things. This container contains things. What can you conclude?",
        options: ["This container is a box", "This container might be a box", "This container is not a box", "This container is empty"],
        answer: 1
    },
    {
        question: "If all balls are round, and marbles are round, what follows?",
        options: ["Marbles are balls", "Marbles might be balls", "Marbles are not balls", "Marbles are not round"],
        answer: 1
    },
    {
        question: "Some materials are soft. Cotton is soft. What can you conclude?",
        options: ["Cotton is a material", "Cotton might be a material", "Cotton is not a material", "All materials are soft"],
        answer: 1
    },
    {
        question: "If all screens display images, and monitors display images, what follows?",
        options: ["Monitors are screens", "Monitors might be screens", "Monitors are not screens", "Monitors don't display images"],
        answer: 1
    },
    {
        question: "All ropes are flexible. This cord is flexible. What can you conclude?",
        options: ["This cord is a rope", "This cord might be a rope", "This cord is not a rope", "This cord is rigid"],
        answer: 1
    },
    {
        question: "If all bags carry things, and backpacks carry things, what follows?",
        options: ["Backpacks are bags", "Backpacks might be bags", "Backpacks are not bags", "Backpacks don't carry things"],
        answer: 1
    },
    {
        question: "Some sounds are loud. Thunder is loud. What can you conclude?",
        options: ["Thunder is a sound", "Thunder might be a sound", "Thunder is not a sound", "All sounds are loud"],
        answer: 1
    },
    {
        question: "If all wheels turn, and gears turn, what follows?",
        options: ["Gears are wheels", "Gears might be wheels", "Gears are not wheels", "Gears don't turn"],
        answer: 1
    },
    {
        question: "All papers are thin. This sheet is thin. What can you conclude?",
        options: ["This sheet is paper", "This sheet might be paper", "This sheet is not paper", "This sheet is thick"],
        answer: 1
    },
    {
        question: "If all switches control things, and buttons control things, what follows?",
        options: ["Buttons are switches", "Buttons might be switches", "Buttons are not switches", "Buttons don't control things"],
        answer: 1
    },
    {
        question: "Some liquids are clear. Water is clear. What can you conclude?",
        options: ["Water is a liquid", "Water might be a liquid", "Water is not a liquid", "All liquids are clear"],
        answer: 1
    },
    {
        question: "If all cables carry signals, and wires carry signals, what follows?",
        options: ["Wires are cables", "Wires might be cables", "Wires are not cables", "Wires don't carry signals"],
        answer: 1
    },
    {
        question: "All stones are hard. This rock is hard. What can you conclude?",
        options: ["This rock is a stone", "This rock might be a stone", "This rock is not a stone", "This rock is soft"],
        answer: 1
    },
    {
        question: "If all frames hold pictures, and borders hold pictures, what follows?",
        options: ["Borders are frames", "Borders might be frames", "Borders are not frames", "Borders don't hold pictures"],
        answer: 1
    },
    {
        question: "Some gases are invisible. Air is invisible. What can you conclude?",
        options: ["Air is a gas", "Air might be a gas", "Air is not a gas", "All gases are invisible"],
        answer: 1
    },
    {
        question: "If all handles help grip, and knobs help grip, what follows?",
        options: ["Knobs are handles", "Knobs might be handles", "Knobs are not handles", "Knobs don't help grip"],
        answer: 1
    },
    {
        question: "All fabrics are woven. This cloth is woven. What can you conclude?",
        options: ["This cloth is fabric", "This cloth might be fabric", "This cloth is not fabric", "This cloth is not woven"],
        answer: 1
    },
    {
        question: "If all springs bounce, and coils bounce, what follows?",
        options: ["Coils are springs", "Coils might be springs", "Coils are not springs", "Coils don't bounce"],
        answer: 1
    },
    {
        question: "Some metals shine. Gold shines. What can you conclude?",
        options: ["Gold is a metal", "Gold might be a metal", "Gold is not a metal", "All metals shine"],
        answer: 1
    },
    {
        question: "If all covers protect, and lids protect, what follows?",
        options: ["Lids are covers", "Lids might be covers", "Lids are not covers", "Lids don't protect"],
        answer: 1
    },
    {
        question: "All powders are fine. This dust is fine. What can you conclude?",
        options: ["This dust is powder", "This dust might be powder", "This dust is not powder", "This dust is coarse"],
        answer: 1
    },
    {
        question: "If all filters clean, and screens clean, what follows?",
        options: ["Screens are filters", "Screens might be filters", "Screens are not filters", "Screens don't clean"],
        answer: 1
    },
    {
        question: "Some crystals are transparent. Glass is transparent. What can you conclude?",
        options: ["Glass is a crystal", "Glass might be a crystal", "Glass is not a crystal", "All crystals are transparent"],
        answer: 1
    },
    {
        question: "If all joints connect, and hinges connect, what follows?",
        options: ["Hinges are joints", "Hinges might be joints", "Hinges are not joints", "Hinges don't connect"],
        answer: 1
    },
    {
        question: "All fibers are thin. This thread is thin. What can you conclude?",
        options: ["This thread is fiber", "This thread might be fiber", "This thread is not fiber", "This thread is thick"],
        answer: 1
    },
    {
        question: "If all sensors detect, and detectors detect, what follows?",
        options: ["Detectors are sensors", "Detectors might be sensors", "Detectors are not sensors", "Detectors don't detect"],
        answer: 1
    },
    {
        question: "Some plastics are flexible. Rubber is flexible. What can you conclude?",
        options: ["Rubber is plastic", "Rubber might be plastic", "Rubber is not plastic", "All plastics are flexible"],
        answer: 1
    },
    {
        question: "If all valves control flow, and taps control flow, what follows?",
        options: ["Taps are valves", "Taps might be valves", "Taps are not valves", "Taps don't control flow"],
        answer: 1
    },
    {
        question: "All magnets attract metal. This object attracts metal. What can you conclude?",
        options: ["This object is a magnet", "This object might be a magnet", "This object is not a magnet", "This object repels metal"],
        answer: 1
    },
    {
        question: "If all prisms bend light, and lenses bend light, what follows?",
        options: ["Lenses are prisms", "Lenses might be prisms", "Lenses are not prisms", "Lenses don't bend light"],
        answer: 1
    },
    {
        question: "Some chemicals react. Acids react. What can you conclude?",
        options: ["Acids are chemicals", "Acids might be chemicals", "Acids are not chemicals", "All chemicals react"],
        answer: 1
    },
    {
        question: "If all circuits carry current, and wires carry current, what follows?",
        options: ["Wires are circuits", "Wires might be circuits", "Wires are not circuits", "Wires don't carry current"],
        answer: 1
    },
    {
        question: "All compounds mix elements. This substance mixes elements. What can you conclude?",
        options: ["This substance is a compound", "This substance might be a compound", "This substance is not a compound", "This substance is pure"],
        answer: 1
    },
    {
        question: "If all motors rotate, and turbines rotate, what follows?",
        options: ["Turbines are motors", "Turbines might be motors", "Turbines are not motors", "Turbines don't rotate"],
        answer: 1
    },
    {
        question: "Some waves carry energy. Sound carries energy. What can you conclude?",
        options: ["Sound is a wave", "Sound might be a wave", "Sound is not a wave", "All waves carry energy"],
        answer: 1
    },
    {
        question: "If all particles have mass, and atoms have mass, what follows?",
        options: ["Atoms are particles", "Atoms might be particles", "Atoms are not particles", "Atoms don't have mass"],
        answer: 1
    },
    {
        question: "All forces cause motion. This push causes motion. What can you conclude?",
        options: ["This push is a force", "This push might be a force", "This push is not a force", "This push stops motion"],
        answer: 1
    },
    {
        question: "If all fields have influence, and magnetic fields have influence, what follows?",
        options: ["Magnetic fields are fields", "Magnetic fields might be fields", "Magnetic fields are not fields", "Magnetic fields have no influence"],
        answer: 1
    },
    {
        question: "Some rays travel straight. Light travels straight. What can you conclude?",
        options: ["Light is a ray", "Light might be a ray", "Light is not a ray", "All rays travel straight"],
        answer: 1
    },
    {
        question: "If all beams focus energy, and lasers focus energy, what follows?",
        options: ["Lasers are beams", "Lasers might be beams", "Lasers are not beams", "Lasers don't focus energy"],
        answer: 1
    },
    {
        question: "All signals carry information. This transmission carries information. What can you conclude?",
        options: ["This transmission is a signal", "This transmission might be a signal", "This transmission is not a signal", "This transmission carries nothing"],
        answer: 1
    },
    {
        question: "If all networks connect devices, and systems connect devices, what follows?",
        options: ["Systems are networks", "Systems might be networks", "Systems are not networks", "Systems don't connect devices"],
        answer: 1
    },
    {
        question: "Some processes take time. Cooking takes time. What can you conclude?",
        options: ["Cooking is a process", "Cooking might be a process", "Cooking is not a process", "All processes take time"],
        answer: 1
    },
    {
        question: "If all methods solve problems, and algorithms solve problems, what follows?",
        options: ["Algorithms are methods", "Algorithms might be methods", "Algorithms are not methods", "Algorithms don't solve problems"],
        answer: 1
    },
    {
        question: "All patterns repeat. This design repeats. What can you conclude?",
        options: ["This design is a pattern", "This design might be a pattern", "This design is not a pattern", "This design is random"],
        answer: 1
    },
    {
        question: "If all structures have form, and buildings have form, what follows?",
        options: ["Buildings are structures", "Buildings might be structures", "Buildings are not structures", "Buildings have no form"],
        answer: 1
    },
    {
        question: "Some systems are complex. Computers are complex. What can you conclude?",
        options: ["Computers are systems", "Computers might be systems", "Computers are not systems", "All systems are complex"],
        answer: 1
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
    localStorage.setItem('lastScore_reasoning_easy', `${score}/10`);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>
                                 <a href="../index.html" class="btn btn-success mt-3">Back to Home</a>`;
}

window.onload = function() {
    const lastScore = localStorage.getItem('lastScore_reasoning_easy');
    if (lastScore) {
        const quizContainer = document.getElementById('quiz');
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = `<p style="color: yellow; font-weight: bold;">Last Score: ${lastScore}</p>`;
        quizContainer.parentNode.insertBefore(scoreDisplay, quizContainer);
    }
    showQuestion();
};
