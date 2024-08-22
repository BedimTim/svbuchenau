import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}>
      <section className="w-full mt-12 p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg">
        <h2 className="text-2xl font-semibold text-white">Über uns</h2>
        <p className="mt-4 text-white">
          Willkommen auf der Webseite unseres Vereins. Wir sind eine Gemeinschaft von Enthusiasten, die sich für [Thema des Vereins] interessieren.
        </p>
      </section>

      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-white">Mitglieder</h2>
        <ul className="mt-4 text-white">
          <li>Mitglied 1</li>
          <li>Mitglied 2</li>
          <li>Mitglied 3</li>
          <li>Mitglied 4</li>
        </ul>
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