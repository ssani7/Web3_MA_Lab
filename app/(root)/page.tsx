import AboutUs from '@/components/AboutUs';
import ClientCompany from '@/components/ClientCompany';
import ContactUs from '@/components/Contactus';
import Footer from '@/components/Footer';
import HeaderSection from '@/components/HeaderSection';
import NavBar from '@/components/NavBar/NavBar';
import OurServices from '@/components/OurServices';
import ContentLayout from '@/components/utils/Layouts/ContentLayout';

export default function Home() {
  return (
    <main className="">
      <div className="bg-[url('/assets/background.png')] bg-cover bg-no-repeat">
        <ContentLayout>
          <NavBar />
          <HeaderSection />
        </ContentLayout>
      </div>
      {/* <ContentLayout>
        <AboutUs />
      </ContentLayout>
      <div className="company my-20 py-10">
        <ContentLayout>
          <ClientCompany />
        </ContentLayout>
      </div>
      <ContentLayout>
        <OurServices />
        <ContactUs />
      </ContentLayout>
      <div className="border-t border-gray-500">
        <ContentLayout>
          <Footer />
        </ContentLayout>
      </div> */}
    </main>
  );
}
