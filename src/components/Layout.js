import Header from './Header'
import withAuthentication from './withAuthentication';
import '../styles/style.scss'

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
    </div>
)

export default withAuthentication(Layout)
