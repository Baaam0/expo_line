import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.head}>
        <a href="https://www.translink.ca/">
        <Image src="/translink_logo.png" alt="translink blue logo" height={50} width={100} />
        </a>
      </header>

      <main className={styles.main}>
        <h1>Expo line Stations</h1>
        <div className={styles.mapCont}>
          <Map/>
          <div>
            <h4>The Expo Line operates two routes:</h4>
            <ul>
              <li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
              <li>Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)</li>
            </ul>
            <h4>Transfer to the Millennium Line at the following stations:</h4>
            <ul>
              <li>Commercial–Broadway Station</li>
              <li>Lougheed Town Centre Station</li>
              <li>Production Way–University Station</li>
            </ul>
            <h4>Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.</h4>
            <h4>Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.</h4>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div style={{flexGrow: 2}}>
          <a href="https://www.translink.ca/">
            <Image src="/translink_logo.png" alt="translink blue logo" height={80} width={200} />
          </a>
          <p>Metro Vancouvers transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
        </div>

        <div className={styles.foot1} style={{flexGrow: 1}}>
          <ul>
            <h3>Getting Around</h3>
            <p><a href="https://www.translink.ca/transit-fares">Transit Fares</a></p>
            <p><a href="https://www.translink.ca/schedules-and-maps?page=1">Schedules</a></p>
            <p><a href="https://www.translink.ca/rider-guide">Rider Info</a></p>
            <p><a href="https://www.translink.ca/alerts">Transit Alerts</a></p>
          </ul>
        </div>

        <div className={styles.foot2} style={{flexGrow: 1}}>
          <ul>
            <h3>Resources</h3>
            <p><a href="https://www.translink.ca/about-us/customer-service/contact-information">Contact Us</a></p>
            <p><a href="https://www.translink.ca/about-us/careers">Careers</a></p>
          </ul>
        </div>
        
          <div className={styles.foot3} style={{flexGrow: 1}}>
            <ul>
              <h3>Contact Us</h3>
              <p>Call us at 604.953.3333</p>
              <p>400-287 Nelsons Ct.,<br/> New Westminster, BC V3L0E7</p>
            </ul>
          </div>
      </footer>

    </div>
  )
}
