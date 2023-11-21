import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Kidus Yohannes", // shown in the header
  description:
    "My protofolio",
  image: "/images/screenshots/screenshot01.png",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
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
    title: "I'm a passionate full-stack developer working from Addis Ababa,Ethiopia.",
    description: [
      "Highly skilled and motivated Software Engineer with 2 of experience in designing, developing, and implementing innovative software solutions. ",
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
      title: "Spotify Connected App",
      image: "/images/projects/project01.webp",
      summary:
        "Build a Spotify Connected App Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      tags: ["React"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
    {
      title: "Weather Forecast App",
      image: "/images/projects/project02.png",
      summary:
        "Create a weather forecast web application that allows users to check the weather for different locations. The project will involve using APIs, front-end technologies like React, and integrating with a weather data provider.",
      tags: ["React", "API Integration", "Weather"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
    {
      title: "E-commerce Website",
      image: "/images/projects/project03.png",
      summary:
        "Develop a fully functional e-commerce website where users can browse products, add them to a cart, and make purchases. Technologies used will include React for the front end, Node.js for the back end, and MongoDB for the database.",
      tags: ["React", "Node.js", "E-commerce"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
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
}
