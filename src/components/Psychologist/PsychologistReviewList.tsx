import { Review } from '../../firebase/types.ts';
import PsychologistReview from './PsychologistReview.tsx';

interface Props {
  reviews: Review[];
}

function PsychologistReviewList({ reviews }: Props) {
  return (
    <ul className="flex flex-col gap-[1.563rem]">
      {reviews.map((review, index) => (
        <li key={index}>
          <PsychologistReview review={review} />
        </li>
      ))}
    </ul>
  );
}

export default PsychologistReviewList;
