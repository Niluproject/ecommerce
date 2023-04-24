import React, { useState } from 'react';
import "./register.css";
import { Input, Button, message } from 'antd';

function SentEmail() {
    const [email, setEmail] = useState('');

    function handleSendEmail() {
        fetch('http://localhost:9002/send-email', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    message.success('Email sent successfully');
                    setEmail('');
                } else {
                    throw new Error('Error sending email');
                }
            })
            .catch(error => {
                console.error(error);
                message.error('Error sending email');
            });
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div id="email-status">
            <Input value={email} onChange={handleEmailChange} type="email" placeholder="Enter email address" />
            <Button type="primary" onClick={handleSendEmail}>Send Email</Button>
        </div>
    )
}

export default SentEmail
