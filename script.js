const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const proposalPage = document.getElementById('proposalPage');
const messagePage = document.getElementById('messagePage');


function dodgeNoButton() {
  noBtn.style.position = 'fixed';

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

 
  const maxX = window.innerWidth - buttonWidth - 30;
  const maxY = window.innerHeight - buttonHeight - 30;

  const randomX = Math.max(30, Math.floor(Math.random() * maxX));
  const randomY = Math.max(30, Math.floor(Math.random() * maxY));

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}


noBtn.addEventListener('mouseenter', dodgeNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  dodgeNoButton();
});


yesBtn.addEventListener('click', () => {
  proposalPage.style.display = 'none';
  noBtn.style.display = 'none'; 
  
  messagePage.style.display = 'block';
});