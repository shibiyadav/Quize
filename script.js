const questions = [
  {
    question: "1. वर्तमान में सीबीआई (CBI) के निदेशक कौन हैं?",
    choices: ["ऋषि कुमार शुक्ला", "सुबोध कुमार जायसवाल", "अनिल कुमार शर्मा", "एम. राजेश्वर राव"],
    answer: 1
  },
  {
    question: "2. हाल ही में किस राज्य ने महिलाओं की सुरक्षा के लिए 'सेफ सिटी प्रोजेक्ट' शुरू किया है?",
    choices: ["महाराष्ट्र", "तमिलनाडु", "उत्तर प्रदेश", "राजस्थान"],
    answer: 2
  },
  {
    question: "3. किस राज्य ने 'डायल 112' आपातकालीन सेवा शुरू की?",
    choices: ["मध्य प्रदेश", "कर्नाटक", "हरियाणा", "उत्तराखंड"],
    answer: 0
  },
  {
    question: "4. राष्ट्रीय पुलिस स्मारक कहाँ स्थित है?",
    choices: ["मुंबई", "नई दिल्ली", "भोपाल", "हैदराबाद"],
    answer: 1
  },
  {
    question: "5. कौन-सा पुलिस बल विशेष रूप से रेलवे की सुरक्षा के लिए जिम्मेदार है?",
    choices: ["CISF", "RPF", "SSB", "BSF"],
    answer: 1
  },
  {
    question: "6. वर्तमान में भारतीय रेलवे के अध्यक्ष (Chairman of Indian Railways) कौन हैं?",
    choices: ["विनोद कुमार यादव", "एस. के. गुप्ता", "अश्विनी वैष्णव", "सुमित शर्मा"],
    answer: 2
  },
  {
    question: "7. वर्तमान में भारतीय रेलवे के अध्यक्ष (Chairman of Indian Railways) कौन हैं?",
    choices: ["विनोद कुमार यादव", "एस. के. गुप्ता", "अश्विनी वैष्णव", "सुमित शर्मा"],
    answer: 1
  },
  {
    question: "8. भारत की पहली वंदे भारत एक्सप्रेस कौन से मार्ग पर शुरू हुई?",
    choices: ["दिल्ली से लखनऊ", "दिल्ली से वाराणसी", "मुंबई से अहमदाबाद", "चेन्नई से बैंगलोर"],
    answer: 1
  },
  {
    question: "9. रेलवे बोर्ड की स्थापना कब हुई थी?",
    choices: ["1905", "1902", "1925", "1951"],
    answer: 0
  },
  {
    question: "10. रेलवे में 'ग्रीन कॉरिडोर' का क्या अर्थ है?",
    choices: ["छत्रपति शिवाजी महाराज टर्मिनस", "हावड़ा जंक्शन", "नई दिल्ली स्टेशन", "गोरखपुर जंक्शन"],
    answer: 3
  },
  {
    question: "11. रेलवे के कौन से जोन को 'पद्मावत' नामक ट्रेन प्रदान की गई?",
    choices: ["पश्चिम रेलवे", "उत्तर रेलवे", "दक्षिण पूर्व रेलवे", "मध्य रेलवे"],
    answer: 1
  },
  {
    question: "12. राष्ट्रीय पुलिस अकादमी का नाम क्या है?",
    choices: ["सरदार पटेल पुलिस अकादमी", "इंदिरा गांधी पुलिस अकादमी", "जवाहरलाल नेहरू पुलिस अकादमी", "लाल बहादुर शास्त्री पुलिस अकादमी"],
    answer: 0
  },
  {
    question: "13.रेलवे में 'प्रधानमंत्री गति शक्ति योजना' का उद्देश्य क्या है?",
    choices: ["नई ट्रेनें शुरू करना", "रेलवे नेटवर्क का आधुनिकीकरण", "माल परिवहन की गति बढ़ाना", "यात्रियों के लिए सुविधाएँ बढ़ाना"],
    answer: 2
  },
  {
    question: "14. रेलवे सुरक्षा बल (RPF) की स्थापना कब हुई?",
    choices: ["1947", "1957", "1984", "2001"],
    answer: 1
  },
  {
    question: "15. किस रेलवे स्टेशन को भारत का पहला 'सोलर पावर स्टेशन' घोषित किया गया?",
    choices: ["हावड़ा", "गुवाहाटी", "जयपुर", "भोपाल"],
    answer: 1
  },
  {
    question: "16. 'मिशन रफ्तार' का उद्देश्य क्या है?",
    choices: ["रेलवे स्टेशनों का आधुनिकीकरण", "रेलवे कर्मचारियों की ट्रेनिंग", "ट्रेन की गति बढ़ाना", " नई ट्रेनें लॉन्च करना"],
    answer: 2
  },
  {
    question: "17. किस राज्य ने सबसे पहले 'विमेन कमांडो फोर्स' शुरू की?",
    choices: ["उत्तर प्रदेश", "महाराष्ट्र", "पंजाब", " दिल्ली"],
    answer: 3
  },
  {
    question: "18. भारत की पहली वंदे भारत एक्सप्रेस कौन से मार्ग पर शुरू हुई?",
    choices: ["बोगीबील ब्रिज", "पंबन ब्रिज", "कोल्लम ब्रिज", " रिहंद ब्रिज"],
    answer: 0
  },
  {
    question: "19. 'न्यू रेल पॉलिसी 2023' का मुख्य फोकस क्या है?",
    choices: [" डिजिटल टिकटिंग", "ग्रामीण इलाकों को जोड़ना", " रेलवे में निजी निवेश", "नई ट्रेनों का उद्घाटन"],
    answer: 2
  },
  {
    question: "10. रेलवे के लिए 'वंदे भारत 2.0' का अनावरण किसने किया?",
    choices: ["नरेंद्र मोदी", "पीयूष गोयल", "अश्विनी वैष्णव", " निर्मला सीतारमण"],
    answer: 0
  },

































































































































































































];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElements = document.querySelectorAll(".choice");
  const currentQuestion = questions[currentQuestionIndex];

  // Set the question text
  questionElement.textContent = currentQuestion.question;

  // Display the answer choices
  choicesElements.forEach((choice, index) => {
    choice.textContent = currentQuestion.choices[index];
    choice.classList.remove("correct", "incorrect");
    choice.disabled = false; // Enable choices for the current question
  });

  // Disable the Next button initially
  document.getElementById("next-btn").disabled = true;
}

function selectAnswer(index) {
  const currentQuestion = questions[currentQuestionIndex];
  const choicesElements = document.querySelectorAll(".choice");
  
  // Disable all choices after one is selected
  choicesElements.forEach(choice => choice.disabled = true);

  // Mark selected answer as correct or incorrect
  if (index === currentQuestion.answer) {
    choicesElements[index].classList.add("correct");
    score++;
  } else {
    choicesElements[index].classList.add("incorrect");
    choicesElements[currentQuestion.answer].classList.add("correct");
  }

  // Enable the Next button
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // Restore the quiz HTML structure
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <h2 id="question">Question Text</h2>
    <div class="choices-container">
      <button class="choice" onclick="selectAnswer(0)"></button>
      <button class="choice" onclick="selectAnswer(1)"></button>
      <button class="choice" onclick="selectAnswer(2)"></button>
      <button class="choice" onclick="selectAnswer(3)"></button>
    </div>
    <button id="next-btn" onclick="nextQuestion()">Next Question</button>
    <div id="score-container">
      <p id="score"></p>
    </div>
  `;

  loadQuestion(); // Load the first question again
}

// Initialize the first question on page load
loadQuestion();
