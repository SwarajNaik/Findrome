# Swaraj Naik Portfolio - Backend API

A simple Flask backend API for the portfolio website, handling contact form submissions and providing project data.

## Features

- Contact form submission handling
- CORS enabled for frontend integration
- Project data API endpoint
- Portfolio statistics endpoint
- Contact form logging
- Email notification support (optional)

## Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask application:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### GET /
Health check endpoint
- **Response**: API status and timestamp

### POST /api/contact
Handle contact form submissions
- **Body**: JSON with `name`, `email`, `subject`, `message`
- **Response**: Success/error message

### GET /api/projects
Get list of projects
- **Response**: Array of project objects with details

### GET /api/stats
Get portfolio statistics
- **Response**: Statistics object with counts and data

## Configuration

### Email Notifications (Optional)
To enable email notifications for contact form submissions:

1. Update the email configuration in `app.py`:
```python
EMAIL_USER = 'your-email@gmail.com'
EMAIL_PASS = 'your-app-password'
```

2. Uncomment the email sending line in the contact endpoint:
```python
send_email_notification(name, email, subject, message)
```

### Environment Variables (Production)
For production deployment, use environment variables:
```bash
export EMAIL_USER=your-email@gmail.com
export EMAIL_PASS=your-app-password
```

## File Structure

```
backend/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── README.md          # This file
└── logs/              # Contact form submission logs (created automatically)
```

## Development

The backend is designed to be simple and lightweight. It logs all contact form submissions to a file and can optionally send email notifications.

For production deployment, consider:
- Using a proper database instead of file logging
- Implementing rate limiting
- Adding input validation and sanitization
- Using environment variables for configuration
- Setting up proper error handling and logging
