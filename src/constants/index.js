const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
];

const logoIconsList = [
    {
        imgPath: "images/logos/company-logo-1.png",
    },
    {
        imgPath: "images/logos/company-logo-2.png",
    },
    {
        imgPath: "images/logos/company-logo-3.png",
    },
    {
        imgPath: "images/logos/company-logo-4.png",
    },
    {
        imgPath: "images/logos/company-logo-5.png",
    },
    {
        imgPath: "images/logos/company-logo-6.png",
    },
    {
        imgPath: "images/logos/company-logo-7.png",
    },
    {
        imgPath: "images/logos/company-logo-8.png",
    },
    {
        imgPath: "images/logos/company-logo-9.png",
    },
    {
        imgPath: "images/logos/company-logo-10.png",
    },
    {
        imgPath: "images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "images/seo.png",
        title: "Analytical Thinking",
        desc: "Ability to break down complex datasets, identify patterns, and draw insights that guide decisions.",
    },
    {
        imgPath: "images/chat.png",
        title: "Data Communication",
        desc: "Skilled at creating clear visualizations and reports that make data easy to understand.",
    },
    {
        imgPath: "images/time.png",
        title: "Business Insight",
        desc: "Understands how data connects to business goals, ensuring analysis drives practical impact and value.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "images/logos/python.svg",
    },
    {
        name: "SQL Developer",
        imgPath: "images/sql_icon.svg",
    },
    {
        name: "Excel Developer",
        imgPath: "images/excel_icon.png",
    },
    {
        name: "Tableau Developer",
        imgPath: "images/tableau_icon.png",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "models/sql_excel_tableau.glb",
        scale: 5,
        rotation: [0, -1.5708, 0],    },
    {
        name: "Interactive Developer",
        modelPath: "models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Greg brought strong analytical and customer-focused expertise, improving data accuracy and uncovering insights that directly influenced revenue growth.",
        /*imgPath: "images/exp1.png",
        logoPath: "images/logo4.jpg",*/
        title: "Customer Data & Marketing Analyst",
        date: "May 2025 - August 2025",
        responsibilities: [
            "Managed and maintained large customer datasets to ensure accuracy and reliability.",
            "Analyzed customer trends and provided insights that influenced pricing and marketing strategies.",
            "Communicated directly with clients to deliver tailored recommendations and strengthen relationships.",
        ],
    },
    {
        review:
            "Greg combined data-driven insights with strong collaboration skills to enhance store operations and sales performance.",
        imgPath: "images/exp2.png",
        logoPath: "images/logo2.png",
        title: "Sales Associate",
        date: "January 2023 - November 2023",
        responsibilities: [
            "Monitored sales and inventory trends to support timely product replenishment.",
            "Assisted in preparing reports that helped reduce stock issues and improve efficiency.",
            "Worked closely with teams to identify opportunities for improved product placement and promotions.",
        ],
    },
    {
        review:
            "Greg delivered excellent customer service in a fast-paced, high-volume restaurant, ensuring accuracy, efficiency, and positive guest experiences.",
        imgPath: "images/exp3.png",
        logoPath: "images/logo3.png",
        title: "Server",
        date: "June 2022 - December 2022",
        responsibilities: [
            "Provided attentive and accurate service to guests in a dynamic, team-oriented environment.",
            "Coordinated with staff and leveraged digital systems to maintain smooth and efficient operations.",
            "Promoted menu items and enhanced the dining experience through clear communication and hospitality.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/gregseo/",
        imgPath: "images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
