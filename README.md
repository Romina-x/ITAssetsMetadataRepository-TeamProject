# Team Project

This repository has been created to store your Team Project.

You may edit it as you like, but please do not remove the default topics or the project members list. These need to stay as currently defined in order for your lecturer to be able to find and mark your work.

---

# Running the SQL db:
Pre-requisties:
    - MySQL v5.6+

1. Set up Local Database: <br>
 1.1. Open MySQL Command Line Client<br>
 1.1.1. mysql> create database md_repo; -- Creates the new database<br>
 1.1.2. mysql> create user 'springuser'@'%' identified by 'ThePassword'; -- Creates the user<br>
 1.1.3. mysql> grant all on md_repo.* to 'springuser'@'%'; -- Gives all privileges to the new user on the newly created database<br>

2. In CMD at location of the project run the command "mvn spring-boot:run" to begin the database

3. To test/interact with the database use curl commands in a new CMD terminal.<br>
 3.1. Testing entry "curl http://localhost:8080/asset/add -d type=Specification -d title=Initial_Specification -d link=https://moodle.royalholloway.ac.uk -d lineNum=100 -d progLang=English"<br>
 3.2. Viewing entry "curl http://localhost:8080/asset/find/all"
 <br>
 
 NOTE: Do not use powershell to run the commands.
