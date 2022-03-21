// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBcfHFHeOgAuaMRkGZ9sbY-ByfVBKVgP-Q',
  authDomain: 'root-web-ui.firebaseapp.com',
  projectId: 'root-web-ui',
  storageBucket: 'root-web-ui.appspot.com',
  messagingSenderId: '265150636438',
  appId: '1:265150636438:web:7c2f881de670687b9c3db7',
  measurementId: 'G-D0P492R459',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
  app,
  analytics,
};
