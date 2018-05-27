import Header from './Header'
import withAuthentication from './withAuthentication';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
    </div>
)

export default withAuthentication(Layout)
