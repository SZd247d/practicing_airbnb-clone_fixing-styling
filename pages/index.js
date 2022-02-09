import Head from 'next/head'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LargeCard from '../Components/LargeCard'
import MeduimCards from '../Components/MeduimCards'
import SmallCard from '../Components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="bg-stone-200 min-h-screen">
      <Head>
        <title>Zaki Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Haeder */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull Some Data From A Server - API Endpints */}
            {exploreData?.map(({ img, location, distance }, index) => (
              <SmallCard
                key={index}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywere</h2>

          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide mx-auto">
            {cardsData?.map(({ img, title }, index) => (
              <MeduimCards key={index} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          description="Wishlists curated bu Airbnb."
          title="The Gratest Outdoors"
          buttonText="Get Inspired"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  // const data = await exploreData.json();

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
