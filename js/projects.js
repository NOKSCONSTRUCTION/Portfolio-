const projectsPanel = document.querySelector(".project-panel");
const left = document.querySelector(".left-scroll");
const right = document.querySelector(".right-scroll");
const progress = document.querySelector(".progress ");

const projectImages = [
  {
    image: "../project-images/a1.jpg",
    category: "Planning",
  },
  {
    image: "../project-images/a2.jpg",
    category: "building",
  },
  {
    image: "../project-images/a3.jpg",
    category: "building",
  },
  {
    image: "../project-images/a4.jpg",
    category: "building",
  },
  {
    image: "../project-images/a5.jpg",
    category: "building",
  },
  {
    image: "../project-images/a6.jpg",
    category: "building",
  },
  {
    image: "../project-images/a7.jpg",
    category: "building",
  },
  {
    image: "../project-images/a8.jpg",
    category: "building",
  },
  {
    image: "../project-images/a9.jpg",
    category: "building",
  },
  {
    image: "../project-images/a10.jpg",
    category: "building",
  },
  {
    image: "../project-images/a11.jpg",
    category: "building",
  },
  {
    image: "../project-images/a12.jpg",
    category: "building",
  },
];

function createBars() {
  for (let i = 0; i < projectImages.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.width = `${100 / projectImages.length - 1}%`;
    progress.append(bar);
  }
}

createBars();

let countIndex = 0;
projectsPanel.style.backgroundImage = `url(${projectImages[countIndex].image})`;
const bars = document.querySelectorAll(".bar");

bars[0].style.opacity = "1";

function clearOpacity() {
  bars.forEach((bar) => {
    bar.style.opacity = "0.5";
  });
}

left.addEventListener("click", () => {
  countIndex--;
  if (countIndex < 0) countIndex = projectImages.length - 1;
  projectsPanel.style.backgroundImage = `url(${projectImages[countIndex].image})`;

  clearOpacity();
  bars[countIndex].style.opacity = "1";
});

right.addEventListener("click", () => {
  countIndex++;
  if (countIndex > projectImages.length - 1) countIndex = 0;
  projectsPanel.style.backgroundImage = `url(${projectImages[countIndex].image})`;

  clearOpacity();
  bars[countIndex].style.opacity = "1";
});
