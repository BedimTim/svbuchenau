import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Pokal = {
  name: string;
  beschreibungspunkte: string[];
};

const pokale: Pokal[] = [
  {
    name: "Neujahrspokal",
    beschreibungspunkte: [
      "Teilnahmeberechtigt sind alle Mitglieder des Schützenvereins Buchenau/Giesenhain e.V..",
      "Es wird nicht nach Klassen unterschieden.",
      "Geschossen werden 20 Schuss stehend frei Hand mit dem LG.",
      "Die zur Verfügung stehende Zeit beträgt inklusive Probeschüssen 40 Minuten.",
      "Der letztjährige Gewinner des Pokals schießt die Vorgabe, bevor alle anderen Teilnehmer den Wettkampf beginnen. Er darf „frei Hand“ oder aufgelegt schießen. Sein Ergebnis bleibt geheim bis zum letzten Schuss der Wettkämpfer.",
      "Gewinner des Pokals ist, wer der Vorgabe am nächsten kommt. Dabei ist es egal aus welcher Richtung am Nächsten gekommen wird.",
      "Bei gleichem Ringabstand zur Vorgabe entscheidet der Abstand zu einem vorher festgelegten Schuss. Bei erneuter Gleichheit entscheidet der Abstand zu einem 2ten vorher festgelegten Schuss usw..",
      "Ein Startgeld wird nicht erhoben.",
      "Der Pokal bleibt Eigentum des Vereins."
    ],
  },
  {
    name: "Alexander Rosenthal-Pokal",
    beschreibungspunkte: [
      "Der Pokal wird mit der Luftpistole ausgetragen",
      "Es wird nicht in verschiedene Klassen unterteilt.",
      "Jeder Teilnehmer gibt 3 Schuss auf eine Scheibe ab.",
      "Sieger ist der Teilnehmer mit der höchsten Ringzahl.",
      "Bei Ringgleichheit wird der Gewinner im Stechen ermittelt, solange bis ein Sieger feststeht.",
      "Der Pokal kann beim nächsten Mal verteidigt werden.",
    ],
  },
  {
    name: "Arno Müller-Pokal",
    beschreibungspunkte: [
      "Der Pokal wird im K.O.-System mit dem Luftgewehr ausgeschossen.",
      "Es wird nicht nach Klassen unterschieden.",
      "Die Teilnehmer werden paarweise ausgelost.",
      "Die beiden Schützen eines Paares geben jeweils 3 Schuss auf je eine Scheibe ab. Der Schütze mit der höheren Ringzahl erreicht die nächste Runde",
      "Bei Ringgleichheit müssen erneut je 3 Schuss von den beiden Schützen des Paares abgegeben werden, solange bis ein Sieger im Stechen ermittelt ist",
      "Die ermittelten Sieger werden wieder paarweise ausgelost, solange bis nur noch ein Paar übrig bleibt.",
      "Gewinner des Pokals ist der Sieger des letzten Paares",
      "Der Pokal kann verteidigt werden.",
    ],
  },
  {
    name: "Jahresbecher",
    beschreibungspunkte: [
      "Der Jahresbecher wird mit dem Luftgewehr ausgeschossen.",
      "Es wird nur ein Schuss abgegeben.",
      "Sieger ist der Teilnehmer mit der höchsten Ringzahl.",
      "Bei Ringgleichheit wird der Gewinner im Stechen ermittelt.",
      "Es wird nicht nach Klassen unterschieden.",
      "Der Gewinner erhält einen „Jahresbecher“ mit Jahreszahl.",
      "Der Pokal kann verteidigt werden.",
    ],
  },
  {
    name: "Jugendpokal",
    beschreibungspunkte: [
      "Zugelassen sind nur Teilnehmer aus der Schüler-, Jugend- und Juniorenklasse.",
      "Es wird nicht nach weiblichen und männlichen Teilnehmern unterschieden.",
      "Der Pokal wird mit dem Luftgewehr ausgetragen.",
      "Jeder Teilnehmer gibt 3 Schuss mit dem Luftgewehr auf eine Scheibe ab.",
      "Gewinner ist der Teilnehmer mit der höchsten Ringzahl.",
      "Bei Ringgleichheit schießen die infrage kommenden Teilnehmer solange im Stechen jeweils 3 Schuss, bis ein Sieger feststeht.",
      "Der Gewinner kann seinen Pokal beim nächsten Mal verteidigen.",
    ],
  },
];

const PokalAccordion = () => {
  const [offen, setOffen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOffen(offen === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {pokale.map((pokal, index) => (
        <div key={index} className="mb-4 border border-black rounded-lg shadow overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-2 text-left text-lg font-semibold bg-slate-200 hover:bg-slate-100 focus:outline-none duration-200 "
          >
            {pokal.name}
          </button>

          <AnimatePresence initial={false}>
            {offen === index && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-3 bg-white space-y-2 overflow-hidden"
              >
                {pokal.beschreibungspunkte.map((punkt, i) => (
                  <li key={i} className="list-disc ml-4 text-black">{punkt}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default PokalAccordion;
