import Button from './Components/Button';
import Link from 'next/link';
import Calendar from './Components/calendar';

export default function Home() {
  return (
    <main /*className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"*/>
      <div className="flex min-h-screen flex-col items-center sm:justify-between sm:p-24 ">
      <section className="flex-col w-full mt-32 sm:mt-12 p-8 sm:text-center shadow-2xl text-left bg-white rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Schützenverein Buchenau / Giesenhain</div>
        <p className="flex-row sm:text-xl mt-4 text-black">
          Herzlich Willkommen auf der Webseite des Schützenvereins Buchenau / Giesenhain. <br/>
          Hier finden Sie alle Informationen rund um unseren Verein. <br/>
          Wir würden uns freuen, sie bei uns im <Link className='underline hover:text-lime-600 duration-200' href="/verein">Schützenraum</Link> begrüßen zu dürfen.
        </p>
      </section>
      
      <section className="w-full p-8 text-center bg-white shadow-2xl rounded-lg mt-16 sm:m-4">
        <h2 className="text-2xl font-semibold text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Mitglied werden</h2>
        <Button name="Mitgliedsantrag herunterladen" file="/api/file" />
        <Link href="/verein" className=''>
          <p className='text-xl text-black hover:text-lime-600 mt-4 py-4 hover:scale-105 duration-200 underline'>
            Weitere Informationen zur Mitgliedschaft finden Sie hier.
          </p>
        </Link>
      </section>

      <section className="w-full p-8 text-center bg-white shadow-2xl rounded-lg mt-16 sm:m-4">
        <Calendar />
      </section>

      <section className="w-full p-8 text-center bg-white shadow-2xl rounded-lg mt-16 sm:mt-4">
        <h2 className="text-2xl font-semibold text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Kontakt</h2>
        <p className="mt-4 text-black">
          Sie können uns per E-Mail unter <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de" className="text-black underline hover:text-lime-600 duration-500">schuetzenverein-buchenau-giesenhain@web.de</a> erreichen.
        </p>
      </section>
    </div>
      
    </main>
  );
}