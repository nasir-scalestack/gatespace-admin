import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA-eJKwGNj1qBoGK-6YPh18BOpR555jjs4',
  authDomain: 'ap1-demo-app.firebaseapp.com',
  databaseURL: 'https://ap1-demo-app.firebaseio.com',
  projectId: 'ap1-demo-app',
  storageBucket: 'ap1-demo-app.appspot.com',
  messagingSenderId: '685927665140',
};

firebase.initializeApp(config);

export default firebase;
