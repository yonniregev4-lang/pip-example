const btn = document.querySelector('#btn');
let count = 0;

// about.html has no button, so check first
if (btn) {
  btn.addEventListener('click', () => {
    count++;
    btn.textContent = `Clicked ${count} times`;
    console.log('click number', count);
  });
}