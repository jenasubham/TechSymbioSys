import React from 'react'
import "../styles/footer.scss"

function Footer() {
  return (
    <footer className="footer">
        <div>
            <h1>DJStar</h1>
            <p>@all right reserved</p>
        </div>


        <div>
            <h5>Follow Us</h5>
            <div>
                <a href="/" target={"blank"}>Youtube</a>
                <a href="/" target={"blank"}>Instagram</a>
                <a href="/" target={"blank"}>facebook</a>
            </div>
        </div>

    </footer>
    
  )
}

export default Footer