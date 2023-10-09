import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCz1x_C5Ydmgn3LkCx0xb4wz-u29Zf-mGM',
  authDomain: 'cooking-ninja-site-3564d.firebaseapp.com',
  projectId: 'cooking-ninja-site-3564d',
  storageBucket: 'cooking-ninja-site-3564d.appspot.com',
  messagingSenderId: '267617390181',
  appId: '1:267617390181:web:d53b8e43f1e536688a808c',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
