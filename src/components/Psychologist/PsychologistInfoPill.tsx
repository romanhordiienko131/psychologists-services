interface Props {
  label: string;
  value: string | number;
}

function PsychologistInfoPill({ label, value }: Props) {
  return (
    <div className="rounded-3xl bg-[#f3f3f3] px-4 py-2 leading-6 font-medium text-[#8a8a89]">
      <span>{label}:</span> <span className="text-black">{value}</span>
    </div>
  );
}

export default PsychologistInfoPill;
