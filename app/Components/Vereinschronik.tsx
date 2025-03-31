import { useState, useEffect } from "react";

const Vereinschronik = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const chronik = document.getElementById("chronikContent");
      if (chronik) {
        const chronikRect = chronik.getBoundingClientRect();
        const footerHeight = 20; // Geschätzte Höhe des Footers
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        
        setShowButton(chronikRect.top < windowHeight && chronikRect.bottom > 0);
        setIsAboveFooter(scrollY + windowHeight < documentHeight - footerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto p-6 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold text-center text-teal-800">Vereinschronik</h1>
      {showButton && isAboveFooter && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="fixed bottom-5 right-5 px-4 py-2 bg-teal-600 text-white font-semibold rounded shadow-lg hover:bg-teal-700 transition"
        >
          Chronik ein-/ausklappen
        </button>
      )}
      {isVisible && (
        <div id="chronikContent" className="mt-4">
          <p>
            Die Chronik des Vereins wurde von Werner Hodes verfasst und von Edeltraut Hodes anlässlich der <strong>100 – Jahrfeier</strong> des Vereins auf dem Festkommers am 15.06.2002 vorgetragen.
          </p>
          
          <h2 className="text-2xl font-semibold text-teal-700 mt-6">Zur Geschichte des Schützenvereins Buchenau/Giesenhain</h2>
          
          <h3 className="text-xl font-semibold text-teal-600 mt-4">Die erste Vereinsgründung</h3>
          <p className="mt-2">
            Im Jahre 1902 wurde in Buchenau ein Schützenverein gegründet. Die Namen der ersten Mitglieder bleiben jedoch ein Geheimnis, ebenso wann und warum der Verein seine Aktivitäten wieder einstellte.
          </p>
          <p className="mt-2">
            Das Einzige, was auf sein Bestehen hinweist, ist eine Einladung zum ersten Stiftungsfest des Vereins aus dem Jahr 1903 und zwei Zeitungsannoncen zu einem Preisschießen.
          </p>
          
          <h3 className="text-xl font-semibold text-teal-600 mt-4">Die zweite Vereinsgründung</h3>
          <p className="mt-2">
            Am Samstag, den 25. Januar 1958 wurde wieder ein Schützenverein gegründet.
          </p>
          <h4 className="text-lg font-semibold text-teal-500 mt-3">Gründungsmitglieder:</h4>
          <ul className="mt-2 space-y-2">
            {[
              "Hermann Reus", "Friedrich Beck", "Karl Eckel", "Alexander Rosenthal",
              "Wilhelm Malek", "August Prack", "Philipp Bechtluft", "Alfred Leicht",
              "Karl Weider", "Gerhard Jung", "Silvester Hurna", "Hermann Kircher",
              "Wilhelm Prack", "Fritz Diederich"
            ].map((name, index) => (
              <li key={index} className="bg-teal-100 p-2 rounded">{name}</li>
            ))}
          </ul>
          
          <h4 className="text-lg font-semibold text-teal-500 mt-3">Erster Vorstand:</h4>
          <ul className="mt-2 space-y-2">
            {[
              "1. Vorsitzender: Karl Weider", "2. Vorsitzender: Alexander Rosenthal",
              "Schießwart: Friedrich Beck", "Kassenwart: Silvester Hurna",
              "Schriftführer: Hermann Kircher", "Kassierer: Alfred Leicht"
            ].map((post, index) => (
              <li key={index} className="bg-teal-100 p-2 rounded">{post}</li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold text-teal-600 mt-4">Weitere Meilensteine:</h3>
          <ul className="mt-2 space-y-2">
            {[
              "1960: Beitritt zum Schützenkreis Hünfeld", "1964: Erste Kreismeisterschaft gewonnen",
              "1968: Neuer Schießstand nach Abriss der alten Gaststätte", "1970: Zusammenschluss mit dem Schützenverein Giesenhain",
              "1986: Neue Vereinsfahne geweiht", "1992: Erweiterung des Schützenraums"
            ].map((event, index) => (
              <li key={index} className="bg-teal-100 p-2 rounded">{event}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Vereinschronik;
