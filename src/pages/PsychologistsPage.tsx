import PsychologistCardList from '../components/Psychologist/PsychologistCardList.tsx';
import { fetchPsychologists } from '../firebase/services/database.ts';
import { Psychologist } from '../firebase/types.ts';
import { getFirebaseErrorMessage } from '../helpers/getFirebaseErrorMessage.ts';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Container from '../components/Container.tsx';

function PsychologistsPage() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const psychologists = await fetchPsychologists();
        setPsychologists(psychologists);
      } catch (error) {
        const message = getFirebaseErrorMessage(error);
        toast.error(message);
      }
    };

    fetchData().then();
  }, []);

  return (
    <main className="pt-16 pb-[6.25rem]">
      <Container>
        <PsychologistCardList psychologists={psychologists} />
      </Container>
    </main>
  );
}

export default PsychologistsPage;
