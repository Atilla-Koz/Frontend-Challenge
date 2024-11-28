import img from '../assets/hero/me.png';
import git from '../assets/hero/github.png';
import linkedin from '../assets/hero/LinkedIn.png';
import line from '../assets/hero/Line 11.png';
import ecom from '../assets/P.PNG/ecom.png';
import pizza from '../assets/P.PNG/pizza.png';
import portf from '../assets/P.PNG/portf.png';
import portf2 from '../assets/P.PNG/portf2.png';
import val from '../assets/P.PNG/val.png';
import vam from '../assets/P.PNG/vam.png';

export const data = {
  en: {
    modeData: {
      darkModeLabel: 'Dark Mode',
      translationText: 'Translate into Turkish',
    },
    headerData: {
      skills: 'Skills',
      projects: 'Projects',
      hireMe: 'Hire me',
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
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // React logosu kullanılabilir
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
          icon: 'https://react-bootstrap.netlify.app/img/logo.svg', // React-Bootstrap logosu
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
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', // Java için kullanılabilir
        },
        {
          title: 'Data Structures',
          description:
            'Fundamental ways of organizing and manipulating data efficiently.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', // Genel Java logosu kullanılabilir
        },
        {
          title: 'Design Patterns',
          description: 'Proven solutions to common software design problems.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', // Java için aynı
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
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', // SQL için MySQL logosu kullanılabilir
        },
        {
          title: 'PostgreSQL',
          description: 'A powerful open-source relational database system.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          title: 'JUnit',
          description: 'A popular testing framework for Java applications.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', // JUnit için genel Java logosu
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
      title: 'Profile',
      details: [
        {
          label: 'Date of Birth',
          value: '20.10.1998',
        },
        {
          label: 'city of residence',
          value: 'Istanbul',
        },
        {
          label: 'Education status',
          value: 'Istanbul Kultur University',
        },
        {
          label: 'preffered role',
          value: 'Frontend',
        },
      ],
      aboutMe: {
        title: 'About Me',
        description: `Hello! I'm Atilla, a dedicated full stack developer with a passion for technology and continuous learning.

Focused Development:
During my Full Stack Bootcamp, I've worked intensively with React,Spring boot, Java, JavaScript, and modern frameworks. I've honed my problem-solving skills and quickly adapted to new technologies in a fast-paced environment.

Versatile Skills:
I have experience in both frontend and backend development, deepening my expertise in React and Java. My work with diverse frameworks has broadened my skills for various projects and platforms.

Dedicated Work Ethic:
I've demonstrated a strong work ethic, committing to full-time hours and prioritizing project-based learning. I embrace daily opportunities to learn and apply new knowledge to real-world challenges.

Game Development Experience:
Before full stack development, I gained experience in game programming with Unity, giving me a creative mindset and a unique perspective on problem-solving.

Vision for the Future:
I aim to establish myself as a leading figure in the tech industry, continuously growing and mastering new technologies to solve real-world problems. My goal is to make a meaningful impact by delivering creative and effective solutions.

In conclusion, I am a technology enthusiast dedicated to self-improvement and growth. With my bootcamp experience and game development background, I am a versatile developer ready to contribute to future projects.
`,
      },
      readMore: {
        expand: 'Read More',
        collapse: 'Close',
      },
    },
    projectTitle: 'Projects',
    projectButtons: {
      seeMore: 'See More',
      close: 'Close',
    },
    projecktsData: [
      {
        title: 'E-Commerce',
        description:
          'This project is a modern e-commerce web application developed using React and Vite. It integrates modern web development tools to deliver a user-friendly experience. Tailwind CSS was used for styling, React Router for navigation, and Swiper for creating modern slider components. The use of ESLint ensures the code quality adheres to the standards.',
        technologies: ['React', 'Redux', 'Axios'],
        image: ecom,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },

      {
        title: 'Pizza Order App',
        description:
          'This project is a web application for users to order pizza. It is developed using React.js and modern web development techniques. The app offers a user-friendly design with features like form validation and API integration.',
        technologies: ['React', 'Redux', 'Axios'],
        image: pizza,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        title: ' Portfolio',
        description:
          "This project is a React application for building a personal portfolio website. It showcases the user's skills, projects, and personal details. It supports multiple languages, built with React and Tailwind CSS. useLocalStorage hook stores language and dark mode preferences. It is initialized with Vite and uses ESLint for error checking.",
        technologies: ['React', 'Redux', 'Axios'],
        image: portf,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        title: 'Workintech',
        description:
          'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible',
        technologies: ['React', 'Redux', 'Axios'],
        image: portf2,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        title: 'Workintech',
        description:
          'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible',
        technologies: ['React', 'Redux', 'Axios'],
        image: val,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        title: 'Workintech',
        description:
          'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible',
        technologies: ['React', 'Redux', 'Axios'],
        image: vam,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
    ],
    footerData: {
      title: 'Let’s work together on your next product.',
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
      translationText: "Türkçe'ye Çevir",
    },
    headerData: {
      skills: 'Yetenekler',
      projects: 'Projelerim',
      hireMe: 'Beni İşe Al',
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
          description:
            'Web geliştirme için yaygın olarak kullanılan güçlü ve esnek bir programlama dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          title: 'React.js',
          description:
            'Hızlı ve etkileşimli kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Hooks',
          description:
            'React bileşenlerinde durum ve yaşam döngüsü yönetimi sağlayan özellikler.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Context API',
          description:
            'React ile uygulama genelinde durum yönetimini kolaylaştıran bir yapı.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          title: 'Redux',
          description:
            'JavaScript uygulamaları için tahmin edilebilir bir durum konteyneri.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        },
        {
          title: 'Axios',
          description:
            'JavaScript uygulamalarında HTTP istekleri yapmak için kullanılan bir kütüphane.',
          icon: 'https://www.vectorlogo.zone/logos/axios/axios-icon.svg',
        },
        {
          title: 'Jest',
          description:
            "Kodun doğruluğunu sağlamak için tasarlanmış bir JavaScript test framework'ü.",
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
        },
        {
          title: 'Cypress',
          description:
            'Web uygulamalarının uçtan uca test edilmesi için güçlü bir framework.',
          icon: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
        },
        {
          title: 'HTML',
          description:
            'Web sayfalarını oluşturmak için standart işaretleme dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          title: 'CSS',
          description:
            'HTML ile yazılmış belgelerin görsel sunumunu tanımlayan bir stil dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          title: 'Tailwind CSS',
          description:
            'Hızlı UI geliştirme için yardımcı sınıf tabanlı bir CSS framework.',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        },
        {
          title: 'Reactstrap',
          description:
            'React ile Bootstrap entegrasyonunu kolaylaştıran bir kütüphane.',
          icon: 'https://react-bootstrap.netlify.app/img/logo.svg',
        },
        {
          title: 'Java',
          description:
            'Sağlam uygulamalar oluşturmak için kullanılan yüksek seviyeli bir programlama dili.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'OOP',
          description: 'Nesne kavramına dayalı bir programlama paradigması.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Veri Yapıları',
          description:
            'Verilerin verimli bir şekilde düzenlenmesi ve işlenmesi için temel yöntemler.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Tasarım Desenleri',
          description:
            'Yaygın yazılım tasarım sorunlarına kanıtlanmış çözümler.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Maven',
          description:
            'Genellikle Java projeleri için kullanılan bir yapı otomasyon aracı.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
        },
        {
          title: 'Spring Core',
          description:
            'Kurumsal seviyedeki Java uygulamaları için temel bir modül.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Boot',
          description:
            'Tek başına, üretim kalitesinde Spring uygulamaları oluşturmak için bir framework.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Data JPA',
          description:
            'Spring uygulamalarında veri erişim katmanını basitleştiren bir kütüphane.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'Spring Security',
          description:
            "Spring tabanlı Java uygulamaları için bir güvenlik framework'ü.",
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'SQL',
          description:
            'İlişkisel veritabanlarını yönetmek ve sorgulamak için bir dil.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          title: 'PostgreSQL',
          description:
            'Güçlü ve açık kaynaklı bir ilişkisel veritabanı sistemi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          title: 'JUnit',
          description: "Java uygulamaları için popüler bir test framework'ü.",
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Mockito',
          description:
            'Mocking ve test işlemleri için Java tabanlı bir kütüphane.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'Git',
          description:
            'Kod değişikliklerini izlemek için dağıtık bir versiyon kontrol sistemi.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          title: '.Net',
          description:
            'Windows uygulamaları ve servisleri oluşturmak için bir framework.',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
      ],
    },
    profileData: {
      title: 'Profil',
      details: [
        {
          label: 'Doğum Tarihi',
          value: '20.10.1998',
        },
        {
          label: 'Yaşadığı Şehir',
          value: 'İstanbul',
        },
        {
          label: 'Eğitim Durumu',
          value: 'İstanbul Kültür Üniversitesi',
        },
        {
          label: 'Tercih Edilen Rol',
          value: 'Ön Uç',
        },
      ],
      aboutMe: {
        title: 'Hakkımda',
        description: `
        Merhaba! Ben Atilla, teknolojiye ve sürekli öğrenmeye tutku duyan bir full stack geliştiriciyim.

Odaklı Gelişim:
Full Stack Bootcamp sürecimde React, Spring Boot, Java, JavaScript ve modern framework'ler ile yoğun bir şekilde çalıştım. Hızlı tempolu bir ortamda problem çözme becerilerimi geliştirdim ve yeni teknolojilere hızla adapte oldum.

Çok Yönlü Beceriler:
Hem frontend hem de backend geliştirme alanlarında deneyim sahibiyim. React ve Java konularında derinlemesine bilgi edinirken, farklı framework'lerle çalışarak çeşitli projeler ve platformlar için becerilerimi genişlettim.

Adanmış Çalışma Disiplini:
Tam zamanlı bir şekilde çalışarak ve proje odaklı öğrenmeyi önceliklendirerek güçlü bir çalışma disiplini sergiledim. Günlük olarak yeni şeyler öğrenme ve bunları gerçek dünyadaki problemlere uygulama fırsatlarını memnuniyetle benimsedim.

Oyun Geliştirme Deneyimi:
Full stack geliştirme öncesinde, Unity ile oyun programlama deneyimi kazandım. Bu süreç, bana yaratıcı bir bakış açısı ve problem çözmede farklı bir perspektif kazandırdı.

Gelecek Vizyonu:
Kendimi teknoloji sektöründe öne çıkan bir figür olarak konumlandırmayı hedefliyorum. Sürekli gelişerek ve yeni teknolojileri öğrenerek gerçek dünyadaki sorunlara etkili çözümler üretmeyi amaçlıyorum. Hedefim, yaratıcı ve etkili çözümler sunarak anlamlı bir etki yaratmak.

Sonuç olarak, teknoloji tutkunu bir geliştirici olarak kendimi sürekli geliştirmeye ve büyümeye adadım. Bootcamp deneyimim ve oyun geliştirme geçmişimle, gelecekteki projelere katkıda bulunmaya hazır, çok yönlü bir geliştiriciyim.`,
      },
      readMore: {
        expand: 'Okumaya devam et',
        collapse: 'Kapat',
      },
    },
    projectTitle: 'Projelerim',
    projectButtons: {
      seeMore: 'Daha Fazla Gör',
      close: 'Kapat',
    },
    projecktsData: [
      {
        bigTitle: 'projelerim',
        title: 'E-Ticaret',
        description:
          'Bu proje, React ve Vite kullanılarak modern bir e-ticaret web sitesi oluşturmak için geliştirilmiştir. Tailwind CSS ile hızlı ve özelleştirilebilir tasarımlar oluşturulmuş, React Router ile uygulama içinde yönlendirme sağlanmıştır. Slider bileşenleri için Swiper kullanılmış ve kod kalitesi ESLint ile artırılmıştır. Proje, kullanıcı deneyimini ön planda tutarak modern web geliştirme standartlarına uygun olarak yapılandırılmıştır.',
        technologies: ['Reacts', 'Redux', 'Axios'],
        image: ecom,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },

      {
        title: 'Pizza Order App',
        description:
          'Bu proje, kullanıcıların pizza siparişi verebileceği bir web uygulamasıdır. React.js ve modern web geliştirme teknikleri kullanılarak geliştirilmiştir. Kullanıcı dostu bir tasarımla, form doğrulaması ve API entegrasyonu özellikleri sunar.',
        technologies: ['React', 'Redux', 'Axios'],
        image: pizza,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        title: ' Portfolio',
        description:
          "Bu proje, bir kişisel portföy web sitesi oluşturmak için geliştirilmiş bir React uygulamasıdır. Kullanıcının yeteneklerini, projelerini ve kişisel bilgilerini sergiler. Çok dilli destek sunar, React ve Tailwind CSS ile oluşturulmuştur. useLocalStorage hook'u ile dil ve dark mode tercihleri saklanır, Vite ile başlatılmış ve ESLint ile denetim yapılmıştır.",
        technologies: ['React', 'Redux', 'Axios'],
        image: portf,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        bigTitle: 'projelerim',
        title: 'Workintech',
        description:
          'Basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Kullanıcılarınızın kabul etmek veya reddetmek istediği çerezleri seçmelerine izin verir. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak mevcuttur. Git deposu, kod ve temalar üzerinde her türlü özelleştirmeye izin verir.',
        technologies: ['React', 'Redux', 'Axios'],
        image: portf2,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        bigTitle: 'projelerim',
        title: 'Workintech',
        description:
          'Basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Kullanıcılarınızın kabul etmek veya reddetmek istediği çerezleri seçmelerine izin verir. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak mevcuttur. Git deposu, kod ve temalar üzerinde her türlü özelleştirmeye izin verir.',
        technologies: ['React', 'Redux', 'Axios'],
        image: val,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
      },
      {
        bigTitle: 'projelerim',
        title: 'Workintech',
        description:
          'Basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Kullanıcılarınızın kabul etmek veya reddetmek istediği çerezleri seçmelerine izin verir. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak mevcuttur. Git deposu, kod ve temalar üzerinde her türlü özelleştirmeye izin verir.',
        technologies: ['React', 'Redux', 'Axios'],
        image: vam,
        githubLink: 'https://github.com/Atilla-Koz',
        linkedinLink: 'https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/',
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
