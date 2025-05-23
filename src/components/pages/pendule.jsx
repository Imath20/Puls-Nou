import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/button";
import "@/scss/components/_simulari-pages.scss";

const PendulePage = () => {
  const pendulumImages = [
    { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625", alt: "Pendulum simulation" },
    { src: "https://images.unsplash.com/photo-1527576539890-dfa815648363", alt: "Wave simulation" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div style={{ paddingTop: "110px", flex: 1, display: "flex", flexDirection: "column" }}>
        <main className="flex-grow container mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pendule</h1>
          <div className="max-w-3xl mb-10">
            <p className="text-lg text-muted-foreground mb-4">
              Pendulul este un exemplu clasic de sistem oscilatoriu. Studierea mișcării pendulului ne ajută să înțelegem 
              concepte fundamentale precum perioada, frecvența și forța de restabilire.
            </p>
            <p className="text-lg text-muted-foreground">
              Explorează simulările noastre pentru a vizualiza comportamentul diferitelor tipuri de pendule.
            </p>
          </div>
          <div className="space-y-12">
            {/* Pendulul simplu */}
            <div className="rounded-container">
              <h2 className="text-2xl font-bold mb-4">Pendulul simplu</h2>
              <p className="text-muted-foreground mb-6">
                Un pendul simplu constă dintr-un corp suspendat de un fir inextensibil și de masă neglijabilă, 
                care oscilează sub acțiunea forței gravitaționale.
              </p>
              <ImageSlider images={pendulumImages} />
              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formula perioadei:</h3>
                  <div className="text-lg font-mono">T = 2π · √(l/g)</div>
                  <p className="text-muted-foreground mt-2">
                    unde l este lungimea pendulului, iar g este accelerația gravitațională.
                  </p>
                </div>
                <Button size="lg">Începe simularea</Button>
              </div>
            </div>
            {/* Pendulul dublu */}
            <div className="rounded-container">
              <h2 className="text-2xl font-bold mb-4">Pendulul dublu</h2>
              <p className="text-muted-foreground mb-6">
                Un pendul dublu constă din două pendule, al doilea fiind atașat de primul. 
                Acest sistem prezintă comportament haotic pentru anumite condiții inițiale.
              </p>
              <ImageSlider images={pendulumImages.slice().reverse()} />
              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Caracteristici:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Comportament cvasiperiodic sau haotic</li>
                    <li>Sensibilitate la condițiile inițiale</li>
                    <li>Transfer de energie între cele două pendule</li>
                  </ul>
                </div>
                <Button size="lg">Începe simularea</Button>
              </div>
            </div>
            {/* Pendulul fizic */}
            <div className="rounded-container">
              <h2 className="text-2xl font-bold mb-4">Pendulul fizic</h2>
              <p className="text-muted-foreground mb-6">
                Pendulul fizic este un corp rigid care oscilează în jurul unui punct sau unei axe fixe 
                sub acțiunea forței gravitaționale.
              </p>
              <ImageSlider images={pendulumImages} />
              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formula perioadei:</h3>
                  <div className="text-lg font-mono">T = 2π · √(I/(m·g·h))</div>
                  <p className="text-muted-foreground mt-2">
                    unde I este momentul de inerție, m este masa, g este accelerația gravitațională, 
                    iar h este distanța de la centrul de masă la axa de rotație.
                  </p>
                </div>
                <Button size="lg">Începe simularea</Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PendulePage;
