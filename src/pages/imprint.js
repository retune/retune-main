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

const ImprintPage = ({ data }) => {
  return (
    <Layout className={styles.Imprint}>
      <Heading className={styles.heading} title="Imprint" />
      <div className={classnames(styles.info, 'mql-m mqs-s')}>
        Accountability for the internet pages retune.de and retune.org is:
        Retune Creative Technology GmbH, Glogauer Str. 21, 10999 Berlin
        webmaster@retune.de, HRB 174120 B
      </div>

      <Section title="Impressum" gridArea="left">
        <p class="mt-5">
          Dieses Impressum gilt für alle von der Retune Creative Technology GmbH
          betriebenen Seiten:
          <ul>
            <li>retune.de / retune.org</li>
            <li>retunefestival.de / retunefestival.com</li>
            <li>digitalartslab.de</li>
            <li>creativeproductionlab.de</li>
          </ul>
        </p>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>
          Retune Creative Technology GmbH<br />
          Glogauer Str. 21<br />
          10999 Berlin
        </p>
        <h2>Vertreten durch:</h2>
        <p> Geschäftsführer: Julian Adenauer</p>
        <h2>Kontakt:</h2>
        <p>
          Telefon: +49 30 48814483<br />
          E-Mail: impressum@retune.de
        </p>
        <h2>Registereintrag:</h2>
        <p>
          Eintragung im Handelsregister. <br />
          Registergericht:Amtsgericht Charlottenburg <br />
          Registernummer: HRB 174120 B
        </p>
        <h2>Umsatzsteuer:</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 815 62 32 85
        </p>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank">
            https://ec.europa.eu/consumers/odr
          </a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h3>Haftung für Inhalte</h3>{' '}
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>{' '}
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>{' '}
        <h3>Haftung für Links</h3>{' '}
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>{' '}
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>{' '}
        <h3>Urheberrecht</h3>{' '}
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>{' '}
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </Section>

      <Section title="Imprint" gridArea="right">
        <p class="mt-5">
          This Site Notice is valid for all pages run by Retune Creative
          Technology GmbH:
          <ul>
            <li>retune.de / retune.org</li>
            <li>retunefestival.de / retunefestival.com</li>
            <li>digitalartslab.de</li>
            <li>creativeproductionlab.de</li>
          </ul>
        </p>
        <h2>
          Information provided according to Sec. 5 German Telemedia Act (TMG):
        </h2>
        <p>
          Retune Creative Technology GmbH<br />
          Glogauer Str. 21<br />
          10999 Berlin
        </p>
        <h2>Represented by:</h2>
        <p> Geschäftsführer: Julian Adenauer</p>
        <h2>Contact:</h2>
        <p>
          Telephone: +49 30 48814483<br />
          Email: impressum@retune.de
        </p>
        <h2>Register entry:</h2>
        <p>
          Entry in the Handelsregister. <br />
          Registering court:Amtsgericht Charlottenburg <br />
          Registration number: HRB 174120 B
        </p>
        <h2>VAT:</h2>
        <p>
          VAT Id number according to Sec. 27 a German Value Added Tax Act:<br />
          DE 815 62 32 85
        </p>
        <h2>Dispute resolution</h2>
        <p>
          The European Commission provides a platform for online dispute
          resolution (OS):{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank">
            https://ec.europa.eu/consumers/odr
          </a>.<br /> Please find our email in the impressum/legal notice.
        </p>
        <p> </p>
        <p>
          We do not take part in online dispute resolutions at consumer
          arbitration boards.
        </p>
        <h3>Liability for Contents</h3>{' '}
        <p>
          As service providers, we are liable for own contents of these websites
          according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However,
          according to Sec. 8 to 10 German Telemedia Act (TMG), service
          providers are not obligated to permanently monitor submitted or stored
          information or to search for evidences that indicate illegal
          activities.
        </p>{' '}
        <p>
          Legal obligations to removing information or to blocking the use of
          information remain unchallenged. In this case, liability is only
          possible at the time of knowledge about a specific violation of law.
          Illegal contents will be removed immediately at the time we get
          knowledge of them.
        </p>{' '}
        <h3>Liability for Links</h3>{' '}
        <p>
          Our offer includes links to external third party websites. We have no
          influence on the contents of those websites, therefore we cannot
          guarantee for those contents. Providers or administrators of linked
          websites are always responsible for their own contents.
        </p>{' '}
        <p>
          The linked websites had been checked for possible violations of law at
          the time of the establishment of the link. Illegal contents were not
          detected at the time of the linking. A permanent monitoring of the
          contents of linked websites cannot be imposed without reasonable
          indications that there has been a violation of law. Illegal links will
          be removed immediately at the time we get knowledge of them.
        </p>{' '}
        <h3>Copyright</h3>{' '}
        <p>
          Contents and compilations published on these websites by the providers
          are subject to German copyright laws. Reproduction, editing,
          distribution as well as the use of any kind outside the scope of the
          copyright law require a written permission of the author or
          originator. Downloads and copies of these websites are permitted for
          private use only.<br /> The commercial use of our contents without
          permission of the originator is prohibited.
        </p>{' '}
        <p>
          Copyright laws of third parties are respected as long as the contents
          on these websites do not originate from the provider. Contributions of
          third parties on this site are indicated as such. However, if you
          notice any violations of copyright law, please inform us. Such
          contents will be removed immediately.
        </p>
        <p> </p>
      </Section>
    </Layout>
  )
}

export default ImprintPage
