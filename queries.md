# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select ProductName, CategoryName
from Products as p
join Categories as c
on c.categoryId = p.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select orderID, shipperName
from orders as o
join shippers as s
on o.shipperID = s.shipperID
where o.orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.productName, o.quantity
from products as p
join orderdetails as o
on o.productid = p.productid
where o.orderid = 10251
order by p.productname;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderid,c.customername, e.lastname as EmployeeLastName
from orders as o
join customers as c
on o.customerid = c.customerid
join employees as e
on o.employeeid = e.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 