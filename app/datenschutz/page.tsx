export default function Home() {
    return (
      <main className="">
        <div className='flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center'>
            <section className="flex-col w-full mt-32 sm:mt-12 p-8 shadow-2xl text-left bg-white  rounded-lg">
                <div className="sm:text-3xl font-semibold text-center text-black">Datenschutz</div>
                <p className="sm:text-lg mt-4 text-black">
                    Diese Seite informiert Sie über die Erhebung und Verwendung personenbezogener Daten bei der Nutzung unserer Website. Wir behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
            </section>
            <section className="flex-col w-full mt-32 sm:mt-12 p-8 shadow-2xl text-black text-left bg-white  rounded-lg">
                
                <h2 className="text-xl pb-6">1. Allgemeine Hinweise</h2>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>
                <br/>
                <ul>
                  <li className="font-semibold">Verantwortlicher für die Datenverarbeitung:</li>
                  <li>Schützenverein Buchenau-Giesenhain</li>
                  <li>Giesenhainer Str. 6</li>
                  <li>36132 Eiterfeld-Buchenau</li>
                  <li>E-Mail: <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de">schuetzenverein-buchenau-giesenhain@web.de</a></li>
                </ul>
            </section>
            
            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white  rounded-lg">
                <h2 className="text-xl pb-6">2. Hosting & Serverlogs</h2>
                <p>
                  Unsere Website wird von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Dieser verarbeitet Ihre Daten nur im Rahmen der gesetzlichen Bestimmungen und auf unsere Weisung hin.
                </p>
                <br/>
                <p>
                  Bei jedem Zugriff auf unsere Website werden automatisch Daten in Server-Logfiles gespeichert. Diese Daten umfassen:
                </p>
                <br/>
                <ul className="list-disc ml-6 mt-2">
                  <li>IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>URL der aufgerufenen Seite</li>
                  <li>Referrer-URL &#40;die zuvor besuchte Seite&#41;</li>
                  <li>Browsertyp und -version</li>
                  <li>Betriebssystem des Nutzers</li>
                </ul>
                <br/>
                <p>
                  Diese Daten dienen ausschließlich zur Sicherstellung eines störungsfreien Betriebs und zur Verbesserung unseres Angebots. Eine Zusammenführung mit personenbezogenen Daten erfolgt nicht.
                </p>
                <br/>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO &#40;berechtigtes Interesse&#41;</p>
            </section>

            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white  rounded-lg">
                <h2 className="text-xl pb-6">3. Cookies</h2>
                <p>
                  Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie helfen uns, die Nutzung unserer Website zu analysieren und bestimmte Funktionen bereitzustellen.
                </p>
                <br/>
                <p>
                  Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers deaktivieren. Bitte beachten Sie, dass dies die Funktionalität unserer Website beeinträchtigen kann.
                </p>
                <br/>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO &#40;berechtigtes Interesse&#41;</p>
            </section>
            
            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white  rounded-lg">
              <h2 className="text-xl pb-6">4. Vercel Analytics</h2>
              <p>
                Wir verwenden Vercel Analytics, um das Nutzerverhalten auf unserer Website zu analysieren. Vercel Analytics verwendet keine Cookies und speichert keine IP-Adressen dauerhaft. Die Daten sind vollständig anonymisiert.
              </p>
              <br/>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO &#40;berechtigtes Interesse an der Verbesserung der Website&#41;<br/>
                Weitere Infos: <a href="https://vercel.com/docs/analytics/privacy">https://vercel.com/docs/analytics/privacy</a>
              </p>
            </section>

            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white  rounded-lg">
              <h2 className="text-xl pb-6">5. Google Maps</h2>
              <p>
                Diese Website verwendet Google Maps, einen Kartendienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <br/>
              <p>
                Um die Karte anzuzeigen, wird Ihre IP-Adresse an Google übermittelt. Beim Laden der Karte können zudem Cookies gesetzt und Schriftarten nachgeladen werden.
              </p>
              <br/>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO &#40;Einwilligung über Cookie-Banner&#41;
              </p>
              <br/>
              <p>
                Hinweis: Die Karte wird erst nach aktiver Zustimmung des Nutzers über unser Cookie-Consent-Tool geladen. Ohne Ihre Einwilligung findet keine Datenübertragung an Google statt.
              </p>
              <br/>
              <p>
                Weitere Infos:
              </p>
              <p>
                Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>
              </p>
              <p>
                Nutzungsbedingungen für Google Maps: <a href="https://www.google.com/intl/de_de/help/terms_maps/">https://www.google.com/intl/de_de/help/terms_maps/</a>
              </p>
            </section>



            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white rounded-lg">
              <h2 className="text-xl pb-6">6. Kontaktaufnahme</h2>
              <p>
                Wenn Sie per E-Mail oder Telefon Kontakt mit uns aufnehmen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <br />
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahme bzw. Vertragserfüllung)
              </p>
            </section>

            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white rounded-lg">
              <h2 className="text-xl pb-6">7. Ihre Rechte</h2>
              <p>
              Sie haben jederzeit das Recht auf:
              </p>
              <ul className="list-disc ml-6 mt-2">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              </ul>
              <br />
              <p>
              Bitte wenden Sie sich dazu an die oben angegebene Kontaktadresse.
              </p>
              <br />
              <p>
              Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren.
              </p>
            </section>
            <section className="flex-col w-full mt-8 sm:mt-4 p-8 shadow-2xl text-black text-left bg-white  rounded-lg">
              <h2 className="text-xl pb-6">8. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die aktuelle Version ist stets auf unserer Website verfügbar.
              </p>
              <br />
              <p>
                Stand: August 2025
              </p>
           </section>
        </div>
      </main>
    );
  }