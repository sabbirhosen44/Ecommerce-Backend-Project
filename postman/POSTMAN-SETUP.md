# API Documentation - Postman Collection

This folder contains the Postman collection for testing the Ecommerce Backend API.

## 📁 Files

- `Ecommerce-Backend.postman_collection.json` - Complete API collection with all endpoints

## 🚀 Getting Started

### 1. Import the Collection

1. Open Postman
2. Click on **Import** button (top left)
3. Select the `Ecommerce-Backend.postman_collection.json` file
4. Click **Import**

### 2. Set Up Environment Variables

Create a new environment in Postman with the following variable:

| Variable   | Description       | Example Value                                       |
| ---------- | ----------------- | --------------------------------------------------- |
| `BASE_URL` | Your API base URL | `http://localhost:5000/api/v1` or your deployed URL |

**To create an environment:**

1. Click the **Environments** tab (left sidebar)
2. Click **+** to create a new environment
3. Name it (e.g., "Development" or "Production")
4. Add the `BASE_URL` variable
5. Save and select this environment from the dropdown (top right)

### 3. Enable Cookie Handling in Postman

**IMPORTANT:** This API uses HTTP-only cookies for authentication, so you need to enable automatic cookie handling:

1. Go to **Settings** (⚙️ icon in top right)
2. Scroll to **Cookies**
3. Make sure **"Automatically follow redirects"** is enabled
4. Postman will automatically save and send cookies

**Alternative Method (Postman Desktop App):**
If automatic cookies don't work, use the **Postman Interceptor**:

1. Install Postman Interceptor Chrome extension
2. Enable it in Postman Settings
3. This will sync cookies from your browser

### 4. Authentication Flow

The API uses **cookie-based authentication** (no manual token management needed).

#### Step 1: Sign Up (If you don't have an account)

- Go to `User > Signup` endpoint
- Fill in your details in the form-data body:
  - `name`: Your full name
  - `email`: Your email address
  - `password`: Your password
  - `address`: Your street address
  - `city`: Your city
  - `country`: Your country
  - `pinCode`: Your postal/zip code
  - `file`: Your profile picture (optional)
- Click **Send**
- ✅ A cookie will be automatically set and saved by Postman

#### Step 2: Login

- Go to `User > Login` endpoint
- Update the request body with your credentials:
  ```json
  {
    "email": "your-email@example.com",
    "password": "your-password"
  }
  ```
- Click **Send**
- ✅ The authentication cookie is automatically saved by Postman
- ✅ **No need to copy any tokens!**

#### Step 3: Use Protected Endpoints

- All subsequent requests will automatically include the authentication cookie
- Just make sure you're using the same environment
- The cookie persists across requests until you logout or it expires

### 5. Viewing Your Cookies

To see your authentication cookies in Postman:

1. Click on **Cookies** (below the Send button)
2. Select your domain (e.g., `localhost`)
3. You should see a cookie named `token` (or similar)

### 6. Testing the API

The collection is organized into three main sections:

#### 👤 User Endpoints

- **Signup** - Register a new user account (sets authentication cookie)
- **Login** - Authenticate and receive cookie
- **Logout** - Clear authentication cookie and end session
- **Get My Profile** - View your profile information (requires cookie)
- **Update Profile** - Modify your profile details (requires cookie)
- **Change Password** - Update your password (requires cookie)
- **Update Profile Picture** - Upload a new avatar image (requires cookie)
- **Forgot Password** - Request OTP via email
- **Reset Password** - Reset password using OTP

#### 📦 Product Endpoints

**Public Endpoints (No authentication required):**

- **Get All Products** - View all products (supports category filtering)
- **Get Single Product** - View detailed product information
- **Get All Categories** - View all product categories

**Admin Only (Requires admin cookie):**

- **Create Product** - Add new products with images
- **Update Product** - Modify product details
- **Delete Product** - Remove products from catalog
- **Add Product Image** - Upload additional product images
- **Delete Product Image** - Remove specific product images
- **Get Admin Products** - Admin dashboard view of all products
- **Create Category** - Add new product categories
- **Delete Category** - Remove categories

#### 🛒 Order Endpoints

**User Endpoints (Requires authentication cookie):**

- **Place New Order** - Create a new order
- **Process Payment** - Handle payment with Stripe
- **Get User Orders** - View your order history
- **Get Single Order** - View specific order details

**Admin Only (Requires admin cookie):**

- **Get Admin Orders** - View all orders
- **Process Order** - Update order status (Preparing → Shipped → Delivered)

### Sample Data Requirements

All sensitive data has been removed from this collection. You'll need to:

- Use your own email addresses
- Create your own passwords (minimum 6 characters recommended)
- Upload your own images for products and profile pictures

### File Uploads

For endpoints that require file uploads (profile pictures, product images):

1. In the request body, find the `file` field
2. Make sure the type is set to **File**
3. Click **Select Files** and choose your image
4. Supported formats: JPG, PNG, JPEG
5. Click **Send**

### Working with IDs

Many endpoints use dynamic IDs in the URL path:

- `:productId` - Replace with actual product ID
- `:categoryId` - Replace with actual category ID
- `:orderId` - Replace with actual order ID
- `:imageId` - Replace with actual image ID

**How to get IDs:**

