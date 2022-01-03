import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Page = (props) => {
  return (
    <div>
      <Header />
      <div class='page-404'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Page
