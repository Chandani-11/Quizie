window.onload = function(){
	show(0);
}


let user = sessionStorage.getItem("name");
document.querySelector(".name").innerHTML = user;
//questions
let questions = [
  { 
  	id: 1,
    question: " Natya - Shastra' the main source of India's classical dances was written by",
    answer: "Bharat Muni" ,
    options: [

       "Nara Muni",
       "Bharat Muni",
       "Abhinav Gupt",
       "Tandu Muni"
    ]
  },
  {
  	id: 2,
    question: "Rabindranath Tagore's 'Jana Gana Mana' has been adopted as India's National Anthem. How many stanzas of the said song were adopted?",
    answer: "Only the first stanza",
    options: [

      "Only the first stanza",
      "The whole song",
      "Third and Fourth stanza",
      "First and Second stanza"

      
    ]
  },
  {
  	id: 3,
    question: " The Rath Yatra at Puri is celebrated in honour of which Hindu deity ?",
    answer: "Jaganath",
    options: [
      "Ram",
      "Jaganath",
      "Shiva",
     "Vishnu"
    ]
  },
  {
    id: 4,
    question: "Tripitakas are sacred books of ?",
    answer: "Buddhists",
    options: [

      "Buddhists",
      " Hindus",
      "Jains",
      "None of the them"

    ]
  },
  {
    id: 5,
    question: "To which of the republic of Buddha belong ?",
    answer: "Sakyas",
    options: [

      "Licchavis",
      "Sakyas",
      "Mallas",
      "None of the above"
    ]
  }
];

function submitform(event) {

	event.preventDefault();
	let name= document.forms["wel_form"]["name"].value;

	//store player name
	sessionStorage.setItem("name", name);

	location.href= "quiz1.html";
	console.log(name);
}

let question_count = 0;
let point = 0;

function next() {

  let user_answer = document.querySelector("li.option.active").innerHTML;

  //check answer by the user
  if(user_answer == questions[question_count].answer){
    point = point+10;
    sessionStorage.setItem("point", point);
   }
 
  if(question_count == questions.length-1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "end.html";
    return;
  }

  question_count++;
	show(question_count);

}

function show (count) {
	let question = document.getElementById("questions");

	//question.innerHTML = "<h2>" + questions[count].question + "</h2>";

	//New Method
	question.innerHTML = `
  <h2> Q${question_count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
	`;
  toggleActive();
}

 function toggleActive(){
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i< option.length; i++){
       option[i].onclick = function(){
         for(let i=0; i < option.length; i++){
          if(option[i].classList.contains("active")) {
             option[i].classList.remove("active");
          }
         }
         option[i].classList.add("active");
       }
  }

 }

 //time count 
 let dt = new Date(new Date().setTime(0));
 let time = dt.getTime();
 let seconds = Math.floor((time / (100*60)) / 1000);
 let minutes = Math.floor((time / (1000*60*60)) / (1000*60));
 let timex = 0;

let mytime = setInterval(function() {
  if(seconds < 59){
  seconds++;
} else {
  minutes ++;
  seconds = 0;
}
  let formated_seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let formated_minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  document.querySelector(".time").innerHTML = `${formated_minutes} : ${formated_seconds}`;
}, 1000)



//displaying all the details
let player = sessionStorage.getItem("name");
let total_point = sessionStorage.getItem("point");
let total_time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = player;

document.querySelector(".points").innerHTML = total_point;

document.querySelector(".total_time").innerHTML = total_time;

document.getElementById("song").style.display = "none";