import Link from '../src/components/Link'
import Head from 'next/head'

// export async function getServerSideProps() {
//  console.log('Em modo DEV, sempre roda! A cada acesso')
//  console.log('Rodando a cada acesso que você recebe')
export async function getStaticProps() {
    // console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((response) => {
            return response.json()
        })
        .then((resposta) => {
            return resposta
        })
    return {
        props: {
            faq
        }
    }
}

export default function HomePage({ faq }) {
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - FAQ</h1>
            <Link href='/' passHref>
                Ir para a Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}