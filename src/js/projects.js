const techIconMap = {
  html5: "devicon-html5-plain",
  css3: "devicon-css3-plain",
  javascript: "devicon-javascript-plain",
  tailwindcss: "devicon-tailwindcss-plain",
  react: "devicon-react-original",
  typescript: "devicon-typescript-plain",
  vite: "devicon-vitejs-plain",
  node: "devicon-nodejs-plain-wordmark",
  firebase: "devicon-firebase-plain",
  php: "devicon-php-plain",
  mysql: "devicon-mysql-original",
  bootstrap: "devicon-bootstrap-plain",
  motion: null,
  styled: null,
};

// Array de projetos
const projects = [
  {
    id: 1,
    title: "Cardion Fitness App",
    description:
      "O app Cardion Fitness possui dois fluxos principais: <br> <br> 👉 <b>Personais:</b> podem criar treinos, avaliações e acompanhar o progresso dos alunos. <br> 👉 <b>Alunos:</b> além de acesso a treinos e avaliações, têm uma experiência gamificada com rankings, conquistas, desafios e um sistema de pontuação que valoriza cada avanço. <br> <br> ⚙️ Funcionalidades principais: <br> <ul class='text-neutral-400'><li>✔️ Gestão de usuários (CRUD e foto de perfil)</li><li>✔️ Gestão de treinos e avaliações (CRUD, progresso e acompanhamento)</li><li>✔️ Rankings, conquistas e desafios gamificados</li><li>✔️ Sistema de pontuação e notificações</li><li> ✔️ Modais interativos e integração com anúncios</li><li> ✔️ + de 30 funcionalidades no app <br> <br> Clique e confira o repositporio</li></ul>",
    date: "10 de junho de 2025",
    technologies: ["react", "javascript", "node", "firebase", "tailwindcss"],
    videoSrc: "./assets/imagens/tela-home-cardion.png",
    buttons: [
      {
        text: "Acessar repositório",
        link: "https://github.com/americorodrigues25/Cardion-Fitness",
      },
    ],
  },
  {
    id: 2,
    title: "Construtora Rodrigues",
    description:
      "Este é um site de uma construtora fictisia, para a criação optei por usar React JS devido à sua componetização, isso me permitiu separar todas as seções do site, o que facilita uma possivel a manutenção futura. </br> Utilizei pela primeira vez a biblioteca de ícones <strong> React Icons </strong>, que oferece uma vasta gama de ícones para as aplicações. Também explorei a biblioteca <strong> Swiper </strong> para criação de sliders.",
    date: "30 de agosto de 2024",
    technologies: [
      "html5",
      "css3",
      "javascript",
      "tailwindcss",
      "react",
      "typescript",
      "vite",
    ],
    videoSrc: "./assets/videos/video-demostracao-construtora.mp4",
    capaVideo: "./assets/imagens/construtora-notebook.png",
    buttons: [
      { text: "Acessar projeto", link: "https://construtora-rodrigues.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/Construtora-Rodrigues" },
    ],
  },
  {
    id: 3,
    title: "Cardápio Zé Burger",
    description:
      "Está foi uma aplicação desenvolvida para praticar manipulação do DOM, com o intuito de desenvolver mais minhas habilidades e aprimorar meus conhecimentos. </br> O cardápio possui funcionalidades como adicionar ou remover itens ao carrinho, calculo dinâmico do valor total, e possibilidade de enviar o pedido com as informações direto para o WhatsApp.",
    date: "24 de maio de 2024",
    technologies: ["html5", "css3", "javascript", "tailwindcss"],
    videoSrc: "./assets/videos/video-demonstracao-cardapio.mp4",
    capaVideo: "./assets/imagens/cardapio-notebook.png",
    buttons: [
      { text: "Acessar projeto", link: "https://cardapio-ze-burger.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/Cardapio-Ze-Burger" },
    ],
  },
  {
    id: 4,
    title: "Calculadora do Windows",
    description:
      "Este é um projeto que desenvolvi de uma calculadora clone do Windows, ela realiza todas as operações matematicas que estão no display. Foi um projeto exelente para aprimorar meus conhecimentos em JavaScript e implementar diversas funcionalidades. </br> <p class='text-neutral-400 text-sm'> Podemos destacar algumas: </p> <ul class='text-neutral-400 text-sm'> <li>✔ Manipulação de eventos </li> <li>✔ Funções </li> <li>✔ Math.sqrt() e Math.pow()</li> <li>✔ isNaN()</li> <li>✔ parseFloat()</li> <li>✔ split()</li> <li>✔ includes()</li> <li>✔ toString()</li></ul>",
    date: "25 de julho de 2024",
    technologies: ["html5", "css3", "javascript", "tailwindcss"],
    videoSrc: "./assets/videos/Video demonstrativo da calculadora.mp4",
    capaVideo: "./assets/imagens/calculadora-notebook.png",
    buttons: [
      { text: "Acessar projeto", link: "https://calculadora-windows-five.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/calculadora-windows" },
    ],
  },
  {
    id: 5,
    title: "Sistema A+",
    description:
      "Este é um projeto de sistema de cadastro. Neste sistema aplicamos as principais operações de banco de dados, conhecidas como CRUD.  que permitem cadastrar, consultar, alterar e deletar usuários e informações de clientes, artistas, dançarinos e professores conforme necessário. <br> Com isso, o sistema possibilitou para o cliente ter controle total de seus alunos, professores e dançarinos.",
    date: "25 de julho de 2024",
    technologies: ["html5", "css3", "javascript", "php", "mysql", "bootstrap"],
    videoSrc: "./assets/videos/video-demonstrativo-sistema-a+.mp4",
    capaVideo: "./assets/imagens/Página inicial sistema amais.png",
    buttons: [
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/Sistema-Amais" },
    ],
  },
  {
    id: 6,
    title: "Dev Movies",
    description:
      "Projeto que realizei para entender um pouco mais sobre consumo de APIs. Utilizei a API do MDB (The Movie Database) que nos acessar uma vasta base de dados de informações relacionadas a filmes, séries de TV, atores, diretores, entre outros. <br> O projeto exibe os 20 melhores filmes listados de acordo com o site da TMDB, também tem a opção de buscar por outros filmes e exibir mais detalhes sobre o filme: Orçamento, receita, duração e uma breve descrição do filme, além da imagem de capa correspodente de cada filme, seu nome e sua avaliação no site. <br> <br> Explorei também um pouco mais sobre rotas com React Router e hooks.",
    date: "15 de Outubro de 2024",
    technologies: [
      "html5",
      "css3",
      "javascript",
      "react",
      "vite",
      "tailwindcss",
    ],
    videoSrc: "./assets/videos/Video-Dev-Movies.mp4",
    capaVideo: "./assets/imagens/dev-movies-notebook.png",
    buttons: [
      { text: "Acessar projeto", link: "https://dev-movies-omega.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/Dev-Movies" },
    ],
  },
  {
    id: 7,
    title: "Sneakers",
    description:
      "Projeto de uma landing page de tênis da Nike, com um deseign moderno e animações em JavaScript.",
    date: "10 de Setembro de 2024",
    technologies: ["html5", "css3", "javascript", "tailwindcss"],
    videoSrc: "./assets/videos/video-sneakers.mp4",
    capaVideo: "./assets/imagens/sneakers-nike-notebook.png",
    buttons: [
      { text: "Acessar projeto", link: "https://nike-store-orcin.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/Nike-Store" },
    ],
  },
  {
    id: 8,
    title: "PulseFit",
    description:
      "Projeto de landing page de uma academia, com um layout moderno e responsivo em todos os tamanhos de tela.",
    date: "10 de Fevereiro de 2024",
    technologies: ["html5", "css3", "javascript"],
    videoSrc: "./assets/videos/PULSEFIT-.mp4",
    capaVideo: "./assets/imagens/pulsefit.png",
    buttons: [
      { text: "Acessar projeto", link: "https://pulse-fit-academia.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/PulseFit-Academia" },
    ],
  },
  {
    id: 9,
    title: "Clone Spotify",
    description:
      "Projeto clone do spotify, desenvolvido durante uma imersão ao Front-End com a Alura <br> Este projeto foi uma excelente oportunidade para aprofundar meu conhecimento em CSS Grid e Flexbox, além de praticar a manipulação do DOM com JavaScript. Também tive minha primeira experiência com Node.js e JSON, onde criei uma API fake de artistas para ser consumida pelo DOM.",
    date: "10 de Abril de 2024",
    technologies: ["html5", "css3", "javascript"],
    videoSrc: "./assets/videos/Clone Spotify - Google Chrome 2024-06-20 21-31-04.mp4",
    capaVideo: "./assets/imagens/clonespotify.png",
    buttons: [
      { text: "Acessar projeto", link: "https://clone-spotify-lime.vercel.app" },
      { text: "Acessar repositório", link: "https://github.com/americorodrigues25/Clone-Spotify" },
    ],
  },
];

