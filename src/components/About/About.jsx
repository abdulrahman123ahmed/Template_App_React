import React from 'react'
import AboutCard from './AboutCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyUser, faMicrochip, faRoute, faWifi } from '@fortawesome/free-solid-svg-icons'
const Data = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faWifi} className=' fa-2x bg-cyan-400 p-5 rounded-lg' />,
    text: "Reliable, tamper-proof network",
    paraph: `Use decentralization, trusted nodes, premium data and cryptographic proofs to connect highly accurate and 
    available data/APIs to any smart contract`
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faHouseChimneyUser} className=' fa-2x bg-cyan-400 p-5 rounded-lg' />,
    text: "Seamless connection to any API",
    paraph: `Building an flexible framework that can retrieve data from any API, connect with existing systems, and 
    integrate with any current or future blockchain`
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faRoute} className=' fa-2x bg-cyan-400 p-5 rounded-lg' />,
    text: "Proven, ready-made solutions",
    paraph: `Integrate pre-built, time tasted oracle solutions that already secure tens of billions in smart contrast
    value for market- leading decentralized applications`
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faMicrochip} className=' fa-2x bg-cyan-400 p-5 rounded-lg' />,
    text: "Secure off-chain computation",
    paraph: `Use a decentralized network of Defi Keeper to automate contrasts, mitigation risk of manual interventions
    and centralized servers`
  }
]

function About() {
  return (
    <div className='px-8 py-16 bg-black'>
      <div className='text-white text-center'>
        <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
        <p className='py-4 mb-5 text-lg w-4/5 mx-auto'>
          The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace
          that is open and accessible to all.
        </p>
      </div>
      <div className='grid sm:grid-cols-2 2xl:grid-cols-4 gap-4 text-white'>
        {
          Data.map(item => {
            return (
              <AboutCard icon={item.icon} text={item.text} paraph={item.paraph} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default About