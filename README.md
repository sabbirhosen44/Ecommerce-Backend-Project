# E-Commerce Backend API

A RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. This backend API powers a complete e-commerce platform with user authentication, product management, shopping cart, order processing, and integrated payment system.

[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen.svg)](https://www.mongodb.com/)

## ✨ Key Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 👤 **User Management** - Profile updates, password change, OTP-based password reset
- 📦 **Product Catalog** - CRUD operations with search and category filtering
- 🖼️ **Image Upload** - Multi-image support via Cloudinary
- 🛒 **Shopping Cart** - Add, update, remove items
- 💳 **Payment Integration** - Stripe payment gateway
- 📋 **Order Management** - Complete order lifecycle tracking
- 🔧 **Admin Panel** - Product, category, and order management
- 📧 **Email Service** - OTP verification via Nodemailer
- 🛡️ **Security** - Password hashing, secure cookies, CORS

## 🛠️ Tech Stack

<table align="center" border="1" cellpadding="10" cellspacing="0">
  <tr>
    <th>Category</th>
    <th>Technologies</th>
  </tr>
  <tr>
  <td><b>🌐 Backend</b></td>
  <td>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  </td>
</tr>
  <tr>
    <td><b>🗄️ Database</b></td>
    <td>
      <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
      <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><b>🔐 Authentication</b></td>
    <td>
      <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><b>💳 Payment</b></td>
    <td>
      <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><b>☁️ Cloud & File Handling</b></td>
    <td>
      <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
      <img src="https://img.shields.io/badge/Multer-FF6F00?style=for-the-badge" />
      <img src="https://img.shields.io/badge/DataURI-4B0082?style=for-the-badge" />
    </td>
  </tr>
  <tr>
    <td><b>📧 Communication</b></td>
    <td>
      <img src="https://img.shields.io/badge/Nodemailer-0078D4?style=for-the-badge&logo=maildotru&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><b>🛡️ Security & Middleware</b></td>
    <td>
      <img src="https://img.shields.io/badge/bcrypt-003B57?style=for-the-badge&logo=security&logoColor=white" />
      <img src="https://img.shields.io/badge/cookie--parser-FFA500?style=for-the-badge" />
      <img src="https://img.shields.io/badge/CORS-35495E?style=for-the-badge&logo=shield&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><b>✅ Validation</b></td>
    <td>
      <img src="https://img.shields.io/badge/Validator.js-2F8D46?style=for-the-badge" />
    </td>
  </tr>
</table>

## 📁 Project Structure

```
├── controllers/          # Business logic
│   ├── user.js          # Authentication & user management
│   ├── product.js       # Product & category operations
│   └── order.js         # Order processing
├── models/              # MongoDB schemas
│   ├── user.js
│   ├── product.js
│   ├── order.js
│   └── category.js
├── routes/              # API endpoints
│   ├── user.js
│   ├── product.js
│   └── order.js
├── middlewares/         # Custom middleware
│   ├── auth.js          # Authentication & authorization
│   ├── error.js         # Error handling
│   └── multer.js        # File upload
├── utils/               # Helper functions
│   ├── features.js      # Utility functions
│   └── error.js         # Custom error class
├── data/
│   ├── database.js      # MongoDB connection
├── postman/             # API testing
│   ├── Ecommerce-Backend.postman_collection.json
│   └── POSTMAN-SETUP.md        # Postman setup guide
├── .env                 # Environment variables
├── app.js               # Express configuration
└── README.md            # Project documentation
└── package.json         # Dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- MongoDB
- Cloudinary account
- Stripe account

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd ecommerce-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create `data/config.env`:

```env
PORT=5000
NODE_ENV=Development

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_API_SECRET=your_stripe_secret

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password

FRONTEND_URI_1=http://localhost:3000
FRONTEND_URI_2=http://localhost:5173
```

4. **Run the server**

```bash
npm run dev
```

Server runs on `http://localhost:4000`

## 📮 API Testing with Postman

We provide a complete Postman collection for easy API testing and integration.

### Quick Setup

- Import the collection into Postman from postman/Ecommerce-Backend.postman_collection.json
- Set up environment variables (BASE_URL, ACCESS_TOKEN)
- Start testing all endpoints!

👉 View Complete Postman Setup Guide [POSTMAN-SETUP.md](postman/POSTMAN-SETUP.md)

## 📚 API Endpoints

### Authentication

```
POST   /api/v1/user/new              # Register
POST   /api/v1/user/login            # Login
GET    /api/v1/user/logout           # Logout
GET    /api/v1/user/me               # Get profile
PUT    /api/v1/user/updateprofile    # Update profile
PUT    /api/v1/user/changepassword   # Change password
PUT    /api/v1/user/updatepic        # Update avatar
POST   /api/v1/user/forgetpassword   # Request OTP
PUT    /api/v1/user/resetpassword    # Reset with OTP
```

### Products

```
GET    /api/v1/product/all           # Get all products
GET    /api/v1/product/admin         # Admin dashboard
GET    /api/v1/product/single/:id    # Get single product
POST   /api/v1/product/new           # Create product (Admin)
PUT    /api/v1/product/single/:id    # Update product (Admin)
POST   /api/v1/product/images/:id    # Add image (Admin)
DELETE /api/v1/product/images/:id    # Delete image (Admin)
DELETE /api/v1/product/single/:id    # Delete product (Admin)
```

### Categories

```
GET    /api/v1/product/categories    # Get all categories
POST   /api/v1/product/category      # Add category (Admin)
DELETE /api/v1/product/category/:id  # Delete category (Admin)
```

### Orders

```
POST   /api/v1/order/payment         # Create payment intent
POST   /api/v1/order/new             # Place order
GET    /api/v1/order/my              # Get my orders
GET    /api/v1/order/single/:id      # Get order details
GET    /api/v1/order/admin           # Get all orders (Admin)
PUT    /api/v1/order/single/:id      # Process order (Admin)
```

## 📊 Database Models

### User

- Email, password (hashed), name, address details
- Avatar with Cloudinary integration
- Role-based access (user/admin)
- OTP for password reset

### Product

- Name, description, price, stock
- Multiple images (Cloudinary)
- Category reference
- Timestamps

### Order

- Shipping information
- Order items with product references
- Payment details (COD/Online)
- Status tracking (Preparing → Shipped → Delivered)
- Automatic stock updates

### Category

- Simple category name

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt (10 rounds)
- ✅ HTTP-only secure cookies
- ✅ CORS configuration
- ✅ Input validation
- ✅ OTP-based password reset
- ✅ Protected routes with middleware
- ✅ Admin authorization checks

## 🎓 Learning Outcomes

This project demonstrates:

- RESTful API design principles
- Authentication and authorization
- Database modeling with relationships
- Payment gateway integration
- Cloud storage implementation
- Email service integration
- Error handling best practices
- Middleware architecture
- Secure coding practices

## 📝 Environment Setup

The project uses separate environment configurations:

- `Development` - Local testing with detailed errors
- `Production` - Optimized for deployment

## 🧪 Testing

Use tools like Postman, Thunder Client, or cURL:

```bash
# Test server status
curl http://localhost:5000/

# Register user
curl -X POST http://localhost:5000/api/v1/user/new \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"123456"}'
```

## 🚀 Deployment Ready

- Environment-based configuration
- MongoDB Atlas compatible
- Cloudinary cloud storage
- Stripe production keys support
- CORS configured for frontend
- Ready for Heroku, Railway, Render, etc.

## 📈 Performance Features

- Mongoose query optimization
- Efficient image storage with Cloudinary
- Proper indexing on database
- Async/await for non-blocking operations
- Error handling prevents crashes

## 🎨 API Response Format

**Success Response:**

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Error description"
}
```

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^6.7.2",
  "jsonwebtoken": "^8.5.1",
  "bcrypt": "^5.1.0",
  "cloudinary": "^1.32.0",
  "stripe": "^10.17.0",
  "nodemailer": "^6.8.0",
  "multer": "^1.4.5-lts.1",
  "validator": "^13.7.0",
  "cookie-parser": "^1.4.6",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3"
}
```

## 🔮 Future Enhancements

- Product reviews and ratings
- Advanced search with filters
- Pagination for large datasets
- Admin analytics dashboard
- Real-time notifications
- Order cancellation and refunds
- Coupon/discount system
- Product recommendations

---

**⭐ If you found this project helpful, please consider giving it a star!**
