import {initializeApp} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDnG6Ljs0ZfPgftXHt1FoVr42keLEgItuY",
  authDomain: "inkassator-app.firebaseapp.com",
  databaseURL: "https://inkassator-app.firebaseio.com",
  projectId: "inkassator-app",
  storageBucket: "inkassator-app.appspot.com",
  messagingSenderId: "219372283460"
});

export const db = app.database();
export const namesRef = db.ref('barcodes');
