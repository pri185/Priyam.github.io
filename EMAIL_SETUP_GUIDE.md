# Email Setup Guide for Portfolio Contact Form

## Option 1: EmailJS Setup (Recommended)

EmailJS allows you to send emails directly from your website without a backend server.

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key**

### Step 5: Update Your Website
1. Open `main.js` file
2. Find this line: `emailjs.init("your_public_key");`
3. Replace `"your_public_key"` with your actual public key
4. Find this line: `emailjs.send('your_service_id', 'your_template_id', emailParams)`
5. Replace:
   - `'your_service_id'` with your Service ID
   - `'your_template_id'` with your Template ID

### Example:
```javascript
// Replace these with your actual IDs
emailjs.init("user_1234567890abcdef"); // Your public key
emailjs.send('service_gmail', 'template_contact', emailParams) // Your service and template IDs
```

## Option 2: Alternative Solution (If EmailJS doesn't work)

The contact form also includes a fallback "Email Me Directly" button that opens the user's default email client with pre-filled information.

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check if you receive the email
4. If not working, check browser console for errors

## Troubleshooting

### Common Issues:
1. **"User not found"** - Check your public key
2. **"Service not found"** - Check your service ID
3. **"Template not found"** - Check your template ID
4. **CORS errors** - Make sure you're testing on a live server, not file://

### Free Tier Limits:
- EmailJS free tier: 200 emails/month
- Perfect for a portfolio website

## Security Note

The public key is safe to use in client-side code. It only allows sending emails through your configured services, not accessing your account.

## Support

If you need help setting this up, you can:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Use the fallback button which opens the user's email client
3. Contact me for assistance

---

**Your contact form is now ready to send real emails!** 📧