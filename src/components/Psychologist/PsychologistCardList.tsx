import { Psychologist } from '../../firebase/types.ts';
import PsychologistCard from './PsychologistCard.tsx';

interface Props {
  psychologists: Psychologist[];
}

function PsychologistCardList({ psychologists }: Props) {
  return (
    <ul className="flex flex-col items-center gap-8">
      {psychologists.map((psychologist, index) => (
        <li key={index}>
          <PsychologistCard psychologist={psychologist} />
        </li>
      ))}
    </ul>
  );
}

export default PsychologistCardList;
