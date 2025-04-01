import Container from '../components/Container.tsx';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <main>
        <Container>
          <div className="flex items-center justify-between py-[4.875rem]">
            <div className="max-w-[37.188rem] flex-1">
              <h1 className="-tracking-2 mb-5 text-[5rem] leading-20.5 font-semibold">
                The road to the
                <span className="text-green italic"> depths</span> of the human
                soul
              </h1>
              <p className="-tracking-2 mb-10 max-w-[31.875rem] text-[1.125rem] leading-6 font-medium">
                We help you to reveal your potential, overcome challenges and
                find a guide in your own life with the help of our experienced
                psychologists.
              </p>
              <Link
                to="/psychologists"
                className="bg-green -tracking-1 flex max-w-[14.875rem] items-center gap-4.5 rounded-4xl px-12.5 py-4.5 text-xl leading-6 font-medium text-white"
              >
                Get started
                <img
                  src="/icons/arrow-tr.svg"
                  alt="Arrow pointing at top right corner"
                />
              </Link>
            </div>
            <div className="relative flex">
              <img
                className="rounded-[0.625rem]"
                src="/images/hero-1x.webp"
                alt="Psychologist"
                width={464}
                height={526}
                srcSet="/images/hero-2x.webp 2x"
              />
              <div className="bg-green absolute top-[333px] right-[254px] flex h-[118px] w-[312px] items-center justify-center gap-4 rounded-[1.25rem] p-8">
                <div className="flex size-[3.375rem] items-center justify-center rounded-[0.813rem] bg-white">
                  <img src="/icons/check.svg" alt="Check mark" />
                </div>
                <div>
                  <p className="text-[0.875rem] text-white/50">
                    Experienced psychologists
                  </p>
                  <p className="text-2xl font-bold text-white">15,000</p>
                </div>
              </div>
              <div className="bg-purple absolute top-[185px] right-[454px] flex size-10 -rotate-15 items-center justify-center rounded-[0.625rem]">
                <img
                  className="rotate-15"
                  src="/icons/question-mark.svg"
                  alt="Question mark"
                />
              </div>
              <div className="bg-yellow absolute top-[38px] left-[449px] flex size-12 rotate-15 items-center justify-center rounded-[0.625rem]">
                <img src="/icons/users.svg" alt="Users" />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default HomePage;
