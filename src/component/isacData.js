import childIcon from '../image/child.jpg'
import teenagerIcon from '../image/teenager.jpg'
import youngIcon from '../image/young.jpg'
import adultIcon from '../image/adult.jpg'
import oldIcon from '../image/old.jpg'
// import adultIcon1 from '../image/adult1.jpg'
//import oldIcon1 from '../image/old1.jpg'

const isacData = {
  name: "Poziționare Comportamentală Contextuală™",
  // name2: "Richard Tea.",
  //name3: "Alexa Johnson",
  //role: "",
  // ptext: "Creative Designer & Developer located in London.",
  socialLinks: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/14PuXYiFJw2/?mibextid=wwXIfr",
      className: "social_facebook",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/isacconsult?igsh=a3VpeW5vMjU3ZGF4",
      className: "social_instagram",
    },  
    {
      name: "youtube",
      url: "https://youtube.com/@isacconsult?si=2iKk0PDsQNNQ3Et4",
      className: "social_youtube",
    },
    /*
    {
      name: "googleplus",
      url: "http://www.googleplus.com",
      className: "social_googleplus",
    },
    {
      name: "pinterest",
      url: "http://www.pinterest.com",
      className: "social_pinterest",
    },
    */

  ],
  aboutme: "POVESTEA (AUTORITATE, NU EMOȚIE)",
  aboutdetails:
    "ISAC nu a apărut din teorie. A apărut dintr-un orfelinat, unde citirea comportamentului și poziționarea corectă erau necesare ca să supraviețuiești. Strategia nu a fost o alegere. A fost o necesitate. Această competență formată în realitate dură a fost ulterior structurată, validată și rafinată prin studiu și formare formală (știință). Educația a adus limbaj, rigoare și claritate pentru ceea ce practica deja demonstra. De aici s-a născut ISAC: o formă de consultanță comportamentală orientată spre acțiune eficientă în relații reale.",
  service: [
    {
      id: 1,
      iconName: childIcon,
      serviceTitle: "Copii",
      sDetails: "Situatie: copilul testează limitele.",
      sDetails1: 'ISAC: ajustezi reactia adultului → limită clară, consecventă, fără escaladare.',  
      sDetails2: 'Rezultat: comportamentul se stabilizeaza.',
    },
    {
      id: 2,
      iconName: teenagerIcon,
      serviceTitle: "Adolescenți",
      sDetails: "Situatie: contestare constantă.",
      sDetails1: 'ISAC: schimbi pozitia → mai putină confruntare, mai multa structura.',  
      sDetails2: 'Rezultat: conflictul scade, cooperarea creste.',
    },
    {
      id: 3,
      iconName: youngIcon,
      serviceTitle: "Tineri",
      sDetails: "Situatie: evitarea responsabilitătii. ",
      sDetails1: 'ISAC: clarifici asteptările si retragi sustinerea neproductiva.',  
      sDetails2: 'Rezultat: asumare sau delimitare clară.',
    },
    {
      id: 4,
      iconName: adultIcon,
      serviceTitle: "Adulți",
      sDetails: "Situatie: control, pasiv-agresiv, manipulare.  ",
      sDetails1: 'ISAC: modifici reactia ta → iesi din jocul lor. ',  
      sDetails2: 'Rezultat: dinamica de putere se schimba.',
    },
    {
      id: 5,
      iconName: oldIcon,
      serviceTitle: "Persoane în vârstă",
      sDetails:  "Situatie: rigiditate, rezistentă. ",
      sDetails1: 'ISAC: pozitionare calma, ferma, fara confruntare inutila. ',  
      sDetails2: 'Rezultat: relatie functionalã, cu limite clare.',
    },
  ],
  contact: [
    {
      id: "1",
      title: "Contact Info",
      menuItems: [
        {
          id: 1,
          icon: "icon_pin_alt",
          text: "Cluj-Napoca, Romania, 400012",
        },
        {
          id: 2,
          icon: "icon_phone",
          text: "+40 724 319 099",
          href: 'tel:+40724 319 099'
        },
        {
          id: 3,
          icon: "icon_mail",
          text: "isacconsult@gmail.com",
        },
      ],
    },
  ],
  devloperBanner: [
    {
      id: 1,
      subtile: "Front-End Developer",
      title: "Talk is cheap. \n Show me the code",
      discription:
        "I design and code beautifully simple things,\n and I love what I do.",
    },
  ],
  devAbout: [
    {
      id: 1,
      smalltitle: "Introduce",
      aHead: "Passion \n Heart & Soul",
      aHeadTwo: "Every great design begin with an even better story",
      adiscription:
        "Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.",
    },
  ],
  aboutSkill: [
    {
      id: 1,
      workName: "Design",
      text: "Create digital products with unique idea",
      complateProject: "20 Projects",
      icon: "icon-tools",
    },
    {
      id: 2,
      workName: "front-End",
      text: "My coding structure is clean and smooth",
      complateProject: "165 Projects",
      icon: "icon-genius",
    },
    {
      id: 3,
      workName: "SEO",
      text: "Boost your business with SEO optimize.",
      complateProject: "5 Projects",
      icon: "icon-linegraph",
    },
  ],
  awards: [
    {
      id: 1,
      image: "logo1.png",
      ctile: "Site of the year 2020",
      date: "April 2020",
      description: "For most favorited design voted by NY City Style customers",
      url: "http://www.pinterest.com",
      linktext: "view More",
    },
    {
      id: 2,
      image: "logo2.png",
      ctile: "Theme of the day 2021",
      date: "March 2021",
      description: "For most favorited design voted by NY City Style customers",
      url: "http://www.pinterest.com",
      linktext: "view More",
    },
    {
      id: 3,
      image: "logo2.png",
      ctile: "Best design awwards",
      date: "March 2021",
      description: "For most favorited design voted by NY City Style customers",
      url: "http://www.pinterest.com",
      linktext: "view More",
    },
  ],
  contacttitle: "Contact Form",
};

export default isacData;
