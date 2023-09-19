const quizDate = [
    {
        question: "which language runs in a web browser?",
        a: "java",
        b: "c",
        c:  "python",
        d:   "javascript",
        correct: "d"
    },
    {
        question: "what does css stand for?",
        a: "central style sheets",
        b: "cascading style sheets",
        c: "cascading simple sheets",
        d:  "cars suvs sailboate",
        correct: "b",
    },
    {
        question: "what does html stand for?",  
        a: "hypertext markup language",
        b: "hypertext markdown language",
        C:  "hyperloop machine language",
        d:  "helicopters terminals motorboats lamborginis",
        correct: "a",

    },
    {
        question: "what year was javascript launched?",
        a: "1996",
        b:  "1995",
        c:  "1994",
        d:  "none of the above",
        correct: "b",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitbtn = document.getElementById('submit')

let currentQuiz = 0;

let currentQuizData

let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

     currentQuizData = quizDate[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers( ){
    answerEls.forEach( answerEls => answerEls.checked = false)
}

function getanswer(){
    let  answer;

    answerEls.forEach(item=>{
        if(item.checked){
            answer=item.id
        }
    })
return answer

}
submitbtn.addEventListener('click' , ()=>{
    let corectAnswer = getanswer();

    if(corectAnswer==currentQuizData.coorect){
        score++;
    }

    currentQuiz++;
    loadQuiz()
})


    