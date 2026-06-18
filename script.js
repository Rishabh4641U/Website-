// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // close menu after clicking a link (mobile)
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Demo login form (front-end only, no backend)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "webp-4686b.firebaseapp.com",
  projectId: "webp-4686b",
  storageBucket: "webp-4686b.firebasestorage.app",
  messagingSenderId: "265714369549",
  appId: "1:265714369549:web:86d4b015358a6621d6c144",
  measurementId: "G-DJ1723CXR4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      if (!userCredential.user.emailVerified) {
        alert("Please verify your email first.");
        return;
      }

      alert("Login Successful!");

    } catch (error) {
      alert(error.message);
    }
  });
}
  });
}
