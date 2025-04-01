export const EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: #007bff;
      color: white;
      text-align: center;
      padding: 15px;
      border-radius: 8px 8px 0 0;
    }
    .content {
      padding: 20px;
      color: #333;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #666;
      margin-top: 20px;
    }
    .info {
      background: #f9f9f9;
      padding: 15px;
      border-left: 5px solid #007bff;
      margin: 10px 0;
      border-radius: 5px;
    }
    .info strong {
      display: block;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Message</h2>
    </div>
    <div class="content">
      <p>You have received a new message from your portfolio contact form:</p>
      <div class="info">
        <strong>Name:</strong> {name}
      </div>
      <div class="info">
        <strong>Email:</strong> {email}
      </div>
      <div class="info">
        <strong>Message:</strong>
        <p>{message}</p>
      </div>
    </div>
    <div class="footer">
      <p>© 2025 Your Portfolio. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

`