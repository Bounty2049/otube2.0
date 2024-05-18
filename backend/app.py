from fastapi import FastAPI

app = FastAPI(
    title='OTube 2.0'
)


users = [
    {
        "id": 1,
        "name": "Alice Smith",
        "email": "alice@example.com",
        "age": 30,
        "is_active": True
    },
    {
        "id": 2,
        "name": "Bob Johnson",
        "email": "bob@example.com",
        "age": 24,
        "is_active": False
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie@example.com",
        "age": 29,
        "is_active": True
    },
    {
        "id": 4,
        "name": "Diana Prince",
        "email": "diana@example.com",
        "age": 35,
        "is_active": True
    },
    {
        "id": 5,
        "name": "Evan Wright",
        "email": "evan@example.com",
        "age": 22,
        "is_active": False
    }
]
products = [
    {
        "id": 1,
        "title": "Introduction to Python",
        "school": "Tech University",
        "course": "Computer Science",
        "price": 49.99
    },
    {
        "id": 2,
        "title": "Advanced Machine Learning",
        "school": "AI Institute",
        "course": "Data Science",
        "price": 99.99
    },
    {
        "id": 3,
        "title": "Business Management Basics",
        "school": "Business School",
        "course": "Management",
        "price": 39.99
    },
    {
        "id": 4,
        "title": "Creative Writing Workshop",
        "school": "Arts College",
        "course": "Literature",
        "price": 29.99
    },
    {
        "id": 5,
        "title": "Introduction to Philosophy",
        "school": "Liberal Arts College",
        "course": "Philosophy",
        "price": 19.99
    }
]



@app.get("/users")
async def get_users():
    return [user for user in users]


@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return [user for user in users if user["id"] == user_id]


@app.get("/products")
async def get_products():
    return [product for product in products]


@app.get("/products/{product_id}")
async def get_product(product_id: int):
    return [product for product in products if product.get('id') == product_id]


# @app.post("products/{product_id}")
# async def add_product(product_id:int):
#     products.append({
#         "id": id,
#         "title": title,
#         "school": school,
#         "course": course,
#         "price": price
#     })

#     return [product for product in products if product_id == id]