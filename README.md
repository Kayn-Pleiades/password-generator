# password-generator

## Table of Contents

* [Description](#description)
* [Process](#process)
* [Credits](#credits)

## description 



## process

### Commit 1: Initial commit
Created repository on GitHub

### Commit 2: Base files
Copied files for homework into the folder.

### Commit 3: First Prompt
My first goal: When the button is clicked, a prompt appears that prints to the box.
Then in next steps, I'll expand on this. 

### Commit 4: Password Length
Goal for this commit: Prompt asks for pasword length. If they provide a number that is not in the range, it will tell them and ask again. If number is in the range, it moves on. 

### Commit 5: Moving to second question
Goal for this commit: If a valid number is given, it moves on to the next prompt. Otherwise it lets them try again. 
I have it direct you to the next prompt, but I am having trouble accessing the information that was inputed before. 
Turns out my problem was that it was sending up to the next prompt before changing the object's properties

### Commit 6: Lowercase confirm
Goal for this commit: Ask if they want lowercase characters and then update the object properties accordingly. 

### Commit 7: Remaining criteria questions
Goal for this commit: Repeat the above process for the remaining yes/no questions. 
Changed the confirm to a prompt because that's what the homework asks for.

### Commit 8: Validating the criteria
Goal for this commit: validate that at least one character type was selected.
I did this by making sure that at least on of the character types is true/has a value of 1.

### Commit 9: Password Generation
Goal for this commit: To randomly generate a string that matches the criteria. 
I got it working, but if I try to generate a 2nd password without refreshing, it includes "undefined" at the start of the string. 
I fixed this by resetting the password variable everytime the process restarts. 

## credits

Discussion on how to call a function within that same fuction https://stackoverflow.com/questions/2940862/javascript-how-to-restart-a-function-from-inside-it
Useful reference on how to generate a string of random numbers: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript


