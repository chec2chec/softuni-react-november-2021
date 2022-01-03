// import './Header.css'

const Footer = () => {
  return (
    <footer class='main-footer'>
      <div
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        &copy; Copyright { new Date().getFullYear() }
      </div>
    </footer>
  )
}

export default Footer
