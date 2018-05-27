import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
  <Layout>
  <div className='container content'>
    <h1>{props.show.name}</h1>
    
    <div className='bodyContent'>
      <img src={props.show.image ? props.show.image.medium : ''} />
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    </div>
  </div>
</Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post