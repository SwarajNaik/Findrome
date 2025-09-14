from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Email configuration (you can use environment variables in production)
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USER = 'your-email@gmail.com'  # Replace with your email
EMAIL_PASS = 'your-app-password'     # Replace with your app password

@app.route('/')
def home():
    """Health check endpoint"""
    return jsonify({
        'message': 'Swaraj Naik Portfolio Backend API',
        'status': 'running',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        # Get form data
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Extract form fields
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return jsonify({'error': 'All fields are required'}), 400
        
        # Basic email validation
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Log the contact form submission
        log_contact_submission(name, email, subject, message)
        
        # In a real application, you would send an email here
        # send_email_notification(name, email, subject, message)
        
        return jsonify({
            'message': 'Thank you for your message! I will get back to you soon.',
            'status': 'success'
        }), 200
        
    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Return list of projects"""
    projects = [
        {
            'id': 1,
            'title': 'AI-Powered Portfolio Website',
            'description': 'Modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features PWA capabilities and smooth animations.',
            'technologies': ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PWA', 'React', 'Framer Motion'],
            'github': 'https://github.com/SwarajNaik',
            'featured': True
        },
        {
            'id': 2,
            'title': 'Smart Data Analytics Dashboard',
            'description': 'Advanced data visualization dashboard with real-time analytics, interactive charts, and machine learning insights.',
            'technologies': ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning', 'APIs'],
            'github': 'https://github.com/SwarajNaik',
            'featured': True
        },
        {
            'id': 3,
            'title': 'E-Commerce ML Recommendation Engine',
            'description': 'Intelligent product recommendation system using collaborative filtering and deep learning. Achieved 85% accuracy.',
            'technologies': ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
            'github': 'https://github.com/SwarajNaik',
            'featured': True
        },
        {
            'id': 4,
            'title': 'Real-Time Stock Market Predictor',
            'description': 'Advanced financial modeling application that predicts stock prices using LSTM neural networks and sentiment analysis.',
            'technologies': ['Python', 'LSTM', 'Sentiment Analysis', 'APIs', 'Pandas', 'Matplotlib'],
            'github': 'https://github.com/SwarajNaik',
            'featured': False
        },
        {
            'id': 5,
            'title': 'Automated Code Review Assistant',
            'description': 'AI-powered tool that automatically reviews code quality, suggests improvements, and detects potential bugs using NLP.',
            'technologies': ['Python', 'NLP', 'OpenAI API', 'GitHub API', 'FastAPI', 'Docker'],
            'github': 'https://github.com/SwarajNaik',
            'featured': False
        }
    ]
    
    return jsonify({
        'projects': projects,
        'count': len(projects)
    })

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Return portfolio statistics"""
    stats = {
        'total_projects': 18,
        'years_experience': 2,
        'technologies_used': 15,
        'github_repos': 16,
        'languages': ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
        'frameworks': ['Next.js', 'React', 'Flask', 'Tailwind CSS', 'TensorFlow', 'Streamlit']
    }
    
    return jsonify(stats)

def log_contact_submission(name, email, subject, message):
    """Log contact form submissions to a file"""
    try:
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        }
        
        # Create logs directory if it doesn't exist
        os.makedirs('logs', exist_ok=True)
        
        # Append to log file
        with open('logs/contact_submissions.log', 'a') as f:
            f.write(json.dumps(log_entry) + '\n')
            
        print(f"Contact form submission logged: {name} - {email}")
        
    except Exception as e:
        print(f"Error logging contact submission: {str(e)}")

def send_email_notification(name, email, subject, message):
    """Send email notification (requires proper email configuration)"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = 'naik.swaraj2007@gmail.com'
        msg['Subject'] = f'Portfolio Contact: {subject}'
        
        # Email body
        body = f"""
        New contact form submission from portfolio:
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        
        ---
        Sent from Swaraj Naik Portfolio Website
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(EMAIL_HOST, EMAIL_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, 'naik.swaraj2007@gmail.com', text)
        server.quit()
        
        print(f"Email notification sent for contact from {name}")
        
    except Exception as e:
        print(f"Error sending email notification: {str(e)}")

if __name__ == '__main__':
    # Create logs directory
    os.makedirs('logs', exist_ok=True)
    
    # Run the app on port 5001 to avoid macOS AirPlay conflict
    app.run(debug=True, host='0.0.0.0', port=5001)
