import Hero from '@/components/Hero';
import HeadOfSecondSection from '@/components/HeadOfSecondSection';
import SecondSection from '@/components/SecondSection';
import HeadOfThirdSection from '@/components/HeadOfThirdSection';
import HeadOfTheFourthSection from '@/components/HeadOfTheFourthSection';
import FourthSection from '@/components/FourthSection';
import Scroller from '@/components/Scroller';
import FifthSection from '@/components/FifthSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-content mt-[20.85rem] flex flex-col gap-[4.9rem] overflow-x-hidden max-md:mt-[30rem] max-md:gap-[2.9rem] max-[325px]:mt-[35rem]">
        <HeadOfSecondSection />
        <SecondSection />
      </section>
      <section className="max-content mt-[9.2rem] max-md:mt-[10rem]">
        <HeadOfThirdSection />
      </section>
      <section className="max-content mt-[3.83rem] flex flex-col items-center gap-[4.4rem]">
        <HeadOfTheFourthSection />
        <FourthSection />
      </section>
      <section className="max-content mt-[8rem] flex justify-center">
        <Scroller />
      </section>
      <section className="max-content mt-[7.63rem]">
        <FifthSection />
      </section>
      <footer className="mt-[9.35rem] flex min-h-[9.375rem] items-center justify-center bg-primary-paragraphs/[0.1002] max-sm:text-center">
        <Footer />
      </footer>
    </>
  );
}
