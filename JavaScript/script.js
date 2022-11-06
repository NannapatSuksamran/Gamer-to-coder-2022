var name = prompt("คำเตือน!! เกมนี้อาจจะทำให้คุณหัวร้อนก็เป็นได้ ถ้าไม่อยากเล่นให้กด ใช่ครับ/ค่ะ ได้นะครับ ขอให้สนุกกับ เว็บไซต์นะครับ^^ พร้อมแล้ว, เข้าสู่เว็บไซต์ กันเลย !! (รับทราบหรือไม่..นายท่าน)");

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
  question.innerHTML = 'ผมก็ชอบพี่นะค้าบบ >w<';
});

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.floor() * (wrapperRect.hieight - noBtnRect.height)) + 1;

  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});