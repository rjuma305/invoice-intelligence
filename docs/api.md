# API Documentation

This file contains the specifications for the API endpoints used in the invoice-intelligence project.

## Endpoints

### 1. `/api/invoices/analyze`

- **Description**: Analyzes invoices for discrepancies.
- **Method**: POST
- **Request Body**:
  ```json
  {
    "invoice": "<base64_encoded_invoice_file>"
  }
  ```
- **Response**:
  ```json
  {
    "status": "success",
    "data": {
      "discrepancies": [
        {
          "lineItem": "Item 1",
          "issue": "Price discrepancy",
          "confidence": 0.85
        }
      ]
    }
  }
  ```

### 2. `/api/insights`

- **Description**: Returns insights based on analyzed invoices.
- **Method**: GET
- **Response**:
  ```json
  {
    "status": "success",
    "data": [
      {
        "insight": "Most common discrepancy is in pricing",
        "count": 10
      }
    ]
  }
  ```
