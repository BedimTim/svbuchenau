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
      {showButton && isAboveFooter && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="fixed bottom-5 right-5 px-4 py-2 bg-black text-white font-semibold rounded shadow-lg hover:bg-teal-700 transition"
        >
          Chronik ein-/ausklappen
        </button>
      )}
      {isVisible && (
        <div id="chronikContent" className="mt-6">
          <p>
            Die Chronik des Vereins wurde von Werner Hodes verfasst, und von Edeltraut Hodes anlässlich der 100 – Jahrfeier des Vereins auf dem Festkommers am 15.06.2002 vorgetragen.
          </p>
          
          <h2 className="text-2xl font-semibold text-black mt-6">Zur Geschichte des Schützenvereins Buchenau/Giesenhain</h2>
          
          <h3 className="text-xl font-semibold text-black mt-4">Die erste Vereinsgründung:</h3>
          <p className="mt-6">
            Im Jahre 1902 wurde in Buchenau ein Schützenverein gegründet. Die Namen der ersten Mitglieder bleiben jedoch ein Geheimnis, ebenso wann und warum der Verein seine Aktivitäten wieder einstellte.Denn weder in Zeitungen, noch 
            in alten Chroniken ist hierüber etwas zu finden.
          </p>
          <p className="mt-6">
          Das Einzige, was auf sein 
Bestehen hinweist, ist eine Einladung zum ersten Stiftungsfest des Vereins 
aus dem Jahr 1903 und zwei Zeitungsannoncen, ein Preisschießen 
betreffend, das ausgerichtet wurde. Ebenso existiert eine Porzellanplakette 
mit einem Schützenmotiv, die im heutigen Schützenraum angebracht ist.
          </p>
          <p className="mt-6">
          Der 1902 gegründete Verein besaß auch eine Fahne, deren Fragmente beim 
Abriss eines Gebäudes gefunden wurden. Leider war der Zustand der Fahne 
so schlecht, sodass man damals alles verbrannt hat.
          </p>


          <h3 className="text-xl font-semibold text-black mt-4">Die zweite Vereinsgründung:</h3>
          <p className="mt-6">
          Am Samstag, den 25. Januar 1958 wurde wieder ein Schützenverein von 
folgenden 14 Personen in der Gaststätte "Schloßschenke" ins Leben gerufen:
          </p>
          <ul className="mt-2 space-y-2">
            {[
              "Hermann Reus", "Friedrich Beck", "Karl Eckel", "Alexander Rosenthal",
              "Wilhelm Malek", "August Prack", "Philipp Bechtluft", "Alfred Leicht",
              "Karl Weider", "Gerhard Jung", "Silvester Hurna", "Hermann Kircher",
              "Wilhelm Prack", "Fritz Diederich"
            ].map((name, index) => (
              <li key={index} className="bg-lime-100 p-2 rounded">{name}</li>
            ))}
          </ul>
          <p className="mt-6">
          Für Freitag den 31. Januar wurde eine beschlussfassende Versammlung 
          einberufen und folgende Personen wurden als Vorstand einberufen:
          </p>
          <ul className="mt-2 space-y-2">
            {[
              "1. Vorsitzender: Karl Weider", "2. Vorsitzender: Alexander Rosenthal",
              "Schießwart: Friedrich Beck", "Kassenwart: Silvester Hurna",
              "Schriftführer: Hermann Kircher", "Kassierer: Alfred Leicht"
            ].map((post, index) => (
              <li key={index} className="bg-lime-100 p-2 rounded">{post}</li>
            ))}
          </ul>
          
          <p className="mt-6">
          Der Verein wurde beim Schützenkreis 17 Hersfeld und gleichzeitig auch 
beim Hessischen Schützenverband angemeldet.
          </p>
          <p className="mt-6">
          Ein erstes Luftgewehr der Marke Walther bestellten wir zum Preis von
197,-DM wurde in Hersfeld bei dem Waffengeschäft Junghans.
Die Vorfinanzierung übernahm Alexander Rosenthal.
          </p>
          <p className="mt-6">
          Der Mitgliedsbeitrag betrug pro Monat 1 DM, 
die Munition kostete damals pro Serie 0,20 DM für jeden Schützen.
          </p>
          <p className="mt-6">
          Der Übungsabend wurde damals schon auf den Freitagabend festgelegt.
          </p>
          <p className="mt-6">
          Der Schießstand befand sich im Saal der ,,Schloßschenke". 
Da der Raum nicht die erforderlichen 10 m Länge hatte, musste durch eine 
Türöffnung in einen dahinter liegenden Raum geschossen werden. Eine Benutzung einer Scheibenzuganlage war dadurch nicht möglich. Deshalb 
musste eine Person vor Ort die Scheiben wechseln. Wenn zwei Schützen am 
Stand waren, musste über Kreuz geschossen werden.
          </p>
          <p className="mt-6">
          Für das Sportjahr 1958/59 meldeten wir uns zu den Rundenwettkämpfen an.
          </p>
          <p className="mt-6">
          Wir waren einer Gruppe zusammen mit den Mannschaften aus den Vereinen
Eitra, Oberhaun, Unterhaun, Müsenbach, Stärklos und Giesenhain zugelost 
worden.<br/>
Die Mannschaften bestanden aus 4 Schützen, es wurden 15 Schuss geschossen.<br/>
Für uns gab es in unserer ersten Wettkampfsaison nur Niederlagen.<br/>
Nach 12 Wettkämpfen betrug die Gesamtringzahl 5145, das ergibt pro Kampf 
428,8 Ringe, jeder Schütze erreichte im Schnitt 107 Ringe. <br/>
Den Kopf ließ trotz allem keiner hängen und man kämpfte weiter.
          </p>
          <p className="mt-6">
          Auf der Jahreshauptversammlung 1959 wurde beschlossen ein zweites 
Luftgewehr zu kaufen.
          </p>
          <p className="mt-6">
          Mitte des Jahres legte der erste Vorsitzende Karl Weider sein Amt nieder 
begründet durch seinen Umzug nach Arzell.<br/>
Revierförster Hellige übernahm den Vorsitz. <br/>
Das bisherige Vereinslokal, die "Schloßschenke" wurde geschlossen und der 
Verein siedelte darauf in das "Gasthaus Fuhrmann" um.<br/>
Hier stand ein größerer Raum zur Verfügung, so dass vier Scheibenzuganlagen montiert werden konnten.
          </p>
          <p className="mt-6">
          Die Leistungen stiegen und es ging aufwärts mit dem Verein. Ein drittes 
Gewehr wurde angeschafft. <br/>
Die Mitgliederzahlen wuchsen, und wir waren in der Lage mit drei 
Mannschaften zu je 4 Schützen an den Wettkämpfen teilzunehmen.
          </p>
          <p className="mt-6">
          1960 wurde der Schützenkreis Hünfeld gegründet, zu dem der Verein ab da 
          gehört.
          </p>
          <p className="mt-6">
          1961 musste wieder ein neuer Vorstand gewählt werden. Der damalige 
1.Vorsitzende Hans-Helmut Bauer stand nach seinem Umzug nach Hanau 
nicht mehr zur Verfügung.
          </p>
          <p className="mt-6">
          Der neue Vorstand setzte sich nun wie folgt zusammen:
          </p>
          <ul className="mt-2 space-y-2">
            {[
              "1. Vorsitzender: Werner Hodes", "2. Vorsitzende: Ruth Stang",
              "Schießwarte: Wilhelm Prack und Heinz Brauner", "Kassenwart: Horst Leicht"
            ].map((post, index) => (
              <li key={index} className="bg-lime-100 p-2 rounded">{post}</li>
            ))}
          </ul>
          <p className="mt-6">
          Alexander Rosenthal wurde zum Ehrenvorsitzenden ernannt.
          </p>
          <p className="mt-6">
          Auf der Jahreshauptversammlung 1963 musste beschlossen werden auch 
dem Deutschen Sportbund beizutreten.<br/>
Auch wurde die Anschaffung von Pfeil und Bogen beschlossen. <br/>
Leider setzte sich diese Sportart bei uns aber nicht durch. <br/>
Ebenfalls beschlossen wurde die Anschaffung einer einheitlichen 
Schützentracht, die im nächsten Jahr geliefert wurde.
          </p>
          <p className="mt-6">
          Auf der Jahreshauptversammlung 1964 wurde beschlossen ein 
Geflügelpreisschiessen durchzuführen. Das Schießen wurde erfolgreich 
durchgeführt und füllte die Vereinskasse. Ein weiteres Gewehr konnte 
angeschafft werden.
          </p>
          <p className="mt-6">
          Im März 1964 führte der Verein die Kreismeisterschaft des Schützenkreises 
Hünfeld in der Turnhalle der Hermann-Lietz-Schule durch.

          </p>
          <p className="mt-6">
          Den Titel als Kreismeister konnte unsere A-Mannschaft mit 523 Ringen
erringen.
          </p>
          <p className="mt-6">Die Mannschaft bestand aus den folgenden Schützen:</p>
          <ul className="mt-2 space-y-2">
            {[
              "Kurt Jozwiak: 134 Ringe", "Horst Hochberger: 130 Ringe",
              "Horst Leicht: 126 Ringe", "Barbara Lent: 133 Ringe"
            ].map((post, index) => (
              <li key={index} className="bg-lime-100 p-2 rounded">{post}</li>
            ))}
          </ul>
          <p className="mt-6">Unsere B-Mannschaft erreichte mit 479 Ringen den 10. Platz.</p>
          <p className="mt-6">Bei der Gaumeisterschaft in Neuhof musste unser Verein zwei Ersatzschützen einsetzen und belegte hier ersatzgeschwächt den 5. Platz.</p>
          <p className="mt-6">Bei dem erstmals durchgeführten Kreiskönigsschießen auf dem 
Kreisschützenfest in Morles konnte unser Schützenkönig Horst Hochberger 
den Titel des ersten Kreisritters erringen.</p>
          <p className="mt-6">Die alte Gaststätte Fuhrmann musste 1968 der neuen Straße weichen.<br/>
Dadurch hatte der Verein zeitweise keinen Schießstand und alle Wettkämpfe 
wurden auswärts durchgeführt. <br/>
Nach dem Abriss wurde jedoch die neue Gastwirtschaft gebaut. Hier bekam 
der Verein im Keller des Neubaus einen Raum zur Verfügung gestellt, der 
selbst gestaltet werden musste. <br/>
Die Vereinskasse war leer, daher wurde der Verein Mitglied bei der Raiffeisen 
Bank, wo er einen Kredit zur Finanzierung des Inventars des neu 
eingerichteten Schießstands aufnahm. <br/>
Es wurden erstmals 6 neue halbautomatische Zuganlagen eingebaut.
</p>
          <p className="mt-6">1970 konnte der Schützenverein Giesenhain die geforderten neuen Regeln
und Auflagen an einen Schießstand nicht mehr erfüllen und entschloss sich 
daher sich dem Schützenverein Buchenau anzuschließen. <br/>
Der Verein nennt sich seitdem: Schützenverein Buchenau/Giesenhain e.V.</p>
          <p className="mt-6">1979 wurde das ehemalige Schulgebäude des Dorfs zum 
Dorfgemeinschaftshaus umgebaut. <br/>
Der Schützenverein beantragte in die leerstehenden Kellerräume des DGH 
einziehen zu dürfen. Dem Antrag wurde stattgegeben, und so konnte der 
Verein mit dem Ausbau des neuen Schießstandes und eines Gastraums 
beginnen. <br/>
In die neu entstandenen Räume zogen wir im Februar 1981 ein.</p>
          <p className="mt-6">Um die, durch den Umbau angefallenen, Schulden abzubauen, wurden 
Discoabende und ähnliche Veranstaltungen durchgeführt. In dem zwar 
kleinen aber gemütlichen Schützenraum konnte sich jeder wohlfühlen.</p>
          <p className="mt-6">Nach Durchführung verschiedener Veranstaltungen war die Vereinskasse 
ausreichend gefüllt, sodass die Wiederbeschaffung einer Fahne beschlossen 
werden konnte. <br/>
Die neue Fahne wurde am 13. Juli 1986 in einem feierlichen Akt während 
eines Schützenfestes geweiht.
</p>
          <p className="mt-6">1992 konnte der Schützenraum durch einen weiteren von der Gemeinde zur 
Verfügung gestellten Raum vergrößert werden. Wieder wurden die 
Ausbauarbeiten in Eigenleistung erbracht und im Oktober des Jahres 
beendet. </p>
          <p className="mt-6">Aktuell stellt der Verein eine Mannschaft, die regelmäßig an den 
Rundenwettkämpfen des Schützenbezirks 27 Fulda/Rhön teilnimmt.
</p>
          <p className="mt-6">Neue interessierte Personen sind dem Verein jederzeit als Mitglieder 
willkommen. <br/>
Die notwendige Ausrüstung zum Schießen wird durch den Verein zur 
Verfügung gestellt.</p>
        </div>
      )}
    </div>
  );
};

export default Vereinschronik;
