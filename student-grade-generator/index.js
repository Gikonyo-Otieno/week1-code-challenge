// Function for calculating grades
const calculate = () => {
  
    // Getting input from user into height variable.
    let marks = document.querySelector("#marks").value;

      // Input is string so typecasting is necessary. */
     let grades =
     parseFloat(marks)

      // Checking the condition for the providing the 
      // grade to student based on percentage
     let percentage = (marks / 100) * 100;
       if (percentage <= 100 && percentage >= 80) {
         grades = "A";
        } else if (percentage <= 79 && percentage >= 60) {
          grades = "B";
        } else if (percentage <= 59 && percentage >= 50) {
          grades = "C";
        } else if (percentage <= 49 && percentage >= 40) {
          grades = "D";
        } else {
          grades = "E"  
        }

     // Checking the values are empty if empty than
    // show please fill them
     if (grades == "" ) {
        document.querySelector("#showdata").innerHTML
          = "Please enter your marks";
    } else {

       // Checking the condition for the fail and pass
        if (percentage >= 39.5) {
          document.querySelector("#showdata").innerHTML = 
        ` Out of 100 your total is  ${marks} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. `;
        } else {
         document.querySelector("#showdata").innerHTML = 
         `Out of 100 your total is  ${marks} 
         and percentage is ${percentage}%. <br> 
         Your grade is ${grades}.`;
         }    
        }
          
 };


   