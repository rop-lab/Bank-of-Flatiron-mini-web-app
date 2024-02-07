
## Simple Transactions App
This is a simple React application for managing transactions. It allows users to add transactions, search for transactions by description, and view a table of transactions.

## Usage
To use this application, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running npm install.
3. Start the development server by running npm start.
4. Access the application in your browser at `http://localhost:3000`.
Components

`App.js`
The main component of the application responsible for managing state and rendering other components.

1. Imports useState and useEffect hooks from React.
2. Renders TransactionForm and TransactionTable.
3. Fetches transaction data from `http://localhost:3000/transactions` using fetch API and sets the transactions state.
4. Implements search functionality to filter transactions based on description.

`TransactionForm.js`
A component responsible for rendering a form to add new transactions.

1. Renders input fields for date, description, category, and amount.
2. Uses local state to manage form data.
3. Provides a handleSubmit function to submit form data to the parent component.

 `TransactionTable.js`
A component responsible for rendering a table of transactions.

1. Renders a table with columns for date, description, category, and amount.
2. Maps over the transactions array to render each transaction row.

`File Structure`
- index.js: Entry point of the application, renders the App component.
- App.js: Main component of the application.
- TransactionForm.js: Component for adding new transactions.
- TransactionTable.js: Component for displaying a table of transactions.

## Notes
Ensure that the backend server is running and serving transaction data at `http://localhost:3000/transactions`.
This application is a simple demonstration and may require additional features and error handling for production use.