# ITrellis Coding Test - Angular/NodeJS ToDo List

## Requirements

- As a user, I can add a TODO to the list.
- As a user, I can add one or more sub-TODOs to a top-level TODO. The application should only allow for a depth of 2 (parent/child relationship, no grandchildren). i.e., A child TODO should not be allowed to have children of its own.
- If a sub-TODO exist and are all closed, then the parent TODO should close.
- If a parent TODO closes, then all sub-TODOs should close.
- As a user, I can see all the TODOs on the list in an overview.
- As a user, I can drill into a TODO to see more information about the TODO.
- As a user, I can delete a TODO.
- As a user, I can mark a TODO as completed.
- As a user, when I see all the TODOs in the overview, if today's date is past the TODO's deadline, highlight it.
- A TODO consists of a task (just a simple sentence or two is fine), a deadline date, a completed flag, and an optional "more details" field that allows for more details to be given (again, a single large text area is fine for this).
- The list of TODOs can be kept in memory.

### Web API

We would like this to be a Web API endpoint, something that a Web or mobile client could use over HTTP to obtain data from the server. It should accept JSON (or XML, but we prefer JSON) as input, and likewise return JSON as output. The actual fomat of the JSON (or XML) is entirely up to you, but we would like you to use current conventions and RESTful principles as your guide in the design.

The WebAPI should verify that the data in the incoming request is acceptable input, but you may assume (for practical purposes) that the incoming JSON (or XML) is always well-formed.

Any errors should be communicated using traditional Web API (RESTful) error-reporting mechanisms.

### Angular

We would like for you to create a frontend of your application using Angular. It is acceptable to use the Angular CLI tool to set this project up. We also recommend using some type of CSS framework such as Bootstrap. We are looking for a frontend solution that consumes your API service and displays the information in a friendly manner. We aren't looking for something complex, just demonstrate the use of a frontend framework with your backend service that isn't terrible on the eyes.

### JavaScript

We would like you to do this project using the JavaScript language, preferably using a recent version of NodeJS.

### NodeJS

You may use any npm packages that you find helpful, so long as they are declared in the application's package.json file; you may safely assume that we will run "npm install" on the source code before running it. If there are any other particular instructions required to run your app correctly, however, they must be documented or (ideally) configured to run as part of a Gulp or Grunt file.

## Final Notes

Your code should include all the necessary steps (either automated as part of the build process, or in shell scripts that we can run, or else documented very clearly on how to deploy the app) such that we can run the code with a minimum of work.

Please include a README with your submission that indicates any special instructions for running your code (Such as a NuGet package restore) and also include what selections you made for your Domain and Interface.

We look forward to hearing from you, evaluating your code, and working with you further!
