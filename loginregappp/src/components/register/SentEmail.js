import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function SentEmail() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const { TextArea } = Input;

    function handleSendEmail() {
        fetch('http://localhost:9002/send-email', {
            method: 'POST',
            body: JSON.stringify({ from, to, subject, text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    message.success('Email sent successfully');
                    setFrom('');
                    setTo('');
                    setSubject('');
                    setText('');
                } else {
                    throw new Error('Error sending email');
                }
            })
            .catch(error => {
                console.error(error);
                message.error('Error sending email');
            });
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Input value={from} onChange={e => setFrom(e.target.value)} type="email" placeholder="From" style={{ marginBottom: 10 }} />
            <Input value={to} onChange={e => setTo(e.target.value)} type="email" placeholder="To" style={{ marginBottom: 10 }} />
            <Input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder="Subject" style={{ marginBottom: 10 }} />
            <TextArea value={text} onChange={e => setText(e.target.value)} type="text" placeholder="Message" style={{ marginBottom: 10 }} />
            {/* <ReactQuill value={text} onChange={e => setText(e.target.value)} placeholder="Message" style={{ marginBottom: 10 }} /> */}
            {/* <ReactQuill value={text} onChange={setText} placeholder="Message" style={{ minHeight: 200, width: '100%' }} /> */}
            <Button type="primary" onClick={handleSendEmail}>Send Email</Button>
        </div>
    )
}

export default SentEmail
