import { Psychologist } from '../../firebase/types.ts';
import PsychologistInfoPillList from './PsychologistInfoPillList.tsx';
import PsychologistImage from './PsychologistImage.tsx';
import { useState } from 'react';
import PsychologistReviewList from './PsychologistReviewList.tsx';
import AppointmentBtn from '../AppointmentBtn.tsx';

interface Props {
  psychologist: Psychologist;
}

function PsychologistCard({
  psychologist,
  psychologist: { about, avatar_url, name, price_per_hour, rating, reviews },
}: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex max-w-[74rem] gap-6 rounded-3xl bg-white p-6">
      <div className="shrink-0">
        <PsychologistImage avatar_url={avatar_url} name={name} />
      </div>
      <div>
        <div className="mb-6 flex justify-between">
          <div>
            <div className="mb-2 leading-6 font-medium text-[#8a8a89]">
              Psychologist
            </div>
            <h3 className="text-2xl leading-6 font-medium">{name}</h3>
          </div>
          <div className="flex">
            <div className="mr-7 flex items-center gap-4 leading-6 font-medium">
              <div className="flex items-center gap-2">
                <img src="/icons/star.svg" alt="" width="16" height="16" />
                <div>Rating: {rating}</div>
              </div>
              <span className="h-4 w-0.5 bg-black/20" />
              <div>
                Price / 1 hour:{' '}
                <span className="text-[#38cd3e]">{price_per_hour}$</span>
              </div>
            </div>
            <button>
              <img src="/icons/heart.svg" alt="Add to favorites" />
            </button>
          </div>
        </div>
        <div className="mb-6">
          <PsychologistInfoPillList psychologist={psychologist} />
        </div>
        <p className="leading-5 text-black/50">{about}</p>
        {showMore ? (
          <>
            <div className="mt-12 mb-10">
              <PsychologistReviewList reviews={reviews} />
            </div>
            <AppointmentBtn psychologist={psychologist} />
          </>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="mt-3.5 leading-6 font-medium underline"
          >
            Read more
          </button>
        )}
      </div>
    </div>
  );
}

export default PsychologistCard;
