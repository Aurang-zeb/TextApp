import React from 'react';
import './About.css'; // Importing CSS file

function About() {
    return (
        <div className="container">
            <h1 className="title">Welcome to NoteNest!</h1>
            <p className="description">
                At NoteNest, we're passionate about making text editing simple, efficient, and downright enjoyable. Say goodbye to the hassle of manually converting lowercase to uppercase or tirelessly hunting down those pesky extra spaces. With our innovative text pad app, your writing experience will be smoother than ever before.
            </p>
            
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
                Our mission is to empower users like you to streamline your text editing tasks effortlessly. We understand the frustration of dealing with formatting inconsistencies and tedious manual corrections. That's why we've crafted NoteNest with precision and care, ensuring that your journey from lowercase to uppercase and back again is seamless and stress-free.
            </p>
            
            <h2 className="section-title">What Sets Us Apart</h2>
            <ul className="feature-list">
                <li><strong>Swift Conversion:</strong> With just a tap, transform lowercase words into uppercase, and vice versa, with lightning speed. Whether you're editing a document, crafting an email, or composing a tweet, NoteNest has your back.</li>
                <li><strong>Space Optimization:</strong> Bid farewell to cluttered text plagued by unnecessary spaces. NoteNest intelligently detects and eliminates extra spaces, leaving your text clean, concise, and polished.</li>
                <li><strong>User-Centric Design:</strong> We've designed NoteNest with you in mind. Our intuitive interface and user-friendly features ensure that whether you're a seasoned wordsmith or a casual typer, you'll feel right at home.</li>
            </ul>
            
            <h2 className="section-title">Our Story</h2>
            <p className="section-description">
                NoteNest was born out of a shared frustration with the limitations of existing text editing tools. As avid writers and developers, we knew there had to be a better way to tackle common formatting woes. Thus, NoteNest emerged from the depths of brainstorming sessions and countless lines of code, driven by our unwavering commitment to simplicity and efficiency.
            </p>
            
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
                We love hearing from our users! Whether you have feedback, suggestions, or just want to say hello, don't hesitate to reach out. Your insights are invaluable in helping us continually improve NoteNest and tailor it to meet your needs.
            </p>
            
            <p className="closing-message">
                Join the NoteNest revolution today and experience the joy of effortless text editing. Say hello to a smoother, swifter writing experience. Welcome to NoteNest – where text transformation meets simplicity.
            </p>
        </div>
    );
}

export default About;
