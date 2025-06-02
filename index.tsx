import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Bradbury</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Georgia, serif' }}>
        <h1>Bradbury</h1>
        <p>A daily stream of curated art, literature, news, and music.</p>
      </main>
    </>
  );
}
