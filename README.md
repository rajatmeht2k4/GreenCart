
# 🛒 GreenCart - E-Commerce Web App

GreenCart is a full-stack e-commerce application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to browse products, add them to a cart, place orders using Cash on Delivery (COD), and for sellers/admins to manage inventory and orders through a dedicated dashboard.

---

## 🚀 Features

### 👤 User Side
- Browse all products or by category
- View product details
- Add/remove products from cart
- Add delivery address
- Place orders (COD)
- View past orders
- Login with secure authentication

### 🧑‍💼 Seller/Admin Panel
- Secure login for seller
- Add new products with image upload
- View & manage product list
- View all orders placed
- Logout functionality

---

## 🧩 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Cloudinary (image upload)
- JSON Web Tokens (JWT)
- Multer (for image handling)

---

## 📁 Folder Structure

```
client/         # React frontend
├── components/
├── pages/
├── context/
├── assets/
├── App.jsx
├── index.js

server/         # Express backend
├── models/
├── controllers/
├── routes/
├── middleware/
├── config/
├── index.js
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/greencart.git
cd greencart
```

### 2. Install dependencies

```bash
# For client
cd client
npm install

# For server
cd ../server
npm install
```

### 3. Setup `.env` files

Create a `.env` file inside the `server` folder with the following:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the app

```bash
# Start backend
cd server
npm run dev

# Start frontend (in another terminal)
cd client
npm run dev
```

---

## 🌐 Deployment

The project is ready for deployment on platforms like **Vercel (frontend)** and **Render / Railway / Cyclic (backend)**.

---

## 🧑‍💻 Author

Made with ❤️ by Rajat Mehta (https://github.com/rajatmeht2k4)

---

## 📄 License

This project is open-source and available under the MIT License.
