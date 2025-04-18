import { Psychologist } from '../../firebase/types.ts';
import PsychologistInfoPill from './PsychologistInfoPill.tsx';

interface Props {
  psychologist: Psychologist;
}

function PsychologistInfoPillList({
  psychologist: { experience, license, specialization, initial_consultation },
}: Props) {
  const pills = [
    { label: 'Experience', value: experience },
    { label: 'License', value: license },
    { label: 'Specialization', value: specialization },
    { label: 'Initial consultation', value: initial_consultation },
  ];

  return (
    <ul className="flex flex-wrap gap-x-1 gap-y-2">
      {pills.map(({ label, value }, index) => (
        <li key={index}>
          <PsychologistInfoPill label={label} value={value} />
        </li>
      ))}
    </ul>
  );
}

export default PsychologistInfoPillList;
