import Header from './Header'
import withAuthentication from './Auth/withAuthentication';
import '../styles/style.scss'

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <br/>
    </div>
)

export default withAuthentication(Layout)
