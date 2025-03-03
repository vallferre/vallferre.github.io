// script.js
// Muestra el botón cuando se hace scroll hacia abajo
window.onscroll = function () {
  toggleScrollTopButton();
};

function toggleScrollTopButton() {
  const button = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Función para volver al inicio de la página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const translations = {
  es: {
      home: "Inicio",
      about: "Sobre mí",
      education: "Formación Académica",
      goals: "Objetivos",
      knowledge: "Conocimientos",
      contact: "¡Contáctame!",
      downloadCV: "Descargar CV",
      name: "Valentin Ferreira",
      profession: "Programador",
      aboutMeTitle: "Sobre mí",
      aboutMeText: "¡Hola! Soy Valentin Ferreira, tengo 19 años y soy un estudiante de Ingeniería en Informática con una gran pasión por la tecnología.",
      aboutMeText2: "Desde chico, siempre he sentido una profunda curiosidad por entender cómo funciona el mundo tecnológico y cómo puedo ser parte de él. Este interés me ha llevado a explorar diversas áreas de la informática, siempre con el objetivo de seguir aprendiendo y mejorando mis habilidades.",
			aboutMeText3: "La programación es una de mis mayores pasiones. Disfruto enfrentándome a nuevos desafíos y desarrollando soluciones creativas a través del código. Me interesa especialmente el desarrollo de software, la inteligencia artificial y la optimización de sistemas. Constantemente busco proyectos que me permitan aplicar mis conocimientos y aprender nuevas tecnologías, ya sea en el ámbito académico o en mis propias iniciativas personales.",
      educationTitle: "Formación Académica",
      educationText: "Actualmente estudio Ingeniería en Informática en la Universidad Argentina de la Empresa (UADE).",
      educationText2: "Actualmente estudio Ingeniería en Informática en la Universidad Argentina de la Empresa (UADE). A la fecha de hoy (26 de febrero del 2025) tengo 20 materias aprobadas sobre 52 y me encuentro pasando a 3er año.  Esta institución no solo me ha brindado una base sólida en tecnología y programación, sino que también me ha permitido conocer a personas con intereses similares, con quienes he compartido experiencias enriquecedoras tanto a nivel académico como personal.",
      objectivesTitle: "Objetivos",
      objectivesText: "Creo firmemente que el aprendizaje en tecnología nunca se detiene. Cada nuevo proyecto, cada línea de código y cada error solucionado representan una oportunidad para mejorar. Mi objetivo es seguir ampliando mis conocimientos y convertirme en un profesional capaz de desarrollar soluciones innovadoras que impacten positivamente en el mundo.",
      objectivesText2: "Siempre busco un equilibrio entre la teoría y la práctica, aplicando lo que aprendo en proyectos concretos.  Me motiva la idea de crear herramientas y plataformas que optimicen procesos, mejoren la accesibilidad y faciliten la vida de las personas a través de la tecnología.  Estoy convencido de que el esfuerzo y la dedicación son clave para seguir creciendo y alcanzar nuevas metas en este fascinante mundo de la informática.",
      knowledgeTitle: "Conocimientos",
      knowledgeText: "Conocimientos en mi área",
      repInfo: "Ver mi repositorio.",
      contactTitle: "Contáctame",
      contactText: "¡Puedes enviarme un mail a la siguiente dirección!",
  },
  en: {
      home: "Home",
      about: "About Me",
      education: "Academic Background",
      goals: "Goals",
      knowledge: "Knowledge",
      contact: "Contact Me!",
      downloadCV: "Download CV",
      name: "Valentin Ferreira",
      profession: "Programmer",
      aboutMeTitle: "About Me",
      aboutMeText: "Hi! I'm Valentin Ferreira, a 19-year-old Computer Engineering student with a great passion for technology.",
      aboutMeText2: "Since I was little, I've always felt a deep curiosity to understand how the technological world works and how I can be part of it. This interest has led me to explore broad areas of computer science, always with the goal of continuing to learn and improve my skills.",
			aboutMeText3: "Programming is one of my greatest passions. I enjoy taking on new challenges and developing creative solutions through code. I am particularly interested in software development, artificial intelligence, and system optimization. I am constantly looking for projects that allow me to apply my knowledge and learn new technologies, either in the academic field or in my own personal initiatives.",
      educationTitle: "Academic Background",
      educationText: "I'm currently studying Computer Engineering at Universidad Argentina de la Empresa (UADE).",
      educationText2: "I am currently studying Computer Engineering at the Universidad Argentina de la Empresa (UADE). As of today (February 26, 2025), I have passed 20 subjects out of 52 and I am moving on to my third year. This institution has not only provided me with a solid foundation in technology and programming, but has also allowed me to meet people with similar interests, with whom I have shared enriching experiences both academically and personally.",
      objectivesTitle: "Goals",
      objectivesText: "I firmly believe that learning in technology never stops. Every new proyecy, coding line and solved error represent an oportunity for growth. Mi main objective is to keep expanding my knowledge and become a professional capable of developing innovative solutions that positively impact on the world.",
      objectivesText2: "I always seek a balance between theory and practice, applying what I learn in specific projects. I am motivated by the idea of ​​creating tools and platforms that optimize processes, improve accessibility and make people's lives easier through technology. I am convinced that effort and dedication are key to continuing to grow and reach new goals in this fascinating world of computing.",
      knowledgeTitle: "Knowledge",
      knowledgeText: "Knowledge in my area",
      repInfo: "See my repository.",
      contactTitle: "Contact Me",
      contactText: "You can send me an email at the following address!",
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(element => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
          element.innerText = translations[lang][key];
      }
  });
}