import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/button";
import "@/scss/components/_simulari-pages.scss";
import MathJaxRender from "@/components/MathJaxRender";


import UndeImage from "../../../public/res/screenshots/Unde_Screenshot.png"
import UndeImage1 from "../../../public/res/screenshots/Unde_Screenshot2.png"

const UndePage = () => {
  const undeImages = [
    { src: UndeImage, alt: "Simulare Unde" },
    { src: UndeImage1, alt: "Simulare Unde"}
  ];

 return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div style={{ paddingTop: "110px", flex: 1, display: "flex", flexDirection: "column" }}>
        <main className="flex-grow container mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Seisme</h1>
          <div className="max-w-3xl mb-10">
            <p className="text-lg text-muted-foreground mb-4">
              Un cutremur este un eveniment brusc și violent care are loc în interiorul Pământului, rezultând unde seismice.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Cutremurele sunt cauzate de eliberarea bruscă de energie în scoarța terestră, generând unde seismice care se propagă prin Pământ.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Aceste unde pot fi detectate de seismografe și pot fi folosite pentru a studia structura internă a Pământului.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Simulările noastre oferă o reprezentare vizuală a modului în care undele seismice se propagă și interacționează cu diferite medii.
            </p>
          </div>
          <div className="space-y-12">
            <div className="rounded-container">
              <h2 className="text-2xl font-bold mb-4">Simulare de seisme</h2>
              <p className="text-muted-foreground mb-6">
                Animație a undelor seismice generate în timpul unui cutremur.
              </p>
              <div className="image-slider h-64 md:h-80 relative flex items-center justify-center mb-8">
                <img
                  src={undeImages[0].src}
                  alt={undeImages[0].alt}
                  className="w-full h-full object-contain mx-auto my-auto"
                />
              </div>
              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Caracteristici:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Undele seismice se propagă prin interiorul Pământului</li>
                    <li>Există diferite tipuri de unde seismice (P, S, L, R)</li>
                    <li>Seismografele înregistrează aceste unde</li>
                    <li>Undele secundare S(latitudinale) si undele primare P(longitudinale)</li>
                    <li>Undele de suprafață (L și R) provoacă cele mai mari distrugeri la suprafața solului</li>
                    <li>Viteza de propagare a undelor P este mai mare decât a undelor S</li>
                    <li>Undele S nu se propagă prin lichide, spre deosebire de undele P</li>
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2"> Formula pentru viteza undelor P:</h3>
                    <div className="text-lg font-mono">
                      {"\\( v_P = \\frac{d}{t_P}\\)"}
                      <MathJaxRender />
                    </div>
                    <h3 className="text-xl font-semibold mb-2"> Formula pentru viteza undelor S:</h3>
                    <div className="text-lg font-mono">
                      {"\\( v_S = \\frac{d}{t_S}\\)"}
                      <MathJaxRender />
                    </div>
                    <p className="text-muted-foreground mt-2">
                      unde d este distanta de la epicentru la  punctul de referinta, iar t timpul in care se propaga fiecare dintre cele doua unde.
                    </p>
                  </div>
                </div>
                <Button size="lg">Vezi simularea</Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default UndePage;
