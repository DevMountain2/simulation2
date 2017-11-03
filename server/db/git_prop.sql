CREATE TABLE Properties
(ID SERIAL PRIMARY KEY,
 Name varchar(40),
 Description varchar(60),
 Address varchar(60),
 City varchar(40),
 State varchar(40),
 Zip varchar(10),
 Image varchar(150),
 Loan_Amount varchar(100),
 Monthly_Mortgage varchar(50),
 Desired_Rent varchar(50),
 User_ID int REFERENCES Users (ID))


 INSERT INTO Properties (Name, Description, Address, City, User_ID)
 VALUES ('house', 'a tiny house', '123 The St.', 'Dallas', 1)

 select * from properties
 join users on users.id = properties.user_id
