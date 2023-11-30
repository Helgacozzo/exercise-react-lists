import './App.css'
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'


const App = () => {

  const logoProps = {
    name: 'Stories',
    url: '/home'
  }

  const navListProps = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about' },
    { name: 'Foods', url: '/foods' },
    { name: 'Lifestyle', url: '/lifestyle' },
    { name: 'Contact', url: '/contact' }
  ]

  return (

    <>
      <Navbar
        logo = {logoProps}
        navList = {navListProps}
      />

      <Jumbotron
        readMoreBtn = {true}
      />

    </>

  )

}

export default App
