# 🍔 Online Food Delivery System

A **full-stack MERN** (MongoDB, Express.js, React.js, Node.js) web application that allows users to **browse restaurants**, **view menus**, **add items to cart**, **place orders**, and **make secure real-time payments**.  
Includes a powerful **Admin Panel** for managing restaurants, menus, users, and orders with **JWT authentication**, **real-time order tracking**, and **password reset via email**.

---

## 🚀 Features

### 👤 **User Features**
- User Registration & Login (**JWT Authentication**)
- Secure Password Hashing with **bcrypt**
- **Password Reset** via Email using Gmail SMTP
- Browse restaurants & menus
- Add items to Cart
- Place orders with **Razorpay Payment Gateway**
- **Real-Time Order Tracking**
- View Order History & Current Status

### 🛠 **Admin Features**
- Admin Login (**JWT Authentication**)
- Manage Restaurants (Add, Update, Delete)
- Manage Menu Items
- Manage Orders & update status in real-time
- Manage Users

---

## 🔒 Security
- **JWT (JSON Web Token)** based authentication
- **Password Encryption** with bcrypt
- Protected API routes for Admin & Users

---

## 🛠 Tech Stack

**Frontend**
- React.js
- React Router
- Context API / Redux *(if used)*
- Axios
- CSS / TailwindCSS / Bootstrap

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

**Integrations**
- Razorpay Payment Gateway
- Gmail SMTP for password reset
- Discount Coupons Support

---

## 🎟 Discount Coupons
| Code   | Discount |
|--------|----------|
| SAVE25 | ₹25 off  |
| SAVE50 | ₹50 off  |
| SAVE75 | ₹75 off  |

---

## 💳 Payment Integration (Razorpay)
- Fully integrated **Razorpay Payment Gateway** for real-time payments.
- Secure transaction handling.
- Supports Test & Live keys.

---

## 📧 Password Reset (Gmail SMTP)
- Secure password reset via registered email.
- **Token-based verification** for password reset.
- Gmail SMTP integration.

---

## 📂 Folder Structure
 backend/ → Express.js server code + Razorpay API integration
frontend/ → React client application
admin/ → React admin panel for managing orders & users

---
## ⚙️ Installation & Setup

1️⃣ **Clone the repository**

git clone https://github.com/kashiif373/Online-Food-Delivery-System.git
cd Online-Food-Delivery-System

---

2️⃣ Install dependencies

Backend

cd backend
npm install


Frontend

cd ../frontend
npm install


Admin

cd ../admin
npm install


3️⃣ Set up environment variables
Create a .env file in each directory (backend, frontend, admin) and configure:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
EMAIL_USER=your_gmail
EMAIL_PASS=your_gmail_app_password


4️⃣ Run development servers

Backend

cd backend
npm run server


Frontend

cd ../frontend
npm run dev


Admin

cd ../admin
npm run dev

 ## 📸 Screenshots
🏠 Home Page

🍽 Explore Menu

🔐 Login Page

🛒 Add to Cart

📦 Order Page

 ## 🛠 Admin Panel

## 📬 Contact

Author: Md Kashif Mukhtar
📧 Email: kashif.mukhtar950@gmail.com
🐙 GitHub: @kashiif373
💼 LinkedIn: md-kashif-mukhtar

