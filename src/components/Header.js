import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>NYSE</a>
        </Link>
        <Link href="/nasdaq">
            <a style={linkStyle}>NASDAQ</a>
        </Link>
        <Link href="/chat">
            <a style={linkStyle}>Chat</a>
        </Link>
        <Link href="/tv">
            <a style={linkStyle}>TV api</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <style jsx>{`
        a {
            text-decoration: none;
            color: #333;
        }

        a:hover {
            text-decoration: underline;
            opacity: 0.6;
        }
        `}</style>
    </div>
)

export default Header