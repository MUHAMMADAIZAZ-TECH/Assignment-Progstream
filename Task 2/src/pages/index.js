import Header from "@/Components/Layout/Header/Header";
import Footer from "@/Components/Layout/Footer/Footer";
import Container from "@/Components/Layout/Container/Container";

export default function Home() {
  return (
    <>
      <Header />
      <Container />
      <Footer />
      <div className="text-background">Innov</div>
      <div className="remaining-text">ation</div>
    </>
  );
}
