////var first;
//function firstFunc (name) {
//    if (name==="first") {
//        return function (age,year){
//            console.log("Test success " + age + year);
//        }
//    }
//}
//
//firstFunc("first")(27,100);

//(function(name){
//    console.log("test name: " + name);
//})("Name appears!");
//
//function careerInterview(name){
//    var a = "Please describe A";
//    var b = "Please describe B";
//    return function(career){
//        if (career="a"){
//            var words="My name is " + name + ",I want to " + a;
//            console.log(words);
//        }
//        else if (career="b"){
//            var words="My name is " + name + ",I want to " + b;
//            console.log(words);
//        }
//    }
//    
//}
//
//var testA = careerInterview("Xingjie");
//testA("a");
//careerInterview('Huang')('a');

//Question Generator
//function newQuestion (questionDesr,answers,correct){
//    questionDesr:questionDesr;
//    answers:answers;
//    correct:correct;
//}

Question = function(questionDesr,answers,correct){
    this.questionDesr = questionDesr;
    this.answers = answers;
  
}

Question.prototype.displayQuestion = function (){
    console.log(this.questionDesr);
      for (i=0;i<this.answers.length;i++){
        console.log(i + ":" +this.answers[i]);
    }
}

var q1 = new Question("Question1",["0 Answer1(Correct)","1 Answer2"],0);
var q2 = new Question("Question2",["0 Answer1,1 Answer2(Correct)"],1);

Questions = [q1,q2];

Questions[0].displayQuestion();






