import * as auth from './auth';
import * as firebase from './firebase';
import firebase2 from 'firebase';

const provider = new firebase2.auth.GoogleAuthProvider();

export {
  auth,
  firebase,
  provider
};