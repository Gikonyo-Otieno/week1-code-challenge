# week1-code-challenge
This code challenge was divided into 3 i.e
  1. Student Grade Generator
  2. Speed detector
  3. Net Salary Calculator


 1. STUDENT GRADE GENERATOR
In this challenge we were attempting to create a grade generator fitted with specific instructions to calculate the grades of students. These grades were then calculated into percentages and letter-grades using the marks received from the input. 

We first create a function to do our calculations.Within we create variables 'marks' and 'grades'.
We then use a conditional statement to calculate the percentages and assign them to their grades e.g 85 = 'A', 35 = 'E'
After we use the returned values in another conditional statement inorder to use them to generate a message to be displayed to the user.
For example: Taking input as 75
            
             Out of 100 your total is  ${marks} 
             and percentage is ${percentage}%. <br> 
             Your grade is ${grades}. `
             
This returns:
             Out of 100 your total is  75
             and percentage is 75%. <br> 
             Your grade is B. `








 2. SPEED CALCULATOR
This challenge required us to create a speed calculator. The calculator was required to take input of speed and return (if above the speed limit) the number of license points to be added to the driver depending on the speed they were travelling at.

FirstI created a coditional statement with a message to be shown if speed was not correctly captured.
Next I nested a conditional statement that compares the speed and the license points put on the driver incase of infraction.
If the driver is driving at 70 or less the return is 'OK'.This value is passed on along with the speed for display
The second conditional statements's return value is passed on for display along with the speed being travelled and number of points added to the license
For example: Taking input as 75
            
             Your speed is  ${speed} 
             ${points} added to your license. <br> 
             
             
For example: Taking input as 75
            
             Your speed is  75
             5 added to your license. <br>              


3.NET SALARY CALCULATOR


