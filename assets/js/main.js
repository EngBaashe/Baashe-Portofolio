// Load reusable component into an element by ID
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => {
      console.error(`Failed to load ${file}:`, err);
    });
}

// Load page content dynamically into #content
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error('Page not found');
      return res.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(err => {
      document.getElementById('content').innerHTML = `<h2>404 - Page "${page}" not found</h2>`;
    });
}

// Handle hash-based routing
function handleRouting() {
  const route = window.location.hash.slice(1) || 'home'; // Default to 'home' if hash is empty
  loadPage(route);
}

// Initial setup on page load
window.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
  handleRouting(); // Load the correct page on first load

  // React to route changes (e.g., when user clicks #about)
  window.addEventListener('hashchange', handleRouting);
});









// // Load component into element
// function loadComponent(id, file) {
//   fetch(file)
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//     });
// }

// // Load default page (home) on first load
// function loadPage(page) {
//   fetch(`pages/${page}.html`)
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById('content').innerHTML = data;
//     });
// }

// // On load
// window.addEventListener('DOMContentLoaded', () => {
//   loadComponent('header', 'components/header.html');
//   loadComponent('footer', 'components/footer.html');
//   loadPage('home'); // Default page
// });
