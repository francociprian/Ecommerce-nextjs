import Layout from '../components/layout'
import style from '../styles/homepage.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={style.hero}>
        <div className={style.hero_title}>
          <h1>Café de Especialidad</h1>
        </div>
      </div>
    </Layout>
  )
}
