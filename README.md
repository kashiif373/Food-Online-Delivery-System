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

git clone https://https://github.com/kashiif373/Food-Online-Delivery-System
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
---


3️⃣ Set up environment variables
Create a .env file in each directory (backend, frontend, admin) and configure:

--MONGO_URI=your_mongodb_connection_string
--JWT_SECRET=your_secret_key
--RAZORPAY_KEY_ID=your_razorpay_key_id
--RAZORPAY_KEY_SECRET=your_razorpay_key_secret
--EMAIL_USER=your_gmail
--EMAIL_PASS=your_gmail_app_password


4️⃣ Run development servers

Backend

--cd backend
--npm run server


Frontend

--cd ../frontend
--npm run dev


Admin

cd ../admin
npm run dev

---

 ## 📸 Screenshots
 
 ## 🏠 Home Page

<img width="1897" height="891" alt="image" src="https://github.com/user-attachments/assets/9fc7c4de-2696-4ec6-8849-e01dfb5cf747" />


##🍽 Explore Menu
<img width="1898" height="890" alt="image" src="https://github.com/user-attachments/assets/00359e4c-2ded-4bd7-8d57-6718ae22405b" />


## 🔐 Login Page
<img width="1900" height="888" alt="image" src="https://github.com/user-attachments/assets/1bef4b3f-2606-4720-a6de-2cb896a23f35" />


## 🛒 Add to Cart

<img width="1893" height="885" alt="image" src="https://github.com/user-attachments/assets/d6d742c9-0ed5-4317-ab6a-75b8be925586" />


## 📦 Order Page

<img width="1902" height="894" alt="image" src="https://github.com/user-attachments/assets/1839ce3e-15a6-4471-a3ee-e4f28f4d7f77" />


 ## 🛠 Admin Panel

 <img width="1893" height="890" alt="image" src="https://github.com/user-attachments/assets/5c937faa-cec4-49d9-a347-3acc81e56210" />


## 📬 Contact

Author: Md Kashif Mukhtar

--📧 Email: kashif.mukhtar950@gmail.com

-- 🐙 GitHub: @kashiif373

-- 💼 LinkedIn: https://www.linkedin.com/in/md-kashif-mukhtar-aa7331201/


