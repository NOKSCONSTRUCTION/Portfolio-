const projectsPanel = document.querySelectorAll(".project-panel");
const left = document.querySelectorAll(".left-scroll");
const right = document.querySelectorAll(".right-scroll");
const progress = document.querySelectorAll(".progress");

const projectImages = [
  {
    image: "./project/h8.jpg",
    category: "Planning",
  },
  {
    image: "./project/a1.jpg",
    category: "Planning",
  },
  {
    image: "./project/a2.jpg",
    category: "building",
  },
  {
    image: "./project/a3.jpg",
    category: "building",
  },
  {
    image: "./project/a4.jpg",
    category: "building",
  },
  {
    image: "./project/a5.jpg",
    category: "building",
  },
  {
    image: "./project/h2.jpg",
    category: "building",
  },
  {
    image: "./project/a6.jpg",
    category: "building",
  },
  {
    image: "./project/a7.jpg",
    category: "building",
  },
  {
    image: "./project/a8.jpg",
    category: "building",
  },
  {
    image: "./project/a9.jpg",
    category: "building",
  },
  {
    image: "./project/a10.jpg",
    category: "building",
  },
  {
    image: "./project/a11.jpg",
    category: "building",
  },
  {
    image: "./project/a12.jpg",
    category: "building",
  },
];

const projectImagesTwo = [
  {
    image: "./project2/b1.jpg",
    category: "Planning",
  },
  {
    image: "./project2/b2.jpg",
    category: "Planning",
  },
  {
    image: "./project2/b3.jpg",
    category: "building",
  },
  {
    image: "./project2/b4.jpg",
    category: "building",
  },
  {
    image: "./project2/b5.jpg",
    category: "building",
  },
  {
    image: "./project2/b6.jpg",
    category: "building",
  },
  {
    image: "./project2/b7.jpg",
    category: "building",
  },
  {
    image: "./project2/b8.jpg",
    category: "building",
  },
  {
    image: "./project2/b9.jpg",
    category: "building",
  },
  {
    image: "./project2/b10.jpg",
    category: "building",
  },
  {
    image: "./project2/b11.jpg",
    category: "building",
  },
  {
    image: "./project2/b12.jpg",
    category: "building",
  },
  {
    image: "./project2/b13.jpg",
    category: "building",
  },
  {
    image: "./project2/b14.jpg",
    category: "building",
  },
  {
    image: "./project2/b15.jpg",
    category: "building",
  },
  {
    image: "./project2/b16.jpg",
    category: "building",
  },
  {
    image: "./project2/b17.jpg",
    category: "building",
  },
  {
    image: "./project2/b18.jpg",
    category: "building",
  },
  {
    image: "./project2/b19.jpg",
    category: "building",
  },
  {
    image: "./project2/b20.jpg",
    category: "building",
  },
];

function createBars() {
  for (let i = 0; i < projectImages.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.width = `${100 / projectImages.length - 1}%`;
    progress[0].append(bar);
  }
}

createBars();

function createBarsTwo() {
  for (let i = 0; i < projectImagesTwo.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("barTwo");
    bar.style.width = `${100 / projectImagesTwo.length - 1}%`;
    progress[1].append(bar);
  }
}

createBarsTwo();

let countIndex = 0;
let countIndexTwo = 0;

projectsPanel[0].style.backgroundImage = `url(${projectImages[countIndex].image})`;
projectsPanel[1].style.backgroundImage = `url(${projectImagesTwo[countIndexTwo].image})`;

const bars = document.querySelectorAll(".bar");
const barsTwo = document.querySelectorAll(".barTwo");

bars[0].style.opacity = "1";
barsTwo[0].style.opacity = "1";

function clearOpacity() {
  bars.forEach((bar) => {
    bar.style.opacity = "0.5";
  });
}

function clearOpacityTwo() {
  barsTwo.forEach((bar) => {
    bar.style.opacity = "0.5";
  });
}

left[0].addEventListener("click", () => {
  countIndex--;
  if (countIndex < 0) countIndex = projectImages.length - 1;
  projectsPanel[0].style.backgroundImage = `url(${projectImages[countIndex].image})`;

  clearOpacity();
  bars[countIndex].style.opacity = "1";
});

right[0].addEventListener("click", () => {
  countIndex++;
  if (countIndex > projectImages.length - 1) countIndex = 0;
  projectsPanel[0].style.backgroundImage = `url(${projectImages[countIndex].image})`;

  clearOpacity();
  bars[countIndex].style.opacity = "1";
});

projectsPanel[1].style.marginTop = "20px";

left[1].addEventListener("click", () => {
  countIndexTwo--;
  if (countIndexTwo < 0) countIndexTwo = projectImagesTwo.length - 1;
  projectsPanel[1].style.backgroundImage = `url(${projectImagesTwo[countIndexTwo].image})`;

  clearOpacityTwo();
  barsTwo[countIndexTwo].style.opacity = "1";
});

right[1].addEventListener("click", () => {
  countIndexTwo++;
  if (countIndexTwo > projectImagesTwo.length - 1) countIndexTwo = 0;
  projectsPanel[1].style.backgroundImage = `url(${projectImagesTwo[countIndexTwo].image})`;

  clearOpacityTwo();
  barsTwo[countIndexTwo].style.opacity = "1";
});
