# FashionBlendHaven || website for all branded fashion products

# Site-Link: https://6533d3a2f393d274e587705d--fashion-blend-haven.netlify.app/

This is a fashion brand (Fashion and Apparel) website, made using React JS, CSS3 (Tailwind and DaisyUI),Firebase, MongoDB and javascript

### Website pages:

- Home page with Banner(Automatic Slider), all the brands cards, Customers reviews who have previously bought from the website, Subscribe section and footer section
- Add Products page to add new products in the website
- Cart page to show the items a user has added in their cart (cart is unique for each different user)
- Login and Register pages to authenticate users
- Error page to handle page not found error

## Features:

- When user click on any brands card on homePage, website navigates to products page where all the available products of that particular brand are shown
- When user clicks update button on any product card, website navigates to update product form so that user can nodify any products details
- When user clicks on details button, if user is not logged in, navigates to sign in page. After user is logged in, navigates to that products details page
- Clicking on Add To Cart button on the details page adds that product on that particular users cart by showing success toast to the user ( If user wants to add the same item to the cart again, already exists toast is shown)
- When user clicks on Add Product button on navbar, website navigates to add product form so that user can add a new item of a particular brand
- When user clicks on Cart button on navbar, Cart page is loaded to show the items a user has added in their cart (cart is unique for each different user)
- User can delete any item from cart (confirmation toast and success toast are shown)
- In home page, if any brand doesn't have any product available, clicking on that brands cart shows user "No products available" message
- User can toggle between sign in and register pages
- While logging in, if credentials are not valid, error toast is shown and on valid credetials, success toast is shown
- While registering, if invalid email or password is entered, error toast is given. Password requirs minimum 6 characters and at least one capital letter and one special characters
- After user is successfully signed in or registered, users photo and username is shown in navbar and logout button appears
- When logout is clicked, user loggs out successfully and photo and username gets hidden and login/register button re-appears
- When a private route is reloaded, it keeps user in that page and doesn't navigate again to login page until user logs out
- When invalid url is types, user navigates to customized error page
- Website is made responsive for Tab and mobile devices

## Required:
- Tech Stack: Vite, CSS3 (Tailwind and DaisyUI)
- Programming Language: React,JavaScript
- User Authentication: Firebase
- Database: MongoDB
- Code Editor: Visual Studio Code (VSCode)
- Terminal: Git Bash
