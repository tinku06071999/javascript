# javascript

## 1. is synchronous (means first execute one code then another code and so on)

## 2. single threded (slow than language that have multiple thread example is JAVA)

the above properties are of default javascript

execution context
=> execute line by line
=> each operation waits for the last one to complete before execution

## Blocking code Non Blocking Code

block the flow of program => Doesn't block execution

=>read file synchronously => read file Asynchrousnly

=> if write bloking code and program wants to read file then till file no read and come back
the program cant do anything

=>in non blocking when programm can read and simointosly do other work executions

=> now there ay be occure a thought that non block code is best to use but its not right. lets discuss an example

=> suppose we have a registration form and we want that after submitting registration form first it save this databse and then after
show the succesfull registration message.
Now if write non blocking code the it show the message registration succesfull before cheking the details or submitting in databse
that is not good bcz there may be possibility of error in registartion process. Thats why we can't use
non blocking code here.
thats why here we use blocking code that check deatilsa and submiti in databse and after that it shows the registrations succss message.

=> So the conclusion is that we use blocking or non blocking code based on requirments

// see the image execution loop in js \_\_assync givent in this file folder
