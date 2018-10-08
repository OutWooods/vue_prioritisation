-[x] Get a colour change on clicks
-[x] Link it to a db
-[x] Have four different colours for 10 X 10 Grid
-[x] Show a black dot for a task that exists
-[x] Make an API for incomplete jobs 
-[x] On click/hover show details of the task

-[x] Add axios
-[ ] Add login
  -[x] Send login details to the endpoint laravel login
  -[ ] Store the web address as a constant on the website
  -[ ] Add validation on the Vue side to the login
  -[ ] Store the key (in local storage for now)
  -[ ] Add error messages
  -[ ] Move to a jobs page on successful login
  -[ ] Add a nav bar
  
-[ ] Show specific users jobs
  -[ ] Backend, users link to a specific job 
  -[ ] Have an api that returns all a users personal jobs, which are incomplete
  -[ ] Put the frontend back end in to show jobs  
  -[ ] Test its all  working

-[ ] Investigate security
 -[ ] Do I need to store tokens in sessions or will local storage do? 
 -[ ] Is the CORS security in passport working?

-[ ] Add a new task 
 -[ ] Add a new task endpoint 
 -[ ] Add the front end for a new task

-[ ] Delete a task 
 -[ ] Add a delete task endpoint 
 -[ ] Add the front end for deleting a new task
 
-[ ] Mark a task as complete
 -[ ] Backend
 -[ ] Front end

-[ ] Edit details of a task 
 -[ ] Backend 
 -[ ] Frontend
 
 -[ ] Guest Homepage 
  -[ ] Nav bar (variable on login status)
 
 -----------          MVP           -----------
   
Decide on how I want the grid to work, currently not super happy on the solution where the edges are not clear. 

Change to absolute positioning for it to work 

Future validations jobs
-[ ] Nothing that is incomplete can have identical X and Y values (as a pair.)


