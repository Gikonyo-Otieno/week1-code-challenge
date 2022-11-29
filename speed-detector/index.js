// Function for calculating speed
const calculate = () => {
  

    // Getting input from user into height variable.
    let speed = document.querySelector("#speed").value;

      // Input is string so typecasting is necessary. */
     let points =
     parseFloat(speed)

           // Checking the condition for the providing the 
          // points to the driver based on speed
    
            if (speed >= 70 ) {
               points = "OK";
             }else if (speed > 70 && speed <= 79 ) {
               points = "1";
             }else if (speed > 79 && speed <= 84) {
               grades = "2";
             }else if (speed >= 85 && speed  >= 89) {
               grades = "3";
             }else if (speed >= 90 && speed <= 94){
                grades = "4"  
            }else if (speed >= 95 && speed <= 99){
                grades = "5"  
            }else if (speed >= 100 && speed <= 104){
                grades = "6"  
             }else if (speed >= 105 && speed <= 109){
                points = "7"  
            }else if (speed >= 110 && speed <= 114){
                points = "8"  
            }else if (speed >= 115 && speed <= 119){
                points = "9"  
            }else if (speed >= 120 && speed <= 124){
                points = "10"  
            }else if (speed >= 125 && speed <= 129){
                points = "11" 
            } else {
                points = "12"
             }

     // Checking the values are empty if empty than
    // message incase speed is not captured in input
      if (speed == "" ) {
        document.querySelector("#showdata").innerHTML
          = "Please enter valid speed";
    } else {

       // Checking the condition for the for license points
        if (speed >= 74) {
          document.querySelector("#showdata").innerHTML = 
        " Keep driving safe you are OK" ;
        } else if(speed < 99) {
         document.querySelector("#showdata").innerHTML = 
         `Not too Fast you have ${points} points on your license`;
        } else {
            document.querySelector("#showdata").innerHTML = 
         `You need to slow down or your license will be suspended. You have ${points} points on your license.`;
        }
        } 
              















            

}  