1. Create a product/category/order
2. Copy the `_id` from the response
3. Paste it into the URL path parameter

**Example:**

```
Before: {{BASE_URL}}/product/single/:productId
After:  {{BASE_URL}}/product/single/691019957394070c94cc722e
```

### Request Body Examples

**Create Product (Admin):**

```json
{
  "name": "iPhone 14 Pro",
  "description": "Latest Apple smartphone with advanced features",
  "price": 999,
  "stock": 50,
  "category": "Electronics"
}
```

**Create Category (Admin):**

```json
{
  "category": "Electronics"
}
```

**Place Order:**

```json
{
  "shippingInfo": {
    "address": "123 Main St",
    "city": "New York",
    "country": "USA",
    "pinCode": "10001"
  },
  "orderItems": [
    {
      "product": "product_id_here",
      "name": "iPhone 14 Pro",
      "price": 999,
      "quantity": 1,
      "image": "image_url_here"
    }
  ],
  "paymentMethod": "COD",
  "itemsPrice": 999,
  "taxPrice": 99.9,
  "shippingCharges": 10,
  "totalAmount": 1108.9
}
```

**Process Order (Admin):**

```json
{
  "orderStatus": "Shipped"
}
```

_Available statuses: Preparing, Shipped, Delivered_

## 🐛 Common Issues & Solutions

### Issue: "Unauthorized" or 401 Error

**Solutions:**

- Make sure you've logged in successfully (check for 200 response)
- Verify cookies are enabled in Postman settings
- Check the **Cookies** tab to see if the authentication cookie exists
- Try logging in again - the cookie might have expired
- Make sure you're using the same domain for all requests
- If testing locally, use `localhost` consistently (not `127.0.0.1`)

### Issue: Cookies Not Being Saved

**Solutions:**

- **Desktop App:** Go to Settings → Cookies → Enable "Automatically follow redirects"
- **Web Version:** Postman web version may have cookie limitations - use Desktop App
- Try using Postman Interceptor (Chrome extension)
- Check if your backend is setting cookies correctly (check response headers for `Set-Cookie`)
- Verify CORS settings allow credentials (`credentials: true`)

### Issue: "Cannot read property" or Validation Error

**Solutions:**

- Ensure all required fields are filled in the request body
- Check data types (strings, numbers, arrays)
- Verify field names match exactly (case-sensitive)

### Issue: File Upload Not Working

**Solutions:**

- Make sure the field type is set to **File**, not **Text**
- Check file size (there might be limits)
- Verify file format is supported (JPG, PNG, JPEG)
- Ensure the `file` field name matches what the API expects

### Issue: Product/Category/Order ID Not Found

**Solutions:**

- Verify the ID exists in your database
- Check that you're using the correct ID format (MongoDB ObjectId)
- Make sure you copied the entire ID without spaces
- The resource might have been deleted

### Issue: CORS Error

**Solutions:**

- Make sure the backend server is running
- Check that credentials are allowed in CORS configuration
- Verify the `BASE_URL` in your environment variables is correct
- Backend must have `credentials: true` in CORS options

### Issue: Payment Processing Failed

**Solutions:**

- Ensure Stripe is properly configured in your backend
- Use test card numbers in development: `4242 4242 4242 4242`
- Check that the payment amount is valid (greater than 0)

### Issue: Cookie Domain Mismatch

**Solutions:**

- Use consistent domain names (either `localhost` or `127.0.0.1`, not both)
- If deployed, make sure frontend and backend domains match
- Check backend cookie settings for domain and path

## 📊 Testing Workflow

### For Regular Users:

1. **Signup** → Create account (cookie automatically set)
2. **Get All Products** → Browse catalog
3. **Get Single Product** → View product details
4. **Place New Order** → Create order
5. **Process Payment** → Complete payment
6. **Get User Orders** → View order history
7. **Get My Profile** → View your profile
8. **Logout** → Clear authentication cookie

### For Admins:

1. **Login** → Authenticate as admin (cookie automatically set)
2. **Create Category** → Set up categories
3. **Create Product** → Add products
4. **Add Product Image** → Upload product images
5. **Get Admin Products** → View inventory
6. **Get Admin Orders** → Manage orders
7. **Process Order** → Update order status
8. **Logout** → Clear authentication cookie

## 🎯 Tips for Best Results

1. **Always select your environment** before making requests (top-right dropdown)
2. **Use Postman Desktop App** for best cookie support
3. **Login once and test multiple endpoints** - cookie persists automatically
4. **Check cookie expiration** - login again if you get 401 errors
5. **Use meaningful test data** - makes debugging easier
6. **Check response status codes**:
   - 200/201 - Success
   - 400 - Bad request (check your data)
   - 401 - Unauthorized (cookie missing or expired)
   - 403 - Forbidden (admin rights required)
   - 404 - Not found
   - 500 - Server error
7. **Save successful responses** for reference
8. **Test in order** - Create categories before products, products before orders
9. **Clear cookies when switching users** - Click Cookies → Remove specific cookie

## 📚 Additional Resources

- [Postman Documentation](https://learning.postman.com/)
- [Postman Cookie Management](https://learning.postman.com/docs/sending-requests/cookies/)
- [HTTP-only Cookies Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Stripe Testing Cards](https://stripe.com/docs/testing)
