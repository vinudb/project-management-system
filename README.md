This is a minimal project management system with features like, employee creation, project creation, tasks creation, updation and deletion.

LIVE IMPLEMENTATION: https://minimal-project-manager.herokuapp.com/

LIVE json-server URL: https://minimal-project-manager-api.herokuapp.com/

To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
4) Run command "npm start". Runs the app in the development mode.
   Open [http://localhost:3000] to view it in the browser.
5) Run command "npm test" to run all the test cases.

Highlights:-
- Used fake api live json-server to perform API calls for fetching, updating, adding and deleting employee, project, tasks.
- Used momnet library for handling with the dates
- Used node-sass library for using scss and it's features
- Redux for managing the store values.
- The design is responsive.


Features:-
- Creating a new employee with a given first name, last name and a direct supervisor
- Display/View all employees
- Creating a new project with a given name, a start date and a time slack
- Assign a project to an employee (an employee can only work on two projects at the same time)
- Display/View all projects
- Creating a new task with a given name, a description of this task and estimated days needed to
complete it
- Assign a task to a project: By this the attributes „assigned tasks" and „end date" will be updated
automatically
- Display/View all tasks for a given project
- Delete a task and also updating the underlying references
- Delete a project and also updating the underlying references
- Getting the total days needed for a given list of projects (assuming that projects can‘t be worked on
parallel)