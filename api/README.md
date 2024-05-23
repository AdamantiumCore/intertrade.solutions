Set Up database:
1.Go to .env file and add this environments: 
'1.DATABASE_URL="mysql://user:yourPassword@localhost:yourPort/databaseName?schema=public"
 2.default_authentication_plugin=caching_sha2_password
 '
2.Run your mysql server (docker or xampp)
3.Create connection in mysql workbench and log in with your user(root) and password
4.Then open terminal in vsCode with directory "\api" and type "npx prisma migrate dev"
5.Use prisma to add data to database and get data!