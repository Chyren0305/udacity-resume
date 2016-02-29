
   // $('#main').append("Rex Huang");


   // [string].replace([old], [new])
   var email = "gowaa13@gmail.com";
   var newEmail = email.replace("gmail","hotmail");
   console.log(email);
   console.log(newEmail);

   var awesomeThoughts =  "My name is Rex and I am AWESOME! <br/>";

   var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");

   $('#main').append(funThoughts);

   
   
   var formattedName = HTMLheaderName.replace("%data%", "Rex Huang");
   var role = "front-end developer (web wizard)"
   var formattedRole = HTMLheaderRole.replace("%data%",role);
   $("#header").prepend(formattedName);
   $('#header').append(formattedRole);
   
   //array
   var skills = ["awesomeness ","painting ","JS ","HTML&CSS ","programing "];
   //$("#main").append(skills);
   //$("#main").append(skills[0]);
   //$("#main").append(skills.length);

   //object
   var bio = {
   	   "name" : "Rex Huang",
   	   "age" : 32,
   	   "role" : "front-end developer",
   	   "contacts" :{
   	   	    "mobile": "09XX-666-666",
            "email" : "gowaa13@gmail.com",
            "github": "gowaa13",
            "location":"Taiwan"
   	   },
   	   "welcome message" : "welcome to the page! have fun! :)",
   	   "skills" : ["awesomeness ","painting ","JS ","HTML&CSS ","programing "],
   	   "bioPic" : "images/fry.jpg"
   };
   //object declartion 

   //adding new properties to the some object
  
   // $('#main').append(bio.name);
   // $('#main').append(bio.age);
   
   // bio.city = "Tokyo Japan";
   // bio.email = "TokyoXXX@gmail.com";
    bio["city"] = "Tokyo Japan";
    bio["email"] = "TokyoXXX@gmail.com";

   // $('#main').append(bio.city);


   var work = {};
   work.position = "Course Developer";
   work.employer = "Udacity";
   work.years = 0.3;

   var education = {};
   education["name"] = "Chung Yuan Christian University";
   education["years"] = "2004-2008";
   education["city"] = "Chungli,Taiwan";

   // $('#main').append(work["position"]);
   // $('#main').append(education.name);

   //JSON
   var education = {
   	"schools" :[
     {
       "name": "The famous College about Design",
       "city": "some place in this earth",
       "degree": "Masters",
       "major": ["Product Design", "CompSci"],
       "dates": 2021,
       "url": "http://www.example.com"	
     },
     {
       "name": "Chung Yuan Christian University",
       "city": "Chungli,Taiwan",
       "degree": "BA",
       "major": ["Mechanical engineering"],
       "date": 2008,
       "url": "https://www.cycu.edu.tw/"	     	
     }
   	],
   	"onlineCourses": [
   	 {
       "title": "JavaScript Syntax",
       "school": "Udacity",
       "dates": 2016,
       "url" :"https://www.udacity.com/course/viewer#!/c-ud804"
   	 }
   	]
   } 