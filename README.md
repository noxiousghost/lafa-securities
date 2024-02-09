# Shareholder Management System

This is a project developed for a trading company to manage its shareholders' data efficiently. The project utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack for seamless development and deployment.

## Introduction

The Shareholder Management System is designed to streamline the process of managing shareholder information for a trading company. It provides functionalities for users to log in, view shareholder data, and for administrators to post notices for shareholders.

## Application Features

The overall flow of the Shareholder Management System is divided into two parts: from the user side and from the admin side.

### User Flow:

1. **Admin Entry:**

   - The admin enters a record about the valid user into the system.

2. **Sending Credentials:**

   - The admin sends the login credentials (login ID and one-time password) to the user through email.

3. **User Login:**

   - The user logs in to the system using the provided credentials.

4. **Password Change:**

   - Upon successful login, users are prompted to change their password received from the admin via email.
   - Users cannot proceed further until they set a new secure password.

5. **Logged In:**

   - After setting the new password, users are redirected to the login page to enter their ID and new password to access the system.

6. **User Dashboard:**

   - In the system, users can:
     - View their details.
     - Access any notices posted by the admin.
     - Place buying and selling orders for shares.
     - View their share transaction history.
     - Change their password.

7. **Profile Changes:**
   - Users can request changes to their profile details from their profile section, which will be validated by the admin.

### Admin Flow:

1. **User Management:**

   - The admin can create, update, and delete user records.
   - After creating a user, the admin sends the login credentials to the respective user.

2. **Notice Posting:**

   - Admins can post new notices and edit or delete existing ones.

3. **Profile Requests:**

   - Admins can check users' requests regarding profile changes and validate them.

4. **Share Transaction Management:**
   - Admins can view users' share orders (for buying and selling) and facilitate transactions.

## Phases of Development

### Phase 1:

- Develop basic app structure.
- Create an admin panel.
- Implement user authentication system.
- Allow users to log in and view their data.

### Phase 2:

- Enable administrators to post notices.
- Allow users to view notices in their dashboard.

### Phase 3:

- Allow users to place request to change their details.
- Allow admins to see user's requests and perform required actions and alert the user.

### Phase 4:

- Allow users to place order for selling or buying shares.
- Allow admins to manage transaction and alert the users.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shareholder-management-system.git
   ```

2. Navigate to the server directory:

   ```bash
   cd shareholder-management-system/server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open another terminal window/tab, navigate to the client directory:

   ```bash
   cd ../client
   ```

6. Install client dependencies:

   ```bash
   npm install
   ```

7. Start the client:

   ```bash
   npm run dev
   ```

8. Access the application at [http://localhost:3000](http://localhost:3000) in your browser.
