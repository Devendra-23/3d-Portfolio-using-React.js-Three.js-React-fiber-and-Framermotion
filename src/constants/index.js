import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bath,
  priston,
  smart,
  trivia,
  mumbai,
  vsc,
  python,
  expensetracker,
  vgg,
  responsive,
  janah,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Visual Studio Code",
    icon: vsc,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Bachelor's in Computer Science",
    company_name: "University of Mumbai",
    icon: mumbai,
    iconBg: "#383E56",
    date: "August 2017 - August 2021",
    points: [
      "Fundamentals of computer science, including programming concepts, algorithms, data structures, and software engineering principles.",
      "Strong analytical and problem-solving skills, as well as the ability to adapt to new technologies and learn continuously in a rapidly evolving field.",
      "Bachelors Project: American Sign language (ASL) bi-lingual translator.",
    ],
  },
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Smart Consultant",
    icon: smart,
    iconBg: "#E6DEDD",
    date: "August 2019 - November 2019",
    points: [
      "Gained expertise in front-end web development technologies such as HTML, CSS, and JavaScript, with experience in building responsive and visually appealing user interfaces.",
      "Built a social networking website using JavaScript, HTML, CSS, PHP, SQL, Ajax, Jquery and JSON.",
      "Skilled in back-end web development using languages like Python, Node.js, or PHP, and experience in working with databases such as MySQL or MongoDB.",
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "Trivia Softwares",
    icon: trivia,
    iconBg: "#383E56",
    date: "Apr 2020 - Jul 2020",
    points: [
      "Utilized SQL to design and create a robust database schema for storing and managing student information, including tables for student details, courses, grades.",
      " Developed a Student Management System project with the use of Tkinter, Python Database Connection and Data Science.",
      "Gained knowledge of several Python 3. x related technologies, including Data Science, Tkinter for GUIs, and PDBC utilising SQLite3 (Extraction, Analysis and Visualization).",
    ],
  },
  {
    title: "MSc in Software Systems",
    company_name: "University of Bath",
    icon: bath,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Oct 2022",
    points: [
      "Understanding of networking concepts, including protocols, IP addressing, routing, and security measures.",
      "Exposure to artificial intelligence and machine learning concepts, including data analysis, pattern recognition, and algorithmic problem-solving.",
      "Masters Project: Transfer learning for classification of automobile models",
    ],
  },
  {
    title: "Hospitality Team Member",
    company_name: "Priston Mill",
    icon: priston,
    iconBg: "#383E56",
    date: "Mar 2022 - present",
    points: [
      "Worked in a large team to deliver positive guest experiences.",
      "Delivered efficient five-star service in a fast-paced, fine dining establishment, serving [85]+ guests per shift.",
      "Showed equanimity in stressful situations and managed time constraints.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Janah Cycle",
    icon: janah,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - present",
    points: [
      "Gained proficiency in Full Stack Web Development with React and Django, handling end-to-end solutions.",
      "Demonstrated DevOps skills by hosting the production branch on AWS EC2, ensuring seamless deployment.",
      "Managed Git tasks efficiently and contributed to codebase in React and Django for web development.",
      "Engaged in Agile sprint meetings, fostering collaboration within cross-functional teams.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Transfer Learning for Classification of automobile models",
    description:
      "Employing transfer learning techniques, I effectively classified automobile makes and models by leveraging CNN models, including VGG16, ResNet152, and AlexNet. As a novel contribution, I also developed VGG24, which expands upon the capabilities of VGG16.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: vgg,
    source_code_link:
      "https://github.com/stars/Devendra-23/lists/masters-project",
  },
  {
    name: "Expense-Tracker using React.js",
    description:
      "The Tracker is an expense-tracking tool that leverages React.js components, props, and dynamic data binding. It allows you to input costs, filter them by year, and manage them.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link:
      "https://github.com/Devendra-23/Expense-Tracker-using-React.js",
  },
  {
    name: "Responsive E-commerce Website",
    description:
      "Using HTML and CSS to automatically resize, conceal, shrink, or enlarge a website so that it looks excellent on all devices is known as responsive web design (desktops, tablets, and phones). This project involves creating a responsive e-commerce website with numerous HTML, CSS, and JavaScript properties.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: responsive,
    source_code_link: "https://github.com/Devendra-23/E-commerce-Shop",
  },
];

export { services, technologies, experiences, testimonials, projects };
