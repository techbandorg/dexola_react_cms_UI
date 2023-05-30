'use client';

import RootLayout from '@/app/layout';
import ContactButton from '../../components/ContactUs/ContactUs';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import Footer from '../footer/footer';
import HowWeWork from './howWeWork';

export default function Home() {
  return (
    <RootLayout>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <HowWeWork />
      <Footer />
    </RootLayout>
  );
}
