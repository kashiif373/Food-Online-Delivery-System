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
