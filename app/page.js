import Hero from '@/components/Hero';
import GetReady from '@/components/GetReady';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Social from '@/components/Social';

export default function Home() {
  return (
    <>
      <Hero />
      <GetReady />
      <Services />
      <FAQ />
      <Social />
    </>
  );
}