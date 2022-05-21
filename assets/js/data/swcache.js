const resource = [

  /* --- CSS --- */
  '/Cc360428/assets/css/style.css',

  /* --- PWA --- */
  '/Cc360428/app.js',
  '/Cc360428/sw.js',

  /* --- HTML --- */
  '/Cc360428/index.html',
  '/Cc360428/404.html',
  
    '/Cc360428/categories/',
  
    '/Cc360428/tags/',
  
    '/Cc360428/archives/',
  
    '/Cc360428/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/Cc360428/assets/img/favicons/all.png',
    '/Cc360428/assets/img/favicons/android-chrome-192x192.png',
    '/Cc360428/assets/img/favicons/android-chrome-512x512.png',
    '/Cc360428/assets/img/favicons/apple-touch-icon.png',
    '/Cc360428/assets/img/favicons/browserconfig.xml',
    '/Cc360428/assets/img/favicons/favicon-16x16.png',
    '/Cc360428/assets/img/favicons/favicon-32x32.png',
    '/Cc360428/assets/img/favicons/favicon.ico',
    '/Cc360428/assets/img/favicons/mstile-150x150.png',
    '/Cc360428/assets/img/favicons/safari-pinned-tab.svg',
    '/Cc360428/assets/img/favicons/site.webmanifest',
    '/Cc360428/assets/js/dist/categories.min.js',
    '/Cc360428/assets/js/dist/commons.min.js',
    '/Cc360428/assets/js/dist/home.min.js',
    '/Cc360428/assets/js/dist/misc.min.js',
    '/Cc360428/assets/js/dist/page.min.js',
    '/Cc360428/assets/js/dist/post.min.js',
    '/Cc360428/assets/js/dist/pvreport.min.js',
    '/Cc360428/assets/img/favicons/.DS_Store'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'cc360428.github.io',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

