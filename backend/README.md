# Portfolio Backend

Backend server for the portfolio website with contact form functionality.

## Features

- Express.js server
- Contact form email handling with Nodemailer
- CORS enabled for frontend communication
- Auto-reply to contact form submissions
- Environment-based configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Configure your email credentials in `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Gmail Setup

To use Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `EMAIL_PASS`

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Contact Form
- **POST** `/api/contact`
- Body: `{ name, email, subject, message }`
- Sends email to your configured address
- Sends auto-reply to sender

## Frontend Integration

Update the contact form in `frontend/script.js` to use the API:

```javascript
const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
});

const result = await response.json();
```

## Deployment

For production deployment:
1. Set environment variables on your hosting platform
2. Update the frontend API endpoint to your production URL
3. Consider using a service like SendGrid or AWS SES for email
