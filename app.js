const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
},
{
    question: "How can a datatype be declared to be a constant type?",
    a: "var",
    b: "let",
    c: "const",
    d: "constant",
    correct: "c",
},
{
    question: "What does the Javascript “debugger” statement do?",
    a: "It will debug all the errors in the program at runtime.",
    b: "It acts as a breakpoint in a program.",
    c: "It will debug error in the current statement if any.",
    d: "All of the above",
    correct: "b",
},
{
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringify()",
    b: "parse()",
    c: "convert()",
    d: "None of the above",
    correct: "a",
},
{
    question: "Which of the following are closures in Javascript?",
    a: "Variables",
    b: "Functions",
    c: "Objects",
    d: "All of the above",
    correct: "d",
},
{
    question: "Which of the following is not a Javascript framework?",
    a: "Node",
    b: "Vue",
    c: "Reacts",
    d: "Cassandra",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Thank you for playing the quiz, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
