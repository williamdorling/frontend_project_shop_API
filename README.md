# shop_backend_project


## Project aims
* To create a basic working shop which contains the following:
* add/remove products
* add/remove customers
* A database of customers, products and orders
* Updating customer and product details
* Display all products
* Display products by ID
* Function to allow for discounts to select customers
* Creating a function to stop sold items being shown to customers

## Technical Information
* Spring Build and Dependencies:
* Project type: Maven
* Spring Version: 3.0.6
* Java Version: 17
* Dependencies
* DevTools
* Web
* PostgreSQL
* JPA

## Software used:
* IntelliJ
* Postman
* Postico
* PostgreSQL

## iInstallation guide:
* Create a local database for the shop called shop_db. In the terminal run: createdb shop_db
* In resources.application.properties, copy the following code :

spring.datasource.url=jdbc:postgresql://localhost:5432/shop_db
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.properties.hibernate.enable_lazy_load_no_trans=true





## UML DIAGRAM
<img width="1229" alt="Screenshot 2023-04-28 at 10 31 18" src="https://user-images.githubusercontent.com/126800144/235114091-e5649a80-b00b-4ed5-93ad-299f6b14b881.png">

## ERD DIAGRAM

<img width="748" alt="Screenshot 2023-04-28 at 10 33 48" src="https://user-images.githubusercontent.com/126800144/235114294-53bbc666-ada9-4b89-b640-bad5034faba8.png">

