const allQuestions = [
    {
        question: "Which of the following is NOT a type of computer network?",
        options: [
            "LAN",
            "WAN",
            "MAN",
            "WLAN"
        ],
        answer: 3
    },
    {
        question: "What does URL stand for?",
        options: [
            "Universal Resource Locator",
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Resource Link"
        ],
        answer: 1
    },
    {
        question: "Which of the following is an example of an input device?",
        options: [
            "Printer",
            "Monitor",
            "Keyboard",
            "Speakers"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of spreadsheet software?",
        options: [
            "To create presentations",
            "To manage databases",
            "To perform calculations and analyze data",
            "To edit images"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the def keyword in Python?",
        options: [
            "To define a variable",
            "To define a function",
            "To define a class",
            "To define a loop"
        ],
        answer: 1
    }
,
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        answer: 1
    },
    {
        question: "Which data structure uses LIFO principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: 1
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
        answer: 0
    },
    {
        question: "Which sorting algorithm has the best average case time complexity?",
        options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
        answer: 2
    },
    {
        question: "What is the maximum number of nodes in a binary tree of height h?",
        options: ["2^h", "2^h - 1", "2^(h+1) - 1", "2^(h-1)"],
        answer: 2
    },
    {
        question: "Which protocol is used for secure web browsing?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: 1
    },
    {
        question: "What is the purpose of a hash function?",
        options: ["Sorting data", "Mapping data to fixed-size values", "Encrypting data", "Compressing data"],
        answer: 1
    },
    {
        question: "Which design pattern ensures only one instance of a class?",
        options: ["Factory", "Observer", "Singleton", "Strategy"],
        answer: 2
    },
    {
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 2
    },
    {
        question: "Which layer of the OSI model handles routing?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 2
    },
    {
        question: "What is a deadlock in operating systems?",
        options: ["System crash", "Infinite loop", "Circular wait for resources", "Memory overflow"],
        answer: 2
    },
    {
        question: "Which algorithm is used in RSA encryption?",
        options: ["Symmetric key", "Public key", "Hash function", "Digital signature"],
        answer: 1
    },
    {
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 2
    },
    {
        question: "Which data structure is used to implement recursion?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: 1
    },
    {
        question: "What is the purpose of a compiler?",
        options: ["Execute code", "Debug code", "Translate source code to machine code", "Format code"],
        answer: 2
    },
    {
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 2
    },
    {
        question: "What is the difference between TCP and UDP?",
        options: ["TCP is faster", "UDP is reliable", "TCP is connection-oriented", "UDP uses more bandwidth"],
        answer: 2
    },
    {
        question: "Which tree traversal visits root node first?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        answer: 1
    },
    {
        question: "What is the purpose of virtual memory?",
        options: ["Increase CPU speed", "Extend available memory", "Improve graphics", "Enhance security"],
        answer: 1
    },
    {
        question: "Which scheduling algorithm can cause starvation?",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF"],
        answer: 2
    },
    {
        question: "What is the time complexity of heap sort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 1
    },
    {
        question: "Which data structure is used in BFS?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: 1
    },
    {
        question: "What is the purpose of an index in databases?",
        options: ["Store data", "Speed up queries", "Backup data", "Encrypt data"],
        answer: 1
    },
    {
        question: "Which protocol is used for email transmission?",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        answer: 2
    },
    {
        question: "What is the space complexity of quicksort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 1
    },
    {
        question: "Which data structure uses FIFO principle?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: 1
    },
    {
        question: "What is the purpose of a foreign key?",
        options: ["Primary identification", "Link tables", "Index data", "Encrypt data"],
        answer: 1
    },
    {
        question: "Which layer handles error detection in OSI model?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 1
    },
    {
        question: "What is the time complexity of insertion in a hash table?",
        options: ["O(1) average", "O(log n)", "O(n)", "O(n log n)"],
        answer: 0
    },
    {
        question: "Which algorithm is used in DFS?",
        options: ["Queue", "Stack", "Array", "Heap"],
        answer: 1
    },
    {
        question: "What is the purpose of normalization in databases?",
        options: ["Increase speed", "Reduce redundancy", "Add security", "Backup data"],
        answer: 1
    },
    {
        question: "Which port number is used by HTTP?",
        options: ["21", "22", "80", "443"],
        answer: 2
    },
    {
        question: "What is the worst-case time complexity of binary search tree insertion?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 2
    },
    {
        question: "Which data structure is used to implement priority queues?",
        options: ["Array", "Linked List", "Heap", "Stack"],
        answer: 2
    },
    {
        question: "What is the purpose of a semaphore?",
        options: ["Memory management", "Process synchronization", "File management", "Network communication"],
        answer: 1
    },
    {
        question: "Which protocol is used for secure file transfer?",
        options: ["FTP", "SFTP", "HTTP", "SMTP"],
        answer: 1
    },
    {
        question: "What is the time complexity of finding minimum in a min-heap?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 0
    },
    {
        question: "Which tree is always balanced?",
        options: ["Binary Tree", "BST", "AVL Tree", "B-Tree"],
        answer: 2
    },
    {
        question: "What is the purpose of a cache?",
        options: ["Store permanent data", "Speed up access", "Backup data", "Encrypt data"],
        answer: 1
    },
    {
        question: "Which layer provides end-to-end communication in OSI model?",
        options: ["Network", "Transport", "Session", "Application"],
        answer: 1
    },
    {
        question: "What is the space complexity of bubble sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 0
    },
    {
        question: "Which data structure allows insertion and deletion at both ends?",
        options: ["Stack", "Queue", "Deque", "Array"],
        answer: 2
    },
    {
        question: "What is ACID in database transactions?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Data", "Authentication, Confidentiality, Integrity, Delivery", "Availability, Consistency, Isolation, Distribution"],
        answer: 0
    },
    {
        question: "Which port number is used by HTTPS?",
        options: ["80", "443", "21", "22"],
        answer: 1
    },
    {
        question: "What is the time complexity of deleting from a balanced BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 1
    },
    {
        question: "Which algorithm is used for shortest path in weighted graphs?",
        options: ["BFS", "DFS", "Dijkstra", "Kruskal"],
        answer: 2
    },
    {
        question: "What is the purpose of paging in operating systems?",
        options: ["Memory management", "Process scheduling", "File management", "Network communication"],
        answer: 0
    },
    {
        question: "Which protocol resolves domain names to IP addresses?",
        options: ["HTTP", "FTP", "DNS", "SMTP"],
        answer: 2
    },
    {
        question: "What is the time complexity of radix sort?",
        options: ["O(n)", "O(n log n)", "O(nk)", "O(n²)"],
        answer: 2
    },
    {
        question: "Which data structure is used in Huffman coding?",
        options: ["Array", "Stack", "Queue", "Priority Queue"],
        answer: 3
    },
    {
        question: "What is the purpose of a mutex?",
        options: ["Memory allocation", "Mutual exclusion", "Message passing", "Method invocation"],
        answer: 1
    },
    {
        question: "Which layer handles data encryption in OSI model?",
        options: ["Physical", "Data Link", "Presentation", "Application"],
        answer: 2
    },
    {
        question: "What is the worst-case space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 2
    },
    {
        question: "Which graph algorithm finds minimum spanning tree?",
        options: ["Dijkstra", "Kruskal", "BFS", "DFS"],
        answer: 1
    },
    {
        question: "What is the purpose of a transaction log?",
        options: ["Store queries", "Record changes", "Index data", "Backup schema"],
        answer: 1
    },
    {
        question: "Which protocol is connectionless?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        answer: 1
    },
    {
        question: "What is the time complexity of counting sort?",
        options: ["O(n)", "O(n + k)", "O(n log n)", "O(n²)"],
        answer: 1
    },
    {
        question: "Which data structure is used in expression evaluation?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: 1
    },
    {
        question: "What is the purpose of checkpointing?",
        options: ["Error detection", "Recovery mechanism", "Performance optimization", "Security enhancement"],
        answer: 1
    },
    {
        question: "Which layer provides session management in OSI model?",
        options: ["Transport", "Session", "Presentation", "Application"],
        answer: 1
    },
    {
        question: "What is the time complexity of building a heap?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
        answer: 0
    },
    {
        question: "Which algorithm is used for topological sorting?",
        options: ["BFS", "DFS", "Dijkstra", "Kruskal"],
        answer: 1
    },
    {
        question: "What is the purpose of a B+ tree?",
        options: ["Memory management", "Database indexing", "Network routing", "Process scheduling"],
        answer: 1
    },
    {
        question: "Which port number is used by SSH?",
        options: ["21", "22", "23", "25"],
        answer: 1
    },
    {
        question: "What is the space complexity of selection sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 0
    },
    {
        question: "Which data structure is used in undo operations?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: 1
    },
    {
        question: "What is the purpose of two-phase locking?",
        options: ["Memory management", "Concurrency control", "Error handling", "Performance optimization"],
        answer: 1
    },
    {
        question: "Which protocol is used for network time synchronization?",
        options: ["HTTP", "FTP", "NTP", "SMTP"],
        answer: 2
    },
    {
        question: "What is the time complexity of insertion sort in best case?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
        answer: 1
    },
    {
        question: "Which tree traversal is used in expression trees?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        answer: 2
    },
    {
        question: "What is the purpose of a clustered index?",
        options: ["Sort data physically", "Create backup", "Encrypt data", "Compress data"],
        answer: 0
    },
    {
        question: "Which layer handles flow control in OSI model?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 3
    },
    {
        question: "What is the worst-case time complexity of hash table lookup?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 2
    },
    {
        question: "Which algorithm is used for cycle detection in graphs?",
        options: ["BFS", "DFS", "Dijkstra", "Kruskal"],
        answer: 1
    },
    {
        question: "What is the purpose of a dirty bit?",
        options: ["Error detection", "Memory management", "Security", "Performance"],
        answer: 1
    },
    {
        question: "Which protocol is used for email retrieval?",
        options: ["SMTP", "POP3", "HTTP", "FTP"],
        answer: 1
    },
    {
        question: "What is the time complexity of shell sort?",
        options: ["O(n)", "O(n log n)", "O(n^1.5)", "O(n²)"],
        answer: 2
    },
    {
        question: "Which data structure is used in compiler symbol tables?",
        options: ["Array", "Hash Table", "Stack", "Queue"],
        answer: 1
    },
    {
        question: "What is the purpose of a page replacement algorithm?",
        options: ["Memory optimization", "CPU scheduling", "File management", "Network routing"],
        answer: 0
    },
    {
        question: "Which layer provides data formatting in OSI model?",
        options: ["Session", "Presentation", "Application", "Transport"],
        answer: 1
    },
    {
        question: "What is the time complexity of finding LCA in a tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 1
    },
    {
        question: "Which algorithm is used for strongly connected components?",
        options: ["BFS", "Kosaraju", "Dijkstra", "Kruskal"],
        answer: 1
    },
    {
        question: "What is the purpose of a write-ahead log?",
        options: ["Performance", "Durability", "Security", "Compression"],
        answer: 1
    },
    {
        question: "Which port number is used by Telnet?",
        options: ["21", "22", "23", "25"],
        answer: 2
    },
    {
        question: "What is the space complexity of counting sort?",
        options: ["O(1)", "O(k)", "O(n)", "O(n + k)"],
        answer: 3
    },
    {
        question: "Which data structure is used in autocomplete features?",
        options: ["Array", "Hash Table", "Trie", "Stack"],
        answer: 2
    },
    {
        question: "What is the purpose of a thread pool?",
        options: ["Memory management", "Resource optimization", "Error handling", "Security"],
        answer: 1
    },
    {
        question: "Which layer provides user interface in OSI model?",
        options: ["Presentation", "Application", "Session", "Transport"],
        answer: 1
    },
    {
        question: "What is the time complexity of bucket sort?",
        options: ["O(n)", "O(n + k)", "O(n log n)", "O(n²)"],
        answer: 1
    },
    {
        question: "Which algorithm is used for maximum flow problems?",
        options: ["Dijkstra", "Ford-Fulkerson", "Kruskal", "Prim"],
        answer: 1
    },
    {
        question: "What is the purpose of a bloom filter?",
        options: ["Exact membership testing", "Probabilistic membership testing", "Sorting", "Searching"],
        answer: 1
    },
    {
        question: "Which protocol is used for network management?",
        options: ["HTTP", "SNMP", "FTP", "SMTP"],
        answer: 1
    },
    {
        question: "What is the worst-case time complexity of AVL tree operations?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 1
    },
    {
        question: "Which data structure is used in garbage collection?",
        options: ["Stack", "Queue", "Graph", "Array"],
        answer: 2
    },
    {
        question: "What is the purpose of copy-on-write?",
        options: ["Security", "Memory efficiency", "Performance", "Error handling"],
        answer: 1
    },
    {
        question: "Which layer handles congestion control?",
        options: ["Network", "Transport", "Session", "Application"],
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
    localStorage.setItem('lastScore_computer_difficult', `${score}/10`);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>
                                 <a href="../index.html" class="btn btn-success mt-3">Back to Home</a>`;
}

window.onload = function() {
    const lastScore = localStorage.getItem('lastScore_computer_difficult');
    if (lastScore) {
        const quizContainer = document.getElementById('quiz');
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = `<p style="color: yellow; font-weight: bold;">Last Score: ${lastScore}</p>`;
        quizContainer.parentNode.insertBefore(scoreDisplay, quizContainer);
    }
    showQuestion();
};
