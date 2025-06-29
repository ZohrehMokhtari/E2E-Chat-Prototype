# Secure Chat with End-to-End Encryption (PHP + JS)

This is a lightweight client-server chat application built using PHP, MySQL, JavaScript, and HTML. It supports **end-to-end encryption (E2EE)** using AES encryption implemented in the browser. The backend acts only as a relay, storing and delivering encrypted messages without being able to read them.

## 🔐 Project Goal

The purpose of this project is to demonstrate a simple yet secure communication model where:

- Messages are encrypted in the browser (client-side) before being sent.
- The backend server only stores and forwards encrypted messages.
- Messages are decrypted only by the receiving browser.
- MySQL is used to store the encrypted message logs.
- The application is lightweight, portable, and runs on any PHP-compatible server.

This approach protects user privacy even if the server is compromised.

## 🧩 Features

- End-to-End AES encryption using CryptoJS (client-side)
- PHP backend with MySQL message storage
- Periodic polling using JavaScript (can be upgraded to WebSockets)
- Lightweight and runs on local or LAN environments
- Easy to deploy and extend

## 📷 Demo

> Below is a short demonstration of how the chat works.
>  
> You can find the file in the project root as `usage.gif`.

![Chat usage demo](usage.gif)

- In this example, the message **"game"** is sent.
- The server stores an **AES-encrypted** version in the database.
- The browser decrypts it with a shared key and displays the readable text.

## 📦 Folder Structure

```
chat-app/
├── index.html               # Main chat interface
├── assets/
│   └── main.js              # Frontend logic and AES encryption
├── server/
│   ├── db.php               # Database connection
│   ├── send.php             # Store encrypted message
│   ├── fetch.php            # Fetch messages from DB
├── sql/
│   └── chat_schema.sql      # Database schema (MySQL)
├── usage.gif                # Demo animation of usage
└── README.md                # Project documentation
```

## ⚙️ Setup Instructions

### 1. Requirements

- PHP (tested on PHP 7.x+)
- MySQL (XAMPP, WAMP, or any LAMP stack)
- Browser with JavaScript enabled

### 2. Installation

1. Start Apache and MySQL using XAMPP or WAMP.
2. Create a MySQL database named `chatapp`.
3. Import the schema from `sql/chat_schema.sql`.
4. Place the entire project folder in `htdocs` (e.g., `C:/xampp/htdocs/chat-app`).
5. Open `http://localhost/chat-app/index.html` in your browser.

To test two clients:
- Open the same page in two different browser tabs (or two different browsers).
- Send messages from each side using the shared encryption key.

### 3. LAN Usage

To use this across devices in the same network:
- Find the IP address of the host machine (e.g., `192.168.1.5`)
- Access the app from another device via: `http://192.168.1.5/chat-app/index.html`
- Ensure firewall and antivirus do not block Apache

## 🛡️ Security Note

This application uses **symmetric encryption (AES)** with a shared secret key. In a production environment:

- Key exchange should use secure methods (e.g., RSA, Diffie-Hellman)
- Communication should be over HTTPS
- Input validation and sanitization are essential for security hardening

## 🧠 Use Cases

This project is designed as a proof of concept and can be adapted for:

- Secure local communications
- Educational purposes in network security
- Demonstrating encryption concepts
- Chat logs with confidentiality guarantees

## 📌 License

This project is released under the MIT License.
