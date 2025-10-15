const allQuestions = [
    {
        question: " Which of the following is an example of deductive reasoning?",
        options: [
            "All dogs are mammals. Rex is a dog. Therefore, Rex is a mammal.",
            "Some dogs are friendly. Bella is friendly. Therefore, Bella is a dog.",
            "It rained yesterday. It might rain today.",
            "Birds can fly. Penguins are birds. Therefore, penguins can fly."
        ],
        answer: 0
    },
    {
        question: "Which statement best describes inductive reasoning?",
        options: [
            "Drawing a specific conclusion from a general principle.",
            "Drawing a general conclusion from specific observations.",
            "Deriving conclusions from the comparison of two statements.",
            "Making decisions based on emotional response."
        ],
        answer: 1
    },
    {
        question: " Which scenario illustrates causal reasoning?",
        options: [
            "The sun rises in the east because the Earth rotates.",
            "All cats have fur; a lion is a cat; therefore, a lion has fur.",
            "Some students study at night; John studies at night; therefore, John is a student.",
            "If it rains, the grass gets wet; the grass is wet, so it rained."
        ],
        answer: 0
    },
    {
        question: "What is the purpose of using analogical reasoning?",
        options: [
            "To establish a cause-and-effect relationship.",
            "To make a direct comparison between two similar things.",
            "To deduce a conclusion from a general principle.",
            "To predict outcomes based on statistical data."
        ],
        answer: 1
    },
    {
        question: " Which of the following is an example of a straw man fallacy?",
        options: [
            "Person A says we should have stricter gun control. Person B says Person A wants to take all guns away from law-abiding citizens.",
            "Person A argues that climate change is real. Person B agrees but changes the topic to pollution instead.",
            "Person A believes in evolution. Person B attacks Person A's character instead of the argument.",
            "Person A presents data on health benefits of exercise. Person B responds by saying exercise isn't the only way to stay healthy."
        ],
        answer: 0
    }
,
    {
        question: "In a logical argument, what is the difference between validity and soundness?",
        options: [
            "Validity concerns truth, soundness concerns logic",
            "Validity concerns logical structure, soundness requires both valid structure and true premises",
            "They are the same thing",
            "Soundness is more important than validity"
        ],
        answer: 1
    },
    {
        question: "Which fallacy occurs when someone argues that because something hasn't been proven false, it must be true?",
        options: [
            "Ad hominem",
            "Appeal to ignorance",
            "False dichotomy",
            "Circular reasoning"
        ],
        answer: 1
    },
    {
        question: "In propositional logic, what does the symbol '→' represent?",
        options: [
            "Conjunction",
            "Disjunction",
            "Implication",
            "Negation"
        ],
        answer: 2
    },
    {
        question: "What is the contrapositive of 'If P then Q'?",
        options: [
            "If Q then P",
            "If not P then not Q",
            "If not Q then not P",
            "P if and only if Q"
        ],
        answer: 2
    },
    {
        question: "Which reasoning pattern follows: 'All A are B, All B are C, Therefore all A are C'?",
        options: [
            "Modus ponens",
            "Modus tollens",
            "Hypothetical syllogism",
            "Disjunctive syllogism"
        ],
        answer: 2
    },
    {
        question: "What type of reasoning moves from general principles to specific conclusions?",
        options: [
            "Inductive reasoning",
            "Deductive reasoning",
            "Abductive reasoning",
            "Analogical reasoning"
        ],
        answer: 1
    },
    {
        question: "In formal logic, what makes an argument valid?",
        options: [
            "The premises are true",
            "The conclusion is true",
            "If the premises were true, the conclusion would necessarily follow",
            "The argument is persuasive"
        ],
        answer: 2
    },
    {
        question: "Which fallacy involves attacking the person making an argument rather than the argument itself?",
        options: [
            "Straw man",
            "Ad hominem",
            "Red herring",
            "False cause"
        ],
        answer: 1
    },
    {
        question: "What is the logical form of modus tollens?",
        options: [
            "If P then Q; P; therefore Q",
            "If P then Q; not Q; therefore not P",
            "P or Q; not P; therefore Q",
            "If P then Q; Q; therefore P"
        ],
        answer: 1
    },
    {
        question: "In critical thinking, what is meant by 'begging the question'?",
        options: [
            "Asking too many questions",
            "Avoiding the main question",
            "Using the conclusion as a premise",
            "Questioning authority"
        ],
        answer: 2
    },
    {
        question: "Which principle states that the simplest explanation is usually the correct one?",
        options: [
            "Occam's Razor",
            "Burden of proof",
            "Law of excluded middle",
            "Principle of charity"
        ],
        answer: 0
    },
    {
        question: "What type of reasoning is used in scientific hypothesis formation?",
        options: [
            "Deductive",
            "Inductive",
            "Abductive",
            "Analogical"
        ],
        answer: 2
    },
    {
        question: "In logic, what is a tautology?",
        options: [
            "A statement that is always false",
            "A statement that is always true",
            "A statement that contradicts itself",
            "A statement with no truth value"
        ],
        answer: 1
    },
    {
        question: "Which fallacy presents only two options when more exist?",
        options: [
            "False dichotomy",
            "Slippery slope",
            "Appeal to authority",
            "Hasty generalization"
        ],
        answer: 0
    },
    {
        question: "What is the difference between necessary and sufficient conditions?",
        options: [
            "They are the same",
            "Necessary conditions must be present; sufficient conditions guarantee the outcome",
            "Sufficient conditions must be present; necessary conditions guarantee the outcome",
            "Neither is important in logic"
        ],
        answer: 1
    },
    {
        question: "In predicate logic, what does the universal quantifier (∀) mean?",
        options: [
            "There exists",
            "For all",
            "If and only if",
            "Not all"
        ],
        answer: 1
    },
    {
        question: "Which reasoning error involves concluding that correlation implies causation?",
        options: [
            "Post hoc ergo propter hoc",
            "Ad hominem",
            "Straw man",
            "Appeal to emotion"
        ],
        answer: 0
    },
    {
        question: "What is the logical structure of a categorical syllogism?",
        options: [
            "Two premises and a conclusion about categories",
            "One premise and two conclusions",
            "Three premises and no conclusion",
            "A conditional statement"
        ],
        answer: 0
    },
    {
        question: "In modal logic, what does 'necessarily P' mean?",
        options: [
            "P is true in some possible worlds",
            "P is true in all possible worlds",
            "P is false in all possible worlds",
            "P has no truth value"
        ],
        answer: 1
    },
    {
        question: "Which principle requires treating similar cases similarly?",
        options: [
            "Principle of explosion",
            "Principle of consistency",
            "Principle of bivalence",
            "Principle of non-contradiction"
        ],
        answer: 1
    },
    {
        question: "What is the fallacy of composition?",
        options: [
            "Assuming what's true of parts is true of the whole",
            "Assuming what's true of the whole is true of parts",
            "Making up false information",
            "Using too many premises"
        ],
        answer: 0
    },
    {
        question: "In argumentation theory, what is the burden of proof?",
        options: [
            "The obligation to provide evidence for claims",
            "The weight of evidence",
            "The difficulty of proving something",
            "The cost of research"
        ],
        answer: 0
    },
    {
        question: "Which logical operator represents exclusive or (XOR)?",
        options: [
            "∧",
            "∨",
            "⊕",
            "→"
        ],
        answer: 2
    },
    {
        question: "What is the difference between strong and weak inductive arguments?",
        options: [
            "Strong arguments have more premises",
            "Strong arguments make the conclusion more probable",
            "Weak arguments are always false",
            "There is no difference"
        ],
        answer: 1
    },
    {
        question: "In formal logic, what is a contradiction?",
        options: [
            "A statement that is sometimes true",
            "A statement that is always false",
            "A statement with unknown truth value",
            "A statement that changes truth value"
        ],
        answer: 1
    },
    {
        question: "Which fallacy involves misrepresenting someone's argument to make it easier to attack?",
        options: [
            "Red herring",
            "Straw man",
            "Ad hominem",
            "False analogy"
        ],
        answer: 1
    },
    {
        question: "What is the principle of explosion in logic?",
        options: [
            "From a contradiction, anything follows",
            "Arguments get more complex over time",
            "Logic systems expand naturally",
            "Truth values multiply"
        ],
        answer: 0
    },
    {
        question: "In probability theory, what is the conjunction fallacy?",
        options: [
            "Thinking specific conditions are more probable than general ones",
            "Confusing correlation with causation",
            "Misunderstanding conditional probability",
            "Ignoring base rates"
        ],
        answer: 0
    },
    {
        question: "What type of definition explains a term by stating what it is not?",
        options: [
            "Ostensive definition",
            "Stipulative definition",
            "Negative definition",
            "Operational definition"
        ],
        answer: 2
    },
    {
        question: "In logic, what is the law of excluded middle?",
        options: [
            "Every statement is either true or false",
            "No statement can be both true and false",
            "Some statements have no truth value",
            "Truth values exist on a spectrum"
        ],
        answer: 0
    },
    {
        question: "Which cognitive bias involves seeking information that confirms existing beliefs?",
        options: [
            "Availability heuristic",
            "Confirmation bias",
            "Anchoring bias",
            "Representativeness heuristic"
        ],
        answer: 1
    },
    {
        question: "What is the difference between syntax and semantics in logic?",
        options: [
            "Syntax deals with meaning, semantics with form",
            "Syntax deals with form, semantics with meaning",
            "They are the same thing",
            "Neither is important"
        ],
        answer: 1
    },
    {
        question: "In decision theory, what is expected utility?",
        options: [
            "The most likely outcome",
            "The best possible outcome",
            "The weighted average of possible outcomes",
            "The worst possible outcome"
        ],
        answer: 2
    },
    {
        question: "Which paradox involves a set that contains all sets that do not contain themselves?",
        options: [
            "Zeno's paradox",
            "Russell's paradox",
            "Liar's paradox",
            "Sorites paradox"
        ],
        answer: 1
    },
    {
        question: "What is the gambler's fallacy?",
        options: [
            "Believing past results affect future independent events",
            "Thinking gambling is always profitable",
            "Overestimating one's skill",
            "Underestimating risks"
        ],
        answer: 0
    },
    {
        question: "In formal systems, what is completeness?",
        options: [
            "All true statements can be proven",
            "All statements are decidable",
            "The system has no contradictions",
            "The system is easy to use"
        ],
        answer: 0
    },
    {
        question: "Which principle states that extraordinary claims require extraordinary evidence?",
        options: [
            "Occam's Razor",
            "Sagan's Standard",
            "Burden of proof",
            "Principle of charity"
        ],
        answer: 1
    },
    {
        question: "What is the base rate fallacy?",
        options: [
            "Ignoring prior probability when updating beliefs",
            "Confusing rates with ratios",
            "Misunderstanding percentages",
            "Using wrong mathematical operations"
        ],
        answer: 0
    },
    {
        question: "In argumentation, what is a non sequitur?",
        options: [
            "A conclusion that doesn't follow from premises",
            "A premise that's obviously false",
            "An argument with too many steps",
            "A circular argument"
        ],
        answer: 0
    },
    {
        question: "What is the difference between denotation and connotation?",
        options: [
            "Denotation is literal meaning, connotation is implied meaning",
            "Denotation is implied meaning, connotation is literal meaning",
            "They mean the same thing",
            "Neither is important in logic"
        ],
        answer: 0
    },
    {
        question: "Which fallacy involves arguing that something is true because many people believe it?",
        options: [
            "Appeal to authority",
            "Appeal to popularity",
            "Appeal to emotion",
            "Appeal to tradition"
        ],
        answer: 1
    },
    {
        question: "In logic, what is material implication?",
        options: [
            "A physical connection between statements",
            "An if-then relationship based on truth values",
            "A causal relationship",
            "A temporal sequence"
        ],
        answer: 1
    },
    {
        question: "What is the sorites paradox?",
        options: [
            "A paradox about vague predicates and borderline cases",
            "A paradox about infinite regress",
            "A paradox about self-reference",
            "A paradox about time travel"
        ],
        answer: 0
    },
    {
        question: "Which reasoning pattern is: 'Either P or Q; not P; therefore Q'?",
        options: [
            "Modus ponens",
            "Modus tollens",
            "Disjunctive syllogism",
            "Hypothetical syllogism"
        ],
        answer: 2
    },
    {
        question: "What is the difference between induction and abduction?",
        options: [
            "Induction generalizes from cases, abduction infers best explanation",
            "Abduction generalizes from cases, induction infers best explanation",
            "They are the same process",
            "Neither is used in reasoning"
        ],
        answer: 0
    },
    {
        question: "In modal logic, what does 'possibly P' mean?",
        options: [
            "P is true in all possible worlds",
            "P is true in at least one possible world",
            "P is false in all possible worlds",
            "P is uncertain"
        ],
        answer: 1
    },
    {
        question: "What is the principle of charity in argumentation?",
        options: [
            "Being generous with evidence",
            "Interpreting arguments in their strongest form",
            "Giving money to support arguments",
            "Being kind to opponents"
        ],
        answer: 1
    },
    {
        question: "Which fallacy involves assuming that what's true of the whole is true of its parts?",
        options: [
            "Fallacy of composition",
            "Fallacy of division",
            "Hasty generalization",
            "False analogy"
        ],
        answer: 1
    },
    {
        question: "What is soundness in formal logic?",
        options: [
            "An argument that is valid and has true premises",
            "An argument that is persuasive",
            "An argument with many premises",
            "An argument that sounds good"
        ],
        answer: 0
    },
    {
        question: "In probability, what is the representativeness heuristic?",
        options: [
            "Judging probability by similarity to mental prototypes",
            "Using the most recent information",
            "Relying on easily recalled examples",
            "Following mathematical rules strictly"
        ],
        answer: 0
    },
    {
        question: "What is the difference between analytic and synthetic statements?",
        options: [
            "Analytic statements are true by definition, synthetic require empirical verification",
            "Synthetic statements are true by definition, analytic require empirical verification",
            "They are the same type of statement",
            "The distinction is meaningless"
        ],
        answer: 0
    },
    {
        question: "Which paradox questions whether an omnipotent being can create a stone too heavy for them to lift?",
        options: [
            "Russell's paradox",
            "Omnipotence paradox",
            "Liar's paradox",
            "Zeno's paradox"
        ],
        answer: 1
    },
    {
        question: "What is the availability heuristic?",
        options: [
            "Using whatever information is available",
            "Judging probability by how easily examples come to mind",
            "Making decisions quickly",
            "Avoiding difficult decisions"
        ],
        answer: 1
    },
    {
        question: "In formal logic, what is consistency?",
        options: [
            "A system that contains no contradictions",
            "A system that proves all truths",
            "A system that's easy to understand",
            "A system that never changes"
        ],
        answer: 0
    },
    {
        question: "What is the anchoring bias?",
        options: [
            "Being too attached to initial information",
            "Preferring stable solutions",
            "Avoiding change",
            "Seeking security"
        ],
        answer: 0
    },
    {
        question: "Which logical principle states that nothing can be both true and false simultaneously?",
        options: [
            "Law of excluded middle",
            "Law of non-contradiction",
            "Law of identity",
            "Law of sufficient reason"
        ],
        answer: 1
    },
    {
        question: "What is the difference between validity and truth in logic?",
        options: [
            "Validity concerns argument structure, truth concerns statement accuracy",
            "Truth concerns argument structure, validity concerns statement accuracy",
            "They are identical concepts",
            "Neither is important in reasoning"
        ],
        answer: 0
    },
    {
        question: "In decision theory, what is the minimax principle?",
        options: [
            "Maximize the minimum possible outcome",
            "Minimize the maximum possible loss",
            "Both A and B",
            "Neither A nor B"
        ],
        answer: 2
    },
    {
        question: "What is the conjunction rule in probability?",
        options: [
            "P(A and B) = P(A) + P(B)",
            "P(A and B) = P(A) × P(B) when independent",
            "P(A and B) = P(A) ÷ P(B)",
            "P(A and B) = P(A) - P(B)"
        ],
        answer: 1
    },
    {
        question: "Which fallacy involves arguing that a small first step will lead to a chain of negative events?",
        options: [
            "False dichotomy",
            "Slippery slope",
            "Red herring",
            "Circular reasoning"
        ],
        answer: 1
    },
    {
        question: "What is the difference between necessary and contingent truths?",
        options: [
            "Necessary truths couldn't be otherwise, contingent truths could be different",
            "Contingent truths couldn't be otherwise, necessary truths could be different",
            "They are the same type of truth",
            "The distinction is arbitrary"
        ],
        answer: 0
    },
    {
        question: "In logic, what is existential quantification?",
        options: [
            "Stating that something exists",
            "Stating that at least one thing has a property",
            "Stating that all things have a property",
            "Stating that nothing exists"
        ],
        answer: 1
    },
    {
        question: "What is the Texas sharpshooter fallacy?",
        options: [
            "Drawing conclusions from cherry-picked data",
            "Using weapons in arguments",
            "Being overly precise",
            "Targeting specific opponents"
        ],
        answer: 0
    },
    {
        question: "Which principle suggests that we should prefer theories that make fewer assumptions?",
        options: [
            "Principle of sufficient reason",
            "Occam's Razor",
            "Principle of explosion",
            "Law of parsimony"
        ],
        answer: 1
    },
    {
        question: "What is the difference between inductive and deductive strength?",
        options: [
            "Inductive strength is about probability, deductive strength is about necessity",
            "Deductive strength is about probability, inductive strength is about necessity",
            "They measure the same thing",
            "Neither concept is meaningful"
        ],
        answer: 0
    },
    {
        question: "In formal systems, what is decidability?",
        options: [
            "The ability to make good decisions",
            "The existence of an algorithm to determine truth",
            "The clarity of the system",
            "The usefulness of the system"
        ],
        answer: 1
    },
    {
        question: "What is the planning fallacy?",
        options: [
            "Making too many plans",
            "Underestimating time and costs for future tasks",
            "Overplanning simple tasks",
            "Avoiding planning altogether"
        ],
        answer: 1
    },
    {
        question: "Which type of reasoning involves inference to the best explanation?",
        options: [
            "Deductive reasoning",
            "Inductive reasoning",
            "Abductive reasoning",
            "Analogical reasoning"
        ],
        answer: 2
    },
    {
        question: "What is the sunk cost fallacy?",
        options: [
            "Continuing investment based on past costs rather than future benefits",
            "Underestimating future costs",
            "Overestimating sunk costs",
            "Ignoring all costs"
        ],
        answer: 0
    },
    {
        question: "In modal logic, what is the difference between possibility and necessity?",
        options: [
            "Possibility means true in some worlds, necessity means true in all worlds",
            "Necessity means true in some worlds, possibility means true in all worlds",
            "They are equivalent concepts",
            "Neither concept is well-defined"
        ],
        answer: 0
    },
    {
        question: "What is the fundamental attribution error?",
        options: [
            "Attributing behavior to personality rather than situation",
            "Attributing behavior to situation rather than personality",
            "Making no attributions about behavior",
            "Making too many attributions"
        ],
        answer: 0
    },
    {
        question: "Which logical system allows for degrees of truth between true and false?",
        options: [
            "Classical logic",
            "Fuzzy logic",
            "Modal logic",
            "Temporal logic"
        ],
        answer: 1
    },
    {
        question: "What is the difference between correlation and causation?",
        options: [
            "Correlation implies causation",
            "Causation implies correlation, but correlation doesn't imply causation",
            "They are unrelated concepts",
            "Causation is weaker than correlation"
        ],
        answer: 1
    },
    {
        question: "In argumentation theory, what is a reductio ad absurdum?",
        options: [
            "Reducing arguments to simple terms",
            "Showing a position leads to absurd consequences",
            "Making arguments absurdly complex",
            "Avoiding absurd arguments"
        ],
        answer: 1
    },
    {
        question: "What is the difference between a priori and a posteriori knowledge?",
        options: [
            "A priori is before experience, a posteriori is after experience",
            "A posteriori is before experience, a priori is after experience",
            "They are the same type of knowledge",
            "The distinction is meaningless"
        ],
        answer: 0
    },
    {
        question: "Which cognitive bias involves overconfidence in one's own abilities?",
        options: [
            "Dunning-Kruger effect",
            "Imposter syndrome",
            "Confirmation bias",
            "Availability heuristic"
        ],
        answer: 0
    },
    {
        question: "What is the principle of bivalence?",
        options: [
            "Every proposition is either true or false",
            "Every proposition has two meanings",
            "Every argument has two sides",
            "Every system has two parts"
        ],
        answer: 0
    },
    {
        question: "In formal logic, what is an interpretation?",
        options: [
            "An explanation of what symbols mean",
            "An assignment of truth values to propositions",
            "A way of understanding arguments",
            "All of the above"
        ],
        answer: 3
    },
    {
        question: "What is the difference between entailment and implication?",
        options: [
            "Entailment is semantic, implication is syntactic",
            "Implication is semantic, entailment is syntactic",
            "They are identical",
            "Neither is important"
        ],
        answer: 0
    },
    {
        question: "Which paradox involves a statement that refers to itself as false?",
        options: [
            "Russell's paradox",
            "Liar's paradox",
            "Sorites paradox",
            "Zeno's paradox"
        ],
        answer: 1
    },
    {
        question: "What is the difference between inductive and statistical reasoning?",
        options: [
            "Statistical reasoning uses mathematical probability",
            "Inductive reasoning is more general",
            "Both A and B",
            "There is no difference"
        ],
        answer: 2
    },
    {
        question: "In decision theory, what is the expected value?",
        options: [
            "The most likely outcome",
            "The sum of outcomes weighted by their probabilities",
            "The best possible outcome",
            "The average of all outcomes"
        ],
        answer: 1
    },
    {
        question: "What is the difference between logical and causal necessity?",
        options: [
            "Logical necessity is about relationships between propositions, causal necessity is about relationships between events",
            "Causal necessity is about relationships between propositions, logical necessity is about relationships between events",
            "They are the same concept",
            "Neither type of necessity exists"
        ],
        answer: 0
    },
    {
        question: "Which fallacy involves concluding that because two things are similar in some ways, they must be similar in other ways?",
        options: [
            "False analogy",
            "Hasty generalization",
            "Composition fallacy",
            "Division fallacy"
        ],
        answer: 0
    },
    {
        question: "What is the difference between pragmatic and semantic meaning?",
        options: [
            "Pragmatic meaning depends on context, semantic meaning is context-independent",
            "Semantic meaning depends on context, pragmatic meaning is context-independent",
            "They are identical",
            "Neither type of meaning exists"
        ],
        answer: 0
    },
    {
        question: "In formal systems, what is the difference between syntax and proof theory?",
        options: [
            "Syntax deals with symbol manipulation, proof theory deals with derivation rules",
            "Proof theory deals with symbol manipulation, syntax deals with derivation rules",
            "They are the same thing",
            "Neither is important"
        ],
        answer: 0
    },
    {
        question: "What is the difference between classical and intuitionistic logic?",
        options: [
            "Intuitionistic logic rejects the law of excluded middle",
            "Classical logic rejects the law of excluded middle",
            "They accept the same logical laws",
            "The difference is purely notational"
        ],
        answer: 0
    },
    {
        question: "Which principle in ethics corresponds to the logical principle of universalizability?",
        options: [
            "Utilitarianism",
            "Categorical imperative",
            "Virtue ethics",
            "Divine command theory"
        ],
        answer: 1
    },
    {
        question: "What is the difference between object language and metalanguage?",
        options: [
            "Object language is what we talk about, metalanguage is what we use to talk about it",
            "Metalanguage is what we talk about, object language is what we use to talk about it",
            "They are the same language",
            "The distinction is arbitrary"
        ],
        answer: 0
    },
    {
        question: "In probability theory, what is Bayes' theorem used for?",
        options: [
            "Calculating joint probabilities",
            "Updating probabilities based on new evidence",
            "Finding the most probable outcome",
            "Determining independence"
        ],
        answer: 1
    },
    {
        question: "What is the difference between weak and strong AI in philosophical discussions?",
        options: [
            "Weak AI simulates intelligence, strong AI actually has consciousness",
            "Strong AI simulates intelligence, weak AI actually has consciousness",
            "They differ only in computational power",
            "There is no meaningful difference"
        ],
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
    localStorage.setItem('lastScore_reasoning_difficult', `${score}/10`);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>
                                 <a href="../index.html" class="btn btn-success mt-3">Back to Home</a>`;
}

window.onload = function() {
    const lastScore = localStorage.getItem('lastScore_reasoning_difficult');
    if (lastScore) {
        const quizContainer = document.getElementById('quiz');
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = `<p style="color: yellow; font-weight: bold;">Last Score: ${lastScore}</p>`;
        quizContainer.parentNode.insertBefore(scoreDisplay, quizContainer);
    }
    showQuestion();
};
