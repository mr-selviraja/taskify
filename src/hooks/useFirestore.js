import { useState } from 'react';
import { db, collection, getDocs } from '../config/firebaseConfig';

export const useFirestore = () => {
  const [tasks, setTasks] = useState([]);

  const fetchCollection = async (collectionName) => {
    try {
      const collectionData = [];

      const querySnapshot = await getDocs(collection(db, collectionName));

      querySnapshot.forEach((doc) => {
        collectionData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setTasks(collectionData);

      return collectionData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { tasks, db, fetchCollection };
};
