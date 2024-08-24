import Button from './Components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center">
      <section className="w-full mt-12 p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg">
        <h2 className="text-3xl font-semibold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Schützenverein Buchenau/Giesenhain</h2>
        <p className="mt-4 text-white" style={{ fontSize: '1.5em', lineHeight: '2em' }}>
          Willkommen beim Schützenverein Buchenau/Giesenhain, gelegen in der Marktgemeinde Eiterfeld.
        </p>
      </section>
      
      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg m-4">
        <h2 className="text-2xl font-semibold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Mitglied werden</h2>
        <Button name="Mitgliedsantrag herunterladen" file="/api/file" />
      </section>

      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Kontakt</h2>
        <p className="mt-4 text-white">
          Sie können uns per E-Mail unter <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de" className="text-white underline">schuetzenverein-buchenau-giesenhain@web.de</a> erreichen.
        </p>
      </section>

      
    </main>
  );
}