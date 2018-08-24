import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import times from 'lodash/times'

import { Heading, Info } from '../components/Header'
import Layout from '../components/Layout'

import styles from './imprint.module.css'

const Section = ({
  className = '',
  title,
  children,
  content = null,
  gridArea = '',
}) => (
  <section className={classnames(styles.section, className, styles[gridArea])}>
    <h2 className="mql-xl">{title}</h2>
    <div className={classnames('mql-xs')}>{content || children}</div>
  </section>
)

const PrivacyPage = ({ data }) => {
  return (
    <Layout className={styles.Imprint}>
      <Heading className={styles.heading} title="Datenschutzerklärung" />

      <Section title="Datenschutzerklärung" gridArea="left">
        <p class="mt-5">
          Diese Erklärung gilt für folgende von der Retune Creative Technology
          GmbH betriebenen Seiten:
          <ul>
            <li>retune.de / retune.org</li>
            <li>retunefestival.de / retunefestival.com</li>
            <li>digitalartslab.de</li>
            <li>creativeproductionlab.de</li>
          </ul>
        </p>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>{' '}
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <h3>Datenerfassung auf unserer Website</h3>{' '}
        <p>
          <strong>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </strong>
        </p>{' '}
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </p>{' '}
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
        </p>{' '}
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>{' '}
        <p>
          Andere Daten werden automatisch beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
          betreten.
        </p>{' '}
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
        </p>{' '}
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>{' '}
        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
        </p>{' '}
        <p>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
          oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
          Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <h3>Analyse-Tools und Tools von Drittanbietern</h3>{' '}
        <p>
          Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit Cookies und mit
          sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
          erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
          zurückverfolgt werden. Sie können dieser Analyse widersprechen oder
          sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte
          Informationen dazu finden Sie in der folgenden Datenschutzerklärung.
        </p>{' '}
        <p>
          Sie können dieser Analyse widersprechen. Über die
          Widerspruchsmöglichkeiten werden wir Sie in dieser
          Datenschutzerklärung informieren.
        </p>
        <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>{' '}
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>{' '}
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>{' '}
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>{' '}
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>{' '}
        <p>
          {' '}
          Retune Creative Technology GmbH<br />
          Glogauer Str. 21<br />
          10999 Berlin
        </p>
        <p>
          Telefon: +49 30 48814483<br />
          E-Mail: datenschutz / at / retune.de
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
          an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3>Recht auf Datenübertragbarkeit</h3>{' '}
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>{' '}
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von “http://” auf “https://”
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>{' '}
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>
        <h3>Verschlüsselter Zahlungsverkehr auf dieser Website</h3>{' '}
        <p>
          Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine
          Verpflichtung, uns Ihre Zahlungsdaten (z.B. Kontonummer bei
          Einzugsermächtigung) zu übermitteln, werden diese Daten zur
          Zahlungsabwicklung benötigt.
        </p>{' '}
        <p>
          Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard,
          Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte
          SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von "http://" auf "https://"
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>{' '}
        <p>
          Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>
        <h3>Auskunft, Sperrung, Löschung</h3>{' '}
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden.
        </p>
        <h3>Widerspruch gegen Werbe-Mails</h3>{' '}
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>
        <h2>3. Datenerfassung auf unserer Website</h2>
        <h3>Cookies</h3>{' '}
        <p>
          Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert.
        </p>{' '}
        <p>
          Die meisten der von uns verwendeten Cookies sind so genannte
          “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch
          gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis
          Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser
          beim nächsten Besuch wiederzuerkennen.
        </p>{' '}
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browser
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </p>{' '}
        <p>
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind,
          werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
          Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
          Cookies zur technisch fehlerfreien und optimierten Bereitstellung
          seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres
          Surfverhaltens) gespeichert werden, werden diese in dieser
          Datenschutzerklärung gesondert behandelt.
        </p>
        <h3>Server-Log-Dateien</h3>{' '}
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>{' '}
        <ul>
          {' '}
          <li>Browsertyp und Browserversion</li>{' '}
          <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>{' '}
          <li>Hostname des zugreifenden Rechners</li>{' '}
          <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{' '}
        </ul>{' '}
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen.
        </p>{' '}
        <p>
          Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO,
          der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
          vorvertraglicher Maßnahmen gestattet.
        </p>
        <h3>Kontaktformular</h3>{' '}
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>{' '}
        <p>
          Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
          somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
          lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
          Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </p>{' '}
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
          – bleiben unberührt.
        </p>
        <h3>Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>{' '}
        <p>
          Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit
          sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des
          Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt
          auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von
          Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
          gestattet. Personenbezogene Daten über die Inanspruchnahme unserer
          Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir
          nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme
          des Dienstes zu ermöglichen oder abzurechnen.
        </p>{' '}
        <p>
          Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
          Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche
          Aufbewahrungsfristen bleiben unberührt.
        </p>
        <h3>
          Datenübermittlung bei Vertragsschluss für Online-Shops, Händler und
          Warenversand
        </h3>{' '}
        <p>
          Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies
          im Rahmen der Vertragsabwicklung notwendig ist, etwa an die mit der
          Lieferung der Ware betrauten Unternehmen oder das mit der
          Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende
          Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der
          Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer
          Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der
          Werbung, erfolgt nicht.
        </p>{' '}
        <p>
          Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO,
          der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
          vorvertraglicher Maßnahmen gestattet.
        </p>
        <h2>4. Analyse Tools und Werbung</h2>
        <h3>Matomo (ehemals Piwik)</h3>{' '}
        <p>
          Diese Website benutzt den Open Source Webanalysedienst Matomo. Matomo
          verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem
          Computer gespeichert werden und die eine Analyse der Benutzung der
          Website durch Sie ermöglichen. Dazu werden die durch den Cookie
          erzeugten Informationen über die Benutzung dieser Website auf unserem
          Server gespeichert. Die IP-Adresse wird vor der Speicherung
          anonymisiert.
        </p>{' '}
        <p>
          Matomo-Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.
        </p>{' '}
        <p>
          Die Speicherung von Matomo-Cookies erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
          Interesse an der anonymisierten Analyse des Nutzerverhaltens, um
          sowohl sein Webangebot als auch seine Werbung zu optimieren.
        </p>{' '}
        <p>
          Die durch den Cookie erzeugten Informationen über die Benutzung dieser
          Website werden nicht an Dritte weitergegeben. Sie können die
          Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
          Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass
          Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
          Website vollumfänglich werden nutzen können.
        </p>{' '}
        <p>
          Wenn Sie mit der Speicherung und Nutzung Ihrer Daten nicht
          einverstanden sind, können Sie die Speicherung und Nutzung hier
          deaktivieren. In diesem Fall wird in Ihrem Browser ein Opt-Out-Cookie
          hinterlegt, der verhindert, dass Matomo Nutzungsdaten speichert. Wenn
          Sie Ihre Cookies löschen, hat dies zur Folge, dass auch das Matomo
          Opt-Out-Cookie gelöscht wird. Das Opt-Out muss bei einem erneuten
          Besuch unserer Seite wieder aktiviert werden.
        </p>
        <iframe
          className={styles.iframe}
          src="https://piwik.retune.de/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=&fontColor=&fontSize=&fontFamily=Arial"
        />
        <h2>5. Newsletter</h2>
        <h3>Newsletterdaten</h3>{' '}
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
          benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen,
          welche uns die Überprüfung gestatten, dass Sie der Inhaber der
          angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters
          einverstanden sind. Weitere Daten werden nicht bzw. nur auf
          freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich
          für den Versand der angeforderten Informationen und geben diese nicht
          an Dritte weiter.
        </p>{' '}
        <p>
          Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
          Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
          Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des
          Newsletters können Sie jederzeit widerrufen, etwa über den
          "Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits
          erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </p>{' '}
        <p>
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
          Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter
          gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten,
          die zu anderen Zwecken bei uns gespeichert wurden (z.B.
          E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.
        </p>
        <h3>MailChimp</h3>{' '}
        <p>
          Diese Website nutzt die Dienste von MailChimp für den Versand von
          Newslettern. Anbieter ist die Rocket Science Group LLC, 675 Ponce De
          Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.
        </p>{' '}
        <p>
          MailChimp ist ein Dienst, mit dem u.a. der Versand von Newslettern
          organisiert und analysiert werden kann. Wenn Sie Daten zum Zwecke des
          Newsletterbezugs eingeben (z.B. E-Mail-Adresse), werden diese auf den
          Servern von MailChimp in den USA gespeichert.
        </p>{' '}
        <p>
          MailChimp verfügt über eine Zertifizierung nach dem
          “EU-US-Privacy-Shield”. Der “Privacy-Shield” ist ein Übereinkommen
          zwischen der Europäischen Union (EU) und den USA, das die Einhaltung
          europäischer Datenschutzstandards in den USA gewährleisten soll.
        </p>{' '}
        <p>
          Mit Hilfe von MailChimp können wir unsere Newsletterkampagnen
          analysieren. Wenn Sie eine mit MailChimp versandte E-Mail öffnen,
          verbindet sich eine in der E-Mail enthaltene Datei (sog. web-beacon)
          mit den Servern von MailChimp in den USA. So kann festgestellt werden,
          ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt
          wurden. Außerdem werden technische Informationen erfasst (z.B.
          Zeitpunkt des Abrufs, IP-Adresse, Browsertyp und Betriebssystem).
          Diese Informationen können nicht dem jeweiligen Newsletter-Empfänger
          zugeordnet werden. Sie dienen ausschließlich der statistischen Analyse
          von Newsletterkampagnen. Die Ergebnisse dieser Analysen können genutzt
          werden, um künftige Newsletter besser an die Interessen der Empfänger
          anzupassen.
        </p>{' '}
        <p>
          Wenn Sie keine Analyse durch MailChimp wollen, müssen Sie den
          Newsletter abbestellen. Hierfür stellen wir in jeder
          Newsletternachricht einen entsprechenden Link zur Verfügung. Des
          Weiteren können Sie den Newsletter auch direkt auf der Website
          abbestellen.
        </p>{' '}
        <p>
          Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit
          widerrufen, indem Sie den Newsletter abbestellen. Die Rechtmäßigkeit
          der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
          unberührt.
        </p>{' '}
        <p>
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
          Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter
          gespeichert und nach der Abbestellung des Newsletters sowohl von
          unseren Servern als auch von den Servern von MailChimp gelöscht.
          Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B.
          E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.
        </p>{' '}
        <p>
          Näheres entnehmen Sie den Datenschutzbestimmungen von MailChimp unter:{' '}
          <a href="https://mailchimp.com/legal/terms/" target="_blank">
            https://mailchimp.com/legal/terms/
          </a>.
        </p>
        <p>
          <strong>Abschluss eines Data-Processing-Agreements</strong>
        </p>{' '}
        <p>
          Wir haben ein sog. „Data-Processing-Agreement“ mit MailChimp
          abgeschlossen, in dem wir MailChimp verpflichten, die Daten unserer
          Kunden zu schützen und sie nicht an Dritte weiterzugeben. Dieser
          Vertrag kann unter folgendem Link eingesehen werden:{' '}
          <a
            href="https://mailchimp.com/legal/forms/data-processing-agreement/sample-agreement/"
            target="_blank"
          >
            https://mailchimp.com/legal/forms/data-processing-agreement/sample-agreement/
          </a>.
        </p>
        <h2>6. Plugins und Tools</h2>
        <h3>YouTube</h3>{' '}
        <p>
          Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube.
          Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno,
          CA 94066, USA.
        </p>{' '}
        <p>
          Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten
          besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt.
          Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie
          besucht haben.
        </p>{' '}
        <p>
          Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie
          YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil
          zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem
          YouTube-Account ausloggen.
        </p>{' '}
        <p>
          Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
          Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
        </p>{' '}
        <p>
          Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von YouTube unter:{' '}
          <a
            href="https://www.google.de/intl/de/policies/privacy"
            target="_blank"
          >
            https://www.google.de/intl/de/policies/privacy
          </a>.
        </p>
        <h3>Vimeo</h3>{' '}
        <p>
          Unsere Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die
          Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.
        </p>{' '}
        <p>
          Wenn Sie eine unserer mit einem Vimeo-Plugin ausgestatteten Seiten
          besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt.
          Dabei wird dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie
          besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch
          dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei
          Vimeo besitzen. Die von Vimeo erfassten Informationen werden an den
          Vimeo-Server in den USA übermittelt.
        </p>{' '}
        <p>
          Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermöglichen Sie
          Vimeo, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen.
          Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account
          ausloggen.
        </p>{' '}
        <p>
          Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von Vimeo unter:{' '}
          <a href="https://vimeo.com/privacy" target="_blank">
            https://vimeo.com/privacy
          </a>.
        </p>
        <h3>Google Maps</h3>{' '}
        <p>
          Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter
          ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
          94043, USA.
        </p>{' '}
        <p>
          Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP
          Adresse zu speichern. Diese Informationen werden in der Regel an einen
          Server von Google in den USA übertragen und dort gespeichert. Der
          Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
        </p>{' '}
        <p>
          Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote und an einer leichten
          Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
          stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
          DSGVO dar.
        </p>{' '}
        <p>
          Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von Google:{' '}
          <a
            href="https://www.google.de/intl/de/policies/privacy/"
            target="_blank"
          >
            https://www.google.de/intl/de/policies/privacy/
          </a>.
        </p>
        <h3>SoundCloud</h3>{' '}
        <p>
          Auf unseren Seiten können Plugins des sozialen Netzwerks SoundCloud
          (SoundCloud Limited, Berners House, 47-48 Berners Street, London W1T
          3NF, Großbritannien.) integriert sein. Die SoundCloud-Plugins erkennen
          Sie an dem SoundCloud-Logo auf den betroffenen Seiten.
        </p>{' '}
        <p>
          Wenn Sie unsere Seiten besuchen, wird nach Aktivierung des Plugin eine
          direkte Verbindung zwischen Ihrem Browser und dem SoundCloud-Server
          hergestellt. SoundCloud erhält dadurch die Information, dass Sie mit
          Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den
          “Like-Button” oder “Share-Button” anklicken während Sie in Ihrem
          SoundCloud- Benutzerkonto eingeloggt sind, können Sie die Inhalte
          unserer Seiten mit Ihrem SoundCloud-Profil verlinken und/oder teilen.
          Dadurch kann SoundCloud Ihrem Benutzerkonto den Besuch unserer Seiten
          zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten
          keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung
          durch SoundCloud erhalten. Weitere Informationen hierzu finden Sie in
          der Datenschutzerklärung von SoundCloud unter:{' '}
          <a href="https://soundcloud.com/pages/privacy" target="_blank">
            https://soundcloud.com/pages/privacy
          </a>.
        </p>{' '}
        <p>
          Wenn Sie nicht wünschen, dass SoundCloud den Besuch unserer Seiten
          Ihrem SoundCloud- Benutzerkonto zuordnet, loggen Sie sich bitte aus
          Ihrem SoundCloud-Benutzerkonto aus bevor Sie Inhalte des
          SoundCloud-Plugins aktivieren.
        </p>
        <h2>7. Zahlungsanbieter</h2>
        <h3>PayPal</h3>{' '}
        <p>
          Auf unserer Website bieten wir u.a. die Bezahlung via PayPal an.
          Anbieter dieses Zahlungsdienstes ist die PayPal (Europe) S.à.r.l. et
          Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden
          “PayPal”).
        </p>{' '}
        <p>
          Wenn Sie die Bezahlung via PayPal auswählen, werden die von Ihnen
          eingegebenen Zahlungsdaten an PayPal übermittelt.
        </p>{' '}
        <p>
          Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
          (Verarbeitung zur Erfüllung eines Vertrags). Sie haben die
          Möglichkeit, Ihre Einwilligung zur Datenverarbeitung jederzeit zu
          widerrufen. Ein Widerruf wirkt sich auf die Wirksamkeit von in der
          Vergangenheit liegenden Datenverarbeitungsvorgängen nicht aus.
        </p>
      </Section>
      <Section title="Privacy" gridArea="right">
        <p class="mt-5">
          This Privacy Policy is valid for all pages run by Retune Creative
          Technology GmbH:
          <ul>
            <li>retune.de / retune.org</li>
            <li>retunefestival.de / retunefestival.com</li>
            <li>digitalartslab.de</li>
            <li>creativeproductionlab.de</li>
          </ul>
        </p>
        <h2>1. An overview of data protection</h2>
        <h3>General</h3>{' '}
        <p>
          The following gives a simple overview of what happens to your personal
          information when you visit our website. Personal information is any
          data with which you could be personally identified. Detailed
          information on the subject of data protection can be found in our
          privacy policy found below.
        </p>
        <h3>Data collection on our website</h3>{' '}
        <p>
          <strong>
            Who is responsible for the data collection on this website?
          </strong>
        </p>{' '}
        <p>
          The data collected on this website are processed by the website
          operator. The operator's contact details can be found in the website's
          required legal notice.
        </p>{' '}
        <p>
          <strong>How do we collect your data?</strong>
        </p>{' '}
        <p>
          Some data are collected when you provide it to us. This could, for
          example, be data you enter on a contact form.
        </p>{' '}
        <p>
          Other data are collected automatically by our IT systems when you
          visit the website. These data are primarily technical data such as the
          browser and operating system you are using or when you accessed the
          page. These data are collected automatically as soon as you enter our
          website.
        </p>{' '}
        <p>
          <strong>What do we use your data for?</strong>
        </p>{' '}
        <p>
          Part of the data is collected to ensure the proper functioning of the
          website. Other data can be used to analyze how visitors use the site.
        </p>{' '}
        <p>
          <strong>What rights do you have regarding your data?</strong>
        </p>{' '}
        <p>
          You always have the right to request information about your stored
          data, its origin, its recipients, and the purpose of its collection at
          no charge. You also have the right to request that it be corrected,
          blocked, or deleted. You can contact us at any time using the address
          given in the legal notice if you have further questions about the
          issue of privacy and data protection. You may also, of course, file a
          complaint with the competent regulatory authorities.
        </p>
        <h3>Analytics and third-party tools</h3>{' '}
        <p>
          When visiting our website, statistical analyses may be made of your
          surfing behavior. This happens primarily using cookies and analytics.
          The analysis of your surfing behavior is usually anonymous, i.e. we
          will not be able to identify you from this data. You can object to
          this analysis or prevent it by not using certain tools. Detailed
          information can be found in the following privacy policy.
        </p>{' '}
        <p>
          You can object to this analysis. We will inform you below about how to
          exercise your options in this regard.
        </p>
        <h2>2. General information and mandatory information</h2>
        <h3>Data protection</h3>{' '}
        <p>
          The operators of this website take the protection of your personal
          data very seriously. We treat your personal data as confidential and
          in accordance with the statutory data protection regulations and this
          privacy policy.
        </p>{' '}
        <p>
          If you use this website, various pieces of personal data will be
          collected. Personal information is any data with which you could be
          personally identified. This privacy policy explains what information
          we collect and what we use it for. It also explains how and for what
          purpose this happens.
        </p>{' '}
        <p>
          Please note that data transmitted via the internet (e.g. via email
          communication) may be subject to security breaches. Complete
          protection of your data from third-party access is not possible.
        </p>
        <h3>Notice concerning the party responsible for this website</h3>{' '}
        <p>The party responsible for processing data on this website is:</p>{' '}
        <p>
          {' '}
          Retune Creative Technology GmbH<br />
          Glogauer Str. 21<br />
          10999 Berlin
        </p>
        <p>
          Telephone: +49 30 48814483<br />
          Email: datenschutz / at / retune.de
        </p>
        <p>
          The responsible party is the natural or legal person who alone or
          jointly with others decides on the purposes and means of processing
          personal data (names, email addresses, etc.).
        </p>
        <h3>Revocation of your consent to the processing of your data</h3>{' '}
        <p>
          Many data processing operations are only possible with your express
          consent. You may revoke your consent at any time with future effect.
          An informal email making this request is sufficient. The data
          processed before we receive your request may still be legally
          processed.
        </p>
        <h3>Right to data portability</h3>{' '}
        <p>
          You have the right to have data which we process based on your consent
          or in fulfillment of a contract automatically delivered to yourself or
          to a third party in a standard, machine-readable format. If you
          require the direct transfer of data to another responsible party, this
          will only be done to the extent technically feasible.
        </p>
        <h3>SSL or TLS encryption</h3>{' '}
        <p>
          This site uses SSL or TLS encryption for security reasons and for the
          protection of the transmission of confidential content, such as the
          inquiries you send to us as the site operator. You can recognize an
          encrypted connection in your browser's address line when it changes
          from "http://" to "https://" and the lock icon is displayed in your
          browser's address bar.
        </p>{' '}
        <p>
          If SSL or TLS encryption is activated, the data you transfer to us
          cannot be read by third parties.
        </p>
        <h3>Encrypted payments on this website</h3>{' '}
        <p>
          If you enter into a contract which requires you to send us your
          payment information (e.g. account number for direct debits), we will
          require this data to process your payment.
        </p>{' '}
        <p>
          Payment transactions using common means of payment (Visa/MasterCard,
          direct debit) are only made via encrypted SSL or TLS connections. You
          can recognize an encrypted connection in your browser's address line
          when it changes from "http://" to "https://" and the lock icon in your
          browser line is visible.
        </p>{' '}
        <p>
          In the case of encrypted communication, any payment details you submit
          to us cannot be read by third parties.
        </p>
        <h3>Information, blocking, deletion</h3>{' '}
        <p>
          As permitted by law, you have the right to be provided at any time
          with information free of charge about any of your personal data that
          is stored as well as its origin, the recipient and the purpose for
          which it has been processed. You also have the right to have this data
          corrected, blocked or deleted. You can contact us at any time using
          the address given in our legal notice if you have further questions on
          the topic of personal data.
        </p>
        <h3>Opposition to promotional emails</h3>{' '}
        <p>
          We hereby expressly prohibit the use of contact data published in the
          context of website legal notice requirements with regard to sending
          promotional and informational materials not expressly requested. The
          website operator reserves the right to take specific legal action if
          unsolicited advertising material, such as email spam, is received.
        </p>
        <h2>3. Data collection on our website</h2>
        <h3>Cookies</h3>{' '}
        <p>
          Some of our web pages use cookies. Cookies do not harm your computer
          and do not contain any viruses. Cookies help make our website more
          user-friendly, efficient, and secure. Cookies are small text files
          that are stored on your computer and saved by your browser.
        </p>{' '}
        <p>
          Most of the cookies we use are so-called "session cookies." They are
          automatically deleted after your visit. Other cookies remain in your
          device's memory until you delete them. These cookies make it possible
          to recognize your browser when you next visit the site.
        </p>{' '}
        <p>
          You can configure your browser to inform you about the use of cookies
          so that you can decide on a case-by-case basis whether to accept or
          reject a cookie. Alternatively, your browser can be configured to
          automatically accept cookies under certain conditions or to always
          reject them, or to automatically delete cookies when closing your
          browser. Disabling cookies may limit the functionality of this
          website.
        </p>{' '}
        <p>
          Cookies which are necessary to allow electronic communications or to
          provide certain functions you wish to use (such as the shopping cart)
          are stored pursuant to Art. 6 paragraph 1, letter f of DSGVO. The
          website operator has a legitimate interest in the storage of cookies
          to ensure an optimized service provided free of technical errors. If
          other cookies (such as those used to analyze your surfing behavior)
          are also stored, they will be treated separately in this privacy
          policy.
        </p>
        <h3>Server log files</h3>{' '}
        <p>
          The website provider automatically collects and stores information
          that your browser automatically transmits to us in "server log files".
          These are:
        </p>{' '}
        <ul>
          {' '}
          <li>Browser type and browser version</li>{' '}
          <li>Operating system used</li> <li>Referrer URL</li>{' '}
          <li>Host name of the accessing computer</li>{' '}
          <li>Time of the server request</li> <li>IP address</li>{' '}
        </ul>{' '}
        <p>These data will not be combined with data from other sources.</p>{' '}
        <p>
          The basis for data processing is Art. 6 (1) (f) DSGVO, which allows
          the processing of data to fulfill a contract or for measures
          preliminary to a contract.
        </p>
        <h3>Contact form</h3>{' '}
        <p>
          Should you send us questions via the contact form, we will collect the
          data entered on the form, including the contact details you provide,
          to answer your question and any follow-up questions. We do not share
          this information without your permission.
        </p>{' '}
        <p>
          We will, therefore, process any data you enter onto the contact form
          only with your consent per Art. 6 (1)(a) DSGVO. You may revoke your
          consent at any time. An informal email making this request is
          sufficient. The data processed before we receive your request may
          still be legally processed.
        </p>{' '}
        <p>
          We will retain the data you provide on the contact form until you
          request its deletion, revoke your consent for its storage, or the
          purpose for its storage no longer pertains (e.g. after fulfilling your
          request). Any mandatory statutory provisions, especially those
          regarding mandatory data retention periods, remain unaffected by this
          provision.
        </p>
        <h3>Processing of data (customer and contract data)</h3>{' '}
        <p>
          We collect, process, and use personal data only insofar as it is
          necessary to establish, or modify legal relationships with us (master
          data). This is done based on Art. 6 (1) (b) DSGVO, which allows the
          processing of data to fulfill a contract or for measures preliminary
          to a contract. We collect, process and use your personal data when
          accessing our website (usage data) only to the extent required to
          enable you to access our service or to bill you for the same.
        </p>{' '}
        <p>
          Collected customer data shall be deleted after completion of the order
          or termination of the business relationship. Legal retention periods
          remain unaffected.
        </p>
        <h3>
          Data transmitted when entering into a contract with online shops,
          retailers, and mail order
        </h3>{' '}
        <p>
          We transmit personally identifiable data to third parties only to the
          extent required to fulfill the terms of your contract, for example, to
          companies entrusted to deliver goods to your location or banks
          entrusted to process your payments. Your data will not be transmitted
          for any other purpose unless you have given your express permission to
          do so. Your data will not be disclosed to third parties for
          advertising purposes without your express consent.
        </p>{' '}
        <p>
          The basis for data processing is Art. 6 (1) (b) DSGVO, which allows
          the processing of data to fulfill a contract or for measures
          preliminary to a contract.
        </p>
        <h2>4. Analytics and advertising</h2>
        <h3>Matomo (formerly Piwik)</h3>{' '}
        <p>
          This website uses the open source web analytics service Matomo. Matomo
          uses so-called "cookies". These are text files that are stored on your
          computer and that allow an analysis of the use of the website by you.
          For this purpose, the information generated by the cookie about the
          use of this website is stored on our server. The IP address is
          anonymized before it is stored.
        </p>{' '}
        <p>Matomo cookies remain on your device until you delete them.</p>{' '}
        <p>
          The storage of Matomo cookies is based on Art. 6 (1) (f) DSGVO. The
          website operator has a legitimate interest in analyzing user behavior
          in order to optimize both its website and its advertising.
        </p>{' '}
        <p>
          The information generated by the cookies about your use of this
          website will not be disclosed to third parties. You can prevent these
          cookies being stored by selecting the appropriate settings in your
          browser. However, we wish to point out that doing so may mean you will
          not be able to enjoy the full functionality of this website.
        </p>{' '}
        <p>
          If you do not agree with the storage and use of your data, you can
          disable this feature here. In this case, an opt-out cookie will be
          stored in your browser to prevent Matomo from storing your usage data.
          If you delete your cookies, this will mean that the opt-out cookie
          will also be deleted. You will then need to reactivate it when you
          return to our site if you wish your activity not to be tracked.
        </p>
        <iframe
          className={styles.iframe}
          src="https://piwik.retune.de/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=&fontColor=&fontSize=&fontFamily=Arial"
        />
        <h2>5. Newsletter</h2>
        <h3>Newsletter data</h3>{' '}
        <p>
          If you would like to receive our newsletter, we require a valid email
          address as well as information that allows us to verify that you are
          the owner of the specified email address and that you agree to receive
          this newsletter. No additional data is collected or is only collected
          on a voluntary basis. We only use this data to send the requested
          information and do not pass it on to third parties.
        </p>{' '}
        <p>
          We will, therefore, process any data you enter onto the contact form
          only with your consent per Art. 6 (1) (a) DSGVO. You can revoke
          consent to the storage of your data and email address as well as their
          use for sending the newsletter at any time, e.g. through the
          "unsubscribe" link in the newsletter. The data processed before we
          receive your request may still be legally processed.
        </p>{' '}
        <p>
          The data provided when registering for the newsletter will be used to
          distribute the newsletter until you cancel your subscription when said
          data will be deleted. Data we have stored for other purposes (e.g.
          email addresses for the members area) remain unaffected.
        </p>
        <h3>MailChimp</h3>{' '}
        <p>
          This website uses the services of MailChimp to send newsletters. This
          service is provided by Rocket Science Group LLC, 675 Ponce De Leon Ave
          NE, Suite 5000, Atlanta, GA 30308, USA.
        </p>{' '}
        <p>
          MailChimp is a service which organizes and analyzes the distribution
          of newsletters. If you provide data (e.g. your email address) to
          subscribe to our newsletter, it will be stored on MailChimp servers in
          the USA.
        </p>{' '}
        <p>
          MailChimp is certified under the EU-US Privacy Shield. The Privacy
          Shield is an agreement between the European Union (EU) and the US to
          ensure compliance with European privacy standards in the United
          States.
        </p>{' '}
        <p>
          We use MailChimp to analyze our newsletter campaigns. When you open an
          email sent by MailChimp, a file included in the email (called a web
          beacon) connects to MailChimp's servers in the United States. This
          allows us to determine if a newsletter message has been opened and
          which links you click on. In addition, technical information is
          collected (e.g. time of retrieval, IP address, browser type, and
          operating system). This information cannot be assigned to a specific
          recipient. It is used exclusively for the statistical analysis of our
          newsletter campaigns. The results of these analyses can be used to
          better tailor future newsletters to your interests.
        </p>{' '}
        <p>
          If you do not want your usage of the newsletter to be analyzed by
          MailChimp, you will have to unsubscribe from the newsletter. For this
          purpose, we provide a link in every newsletter we send. You can also
          unsubscribe from the newsletter directly on the website.
        </p>{' '}
        <p>
          Data processing is based on Art. 6 (1) (a) DSGVO. You may revoke your
          consent at any time by unsubscribing to the newsletter. The data
          processed before we receive your request may still be legally
          processed.
        </p>{' '}
        <p>
          The data provided when registering for the newsletter will be used to
          distribute the newsletter until you cancel your subscription when said
          data will be deleted from our servers and those of MailChimp. Data we
          have stored for other purposes (e.g. email addresses for the members
          area) remains unaffected.
        </p>{' '}
        <p>
          For details, see the MailChimp privacy policy at{' '}
          <a href="https://mailchimp.com/legal/terms/" target="_blank">
            https://mailchimp.com/legal/terms/
          </a>.
        </p>
        <p>
          <strong>Completion of a data processing agreement</strong>
        </p>{' '}
        <p>
          We have entered into a data processing agreement with MailChimp, in
          which we require MailChimp to protect the data of our customers and
          not to disclose said data to third parties. This agreement may be
          viewed at the following link:{' '}
          <a
            href="https://mailchimp.com/legal/forms/data-processing-agreement/sample-agreement/"
            target="_blank"
          >
            https://mailchimp.com/legal/forms/data-processing-agreement/sample-agreement/
          </a>.
        </p>
        <h2>6. Plugins and tools</h2>
        <h3>YouTube</h3>{' '}
        <p>
          Our website uses plugins from YouTube, which is operated by Google.
          The operator of the pages is YouTube LLC, 901 Cherry Ave., San Bruno,
          CA 94066, USA.
        </p>{' '}
        <p>
          If you visit one of our pages featuring a YouTube plugin, a connection
          to the YouTube servers is established. Here the YouTube server is
          informed about which of our pages you have visited.
        </p>{' '}
        <p>
          If you're logged in to your YouTube account, YouTube allows you to
          associate your browsing behavior directly with your personal profile.
          You can prevent this by logging out of your YouTube account.
        </p>{' '}
        <p>
          YouTube is used to help make our website appealing. This constitutes a
          justified interest pursuant to Art. 6 (1) (f) DSGVO.
        </p>{' '}
        <p>
          Further information about handling user data, can be found in the data
          protection declaration of YouTube under{' '}
          <a
            href="https://www.google.de/intl/de/policies/privacy"
            target="_blank"
          >
            https://www.google.de/intl/de/policies/privacy
          </a>.
        </p>
        <h3>Vimeo</h3>{' '}
        <p>
          Our website uses features provided by the Vimeo video portal. This
          service is provided by Vimeo Inc., 555 West 18th Street, New York, New
          York 10011, USA.
        </p>{' '}
        <p>
          If you visit one of our pages featuring a Vimeo plugin, a connection
          to the Vimeo servers is established. Here the Vimeo server is informed
          about which of our pages you have visited. In addition, Vimeo will
          receive your IP address. This also applies if you are not logged in to
          Vimeo when you visit our website or do not have a Vimeo account. The
          information is transmitted to a Vimeo server in the US, where it is
          stored.
        </p>{' '}
        <p>
          If you are logged in to your Vimeo account, Vimeo allows you to
          associate your browsing behavior directly with your personal profile.
          You can prevent this by logging out of your Vimeo account.
        </p>{' '}
        <p>
          For more information on how to handle user data, please refer to the
          Vimeo Privacy Policy at{' '}
          <a href="https://vimeo.com/privacy" target="_blank">
            https://vimeo.com/privacy
          </a>.
        </p>
        <h3>Google Maps</h3>{' '}
        <p>
          This site uses the Google Maps map service via an API. It is operated
          by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043,
          USA.
        </p>{' '}
        <p>
          To use Google Maps, it is necessary to save your IP address. This
          information is generally transmitted to a Google server in the USA and
          stored there. The provider of this site has no influence on this data
          transfer.
        </p>{' '}
        <p>
          The use of Google Maps is in the interest of making our website
          appealing and to facilitate the location of places specified by us on
          the website. This constitutes a justified interest pursuant to Art. 6
          (1) (f) DSGVO.
        </p>{' '}
        <p>
          Further information about handling user data, can be found in the data
          protection declaration of Google at{' '}
          <a
            href="https://www.google.de/intl/de/policies/privacy/"
            target="_blank"
          >
            https://www.google.de/intl/de/policies/privacy/
          </a>.
        </p>
        <h3>SoundCloud</h3>{' '}
        <p>
          On our pages, plugins of the SoundCloud social network (SoundCloud
          Limited, Berners House, 47-48 Berners Street, London W1T 3NF, UK) may
          be integrated. The SoundCloud plugins can be recognized by the
          SoundCloud logo on our site.
        </p>{' '}
        <p>
          When you visit our site, a direct connection between your browser and
          the SoundCloud server is established via the plugin. This enables
          SoundCloud to receive information that you have visited our site from
          your IP address. If you click on the "Like" or "Share" buttons while
          you are logged into your SoundCloud account, you can link the content
          of our pages to your SoundCloud profile. This means that SoundCloud
          can associate visits to our pages with your user account. We would
          like to point out that, as the provider of these pages, we have no
          knowledge of the content of the data transmitted or how it will be
          used by SoundCloud. For more information on SoundCloud's privacy
          policy, please go to{' '}
          <a href="https://soundcloud.com/pages/privacy" target="_blank">
            https://soundcloud.com/pages/privacy
          </a>.
        </p>{' '}
        <p>
          If you do not want SoundCloud to associate your visit to our site with
          your SoundCloud account, please log out of your SoundCloud account.
        </p>
        <h2>7. Payment service providers</h2>
        <h3>PayPal</h3>{' '}
        <p>
          Our website accepts payments via PayPal. The provider of this service
          is PayPal (Europe) S.à.r.l & Cie, S.C.A. (22-24 Boulevard Royal,
          L-2449 Luxembourg.
        </p>{' '}
        <p>
          If you select payment via PayPal, the payment data you provide will be
          supplied to PayPal based on Art. 6 (1) (a) (Consent) and Art. 6 (1)
          (b) DSGVO (Processing for contract purposes). You have the option to
          revoke your consent at any time with future effect. It does not affect
          the processing of data previously collected.
        </p>
      </Section>
    </Layout>
  )
}

export default PrivacyPage
