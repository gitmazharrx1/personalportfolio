import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  typedTexts: string[] = [
    "Experienced in .NET and Angular development.",
    "Focused on building efficient and scalable applications.",
    "Combining clean design with solid back-end performance.",
    "Working to create seamless user experiences."
  ];
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';


  currentText: string = "";
  textIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100; // Speed of typing
  deletingSpeed: number = 50; // Speed of deleting
  delayBeforeDelete: number = 1000; // Delay before deleting
  delayBeforeNext: number = 150; // Delay before starting next word
  /**
   *
   */
  constructor() {

  }
  ngOnInit() {
    this.startTypingEffect()
  }
  startTypingEffect() {
    setTimeout(() => this.typeEffect(), this.typingSpeed);
  }

  typeEffect() {
    const currentWord = this.typedTexts[this.textIndex];

    if (this.isDeleting) {
      // Deleting effect
      this.currentText = currentWord.substring(0, this.charIndex--);
    } else {
      // Typing effect
      this.currentText = currentWord.substring(0, this.charIndex++);
    }

    let nextSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    // When word is fully typed, wait before deleting
    if (!this.isDeleting && this.charIndex === currentWord.length + 1) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeEffect();
      }, this.delayBeforeDelete);
      return;
    }

    // When word is fully deleted, move to next word
    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.typedTexts.length;
      setTimeout(() => this.typeEffect(), this.delayBeforeNext);
      return;
    }

    setTimeout(() => this.typeEffect(), nextSpeed);
  }

  sendMessage() {
    if (!this.name || !this.email || !this.subject || !this.message) {
      alert('Please fill in all required fields!');
      return;
    }

    // Your EmailJS Service and Template IDs
    emailjs.send('service_boe53ge', 'template_xtvrzwc', {
      from_name: `Name: ${this.name} Email: ${this.email}`,
      to_name: 'Mazharul Islam',
      message: this.message,
      reply_to: this.email
    }, 'dieAoyb-y7RQhN2jJ')
      .then((response: any) => {
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
      })
      .catch((error: any) => {
        console.error('Error sending email:', error);
        alert('Failed to send message.');
      });
  }

}
