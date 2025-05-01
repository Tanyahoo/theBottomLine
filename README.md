# Web Application Development Project Submission – 2024

**Name:** Tanya Costello  

**Date:** May 16th, 2024

---

## 📄 Start Page

**First page to open:** `DB_App/home/index.html`

---

## 🧭 Site Navigation & Pages Overview

There are **9 pages** in total:

1. `DB_App/home/index.html` – **Login Page**
2. `DB_App/views/failed.ejs` – **Failed Login**
3. `DB_App/views/home.ejs` – **Home Page**
4. `DB_App/views/individualProducts.ejs` – **Product Page (EJS template)**
5. `DB_App/home/AboutUs.html` – **About Us**
6. `DB_App/home/checkout.html` – **Checkout**
7. `DB_App/home/complete.html` – **Order Confirmation**
8. `DB_App/home/membership.html` – **Member’s Club Signup**
9. `DB_App/home/accepted.html` – **Membership Accepted**

---

## 🔐 Login System

- **Login Page:** `index.html`
  - Users must log in using credentials:  
    `username: user`  
    `password: pass`
  - Auth handled by custom Node.js module: `auth.js`, required in `index.js`
  - Incorrect credentials redirect to `failed.ejs`

---

## 🏠 Home Page

- Located at `home.ejs`
- Displays store name: **The Bottom Line**
- Navigation bar links to:
  - About Us
  - Checkout
  - Member’s Club
- Thumbnails link to individual product pages (dynamic EJS)

---

## 🛍️ Product Page

- File: `individualProducts.ejs`
- Dynamically displays:
  - Product Name
  - Price
  - Image
  - Description
- Features:
  - Background image carousel
  - Dropdown to select quantity (1–10)
  - Adds to cart (localStorage)
  - Navigation buttons to Home and Checkout

---

## 📖 About Us

- File: `AboutUs.html`
- Overview of store and mission
- Link to Member’s Club
- Button to return to Home

---

## 💳 Checkout Flow

- File: `checkout.html`
  - Displays total from cart (via JavaScript)
  - Collects credit card info
  - On submit → `complete.html` confirms order
- File: `complete.html`
  - Order confirmation
  - Link back to Home

---

## 🎉 Member’s Club

- File: `membership.html`
  - Form collects user name and email
  - Valid input → redirect to `accepted.html`
- File: `accepted.html`
  - Welcome message for new members
  - Navigation to Home

---

## 🛠️ Technologies Used

- HTML, CSS, JavaScript
- Node.js with Express
- EJS templating
- Custom authentication logic
- LocalStorage for cart
- Carousel for image display

---

## 👩‍💻 Author

**Tanya Costello**  
Student at ATU – Web Application Development
