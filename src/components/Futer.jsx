import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'

const Futer = () => {
  return (
    <div>
          <footer class="footer">
                <div class="footer__container">
                    <ul class="footer__map">
                       <li class="footer__link"><a> <Link to="/">Home</Link></a></li>
                        <li class="footer__link"><a><Link to="/login">Login</Link></a></li>
                        <li class="footer__link"><a><Link to="/registro">Registro</Link></a></li>
                        <li class="footer__link"><a><Link to="/productos">Productos</Link></a></li>                        
                    </ul>
                    <p class="footer__copyright">© 2023 Hardware Place &mdash; All Rights Reserved.</p>
                </div>
            </footer>
    </div>
  )
}

export default Futer