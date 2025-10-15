const allQuestions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Power Unit",
            "Computer Power Unit"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a volatile memory?",
        options: [
            "ROM",
            "RAM",
            "Hard Disk",
            "Cache Memory"
        ],
        answer: 1
    },
    {
        question: "What is the function of an operating system?",
        options: [
            "To format hard drives",
            "To manage hardware and software resources",
            "To write programs",
            "To browse the internet"
        ],
        answer: 1
    },
    {
        question: "Which programming language is commonly used for creating web pages?",
        options: [
            "Java",
            "Python",
            "HTML",
            "C++"
        ],
        answer: 2
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 1
    },
    {
        question: "What is the primary purpose of a firewall in computing?",
        options: [
            "To protect against viruses",
            "To improve internet speed",
            "To filter incoming network traffic",
            "To encrypt data"
        ],
        answer: 2
    }
,
    {
        question: "What does WWW stand for?",
        options: ["World Wide Web", "World Wide Website", "World Web Wide", "Wide World Web"],
        answer: 0
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        answer: 2
    },
    {
        question: "What is the brain of a computer called?",
        options: ["RAM", "Hard Drive", "CPU", "Monitor"],
        answer: 2
    },
    {
        question: "What does USB stand for?",
        options: ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "United System Bus"],
        answer: 0
    },
    {
        question: "Which of these is an input device?",
        options: ["Monitor", "Printer", "Mouse", "Speaker"],
        answer: 2
    },
    {
        question: "What is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        answer: 1
    },
    {
        question: "What does PDF stand for?",
        options: ["Portable Document Format", "Personal Document File", "Public Document Format", "Private Document File"],
        answer: 0
    },
    {
        question: "Which key is used to delete characters to the left of the cursor?",
        options: ["Delete", "Backspace", "Enter", "Tab"],
        answer: 1
    },
    {
        question: "What is the main circuit board of a computer called?",
        options: ["CPU", "RAM", "Motherboard", "Hard Drive"],
        answer: 2
    },
    {
        question: "Which of these is a web browser?",
        options: ["Microsoft Word", "Google Chrome", "Adobe Photoshop", "Windows Media Player"],
        answer: 1
    },
    {
        question: "What does GUI stand for?",
        options: ["Graphical User Interface", "General User Interface", "Global User Interface", "Guided User Interface"],
        answer: 0
    },
    {
        question: "Which company created the iPhone?",
        options: ["Samsung", "Google", "Apple", "Microsoft"],
        answer: 2
    },
    {
        question: "What is malware?",
        options: ["Good software", "Malicious software", "System software", "Application software"],
        answer: 1
    },
    {
        question: "What does URL stand for?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Locator", "Universal Reference Locator"],
        answer: 1
    },
    {
        question: "Which of these is an output device?",
        options: ["Keyboard", "Mouse", "Microphone", "Monitor"],
        answer: 3
    },
    {
        question: "What is the extension for a text file?",
        options: [".doc", ".txt", ".pdf", ".jpg"],
        answer: 1
    },
    {
        question: "What does ISP stand for?",
        options: ["Internet Service Provider", "Internal Service Provider", "Internet System Provider", "Internal System Provider"],
        answer: 0
    },
    {
        question: "Which programming language is known for web development?",
        options: ["C++", "Java", "JavaScript", "Python"],
        answer: 2
    },
    {
        question: "What is phishing?",
        options: ["A type of fishing", "A cyber attack", "A programming language", "A computer game"],
        answer: 1
    },
    {
        question: "What does WIFI stand for?",
        options: ["Wireless Fidelity", "Wide Fidelity", "Wireless Frequency", "Wide Frequency"],
        answer: 0
    },
    {
        question: "Which of these is a search engine?",
        options: ["Facebook", "Google", "Instagram", "WhatsApp"],
        answer: 1
    },
    {
        question: "What is the purpose of antivirus software?",
        options: ["To create viruses", "To protect against viruses", "To speed up computer", "To browse internet"],
        answer: 1
    },
    {
        question: "What does CTRL+C do?",
        options: ["Cut", "Copy", "Paste", "Delete"],
        answer: 1
    },
    {
        question: "Which of these is a programming language?",
        options: ["Microsoft Word", "Python", "Google Chrome", "Adobe Photoshop"],
        answer: 1
    },
    {
        question: "What is cloud computing?",
        options: ["Computing in the sky", "Weather prediction", "Internet-based computing", "Airplane navigation"],
        answer: 2
    },
    {
        question: "What does CTRL+V do?",
        options: ["Cut", "Copy", "Paste", "Save"],
        answer: 2
    },
    {
        question: "Which of these is an image file format?",
        options: [".txt", ".mp3", ".jpg", ".exe"],
        answer: 2
    },
    {
        question: "What is spam in email context?",
        options: ["Important emails", "Unwanted emails", "Deleted emails", "Sent emails"],
        answer: 1
    },
    {
        question: "What does CTRL+S do?",
        options: ["Save", "Search", "Select", "Sort"],
        answer: 0
    },
    {
        question: "Which of these is a video file format?",
        options: [".doc", ".jpg", ".mp4", ".txt"],
        answer: 2
    },
    {
        question: "What is a cookie in web browsing?",
        options: ["A snack", "A small data file", "A virus", "A program"],
        answer: 1
    },
    {
        question: "What does CTRL+Z do?",
        options: ["Redo", "Undo", "Zoom", "Close"],
        answer: 1
    },
    {
        question: "Which of these is an audio file format?",
        options: [".pdf", ".mp3", ".jpg", ".exe"],
        answer: 1
    },
    {
        question: "What is a pixel?",
        options: ["A small picture element", "A type of computer", "A programming language", "A virus"],
        answer: 0
    },
    {
        question: "What does CTRL+A do?",
        options: ["Select all", "Add", "About", "Arrange"],
        answer: 0
    },
    {
        question: "Which of these is a spreadsheet program?",
        options: ["Microsoft Word", "Microsoft Excel", "Adobe Photoshop", "Google Chrome"],
        answer: 1
    },
    {
        question: "What is bandwidth?",
        options: ["Width of a band", "Data transfer capacity", "Computer memory", "Screen resolution"],
        answer: 1
    },
    {
        question: "What does F5 key do in most browsers?",
        options: ["Close tab", "Refresh page", "Open new tab", "Go back"],
        answer: 1
    },
    {
        question: "Which of these is a presentation software?",
        options: ["Microsoft PowerPoint", "Microsoft Excel", "Adobe Photoshop", "Google Chrome"],
        answer: 0
    },
    {
        question: "What is a hashtag?",
        options: ["A type of hash", "A social media tag", "A programming function", "A computer virus"],
        answer: 1
    },
    {
        question: "What does ALT+TAB do?",
        options: ["Switch between applications", "Create new tab", "Close application", "Minimize window"],
        answer: 0
    },
    {
        question: "Which of these is a database program?",
        options: ["Microsoft Word", "Microsoft Access", "Adobe Photoshop", "Google Chrome"],
        answer: 1
    },
    {
        question: "What is a blog?",
        options: ["A type of frog", "An online journal", "A computer virus", "A programming language"],
        answer: 1
    },
    {
        question: "What does CTRL+F do?",
        options: ["Find", "Format", "File", "Font"],
        answer: 0
    },
    {
        question: "Which of these is an email client?",
        options: ["Microsoft Outlook", "Microsoft Excel", "Adobe Photoshop", "Google Chrome"],
        answer: 0
    },
    {
        question: "What is a podcast?",
        options: ["A type of cast", "Digital audio program", "Computer hardware", "Programming language"],
        answer: 1
    },
    {
        question: "What does CTRL+P do?",
        options: ["Paste", "Print", "Play", "Pause"],
        answer: 1
    },
    {
        question: "Which of these is a photo editing software?",
        options: ["Microsoft Word", "Microsoft Excel", "Adobe Photoshop", "Google Chrome"],
        answer: 2
    },
    {
        question: "What is streaming?",
        options: ["Water flowing", "Real-time media delivery", "Computer programming", "File compression"],
        answer: 1
    },
    {
        question: "What does CTRL+N do?",
        options: ["New", "Next", "Note", "Number"],
        answer: 0
    },
    {
        question: "Which of these is a video calling software?",
        options: ["Microsoft Word", "Skype", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a meme?",
        options: ["A type of memory", "Viral internet content", "Computer virus", "Programming language"],
        answer: 1
    },
    {
        question: "What does CTRL+O do?",
        options: ["Open", "Options", "Output", "Order"],
        answer: 0
    },
    {
        question: "Which of these is a music streaming service?",
        options: ["Microsoft Word", "Spotify", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a GIF?",
        options: ["A gift", "Animated image format", "Computer virus", "Programming language"],
        answer: 1
    },
    {
        question: "What does CTRL+X do?",
        options: ["Exit", "Cut", "Extra", "Expand"],
        answer: 1
    },
    {
        question: "Which of these is a social media platform?",
        options: ["Microsoft Word", "Facebook", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a emoji?",
        options: ["A type of emotion", "Small digital image", "Computer virus", "Programming language"],
        answer: 1
    },
    {
        question: "What does CTRL+Y do?",
        options: ["Yes", "Redo", "Year", "Yellow"],
        answer: 1
    },
    {
        question: "Which of these is a messaging app?",
        options: ["Microsoft Word", "WhatsApp", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a selfie?",
        options: ["Self-portrait photo", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does SHIFT+DELETE do?",
        options: ["Move to recycle bin", "Permanently delete", "Copy file", "Rename file"],
        answer: 1
    },
    {
        question: "Which of these is a cloud storage service?",
        options: ["Microsoft Word", "Google Drive", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a hashtag used for?",
        options: ["Tagging content", "Computer programming", "File compression", "Virus protection"],
        answer: 0
    },
    {
        question: "What does WINDOWS+L do?",
        options: ["Lock computer", "Launch program", "Load file", "List files"],
        answer: 0
    },
    {
        question: "Which of these is a video streaming service?",
        options: ["Microsoft Word", "Netflix", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a screenshot?",
        options: ["Image of screen", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+ESC do?",
        options: ["Open calculator", "Open task manager", "Open notepad", "Open browser"],
        answer: 1
    },
    {
        question: "Which of these is an online marketplace?",
        options: ["Microsoft Word", "Amazon", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a QR code?",
        options: ["Quick Response code", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+N do in browsers?",
        options: ["New tab", "New window", "Incognito mode", "New bookmark"],
        answer: 2
    },
    {
        question: "Which of these is a ride-sharing app?",
        options: ["Microsoft Word", "Uber", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a notification?",
        options: ["Alert message", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+T do in browsers?",
        options: ["New tab", "Reopen closed tab", "Close tab", "Refresh tab"],
        answer: 1
    },
    {
        question: "Which of these is a food delivery app?",
        options: ["Microsoft Word", "DoorDash", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a widget?",
        options: ["Small application", "Computer virus", "Programming language", "Type of hardware"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+DELETE do in browsers?",
        options: ["Delete file", "Clear browsing data", "Close browser", "Delete bookmark"],
        answer: 1
    },
    {
        question: "Which of these is a navigation app?",
        options: ["Microsoft Word", "Google Maps", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a firewall?",
        options: ["Wall of fire", "Network security system", "Computer virus", "Programming language"],
        answer: 1
    },
    {
        question: "What does F11 do in most browsers?",
        options: ["Refresh page", "Full screen mode", "Close tab", "New tab"],
        answer: 1
    },
    {
        question: "Which of these is a payment app?",
        options: ["Microsoft Word", "PayPal", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is encryption?",
        options: ["Data protection method", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+I do in browsers?",
        options: ["Open incognito", "Open developer tools", "Import bookmarks", "Insert image"],
        answer: 1
    },
    {
        question: "Which of these is a fitness app?",
        options: ["Microsoft Word", "Fitbit", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is two-factor authentication?",
        options: ["Double security method", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+V do?",
        options: ["Paste without formatting", "Paste with formatting", "Copy", "Cut"],
        answer: 0
    },
    {
        question: "Which of these is a note-taking app?",
        options: ["Microsoft Word", "Evernote", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is a VPN?",
        options: ["Virtual Private Network", "Computer virus", "Programming language", "Type of software"],
        answer: 0
    },
    {
        question: "What does CTRL+SHIFT+ESC open?",
        options: ["Calculator", "Task Manager", "Notepad", "Browser"],
        answer: 1
    },
    {
        question: "Which of these is a language learning app?",
        options: ["Microsoft Word", "Duolingo", "Adobe Photoshop", "Microsoft Excel"],
        answer: 1
    },
    {
        question: "What is machine learning?",
        options: ["AI learning method", "Computer virus", "Programming language", "Type of hardware"],
        answer: 0
    },
    {
        question: "What does WINDOWS+D do?",
        options: ["Delete file", "Show desktop", "Open documents", "Duplicate window"],
        answer: 1
    },
    {
        question: "Which of these is a photo sharing app?",
        options: ["Microsoft Word", "Instagram", "Adobe Photoshop", "Microsoft Excel"],
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
    localStorage.setItem('lastScore_computer_easy', `${score}/10`);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>
                                 <a href="../index.html" class="btn btn-success mt-3">Back to Home</a>`;
}

window.onload = function() {
    const lastScore = localStorage.getItem('lastScore_computer_easy');
    if (lastScore) {
        const quizContainer = document.getElementById('quiz');
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = `<p style="color: yellow; font-weight: bold;">Last Score: ${lastScore}</p>`;
        quizContainer.parentNode.insertBefore(scoreDisplay, quizContainer);
    }
    showQuestion();
};
