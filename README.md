# invoice-intelligence
A project for invoice analysis and insights using AI.

## Usage Instructions

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rjuma305/invoice-intelligence.git
   cd invoice-intelligence
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm run start:server
   ```

4. **Start the client**:
   ```bash
   npm run start:client
   ```

### Environment Variables

Ensure you have the necessary environment variables set up. Create a `.env` file in the root directory and add the following:

```
# Server
PORT=3000

# Client
REACT_APP_API_URL=http://localhost:3000
```
