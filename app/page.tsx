import Button from './Components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main /*className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"*/>
      <div className="flex min-h-screen flex-col items-center sm:justify-between sm:p-24 ">
      <section className="flex-col w-full mt-32 sm:mt-12 p-8 sm:text-center text-left bg-lime-600 bg-opacity-75 rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Schützenverein Buchenau / Giesenhain</div>
        <p className="sm:text-xl mt-4 text-white">
          Herzlich Willkommen auf der Webseite des Schützenvereins Buchenau / Giesenhain. <br/>
          Hier finden Sie alle Informationen rund um unseren Verein.
        </p>
      </section>
      
      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-16 sm:m-4">
        <h2 className="text-2xl font-semibold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Mitglied werden</h2>
        <Button name="Mitgliedsantrag herunterladen" file="/api/file" />
        <Link href="/verein" className=''>
          <p className='text-xl text-white hover:text-gray-700 mt-4 py-4 hover:scale-105 duration-200 underline'>
            Weitere Informationen zur Mitgliedschaft finden Sie hier.
          </p>
        </Link>
      </section>

      <section className="w-full p-8 text-center bg-lime-600 bg-opacity-75 rounded-lg mt-16 sm:mt-4">
        <h2 className="text-2xl font-semibold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Kontakt</h2>
        <p className="mt-4 text-white">
          Sie können uns per E-Mail unter <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de" className="text-white underline hover:text-gray-600 duration-500">schuetzenverein-buchenau-giesenhain@web.de</a> erreichen.
        </p>
      </section>
    </div>
      
    </main>
  );
}