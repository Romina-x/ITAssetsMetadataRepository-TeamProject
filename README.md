# Team Project

This repository has been created to store your Team Project.

You may edit it as you like, but please do not remove the default topics or the project members list. These need to stay as currently defined in order for your lecturer to be able to find and mark your work.

---

# Running the SQL db:
Prerequisties:
    - MySQL v5.6+

1. In CMD at location of the project run the command "mvn spring-boot:run" to begin the database
2. To test/interact with the database use curl commands in a new CMD terminal.
2.a. Testing entry "curl http://localhost:8080/demo/add -d name=First -d email=someemail@someemailprovider.com"
2.b. Viewing entry "curl http://localhost:8080/demo/all"
