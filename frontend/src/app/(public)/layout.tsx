// app/(public)/layout.tsx
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
