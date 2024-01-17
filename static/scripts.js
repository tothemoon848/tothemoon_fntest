const qustionDataBase = [
  {
    question: "Which of the following statements are true about the Scrum master role?",
    option1: "The Scrum master cannot be one of the developers on the team.",
    option2: "The Scrum master cannot also be the team's product owner.",
    option3: "The Scrum master cannot be one of the product's stakeholder.",
    option4: "The Scrum master can be a stakeholder and a developer at the same time.",
    ans: "answer4",
  },
  {
    question: "The Scrum team is assembled, but the IT department has been slow to provision resources like laptops, software, build tools and test environments. The team does not want to start the first sprint next week given the lack of preparedness. How would you as the Scrum master recommend the team proceed?",
    option1: "Explain to the organization that Sprint 0 exists to allow the team to get prepared for development.",
    option2: "Ask the team to work toward the development of a small, valuable increment despite the lack of preparedness.",
    option3: "Declare this an infrastructure sprint where developers simply configure their tools and software.",
    option4: "Delay the start of the sprint until the organization can properly provision the required tools and infrastructure.",
    ans: "answer2",
  },
  {
    question: "A developer has completed a feature that, when integrated into the codebase, will create a valuable and usable increment. Completion of the sprint goal depends upon it. When should the developer integrate their work into the product?",
    option1: "During the daily Scrum, after achieving consensus with the other developers.",
    option2: "After the development sprint finishes with the consent of the Scrum master.",
    option3: "Immediately so long as the work meets the team's definition of done.",
    option4: "During the sprint review so stakeholders can witness the integration.",
    ans: "answer3",
  },
  {
    question: "A developer has identified a troublesome and worrying security vulnerability in the codebase and has asked you, the Scrum master, what to do about it. Which of the following actions do you instruct the developer to take?",
    option1: "Make this issue a top priority item in tomorrow's daily Scrum.",
    option2: "Discuss the issue with the product owner and plan to fix the issue in the next sprint.",
    option3: "Discuss the issue with other developers right away.",
    option4: "Raise the issue as a priority item during the next sprint planning meeting.",
    ans: "answer3",
  },
  {
    question: "Under which circumstance are developers allowed to discuss product development directly with stakeholders?",
    option1: "Developers can speak directly with stakeholders during the sprint retrospective.",
    option2: "Developers can speak directly with stakeholders with permission from the Scrum master.",
    option3: "Developers are not allowed to speak directly with stakeholders.",
    option4: "Developers can speak directly with stakeholders at any time.",
    ans: "answer4",
  },
  {
    question: "As the Scrum master, when do you advise these programmers to join the development effort?",
    option1: "At the moment they arrive.",
    option2: "At the end of the current sprint, but before the next sprint begins.",
    option3: "At the following day's daily Scrum.",
    option4: "During the next sprint planning event.",
    ans: "answer1",
  },
  {
    question: "You have a well-functioning team of four developers. What impact will the addition of three new developers likely have on the existing team members' productivity?",
    option1: "Individual productivity will increase permanently.",
    option2: "Individual productivity will increase over the short term.",
    option3: "Individual productivity will decrease permanently.",
    option4: "Individual productivity will decrease over the short term.",
    ans: "answer4",
  },
  {
    question: "Developers are frustrated because peripheral tasks including quality control, user acceptance testing and documentation take away from their core development efforts, and subsequently put the project's progress at risk.\n \nHow would you advise the team to move forward?",
    option1: "Instruct the Scrum team to create a subteam dedicated to QA, UAT testing and documentation.",
    option2: "Tell the Scrum team to outsource QA, UAT and documentation to a third party.",
    option3: "Have the product owner remove quality control, testing and documentation from the definition of done.",
    option4: "Advise the Scrum team that they are responsible for all aspects of delivering a product increment.",
    ans: "answer4",
  },
  {
    question: "Unforeseen circumstances have reduced developer productivity, and halfway through the sprint it is clear that the sprint plan must change drastically for the team to achieve the sprint goal. What guidance would you, as the Scrum master, provide to the team?",
    option1: "Tell the developers to cancel the development sprint and start a new sprint planning session.",
    option2: "Instruct the developers to regroup and update the sprint plan as soon as possible.",
    option3: "Advise the developers to dedicate time during the next daily Scrum to update the sprint goal.",
    option4: "Tell the developers the sprint plan cannot change, and they must continue to work as planned toward the sprint goal.",
    ans: "answer2",
  },
];

  // getting referrence
  const questionContainer = document.querySelector("h2");
  const answerList = document.querySelector("#AnswerList")
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
  const submitButton = document.querySelector("button");
  const usersAnswer = document.querySelectorAll(".answer");
  const scoreArea = document.querySelector("#ShowScore");
  
  // This function is rendering all the texts
  
  let questionCount = 0;
  let score = 0;
  const mainFunc = () => {
    const list = qustionDataBase[questionCount];
    questionContainer.innerText = list.question;
    option1.innerText = list.option1;
    option2.innerText = list.option2;
    option3.innerText = list.option3;
    option4.innerText = list.option4;
  };
  
  mainFunc();
  
  // this function is for answer checking
  
  const goCheckAnswer = () => {
    let answers;
    usersAnswer.forEach((data) => {
      if (data.checked) {
        answers = data.id;
      }
    });
    return answers;
  };
  
  const deselectAll = () => {
    usersAnswer.forEach((data) => {
      data.checked = false;
    });
  };
  
  submitButton.addEventListener("click", () => {
    const checkAnswer = goCheckAnswer();
    console.log(checkAnswer);
  
    if (checkAnswer === qustionDataBase[questionCount].ans) {
      score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < qustionDataBase.length) {
      mainFunc();
    } else {
      questionContainer.style.display = "none";
      option1.style.display = "none";
      option2.style.display = "none";
      option3.style.display = "none";
      option4.style.display = "none";
      answerList.style.display = "none";
      submitButton.style.display = "none";
      scoreArea.style.display = "block";
      scoreArea.innerHTML = `
        <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
        <button class='btn' onclick='location.reload()'>Play Again</button>
        `;
    }
  });
