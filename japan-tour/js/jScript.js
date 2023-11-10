document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function () {
      searchInput.classList.toggle('active');
      searchInput.focus();
    });
  });
