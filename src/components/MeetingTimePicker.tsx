import clsx from 'clsx';

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const timeOptions = ['09:00', '09:30', '10:00', '10:30'];

function MeetingTimePicker({ value = '', onChange, error }: Props) {
  return (
    <div className="group relative focus-within:block">
      <input
        type="text"
        placeholder="00:00"
        className="w-full rounded-xl border border-black/10 px-4.5 py-4 leading-5 placeholder-black"
        value={value}
        readOnly
      />
      <img src="/icons/clock.svg" alt="" className="absolute top-4 right-4.5" />
      {error && <div className="text-red-400">{error}</div>}
      <div
        className={`absolute top-[calc(100%+8px)] right-0 hidden w-[9.438rem] rounded-xl bg-[#fff] p-4 group-focus-within:block`}
      >
        <div className="mb-4 leading-6 font-medium">Meeting time</div>
        <ul className="flex flex-col gap-1">
          {timeOptions.map((time) => (
            <li key={time} className="flex justify-center">
              <button
                type="button"
                onClick={() => onChange(time)}
                className={clsx(
                  'flex gap-0.5 leading-5 font-medium [font-variant-numeric:tabular-nums]',
                  value === time ? 'text-black' : 'text-black/30',
                )}
              >
                <span className="w-9.5">{time.split(':')[0]}</span>
                <span className="w-2">:</span>
                <span className="w-9.5">{time.split(':')[1]}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MeetingTimePicker;
