

A seed project to use typescript for "normal" scripting (munging text and files)with a visual studio environment and the node.js libraries.


* No back end stuff 
* No front end stuff
* No gulp or any other build tools than just plain old typescript compiler
* Platform independent 


# What is the point of this?

You may already know about one or more of node.js, typescript and visual studio code. Once they are working they form a very powerful partnership but getting them all up and running together is still surprisingly tricky. This seed project gives you what you need to write conventional file processing applications without all the web framework distractions. 

The demo program just reads a file and creates a list of objects.

# Installation from scratch

1) Install vs code from here: https://code.visualstudio.com/
(best IDE ever!)

2) Install Node.js and npm from here:
https://nodejs.org

3) Clone this project:

   $ git clone https://github/sofayam/scriptype.git

4) Install the typescript transpiler (using npm installed at step 2)

   $ npm install --global typescript

5) Set up the project

   $ cd scriptype
   $ npm install

6) Fire up vs code

   $ code .

7) Start the transpiler watch process (Ctrl-Shift-B)

8) Your move :-) Mouse around, check out the intellisense, play with the debugger


