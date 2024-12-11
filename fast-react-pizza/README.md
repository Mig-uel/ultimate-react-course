![Fast React Pizza](https://images.unsplash.com/photo-1567459779655-5ca27f874f44?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

# Fast React Pizza

A simple pizza ordering application built with React.

## Application Requirements

- [ ] Very simple application, where users can order **one or more pizzas** from a menu.

- [ ] Requires **no user account** or **authentication**: users can just input their name before using the app.

- [x] The pizza menu can change, so it should be **loaded from an API**.

- [ ] Users can add multiple pizzas to a **cart** before ordering.

- [ ] Ordering requires the **user's name**, **phone number**, and **address**.

- [ ] If possible, **GPS location** should also be provided, to make delivery easier.

- [ ] User's can **mark their order as 'priority'** for an additional 20% of the cart price

- [ ] Orders are made by **sending a POST request** with the order data (user data + selected pizzas) to the API

- [ ] Payments are made on delivery. so **no payment gateway** is required.

- [ ] Each order will get a **unique ID** that should be displayed, so the **user can later look up their order** based on the ID.

- [ ] Users should be able to mark their order as 'priority' **even after the order has been placed**.

## Feature Categories

- User
- Menu
- Cart
- Order

## Pages

| Page     | Route           | Description                                    |
| -------- | --------------- | ---------------------------------------------- |
| Home     | /               | Welcome page with a brief introduction         |
| Menu     | /menu           | Displays the list of available pizzas          |
| Cart     | /cart           | Shows the pizzas added to the cart             |
| Checkout | /order/new      | Form to enter user details and place the order |
| Order    | /order/:orderId | Displays order details and status              |

## State Management

- User -> Global UI state (no accounts, so stays in-app)
- Menu -> Global remote state (fetched from API, stored in global state)
- Cart -> Global UI state (no need for API, just in-app)
- Order -> Global remote state (fetched and sent to API, stored in global state)
