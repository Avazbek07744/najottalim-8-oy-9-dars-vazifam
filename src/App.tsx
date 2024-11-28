import { FC } from 'react'
import Header from './components/header'
import Main from './components/Main'
import Chart from './components/Chart'
import ChartTwo from './components/ChartTwo'
import Section from './components/Section'
import FooterChart from './components/FooterChart'

const App: FC = () => {
  return (
    <div>
      <div>
        <Header />
        <Main />
        <Chart />
        <ChartTwo />
        <Section />
        <FooterChart />
      </div>
    </div>
  )
}

export default App
