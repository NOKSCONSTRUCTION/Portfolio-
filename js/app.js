const services = document.querySelector(".services");
const menu = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");
const link = document.querySelectorAll(".nav a");
const servicesObject = [
  {
    title: "Foundations",
    image: "./images/a4.jpg",
    description:
      "Build your dreams on solid ground. Our foundation services ensure your structure stands the test of time, providing stability and security for years to come.",
  },
  {
    title: "Super Structure",
    image: "./images/super.webp",
    description:
      "Elevate your project with our super structure solutions. Designed for durability and strength, we create robust frameworks that support your vision.",
  },
  {
    title: "Tiling",
    image: "./images/a5.jpg",
    description:
      "Transform your spaces with exquisite tiling options. From elegant designs to functional layouts, we deliver craftsmanship that enhances any room.",
  },
  {
    title: "Roofing",
    image: "./images/a3.jpg",
    description:
      "Protect what matters most with our top-tier roofing services. We offer durable, weather-resistant solutions that keep your home safe and stylish.",
  },
  {
    title: "Ceiling",
    image: "./images/ceiling.jpg",
    description:
      "Elevate your interiors with stunning ceiling designs. From modern to classic, we create ceilings that add character and charm to every space.",
  },
  {
    title: "Plastering",
    image: "./images/a5.jpeg",
    description:
      "Achieve flawless finishes with our expert plastering services. We create smooth, durable surfaces that enhance the aesthetic of your walls and ceilings.",
  },
  {
    title: "Painting",
    image: "./images/painting.webp",
    description:
      "Bring color to your life with our professional painting services. Whether a refresh or a complete makeover, we deliver vibrant results that inspire.",
  },
  {
    title: "Electric",
    image: "./images/electric.jpg",
    description:
      "Illuminate your spaces safely and efficiently. Our electrical services ensure reliable power solutions tailored to meet your needs and enhance your lifestyle.",
  },
  {
    title: "Interior Design",
    image: "./images/int2.jpg",
    description:
      "Transform your vision into reality with our interior design expertise. We blend functionality with style, creating spaces that reflect your unique personality.",
  },
  {
    title: "Plumbing",
    image: "./images/plum.webp",
    description:
      "Keep your systems flowing smoothly with our expert plumbing services. We tackle everything from repairs to installations, ensuring your home runs efficiently.",
  },
];

for (let i = 0; i < servicesObject.length; i++) {
  const text = document.createElement("p");
  text.innerHTML = servicesObject[i].title;
  const item = document.createElement("div");
  item.style.backgroundImage = `url(${servicesObject[i].image})`;
  item.classList.add("service-item");
  item.append(text);
  services.append(item);
}

// menu

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menu.style.display = "none";
  nav.classList.toggle("show");
  document.body.classList.toggle("remove-scroll");
  document.body.classList.toggle("move-left");
});

document.querySelector(".fa-times").addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("show");
  document.body.classList.toggle("remove-scroll");
  document.body.classList.toggle("move-left");
  menu.style.display = "block";
});

link.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.classList.toggle("fa-times");
    menu.style.display = "block";
    document.body.classList.remove("remove-scroll");
    document.body.classList.toggle("move-left");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
