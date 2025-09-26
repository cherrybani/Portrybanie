const typingTextElement = document.querySelector('.typing-text');
const fullText = typingTextElement.textContent; // Mengambil seluruh teks dari HTML
typingTextElement.textContent = ''; // Kosongkan elemen untuk memulai efek ketikan

let charIndex = 0;
const typingSpeed = 15; // Kecepatan ketikan dalam milidetik

function typeWriter() {
  if (charIndex < fullText.length) {
    // Memasukkan setiap karakter satu per satu dari array
    typingTextElement.textContent += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    typingTextElement.style.borderRight = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeWriter, 500); // Beri jeda sebentar sebelum mulai
});