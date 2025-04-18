import { ref, get } from 'firebase/database';
import { database } from '../init.ts';
import { Psychologist } from '../types.ts';

export const fetchPsychologists = async () => {
  const dbRef = ref(database, '/');

  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    return snapshot.val() as Psychologist[];
  } else {
    return [];
  }
};
