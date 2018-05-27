import { auth } from './firebase';

export const signInWithGoogle = (provider) => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();
