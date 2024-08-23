import Image from "next/image";
import prisma from "@/lib/prisma";
import Veranstaltung from "/home/tim/responsive-navbar/app/Components/Veranstaltung";

async function getVeranstaltungen() {
    const veranstaltungen = await prisma.veranstaltung.findMany({
        include: {
            veranstaltungsort_veranstaltung_veranstaltungsortToveranstaltungsort: true,
            veranstaltungstyp_veranstaltung_veranstaltungstypToveranstaltungstyp: true
        }
    })
    return veranstaltungen;
}

export default async function Home() {
  const veranstaltungen = await getVeranstaltungen();
  console.log(veranstaltungen);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}>
      <section className="w-full mt-12 p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg">
        <h2 className="text-2xl font-semibold text-white">Über uns</h2>
        <p className="mt-4 text-white">
          Willkommen auf der Webseite unseres Vereins. Wir sind eine Gemeinschaft von Enthusiasten, die sich für [Thema des Vereins] interessieren.
        </p>
      </section>
      
      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-white">Veranstaltungen</h2>
        {
        veranstaltungen.map((veranstaltung) => {
          return (
            <Veranstaltung key={veranstaltung.Veranstaltungs_ID} id={veranstaltung.Veranstaltungs_ID} Ortsname={veranstaltung.veranstaltungsort.Ortsname} bezeichnung={veranstaltung.veranstaltungstyp.Bezeichnung} />
          );
        })  
        }
      </section>

      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
        <p className="mt-4 text-white">
          Sie können uns per E-Mail unter <a href="mailto:info@unserverein.de" className="text-white underline">info@unserverein.de</a> erreichen.
        </p>
      </section>

      <footer className="w-full bg-lime-600 text-white p-4 text-center mt-8 rounded-lg">
        <p>&copy; 2023 Unser Verein. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}