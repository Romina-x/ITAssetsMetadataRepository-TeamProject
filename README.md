# IT Assets Metadata Repository

This web-based application provides a comprehensive platform for organizing and managing IT assets and their metadata in a software company. It allows users to store, categorize, and associate source code assets, documentation, and related information, offering advanced search capabilities and a unified view of the company's assets. Features include role-based access control (RBAC), a searchable repository with asset associations, activity logs, and extensibility to support projects, people, and discussion boards. Designed for production use, the system aims to centralize knowledge and enhance accessibility.

- Demo Video: https://www.youtube.com/watch?v=kajFrvryAFg

---

# Contents:

- [Running with a Script](#running-with-a-script)
- [Running the SQL db](#running-the-sql-db)
- [Running the Front End](#running-the-front-end)


---

# Running with a Script:
Pre-requisties:<br>
    - MySQL v5.6+ ([https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/))<br>
    - Nodejs v20.11 ([https://nodejs.org/en/download](https://nodejs.org/en/download))<br>
    - ReactFlow (npm install reactflow)<br>
    - Windows OS<br>
    
1. Navigate to the local location of the project clone (/TeamProject04) and double click on the file "start.bat".

---

# Running the SQL db:
Pre-requisties:<br>
    - MySQL v5.6+ ([https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/))

1. Set up Local Database: <br>
 1.1. Open MySQL Command Line Client<br>
 1.1.1. mysql> create database md_repo; -- Creates the new database<br>
 1.1.2. mysql> create user 'springuser'@'%' identified by 'ThePassword'; -- Creates the user<br>
 1.1.3. mysql> grant all on md_repo.* to 'springuser'@'%'; -- Gives all privileges to the new user on the newly created database<br>
<br>
2. In CMD at location of the project run the command "mvn spring-boot:run" to begin the database<br>
<br>
3. To test/interact with the database use the URL paths as below:<br>
 3.1. Assets<br>
  3.1.1 Adding an Asset: [http://localhost:8080/asset/createAsset](http://localhost:8080/asset/createAsset)<br>
  3.1.2 View all Assets: [http://localhost:8080/asset/find/all](http://localhost:8080/asset/find/all)<br>
  3.1.3 View ID# Asset: http://localhost:8080/asset/find/#<br>
  3.1.4 Delete an Asset: http://localhost:8080/asset/delete/# (NOTE: this link will delete the asset without confirmation)<br>
 <br>
 3.2. Types<br>
  3.2.1 Adding a Type: [http://localhost:8080/type/createType](http://localhost:8080/type/createType)<br>
  3.2.2 View all Types: [http://localhost:8080/type/find/all](http://localhost:8080/type/find/all)<br>
  3.2.3 View ID# Type: http://localhost:8080/type/find/#<br>
  3.2.4 Delete a Type: http://localhost:8080/type/delete/# (NOTE: this link will delete the type without confirmation)<br>
 <br>
 3.3. Action Log<br>
  3.3.1 View all Action Logs: [http://localhost:8080/log/find/all](http://localhost:8080/log/find/all)<br>
  3.3.2 View ID# Action Log: http://localhost:8080/log/find/#<br>
 <br>
 
 NOTE: Do not use powershell to run the commands.<br>
 It is also possible to query the stored information in the database with the MySQL command line client with the standard commands.

 ---

# Running the Front End:
Pre-requisties:<br>
    - Nodejs v20.11 ([https://nodejs.org/en/download](https://nodejs.org/en/download))<br>
    - ReactFlow (npm install reactflow)<br>
    - React DOM (npm i react-router-dom)<br>

    

4. Set up Node: <br>
 4.1. Open a cmd at the location of the UI folder of the repo <br>
 4.1.1. run the command 'npm i' (This may take a *significant* amount of time to run)<br>
 4.1.1.1. If on Windows and install freezes (>10 mins) run 'npm cache clean --force' and use the command 'npm i --omit=optional' <br>
5. Run the Code: <br>
 5.1.2. Start the web app with the command 'npm start' (This will open a new browser window at http://localhost:3000 )

 ---

# Running Cypress:

6. Set up Cypress: <br>
 6.1. Open a cmd at the location of the UI folder of the repo <br>
 6.1.1. run the command 'npm install cypress --save-dev' (This may take a *significant* amount of time to run)<br>
7. Run Cypress: <br>
 7.1.1. Start the cypress app with the command 'npx cypress open' (This will open a new cypress application)<br>
 7.1.2. Select the 'E2E Testing' option<br>
 7.1.3. Continue and choose the browser of your choice (This will open a new browser window where Cypress tests can be run)


 ---
