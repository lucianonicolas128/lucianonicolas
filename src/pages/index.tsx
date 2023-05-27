import DrawerAppBar from '@/components/AppBar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import dynamic from 'next/dynamic';

export default function Home() {
  const Projects = dynamic(() => import('../components/Projects'), {
    ssr: false,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DrawerAppBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
