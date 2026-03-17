const startTime = Date.now();
const emojiLoader = document.querySelector('.preloader-animation');

const emojis = ['🥘', '🥗', '🍙', '🦞', '🍥', '🍜', '🥤', '🍵'];
let currentEmojiIndex = 0;

function changeEmoji() {
  currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
  emojiLoader.textContent = emojis[currentEmojiIndex];
}

const emojiInterval = setInterval(changeEmoji, 400);

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const elapsed = Date.now() - startTime;
  const remaining = 3000 - elapsed;
  

  setTimeout(() => {
    clearInterval(emojiInterval); 
    preloader.classList.add("hide");// ← остановка теперь тут!
    setTimeout(() => {
      preloader.style.display = 'none';
      content.style.display = 'block'
    }, 500); // анимация исчезновения
  }, remaining > 0 ? remaining : 0);
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const image = document.querySelector('.zoom-image');
  const title = document.querySelector('.head1');

  const scale = 1 + scrollY / 1000;
  image.style.transform = `scale(${scale})`;

  // Уезжает вверх и исчезает
  title.style.transform = `translateY(-${scrollY / 2}px)`;
  title.style.opacity = `${1 - scrollY / 300}`;
});

const text = document.getElementById("text-h1");
window.addEventListener('scroll', () => {
  if(window.scrollY>100){
    text.classList.add('text-hide');
  } else {
    text.classList.remove('text-hide');
  }
});
let imageSwitched = false;
let imageSwitched2 = false;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const image = document.querySelector('.scale-image');
  const title = document.querySelector('.head1');

  // Масштабируем верхнюю PNG
  const scale = 1 + scrollY / 1000;
  image.style.transform = `scale(${scale})`;

  title.style.transform = `translateY(-${scrollY / 2}px)`;
  title.style.opacity = `${1 - scrollY / 300}`;
  if (scale >= 1.3 && !imageSwitched){
    image.src = 'assets/back12.png';
    imageSwitched = true;
  } else if (scale < 1.3 && imageSwitched) {
    image.src = 'assets/back1.png';
    imageSwitched = false;
  } 
  if (scale >= 2.3 && !imageSwitched2){
    image.src = 'assets/back122.png';
    imageSwitched2 = true;
  } else if (scale < 2.3 && imageSwitched2) {
    image.src = 'assets/back12.png';
    imageSwitched2 = false;
  } 
});
const secondaryText = document.getElementById("secondary");
 
window.addEventListener('scroll', ()=>{
  const scrollY = window.scrollY;
  const opacity = 1-Math.min(scrollY/300, 1);
  secondaryText.style.opacity = opacity;
});
const trityText = document.getElementById("trity");
 
window.addEventListener('scroll', ()=>{
  const scrollY = window.scrollY;
  const opacity = 1-Math.min(scrollY/300, 1);
  trityText.style.opacity = opacity;
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".scale-image", {
  scale: 2.3,
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-space",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: ".header-section",
    onUpdate: (self) => {
      const progress = self.progress;
      const title = document.querySelector(".head1");
      const secondaryText = document.getElementById("secondary");
      const trityText = document.getElementById("trity");

      title.style.opacity = 1 - progress * 1.5;
      secondaryText.style.opacity = 1 - progress * 2;
      trityText.style.opacity = 1 - progress * 2;

      if (progress > 0.95) {
        document.querySelector(".header-section").classList.add("scrolled");
      } else {
        document.querySelector(".header-section").classList.remove("scrolled");
      }
    }
  }
});
document.addEventListener('scroll', () => {
    const cafe = document.querySelector('.cafe');
    if (!cafe) return;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementTop = cafe.offsetTop;
    const triggerPoint = scrollY + windowHeight;

    if (elementTop < triggerPoint){
      cafe.classList.add('grow');
    } else {
      cafe.classList.remove('grow');
    }
  });
document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in-on-scroll'); // ← добавлено это!
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight / 1.5 && rect.bottom > 0) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
});
const wrappers = document.querySelectorAll('.imagebuild');

window.addEventListener('scroll', ()=> {
  wrappers.forEach(wrapper => {
    const rect = wrapper.getBoundingClientRect();
    if(rect.top < window.innerHeight*0.8){
      wrapper.classList.add('visible');
    }
  });
});

const down = document.querySelectorAll('.mast');

const downpers = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Устанавливаем индивидуальную задержку на каждый элемент
      entry.target.style.setProperty('--delay', `${index *  0.4}s`);
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');
    }
  });
}, {
  threshold: 0.3
});

down.forEach((el, index) => {
  downpers.observe(el);
});
document.addEventListener('scroll', () => {
    const cafe = document.querySelector('.inter');
    if (!cafe) return;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementTop = cafe.offsetTop;
    const triggerPoint = scrollY + windowHeight*0.8;

    if (elementTop < triggerPoint){
      cafe.classList.add('animate');
    } else {
      cafe.classList.remove('animate');
    }
  });

  const header = document.getElementById("myhead");
  const show = 1000;
  window.addEventListener("scroll", () =>{
    if (window.scrollY > show) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible')
    };
  });