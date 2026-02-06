// ============================================
// Portfolio Backend Server
// ============================================
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// Middleware
// ============================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static('../frontend'));

// ============================================
// Email Configuration
// ============================================
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// ============================================
// Routes
// ============================================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Tous les champs sont requis'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Adresse email invalide'
            });
        }

        // Mail options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'moadelhoussaini2@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #667eea;">Nouveau message depuis votre portfolio</h2>
                    <div style="background: #f7fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p><strong>Nom:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Sujet:</strong> ${subject}</p>
                    </div>
                    <div style="background: white; padding: 20px; border-left: 4px solid #667eea;">
                        <h3 style="color: #2d3748; margin-top: 0;">Message:</h3>
                        <p style="color: #4a5568; line-height: 1.6;">${message}</p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="color: #718096; font-size: 12px;">
                        Ce message a été envoyé depuis votre portfolio à ${new Date().toLocaleString('fr-CA')}
                    </p>
                </div>
            `
        };

        // Auto-reply to sender
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Merci pour votre message - Moad Elhoussaini',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #667eea;">Bonjour ${name}!</h2>
                    <p style="color: #4a5568; line-height: 1.6;">
                        Merci de m'avoir contacté. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.
                    </p>
                    <div style="background: #f7fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p style="color: #2d3748; margin: 0;">
                            <strong>Votre message:</strong><br>
                            "${message}"
                        </p>
                    </div>
                    <p style="color: #4a5568;">
                        Cordialement,<br>
                        <strong style="color: #667eea;">Moad Elhoussaini</strong><br>
                        <a href="mailto:moadelhoussaini2@gmail.com" style="color: #667eea;">moadelhoussaini2@gmail.com</a>
                    </p>
                </div>
            `
        };

        // Send emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReplyOptions);

        res.json({
            success: true,
            message: 'Message envoyé avec succès!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'envoi du message'
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// ============================================
// Start Server
// ============================================
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email service configured`);
});

module.exports = app;
