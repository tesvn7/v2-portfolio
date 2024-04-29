import db  from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function getData() {
    let docSnapshot;
    try {
        const docRef = doc(db, 'user', 'k8AyBP7mafTWZUo096JH');
        docSnapshot = await getDoc(docRef);
      } catch (error) {
        // Couldn't get document
        console.log(error);
        return null;
      }
    
      if (!docSnapshot.exists()) {
        // Document doesn't exist
        return null;
      } else {
        return docSnapshot.data();
      }
  }