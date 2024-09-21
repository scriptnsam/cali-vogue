// menu.js
import { toggleMenu } from "./script";

document.addEventListener('DOMContentLoaded', () => {
  console.log('Browser Loaded!');
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleMenu());
  } else {
    console.error('menuBtn not found');
  }
});
