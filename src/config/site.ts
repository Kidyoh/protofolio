import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Kidus Yohannes",
  description:
    "My protofolio",
  image: "/images/screenshots/screenshot01.png",
  links: {
 
    mail: "kidyoh789@gmail.com",
    linkedin: "https://linkedin.com/in/kidus-yohannes-568a31207",
    github: "https://github.com/kidyoh",
    twitter: "https://twitter.com/Kidusyoh",
    instagram: "https://www.instagram.com/prince_pluviophile",
    codepen: "https://codepen.io/Kidus-Yohannes",
  },
  header: {
    logo: "/images/kidus.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Courses",
        href: "/courses",
      },
      {
        title: "Useful tools",
        href: "/tools",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [
        { text: "Hey there. I'm " },
        { text: "Kidus Yohannes", highlighted: true },
        { text: "." },
      ],
      2: [{ text: "A Software Engineer" }],
    },
    subtitle:
      "I'm a passionate full-stack developer working from Addis Ababa, Ethiopia. I love building web applications and learning new technologies.",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "/#projects",
      },
    ],
  },
  about: {
    avatar: "/images/5Y9A0835.jpg",
    title: "Lemme Tell You About Myself",
    description: [
      "Highly skilled and motivated Software Engineer with 2 years of experience in designing, developing, and implementing innovative software solutions. ",
      "Adept at collaborating with cross-functional teams to drive project success. Proven expertise in full-stack development, including front-end and back-end technologies.",
      " Passionate about staying current with emerging technologies and applying them to solve complex problems. Known for delivering high-quality, scalable, and maintainable code within demanding timelines. Excellent problem-solving and communication skills with a commitment to ongoing learning and professional development."
    ]
    },
  experience: [
    {
      title: " Intern Software Engineer",
      company: "Shega Media and Technology PLC",
      link: "https://www.shega.co",
      location: "Ethiopia",
      startDate: "June 2023",
      endDate: "Present",
      description: [
        "Actively participating in ongoing learning initiatives to stay updated with the latest technologies and industry trends. Embracing a growth mindset to enhance my skills in software development.",
        "Applying critical thinking and problem-solving skills to address challenges in the development process. Contributing creative solutions to ensure the efficiency and effectiveness of software solutions.",
        "Engaging in collaborative coding and contributing to the team's codebase. Working closely with senior engineers to understand best practices and gain insights into software architecture.",
        "Participating in code reviews to ensure code quality and consistency. Collaborating with cross-functional teams to ensure the successful delivery of software solutions.",
        "Working on new technologies like React, Next.js, Node.js, Firebase, and more."
      ],
      tags: [
        "Software Development",
        "Web Applications",
        "Modern Technologies",
        "Cross-Functional Teams",
        "High-Quality Software",
        "Collaboration",
      ],
    },
    {
      title: "Freelance Software Engineer",
      company: "Freelance",
      link: "https://github.com/Kidyoh",
      location: "Addis Ababa",
      startDate: "Jun 2020",
      endDate: "Present",
      description: [
        "Developing and implementing new software solutions. Maintaining and improving the performance of existing software.",
        "Designing and updating software databases. Recommending improvements to existing software programs as necessary.",
        "Testing software to ensure responsiveness and efficiency. Writing and implementing efficient code.",
        "Determining operational practicality. Developing quality assurance procedures.",
        "Deploying software tools, processes, and metrics. Maintaining and upgrading existing systems.",
        "Training users. Working closely with other developers, UX designers, business and systems analysts.",
      ],
      tags: [
        "Software Development",
        "Web Applications",
        "Modern Technologies",
        "Cross-Functional Teams",
        "High-Quality Software",
        "Collaboration",
        
      ],
    }
  ],
  education: [
    {
      school: "Wollo University",
      link: "https://www.wu.edu.et/",
      degree: "Software Engineer's degree",
      fieldOfStudy: "Software Development",
      description:
       "I'm currently studying Software Engineering at Wollo University. I'm learning about software development, algorithms, data structures, and more.",
      startDate: "2019",
      endDate: "2024",
    },
    {
      school: "ALX AWS Cloud Practitioner Essentials",
      link: "https://alxethiopia.com/",
      degree: "Certification",
      startDate: "2024",
    },
    {
      school: "Digital Journalism",
      link: "https://reutersdigitaljournalism.com/?l=en",
      degree: "Certification",
      startDate: "2024",
    },
  ],
  projects: [
    {
      title: "Ethiopian Calander with Date Convertor",
      image: "/images/projects/project1.png",
      summary:
        "A simple web application that allows users to convert dates from the Ethiopian calendar to the Gregorian calendar and vice versa. and that shows the current ethiopian calander for upto 100 years, and also shows the current date. using EPOCH time and moment.js and Abushakir.js library",
      tags: ["React", "NPM"],
      description: [
        "Shows the current date in Ethiopian calander",
        "Converts Ethiopian calander to Gregorian calander",
        "Converts Gregorian calander to Ethiopian calander",
        "Shows Geez numbers instead of roman numbers",
        "Users can navigate through months and years"
      ],
      links: {
        website: "https://mfe-uat.shega.co/calendar",
        github: "https://www.github.com/kidyoh/ethiopian-calander",
        npm: "https://www.npmjs.com/package/abushakir",
      },
      featured: true,
    },
    {
      title: "Currency Convertor",
      image: "/images/projects/project2.png",
      summary:
      "A simple web application that allows users to convert currencies from one to another. using API from currency convertor API",
      tags: ["React", "API Integration"],
      description: [
        "Converts currencies from one to another",
        "Shows the current exchange rate"
   ],
      links: {
        website: "https://mfe-uat.shega.co/currency",
        github: "https://www.github.com/kidyoh/currency-convertor",
      },
      featured: true,
    },
    {
      title: "Crypto Currency Tracker",
      image: "/images/projects/project3.png",
      summary:"A simple web application that allows users to track crypto currencies. using API from CoinGecko",
 tags: ["React", "Node.js", "Crypto Currency API"],
      description: [
        "Shows the current price of crypto currencies",
        "Shows the percentage change of crypto currencies",
        "Shows the market cap of crypto currencies",
        "Shows the volume of crypto currencies",
        "Shows the total supply of crypto currencies",
        "Shows the market rank of crypto currencies",
        "Shows the detail of each crypto currencies"
 ],
      links: {
        website: "https://mfe-uat.shega.co/crypto",
        github: "https://www.github.com/kidyoh/crypto-tracker",
      },
      featured: true,
    },
    {
      title: "Internet Speed Tester",
      image: "/images/projects/project4.png",
      summary:"A simple web application that allows users to test their internet speed. using API from speedtest.net",
 tags: ["React", "Node.js", "Internet Speed API"],
      description: [
      "Shows the current download speed",
      "Shows the current upload speed",
      "Shows the current ping speed",
      "Shows the current jitter speed",
      "shows both upload and download speed in mbps and kbps"
 ],
      links: {
        website: "https://mfe-uat.shega.co/internetspeed",
        github: "https://www.github.com/kidyoh/internet-speed-tester",
      },
      featured: true,
    },
    {
      title: "Multiplayer Tic Tac Toe",
      image: "/images/projects/project5.png",
      summary:"A simple web application that allows users to play tic tac toe with their friends. using Firebase Firestore",
 tags: ["React", "Firebase", "Multiplayer"],
      description: [
      "Allows users to play tic tac toe with their friends",
      "Shows the current player",
      "Shows the winner of the game",
      "Multiplayer game"
 ],
      links: {
        website: "https://mfe-uat.shega.co/tic-tac",
        github: "https://www.github.com/kidyoh/tic-tac-toe",
      },
      featured: true,
    },
    
  ],
  contact: {
    title: "Get in touch",
    description:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    callToAction: {
      label: "Say hello",
      href: "mailto:kidyoh789@gmail.com",
    },
  },
  courses: [
    {
      title: "Master React developmenet",
      description:
        "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, best practices and way more",
      image: "/images/courses/course01.png",
      rate: 4.7,
      numberReviews: "1.2k",
      price: "$74.99",
      tags: ["27 lessons", "Intermediate", "4h70"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Advanced Python Programming",
      description:
        "Take your Python skills to the next level with advanced topics like decorators, generators, metaclasses, and more.",
      image: "/images/courses/course01.png",
      rate: 4.9,
      numberReviews: "850",
      price: "FREE",
      tags: ["15 lessons", "Advanced", "3h45"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Machine Learning Fundamentals",
      description:
        "Get started with machine learning and explore algorithms, data preprocessing, and model evaluation.",
      image: "/images/courses/course01.png",
      rate: 4.8,
      numberReviews: "1.5k",
      price: "FREE",
      tags: ["20 lessons", "Intermediate", "4h30"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Web Design and Development",
      description:
        "Learn the essentials of web design, HTML, CSS, and JavaScript to build interactive websites.",
      image: "/images/courses/course01.png",
      rate: 4.6,
      numberReviews: "1.8k",
      price: "$79.99",
      tags: ["22 lessons", "Beginner", "3h15"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Data Science Essentials",
      description:
        "Learn the fundamentals of data science, including data analysis, machine learning, and data visualization.",
      image: "/images/courses/course01.png",
      rate: 4.7,
      numberReviews: "1.1k",
      price: "FREE",
      tags: ["25 lessons", "Intermediate", "4h15"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "UX/UI Design Fundamentals",
      description:
        "Explore the basics of user experience (UX) and user interface (UI) design to create user-friendly digital products.",
      image: "/images/courses/course01.png",
      rate: 4.6,
      numberReviews: "950",
      price: "$69.99",
      tags: ["20 lessons", "Beginner", "3h30"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Java Programming for Beginners",
      description:
        "Start your journey into programming with Java. Learn syntax, object-oriented principles, and basic Java applications.",
      image: "/images/courses/course01.png",
      rate: 4.5,
      numberReviews: "800",
      price: "FREE",
      tags: ["15 lessons", "Beginner", "2h45"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Gain a foundational understanding of cybersecurity, including threat detection, encryption, and network security.",
      image: "/images/courses/course01.png",
      rate: 4.8,
      numberReviews: "1.2k",
      price: "$89.99",
      tags: ["22 lessons", "Intermediate", "4h10"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
  ],
  tools: [
    {
      title: "CSS Gradient Generator",
      description: "Generate CSS gradients visually.",
      image: "/images/courses/course01.png",
      tags: ["CSS", "Generator", "Gradient"],
      link: "https://cssgradient.io/",
    },
    {
      title: "Gradient Hunt",
      description: "Discover and collect beautiful gradients.",
      image: "/images/courses/course01.png",
      tags: ["CSS", "Generator", "Gradient"],
      link: "https://gradienthunt.com/",
    },
    {
      title: "Coolors",
      description: "Generate color palettes easily.",
      image: "/images/courses/course01.png",
      tags: ["Color", "Generator", "Palette"],
      link: "https://coolors.co/",
    },
    {
      title: "Font Awesome",
      description: "Library of free icons for web projects.",
      image: "/images/courses/course01.png",
      tags: ["Icons", "Library"],
      link: "https://fontawesome.com/",
    },
    {
      title: "Material Icons",
      description: "A collection of icons in Material Design style.",
      image: "/images/courses/course01.png",
      tags: ["Icons", "Material Design"],
      link: "https://material.io/resources/icons/",
    },
    {
      title: "Visual Studio Code",
      description: "A popular code editor for web development.",
      image: "/images/courses/course01.png",
      tags: ["Code Editor", "Development"],
      link: "https://code.visualstudio.com/",
    },
  ],

  services: [
    {
      title: "Web Development",
      description:
        "I develop websites and web applications using modern technologies like React, Next.js, Node.js, and more.",
      icon: "code",
    },
    {
      title: "Web Design",
      description:
        "I design websites and web applications using modern technologies like Figma, Adobe XD, and more.",
      icon: "paint-brush",
    },
    {
      title: "Consulting",
      description:
        "I consult with companies and startups on how to build and grow their online presence.",
      icon: "comments",
    },
    {
      title: "App Development",
      description:
        "I develop mobile applications for iOS and Android using React Native and Flutter.",
      icon: "mobile-alt",
    }
  ],
}
