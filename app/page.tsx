import Button from './Components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center">
      <section className="w-full mt-12 p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg">
        <h2 className="text-2xl font-semibold text-white">Über uns</h2>
        <p className="mt-4 text-white">
          
        </p>
      </section>
      
      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg m-4">
        <h2 className="text-2xl font-semibold text-white">Mitglied werden</h2>
        <Link
                href={"/home/tim/responsive-navbar/public/Beitritt.pdf"}
                className="cursor-pointer  block rounded py-4 px-4 bg-blue text-white border-0"
                  style={{
                    width: "100%",
                    maxWidth: 200,
                    minWidth: 100,
                    fontSize: "1rem",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
              >
              Mitgliedsantrag herunterladen
              </Link>
      </section>

      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
        <p className="mt-4 text-white">
          Sie können uns per E-Mail unter <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de" className="text-white underline">schuetzenverein-buchenau-giesenhain@web.de</a> erreichen.
        </p>
      </section>

      
    </main>
  );
}