// Função para abrir o modal
function openModal(projectId) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const project = projects.find((p) => p.id === projectId); // Encontra o projeto pelo id

  if (project) {
    // Gera o conteúdo do modal dinamicamente com base no projeto selecionado
    modalBody.innerHTML = `
            <div class="flex flex-col-reverse xl:flex-row justify-center gap-10 lg:gap-20">
                <div class="w-full xl:w-1/2">
                    ${
                      project.id === 1
                        ? `<img src="${project.videoSrc}" alt="${project.title}" class="w-full h-auto rounded-lg" />`
                        : `<video id="projectVideo" width="100%" height="auto" controls poster="${project.capaVideo}">
                        <source src="${project.videoSrc}" type="video/mp4">
                            Seu navegador não suporta o elemento de vídeo.
                            </video>`
                    }
                    <div class="mt-5 flex justify-center">
                        ${project.buttons
                          .map(
                            (button) =>
                              `<a href="${button.link}" target="_blank" class="mb-3 mr-3 bg-button-bg w-48 h-10 flex items-center justify-center text-neutral-100 font-semibold rounded-md dark:shadow-[inset_0px_-2px_0px_1px_#441bbf,inset_0px_0.5px_0px_1px_#441bbf] hover:border-[#441bbf] hover:bg-transparent shadow-[inset_0px_-2px_0px_1px_#441bbf] hover:text-text-custom group transition duration-300 ease-in-out">${button.text}</a>`
                          )
                          .join(" ")}
</div>
                </div>
                <div class="flex flex-col gap-3 w-full xl:w-1/2">
                    <h2 class="text-2xl text-text-custom font-bold tracking-wider">${
                      project.title
                    }</h2>
                    <p class="text-neutral-400 text-sm">${
                      project.description
                    }</p>
                    <h3 class="text-xl text-text-custom font-semibold tracking-wider">Tecnologias utilizadas:</h3>
                    <div class="text-2xl text-text-custom flex gap-3">
                        ${project.technologies
                          .map((tech) => {
                            const iconClass = techIconMap[tech.toLowerCase()];
                            return iconClass
                              ? `<i class="${iconClass}"></i>`
                              : "";
                          })
                          .join(" ")}
                    </div>
                    <div class="text-text-custom font-semibold text-sm">${
                      project.date
                    }</div>
                </div>
            </div>

        `;

    modal.classList.remove("hidden"); // Exibe o modal
    modal.classList.add("flex");
  }
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden"); // Oculta o modal
  modal.classList.remove("flex");
}

// Fechar modal ao clicar no botão de fechar
document.querySelector(".close-button").addEventListener("click", closeModal);

// Fechar modal ao clicar fora do conteúdo
const modal = document.getElementById("modal");
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Adicionando evento aos botões com data-project
document.querySelectorAll(".open-modal").forEach((button) => {
  button.addEventListener("click", function () {
    const projectId = parseInt(this.getAttribute("data-project")); // Obtém o valor do data-project
    openModal(projectId); // Chama a função openModal passando o id do projeto
  });
});
