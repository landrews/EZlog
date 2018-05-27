import Link from 'next/link'
import LoginControl from '../components/Login.js';

const linkStyle = {
    marginRight: 15
}


const nav = {
    backgroundColor: "#fff",
    padding: "15px",
    width: "100%"
}

const Header = () => (
    <div style={nav}>
        <div className="container navContainer">
        <ul>
        <li>
            <Link href="/">
                <a style={linkStyle}>NYSE</a>
            </Link>
            </li>
            <li>
            <Link href="/nasdaq">
                <a style={linkStyle}>NASDAQ</a>
            </Link>
            </li>
            <li>
            <Link href="/chat">
                <a style={linkStyle}>Chat</a>
            </Link>
            </li>
            <li>
            <Link href="/tv">
                <a style={linkStyle}>TV api</a>
            </Link>
            </li>
            <li>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            </li>
            </ul>
            <LoginControl />
        </div>
        <style jsx>{`
      a {
        text-decoration: none;
        color: #333;
      }

      a:hover {
        opacity: 0.6;
      }

      ul {
        display: flex;
      }
    `}</style>
    </div>
)

export default Header