CREATE TABLE Properties
(ID SERIAL PRIMARY KEY,
 Name varchar(40),
 Description varchar(60),
 Address varchar(60),
 City varchar(40),
 User_ID int REFERENCES Users (ID))
