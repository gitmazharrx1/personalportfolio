import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import emailjs from 'emailjs-com';
declare var bootstrap: any;
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
  skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "Angular", icon: "fa fa-laptop" },
        { name: "HTML", icon: "fa fa-code" },
        { name: "CSS", icon: "fa fa-paint-brush" },
        { name: "Bootstrap", icon: "fa fa-cogs" },
        { name: "JavaScript", icon: "fa fa-laptop-code" },
        { name: "TypeScript", icon: "fa fa-cogs" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: ".NET Core", icon: "fa fa-server" },
        { name: "SignalR", icon: "fa fa-plug" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "SQL", icon: "fa fa-database" },
        { name: "PostgreSQL", icon: "fa fa-database" }
      ]
    },
    {
      category: "Reporting",
      skills: [
        { name: "RDLC Reporting", icon: "fa fa-file-alt" }
      ]
    },
    {
      category: "Version Control",
      skills: [
        { name: "GitLab", icon: "fab fa-gitlab" },
        { name: "GitHub", icon: "fab fa-github" }
      ]
    },
    {
      category: "Deployment",
      skills: [
        { name: "AWS", icon: "fa fa-cloud" }
      ]
    },
    {
      category: "Project Management",
      skills: [
        { name: "Jira", icon: "fab fa-jira" },
        { name: "GitLab Board", icon: "fab fa-gitlab" }
      ]
    },
    {
      category: "Concepts",
      skills: [
        { name: "OOP", icon: "fa fa-cogs" },
        { name: "Scrum/Agile", icon: "fa fa-cogs" }
      ]
    }
  ];
  portfolioItems = [
    {
      title: "Catalyzr",
      category: "Web Design & Development ",
      description: `<p><strong>Catalyzr</strong> is a platform designed to help both employees and companies make informed and data-driven career decisions. By offering personalized assessments, the platform provides insights into employees' strengths, areas for improvement, and best career paths that align with both their individual potential and the organization’s goals.</p>

<p><strong>For Employees:</strong> Catalyzr enables employees to take comprehensive assessments that evaluate their skills, competencies, and career aspirations. Based on the results, the platform generates customized career recommendations that can guide employees toward roles where they are most likely to succeed and grow. This empowers employees to make well-informed decisions about their professional development and long-term career trajectories.</p>

<p><strong>For HR Admins:</strong> HR administrators can access detailed employee profiles, view assessment results, and analyze skill gaps. The system provides a holistic view of each employee's potential, allowing HR teams to recommend specific career development programs and pathways tailored to individual needs. It also helps identify top talent within the organization, supporting strategic workforce planning and talent retention.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li>Comprehensive skill and career assessments</li>
  <li>Customized career path recommendations</li>
  <li>Skill gap analysis and reporting</li>
  <li>Strategic workforce planning and talent management</li>
  <li>Role-based access control for security</li>
  <li>Interactive dashboards with real-time insights</li>
  <li>Employee performance tracking and analytics</li>
  <li>Training and development program suggestions</li>
  <li>Customizable reports for HR teams</li>
  <li>Seamless integration with existing HR software</li>
</ul>

<p><strong>Impact:</strong> Catalyzr bridges the gap between personal development and organizational growth, ensuring that both employees and companies can thrive together. It fosters a culture of continuous learning and career progression, empowering organizations to invest in the right talent and providing employees with clear paths to success.</p>`
      ,
      image: "../assets/img/projectImages/cat1.png",
      sliderImages: [
        "../assets/img/projectImages/cat3.png",
        "../assets/img/projectImages/cat4.png",
        "../assets/img/projectImages/cat5.png",
        "../assets/img/projectImages/cat6.png",
        "../assets/img/projectImages/cat7.png",
        "../assets/img/projectImages/cat8.png",
      ],
      link: "https://catalyzr.info"
    },
    {
      title: "Lumens",
      category: "Web Design & Development ",
      description: `<p><strong>Lumens (Learning Management System)</strong> is a web-based platform designed to streamline the management of educational content, exams, quizzes, and user interaction. It provides an intuitive interface for both administrators and learners to interact with the system and track progress. The platform helps educators manage courses, administer tests, and engage students, while also allowing learners to access courses, take exams, and view their progress in real-time.</p>

<p><strong>For Educators:</strong> Lumens empowers instructors to create, manage, and deliver courses, quizzes, and exams. Educators can upload course materials, create different types of questions for assessments, and track student performance across various exams. They can also provide real-time feedback and facilitate discussions through forums and blogs, fostering an interactive learning environment.</p>

<p><strong>For Learners:</strong> Lumens offers a seamless learning experience for students. Learners can access a wide variety of courses, take exams and quizzes, and track their progress over time. They receive personalized feedback on their performance and have the ability to interact with instructors and peers through discussion forums, blogs, and course-related content.</p>

<p><strong>For Admins:</strong> Administrators have full control over the platform, including user management, course management, and content delivery. Admins can monitor course enrollment, manage user access, and generate reports on learner performance. The platform also provides insights into course completion rates, helping institutions make data-driven decisions about content delivery and course offerings.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li>Course management with multimedia content support</li>
  <li>Exam and quiz creation with multiple question types</li>
  <li>Real-time progress tracking and performance analytics</li>
  <li>Interactive discussion forums and blogs</li>
  <li>Automated grading and feedback system</li>
  <li>Role-based user management (Admins, Educators, Learners)</li>
  <li>Customizable reporting and data analytics for institutions</li>
  <li>Certificates and achievement badges for course completion</li>
  <li>Seamless integration with third-party tools and platforms</li>
  <li>Responsive design for access on desktop, tablet, and mobile</li>
</ul>

<p><strong>Impact:</strong> Lumens bridges the gap between traditional classroom learning and digital education, offering a comprehensive solution for managing online education. It enhances the learning experience for students by providing a centralized hub for all course-related activities, while also helping educators and administrators optimize their teaching methods and improve educational outcomes.</p>`
      ,
      image: "../assets/img/projectImages/lumens1.png",
      sliderImages: [
        "../assets/img/projectImages/lumens2.png",
        "../assets/img/projectImages/lumens3.png",
        "../assets/img/projectImages/lumens4.png",
        "../assets/img/projectImages/lumens5.png",
        "../assets/img/projectImages/lumens6.png",
        "../assets/img/projectImages/lumens7.png",
        "../assets/img/projectImages/lumens8.png",
        "../assets/img/projectImages/lumens9.png",
      ],
      link: "https://amaderacademy.com/"
    },
    {
      title: "Ghost Kitchen Bangladesh",
      category: "Web Design & Development ",
      description: `<p><strong>GKB (Ghost Kitchen Bangladesh)</strong> is a cloud kitchen platform designed to streamline the management of kitchen operations for food delivery services. It provides businesses with an efficient way to handle food production, inventory management, and food delivery logistics. The platform offers features to manage goods, track wastage, oversee delivery and transfer processes, handle returns, and generate detailed reports to optimize kitchen and business operations.</p>

<p><strong>For Kitchen Managers:</strong> GKB allows kitchen managers to efficiently track and manage the inventory of goods. Managers can log and monitor goods usage, waste, and delivery. The system provides real-time tracking of ingredients, ensuring that food production is aligned with stock levels. Managers can also monitor wastage trends to minimize losses and improve cost-effectiveness.</p>

<p><strong>For Delivery Teams:</strong> GKB helps streamline the process of transferring and delivering food. The platform allows delivery teams to track the status of food orders, manage deliveries, and ensure that the correct food is delivered to the right customer on time. The system also provides a clear overview of pending deliveries, helping to manage logistics efficiently.</p>

<p><strong>For Return Management:</strong> In case of returns, GKB allows businesses to easily manage and track returned food items. The system records the reasons for returns, handles refunds or replacements, and generates detailed reports on return patterns. This helps businesses understand common issues and take corrective actions to improve the delivery experience.</p>

<p><strong>For Reporting:</strong> GKB provides detailed reporting features that allow businesses to analyze various aspects of their operations, such as food production, inventory usage, wastage, delivery success rates, and return trends. These reports can help optimize kitchen operations, reduce wastage, improve inventory management, and enhance overall business performance.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li>Real-time inventory tracking and management</li>
  <li>Automated wastage monitoring and analytics</li>
  <li>Delivery tracking with order status updates</li>
  <li>Efficient transfer management between kitchen branches</li>
  <li>Return handling with refund and replacement processing</li>
  <li>Role-based access control for managers, staff, and delivery teams</li>
  <li>Customizable reporting on sales, inventory, and kitchen performance</li>
  <li>Seamless integration with POS and third-party delivery services</li>
  <li>Data-driven insights to optimize food production and minimize loss</li>
  <li>User-friendly dashboard for streamlined kitchen operations</li>
</ul>

<p><strong>Impact:</strong> GKB revolutionizes the cloud kitchen business by offering an all-in-one solution for managing goods, deliveries, returns, and reporting. It helps businesses optimize their resources, reduce waste, and improve customer satisfaction by ensuring timely and accurate food delivery, ultimately leading to greater profitability and operational efficiency.</p>`
      ,
      image: "../assets/img/projectImages/gkb1.png",
      sliderImages: [
      ],
      link: "http://18.140.197.45/gkb/dashboard"
    },
    {
      title: "Hydra Global",
      category: "Web Design",
      description: "<p><strong>HYDRA Global</strong> specializes in providing high-quality leads for businesses, with a particular focus on the MCA (Merchant Cash Advance) and Merchant Services Industries. With over 20 years of combined experience in lead generation, HYDRA Global's expert team knows exactly what financial industry clients are looking for in a lead. Our platform is dedicated to delivering top-notch, validated leads that help businesses grow and succeed.</p><p><strong>Leads for Your Business:</strong> HYDRA Global offers a comprehensive lead generation service that ensures your business receives high-quality, actionable leads. Our team works diligently to identify and provide leads that are not only relevant to your business but also pre-qualified to meet the specific criteria needed for your target market. We understand the challenges of finding quality leads, and our experience allows us to deliver the most effective solutions to our clients.</p><p><strong>Validated MCA Leads and Data:</strong> As the premiere lead and data provider in the MCA industry, HYDRA Global offers an on-demand platform that provides the only fully validated phone and email leads and data in the MCA sector. This platform ensures that every lead is genuine, ensuring better conversion rates and a higher return on investment. Our leads are rigorously validated to meet the highest standards, ensuring that your business is connecting with the right prospects.</p><p><strong>Impact:</strong> With HYDRA Global, you gain access to a reliable and efficient lead generation service that can significantly boost your business's success in the MCA and Merchant Services Industries. Our leads are carefully validated to provide only the most promising prospects, which helps you increase your sales, expand your customer base, and ultimately drive business growth.</p>",
      image: "../assets/img/projectImages/hydra1.png",
      sliderImages: [
        "../assets/img/projectImages/hydra2.png",
        "../assets/img/projectImages/hydra3.png",
        "../assets/img/projectImages/hydra4.png",
        "../assets/img/projectImages/hydra5.png",
        "../assets/img/projectImages/hydra6.png",
        "../assets/img/projectImages/hydra7.png",
        "../assets/img/projectImages/hydra8.png",
      ],
      link: "https://hydra-global.web.app/"
    }
  ];

  selectedProject: any = null;
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
  yearsDifference: number;
  /**
   *
   */
  constructor() {
    const startDate = new Date(2023, 1, 1); // 1st February 2023
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();

    // Convert milliseconds to years and round the result
    this.yearsDifference = Math.round(timeDiff / (1000 * 3600 * 24 * 365.25));
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
  openModal(item: any) {
    this.selectedProject = item;
    let modalElement = document.getElementById('portfolioModal');
    let modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
