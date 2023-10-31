# NEXT-API Documentation:

# User Registration:

Endpoint: POST /register

nombre (string): Users name
email (string): Users email
password (string): Users password
rol (string, optional): Users role

# User Login:

Endpoint: POST /login

email (string): User's email
password (string): User's password

Responses:
Status 202: Login successful
Status 404: User not found
Status 401: Incorrect password
Status 500: Server error


# User Email Verification:

Endpoint: PATCH /verify

email (string): User's email
code (string): Verification code

Responses:
Status 200: Verification successful
Status 400: User already verified
Status 401: Incorrect verification code
Status 404: User not found
Status 500: Server error


# Get All Orders:

Endpoint: GET /orders/all

Request Headers:
Authentication token (JWT) is required for authorization.

Responses:
Status 200: Successful retrieval


# Create Order:

Endpoint: POST /create

Request Headers:
Authentication token (JWT) is required for authorization.

price (number): Order price
shippingCost (number): Shipping cost
total (number): Total price
shippingDetails (string): Shipping details
items (array): Array of product items

Responses:
Status 201: Order creation successful
JSON Response: Created order object
Status 400: Validation errors
Status 500: Server error


# Create Product:

Endpoint: POST /products/create

id (number): Product ID
nombre (string): Product name
precio (number): Product price
productImage (string): Product image
category (string): Product category
cantidad (number): Product quantity

Responses:
Status 201: Product creation successful
JSON Response: Created product object
Status 500: Server error


# Get All Products:

Endpoint: GET /products/all

Responses:
Status 200: Successful retrieval
JSON Response: List of products
Status 500: Server error





