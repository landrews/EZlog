# Table of Contents

- [Isometric Unfetch Example](#isometric-unfetch-example)
  -[Page Caller Example](#page-caller-example)
  -[Function Fetcher Example](#function-fetcher-example)
- [Firebase Intialization](#firebase-intialization-example)

## Isometric Unfetch Example

  ###Page caller Example

```

import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
      <h1>Batman TV Shows</h1>
      <ul className="showList">
        {props.shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  </Layout>
)
Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    shows: data
  }
}

export default Index

```

  ###Function fetcher Example

```

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

export default Post -->

```

## Firebase Intialization Example

```

In the firebase directory, create a keys.js file that has this:

import * as firebase from "firebase";

var config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT",
    storageBucket: "YOUR STORAGE ID",
    messagingSenderId: "YOUR MESSAGING ID"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  export default config

  ```