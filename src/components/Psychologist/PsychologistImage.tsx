interface Props {
  avatar_url: string;
  name: string;
}

function PsychologistImage({ avatar_url, name }: Props) {
  return (
    <div className="border-green/20 rounded-4xl border-2 p-3">
      <div className="relative">
        <img
          className="rounded-[0.938rem]"
          src={avatar_url}
          alt={name}
          width="96"
          height="96"
          loading="lazy"
        />
        <div className="absolute top-[-3px] right-0.5 flex size-3.5 items-center justify-center rounded-full bg-white">
          <div className="size-2.5 rounded-full bg-[#38cd3e]" />
        </div>
      </div>
    </div>
  );
}

export default PsychologistImage;
