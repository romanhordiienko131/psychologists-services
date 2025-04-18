import { Review } from '../../firebase/types.ts';

interface Props {
  review: Review;
}

function PsychologistReview({ review: { rating, comment, reviewer } }: Props) {
  return (
    <div>
      <div className="mb-4 flex gap-3">
        <div className="bg-green/20 text-green flex size-11 items-center justify-center rounded-full text-xl leading-5 font-medium">
          {reviewer.charAt(0)}
        </div>
        <div>
          <h3 className="mb-1 text-base leading-5 font-medium">{reviewer}</h3>
          <div className="flex gap-2 text-[0.875rem] leading-4.5 font-medium">
            <img src="/icons/star.svg" alt="" />
            {Number.isInteger(rating) ? `${rating}.0` : rating}
          </div>
        </div>
      </div>
      <p className="leading-5 text-black/50">{comment}</p>
    </div>
  );
}

export default PsychologistReview;
