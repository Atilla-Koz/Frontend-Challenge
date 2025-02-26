import img from '../assets/hero/me.png';
import git from '../assets/hero/github.png';
import linkedin from '../assets/hero/LinkedIn.png';
import line from '../assets/hero/Line 11.png';
import ecom from '../assets/P.PNG/ecom.png';
import pizza from '../assets/P.PNG/pizza.png';
import portf from '../assets/P.PNG/portf.png';
import portf2 from '../assets/P.PNG/portf2.png';
import spor from '../assets/P.PNG/spor.png';
import fashion from '../assets/P.PNG/fashion.png';

export const data = {
  en: {
    modeData: {
      darkModeLabel: 'Dark Mode',
      translationText: 'Translate into Turkish',
    },
    headerData: {
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      hireMe: 'Hire Me',
      about: 'About Me',
    },
    contactFormData: {
      title: 'Contact Me',
      successMessage:
        'Thank you for reaching out! I will get back to you soon.',
      fields: [
        { name: 'fullName', label: 'Full Name', type: 'text', required: true },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'example@example.com',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          required: true,
          placeholder: '123-456-78-90',
        },
        {
          name: 'note',
          label: 'Note',
          type: 'textarea',
          required: false,
        },
      ],
      submitButton: 'Submit',
    },
    heroData: {
      name: 'Atilla Köz',
      role: 'Creative thinker Minimalism lover',
      description:
        "Hi, I'm Atilla. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
      hireMeButton: 'Hire Me',
      githubLink: 'https://github.com/Atilla-Koz',
      githubLabel: 'GitHub',
      linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      linkedinLabel: 'LinkedIn',
      cvLink: 'https://docs.google.com/document/d/1AOdGKgLxDlR3bpVKO4yO4SaCUEaHVF9ix4kqB6e2t88/edit?tab=t.0#heading=h.88hjc8sweuxg',
      cvLabel: 'Resume',
      heroImage: img,
      githubIcon: git,
      linkedinIcon: linkedin,
      lineIcon: line,
    },
    skillData: {
      title: 'Skills',
      skills: [
        {
          title: 'JavaScript',
          description:
            'Powerful and versatile programming language primarily used for web development.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          title: 'React.js',
          description:
            'A JavaScript library for building fast and interactive user interfaces.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Hooks',
          description:
            'React features that allow state and lifecycle management in functional components.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Context API',
          description:
            'A React structure for managing global application state effectively.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Redux',
          description:
            'A predictable state container for JavaScript apps, often used with React.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        },
        {
          title: 'Axios',
          description:
            'A library for making HTTP requests in JavaScript applications.',
          icon: 'https://www.vectorlogo.zone/logos/axios/axios-icon.svg',
        },
        {
          title: 'Jest',
          description:
            'A JavaScript testing framework designed to ensure correctness of code.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
        },
        {
          title: 'Cypress',
          description:
            'A powerful testing framework for end-to-end testing of web applications.',
          icon: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
        },
        {
          title: 'HTML',
          description: 'The standard markup language for creating web pages.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          title: 'CSS',
          description:
            'A style sheet language used to describe the presentation of a document written in HTML.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          title: 'Tailwind CSS',
          description:
            'A utility-first CSS framework for rapid UI development.',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        },
        {
          title: 'Reactstrap',
          description: 'A library for easily integrating Bootstrap with React.',
          icon: 'https://react-bootstrap.netlify.app/img/logo.svg',
        },
        {
          title: 'Java',
          description:
            'A high-level programming language used for building robust applications.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'OOP',
          description:
            'A programming paradigm based on the concept of objects.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Data Structures',
          description:
            'Fundamental ways of organizing and manipulating data efficiently.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Design Patterns',
          description: 'Proven solutions to common software design problems.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Maven',
          description:
            'A build automation tool used primarily for Java projects.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
        },
        {
          title: 'Spring Core',
          description:
            'A foundational module for building enterprise-level Java applications.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Boot',
          description:
            'A framework for building stand-alone, production-grade Spring applications.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Data JPA',
          description:
            'A library to simplify data access layer implementation in Spring apps.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Security',
          description:
            'A security framework for securing Spring-based Java applications.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'SQL',
          description:
            'A language for managing and querying relational databases.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          title: 'PostgreSQL',
          description: 'A powerful open-source relational database system.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          title: 'JUnit',
          description: 'A popular testing framework for Java applications.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Mockito',
          description: 'A Java-based library for mocking and testing.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Git',
          description:
            'A distributed version control system for tracking code changes.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          title: '.Net',
          description:
            'A framework for building Windows applications and services.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
      ],
    },
    profileData: {
      personalInfo: {
        title: "Personal Information",
        description: "Hi, I'm Atilla. I'm a full-stack developer with expertise in modern web technologies. I specialize in creating responsive and user-friendly applications using React.js and related technologies.",
        fullDescription: `Hello! I'm Atilla, a dedicated full stack developer with a passion for technology and continuous learning.

Focused Development:
During my Full Stack Bootcamp at Workintech, I've worked intensively with React, Spring Boot, Java, JavaScript, and modern frameworks. I've honed my problem-solving skills and quickly adapted to new technologies in a fast-paced environment.

Versatile Skills:
I have experience in both frontend and backend development, deepening my expertise in React and Java. My work with diverse frameworks has broadened my skills for various projects and platforms.

Dedicated Work Ethic:
I've demonstrated a strong work ethic, committing to full-time hours and prioritizing project-based learning. I embrace daily opportunities to learn and apply new knowledge to real-world challenges.

Vision for the Future:
I aim to establish myself as a leading figure in the tech industry, continuously growing and mastering new technologies to solve real-world problems. My goal is to make a meaningful impact by delivering creative and effective solutions.

In conclusion, I am a technology enthusiast dedicated to self-improvement and growth. With my bootcamp experience and diverse background, I am a versatile developer ready to contribute to future projects.`
      },
      experience: {
        title: "Experience",
        items: [
          {
            role: "Software Developer",
            company: "Workintech",
            period: "2023 - Present"
          },
          {
            role: "Software Developer",
            company: "Freelance",
            period: "2021 - Present"
          }
        ]
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Web Design and Coding",
            school: "Anadolu University",
            period: "2022 - 2024"
          },
          {
            degree: "International Trade and Finance",
            school: "Istanbul Kultur University",
            period: "2016 - 2021"
          },
          {
            degree: "Web Development Bootcamp",
            school: "Workintech",
            period: "2023"
          }
        ]
      },
      interests: {
        title: "Interests",
        items: ["Web Development", "UI/UX Design", "Mobile Development", "Cloud Computing", "Artificial Intelligence"]
      }
    },
    projectTitle: 'Projects',
    projectButtons: {
      seeMore: 'See More',
      close: 'Close',
      readMore: 'Read More',
    },
    projecktsData: [
      {
        title: 'Gym Management System',
        description:
          'A modern gym management system developed using React and Node.js. Features include membership management, class schedules, trainer appointments, and online payment systems. Modern UI designed with Material-UI and Tailwind CSS.',
        technologies: ['React', 'Node.js', 'Material-UI', 'MongoDB', 'Express'],
        image: spor,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://hysk.netlify.app/',
      },
      {
        title: 'FashionTV Career Portal',
        description:
          'A comprehensive career portal for FashionTV. Built with Next.js and TypeScript, featuring an intuitive job application system, resume builder, and applicant tracking. Includes features like real-time application status updates, interview scheduling, and automated email notifications. Enhanced with AI-powered resume parsing and job matching algorithms.',
        technologies: ['Next.js', 'TypeScript', 'Redux', 'AI/ML', 'Tailwind'],
        image: fashion,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://www.missandmrfashiontv.com/',
      },
      {
        title: 'E-Commerce Platform',
        description:
          'A modern e-commerce web application developed using React and Vite. Features include product catalog, shopping cart, user authentication, and responsive design. Built with Tailwind CSS and React Router.',
        technologies: ['React', 'Redux', 'Axios'],
        image: ecom,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://e-commerce-website-tau-seven.vercel.app/',
      },
      {
        title: 'Pizza Order App',
        description:
          'A web application for ordering pizza online. Built with React.js and modern web development techniques. Features include a user-friendly interface, form validation, and API integration.',
        technologies: ['React', 'Redux', 'Axios'],
        image: pizza,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://soft-gecko-f582bb.netlify.app/',
      },
      {
        title: 'Portfolio Website',
        description:
          'A personal portfolio website built with React. Features include dark mode, multi-language support, responsive design, and modern UI components. Styled with Tailwind CSS.',
        technologies: ['React', 'Redux', 'Axios'],
        image: portf,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://atillakoz.com',
      },
      {
        title: 'Workintech Project',
        description:
          'A customizable cookie consent plugin with minimal setup. Built with vanilla JavaScript and SCSS. Features include customizable themes and user preferences management.',
        technologies: ['React', 'Redux', 'Axios'],
        image: portf2,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://atillakoz.com',
      },
    ],
    footerData: {
      title: "Let's work together on your next product.",
      email: 'atillakoz@hotmail.com',
      links: [
        {
          label: 'Personal Blog',
          url: 'https://atillakoz.netlify.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/Atilla-Koz',
        },
        {
          label: 'Linkedin',
          url: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        },
      ],
    },
  },
  tr: {
    modeData: {
      darkModeLabel: 'Karanlık Mod',
      translationText: 'İngilizceye Çevir',
    },
    headerData: {
      skills: 'Yetenekler',
      projects: 'Projeler',
      contact: 'İletişim',
      hireMe: 'İşe Al',
      about: 'Hakkımda',
    },
    contactFormData: {
      title: 'İletişime Geçin',
      successMessage:
        'Mesajınız için teşekkür ederim! En kısa sürede size geri dönüş yapacağım.',
      fields: [
        { name: 'fullName', label: 'Ad Soyad', type: 'text', required: true },
        {
          name: 'email',
          label: 'E-posta',
          type: 'email',
          required: true,
          placeholder: 'ornek@ornek.com',
        },
        {
          name: 'phone',
          label: 'Telefon Numarası',
          type: 'tel',
          required: true,
          placeholder: '123-456-7890',
        },
        { name: 'note', label: 'Not', type: 'textarea', required: false },
      ],
      submitButton: 'Gönder',
    },
    heroData: {
      name: 'Atilla Köz',
      role: 'Yaratıcı düşünür Minimalizm aşığı',
      description:
        'Merhaba, ben Atilla. Bir full-stack geliştiriciyim. Eğer sağlam ve ölçeklenebilir ön uç ürünlerini harika kullanıcı deneyimleri ile oluşturmak için bir Geliştirici arıyorsanız, benimle el sıkışalım.',
      hireMeButton: 'Beni İşe Al',
      githubLink: 'https://github.com/Atilla-Koz',
      githubLabel: 'GitHub',
      linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      linkedinLabel: 'LinkedIn',
      cvLink: 'https://docs.google.com/document/d/1AOdGKgLxDlR3bpVKO4yO4SaCUEaHVF9ix4kqB6e2t88/edit?tab=t.0#heading=h.88hjc8sweuxg',
      cvLabel: 'CV',
      heroImage: img,
      githubIcon: git,
      linkedinIcon: linkedin,
      lineIcon: line,
    },
    skillData: {
      title: 'Yetenekler',
      skills: [
        {
          title: 'JavaScript',
          description: 'Web geliştirme için kullanılan güçlü ve çok yönlü bir programlama dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          title: 'React.js',
          description: 'Hızlı ve etkileşimli kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Hooks',
          description: 'Fonksiyonel bileşenlerde durum ve yaşam döngüsü yönetimini sağlayan React özellikleri.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Context API',
          description: 'Global uygulama durumunu etkili bir şekilde yönetmek için bir React yapısı.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Redux',
          description: 'JavaScript uygulamaları için öngörülebilir bir durum konteynerı, genellikle React ile kullanılır.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        },
        {
          title: 'Axios',
          description: 'JavaScript uygulamalarında HTTP istekleri yapmak için bir kütüphane.',
          icon: 'https://www.vectorlogo.zone/logos/axios/axios-icon.svg',
        },
        {
          title: 'Jest',
          description: 'Kodun doğruluğunu sağlamak için tasarlanmış bir JavaScript test çerçevesi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
        },
        {
          title: 'Cypress',
          description: 'Web uygulamalarının uçtan uca testi için güçlü bir test çerçevesi.',
          icon: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
        },
        {
          title: 'HTML',
          description: 'Web sayfaları oluşturmak için standart işaretleme dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          title: 'CSS',
          description: 'HTML ile yazılmış bir belgenin sunumunu tanımlamak için kullanılan stil sayfası dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          title: 'Tailwind CSS',
          description: 'Hızlı UI geliştirme için utility-first bir CSS çerçevesi.',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        },
        {
          title: 'Reactstrap',
          description: 'Bootstrap\'i React ile kolayca entegre etmek için bir kütüphane.',
          icon: 'https://react-bootstrap.netlify.app/img/logo.svg',
        },
        {
          title: 'Java',
          description: 'Sağlam uygulamalar oluşturmak için kullanılan üst düzey bir programlama dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'OOP',
          description: 'Nesneler kavramına dayalı bir programlama paradigması.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Data Structures',
          description: 'Veriyi etkili bir şekilde organize etme ve manipüle etmenin temel yolları.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Design Patterns',
          description: 'Yaygın yazılım tasarım problemlerine kanıtlanmış çözümler.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Maven',
          description: 'Öncelikle Java projeleri için kullanılan bir derleme otomasyon aracı.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
        },
        {
          title: 'Spring Core',
          description: 'Kurumsal düzeyde Java uygulamaları oluşturmak için temel bir modül.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Boot',
          description: 'Bağımsız, üretim düzeyinde Spring uygulamaları oluşturmak için bir çerçeve.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Data JPA',
          description: 'Spring uygulamalarında veri erişim katmanı uygulamasını basitleştiren bir kütüphane.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Security',
          description: 'Spring tabanlı Java uygulamalarını güvenli hale getirmek için bir güvenlik çerçevesi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'SQL',
          description: 'İlişkisel veritabanlarını yönetmek ve sorgulamak için bir dil.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          title: 'PostgreSQL',
          description: 'Güçlü bir açık kaynaklı ilişkisel veritabanı sistemi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          title: 'JUnit',
          description: 'Java uygulamaları için popüler bir test çerçevesi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Mockito',
          description: 'Java tabanlı bir mock ve test kütüphanesi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Git',
          description: 'Kod değişikliklerini takip etmek için dağıtık bir versiyon kontrol sistemi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          title: '.Net',
          description: 'Windows uygulamaları ve servisleri oluşturmak için bir çerçeve.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
      ],
    },
    profileData: {
      personalInfo: {
        title: "Kişisel Bilgiler",
        description: "Merhaba, ben Atilla. Modern web teknolojilerinde uzmanlaşmış bir full-stack geliştiriciyim. React.js ve ilgili teknolojileri kullanarak duyarlı ve kullanıcı dostu uygulamalar oluşturma konusunda uzmanım.",
        fullDescription: `Merhaba! Ben Atilla, teknolojiye ve sürekli öğrenmeye tutkuyla bağlı bir full stack geliştiriciyim.

Odaklı Gelişim:
Workintech'teki Full Stack Bootcamp sürecimde React, Spring Boot, Java, JavaScript ve modern framework'ler ile yoğun bir şekilde çalıştım. Hızlı tempolu bir ortamda problem çözme becerilerimi geliştirdim ve yeni teknolojilere hızla adapte oldum.

Çok Yönlü Beceriler:
Hem frontend hem de backend geliştirme alanlarında deneyim sahibiyim. React ve Java konularında derinlemesine bilgi edinirken, farklı framework'lerle çalışarak çeşitli projeler ve platformlar için becerilerimi genişlettim.

Adanmış Çalışma Disiplini:
Tam zamanlı bir şekilde çalışarak ve proje odaklı öğrenmeyi önceliklendirerek güçlü bir çalışma disiplini sergiledim. Günlük olarak yeni şeyler öğrenme ve bunları gerçek dünyadaki problemlere uygulama fırsatlarını memnuniyetle benimsedim.

Gelecek Vizyonu:
Kendimi teknoloji sektöründe öne çıkan bir figür olarak konumlandırmayı hedefliyorum. Sürekli gelişerek ve yeni teknolojileri öğrenerek gerçek dünyadaki sorunlara etkili çözümler üretmeyi amaçlıyorum. Hedefim, yaratıcı ve etkili çözümler sunarak anlamlı bir etki yaratmak.

Sonuç olarak, teknoloji tutkunu bir geliştirici olarak kendimi sürekli geliştirmeye ve büyümeye adadım. Bootcamp deneyimim ve çeşitli geçmişimle, gelecekteki projelere katkıda bulunmaya hazır, çok yönlü bir geliştiriciyim.`
      },
      experience: {
        title: "Deneyim",
        items: [
          {
            role: "Yazılım Geliştirici",
            company: "Workintech",
            period: "2023 - Günümüz"
          },
          {
            role: "Yazılım Geliştirici",
            company: "Serbest",
            period: "2021 - Günümüz"
          }
        ]
      },
      education: {
        title: "Eğitim",
        items: [
          {
            degree: "Web Tasarımı ve Kodlama",
            school: "Anadolu Üniversitesi",
            period: "2022 - 2024"
          },
          {
            degree: "Uluslararası Ticaret ve Finans",
            school: "İstanbul Kültür Üniversitesi",
            period: "2016 - 2021"
          },
          {
            degree: "Web Geliştirme Bootcamp",
            school: "Workintech",
            period: "2023"
          }
        ]
      },
      interests: {
        title: "İlgi Alanları",
        items: ["Web Geliştirme", "UI/UX Tasarım", "Mobil Geliştirme", "Bulut Bilişim", "Yapay Zeka"]
      }
    },
    projectTitle: 'Projelerim',
    projectButtons: {
      seeMore: 'Daha Fazla Gör',
      close: 'Kapat',
      readMore: 'Devamını Oku',
    },
    projecktsData: [
      {
        title: 'Spor Salonu Yönetim Sistemi',
        description:
          'Modern bir spor salonu yönetim sistemi. React ve Node.js kullanılarak geliştirildi. Üyelik yönetimi, ders programları, antrenör randevuları ve online ödeme sistemleri entegre edildi. Material-UI ve Tailwind CSS ile modern bir arayüz tasarlandı.',
        technologies: ['React', 'Node.js', 'Material-UI', 'MongoDB', 'Express'],
        image: spor,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://hysk.netlify.app/',
      },
      {
        title: 'FashionTV Kariyer Portalı',
        description:
          'FashionTV için geliştirilmiş kapsamlı bir kariyer portalı. Next.js ve TypeScript kullanılarak oluşturuldu. Sezgisel iş başvuru sistemi, özgeçmiş oluşturucu ve aday takip sistemi içeriyor. Gerçek zamanlı başvuru durumu güncellemeleri, mülakat planlama ve otomatik e-posta bildirimleri gibi özellikler barındırıyor. Yapay zeka destekli özgeçmiş analizi ve iş eşleştirme algoritmaları ile güçlendirildi.',
        technologies: ['Next.js', 'TypeScript', 'Redux', 'AI/ML', 'Tailwind'],
        image: fashion,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://www.missandmrfashiontv.com/',
      },
      {
        title: 'E-Ticaret',
        description:
          'Bu proje, React ve Vite kullanılarak modern bir e-ticaret web sitesi oluşturmak için geliştirilmiştir. Tailwind CSS ile hızlı ve özelleştirilebilir tasarımlar oluşturulmuş, React Router ile uygulama içinde yönlendirme sağlanmıştır.',
        technologies: ['React', 'Redux', 'Axios'],
        image: ecom,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://e-commerce-website-tau-seven.vercel.app/',
      },
      {
        title: 'Pizza Sipariş Uygulaması',
        description:
          'Bu proje, kullanıcıların pizza siparişi verebileceği bir web uygulamasıdır. React.js ve modern web geliştirme teknikleri kullanılarak geliştirilmiştir. Kullanıcı dostu bir tasarımla, form doğrulaması ve API entegrasyonu özellikleri sunar.',
        technologies: ['React', 'Redux', 'Axios'],
        image: pizza,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://soft-gecko-f582bb.netlify.app/',
      },
      {
        title: 'Portföy',
        description:
          'Bu proje, bir kişisel portföy web sitesi oluşturmak için geliştirilmiş bir React uygulamasıdır. Kullanıcının yeteneklerini, projelerini ve kişisel bilgilerini sergiler. Çok dilli destek sunar, React ve Tailwind CSS ile oluşturulmuştur.',
        technologies: ['React', 'Redux', 'Axios'],
        image: portf,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://atillakoz.com',
      },
      {
        title: 'Workintech',
        description:
          'Basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Kullanıcılarınızın kabul etmek veya reddetmek istediği çerezleri seçmelerine izin verir. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur.',
        technologies: ['React', 'Redux', 'Axios'],
        image: portf2,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        projectLink: 'https://atillakoz.com',
      },
    ],
    footerData: {
      title: 'Bir sonraki ürününüzde birlikte çalışalım.',
      email: 'atillakoz@hotmail.com',
      links: [
        {
          label: 'Kişisel Blog',
          url: 'https://atillakoz.netlify.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/Atilla-Koz',
        },
        {
          label: 'Linkedin',
          url: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
        },
      ],
    },
  },
};
