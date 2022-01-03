import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class='main-header'>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to='/'>Dashboard</Link> |{' '}
        <Link to='/list'>List</Link> |{' '}
        <Link to='/single'>Single</Link>
      </nav>
    </header>
  )
}

export default Header
