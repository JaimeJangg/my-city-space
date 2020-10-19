import React from 'react'
import Link from 'gatsby-link'
import './navBar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollToTop = window.pageYOffset

    if (scrollToTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return(
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div className="headerGroup">
          <Link to="/">Inicio</Link>
          <Link to="/">Marcas</Link>
            {/* <div className='avatar' /> */}
          {/* </Link> */}
          <Link to='/'><button>Contacto</button></Link>
        </div>
      </div>
    )
  }
}

export default NavBar
