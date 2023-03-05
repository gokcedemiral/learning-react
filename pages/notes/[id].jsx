/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
        <h1>Note: {parseInt(id)} </h1>
        
        <h2>Routing with a static link</h2>
        <Link href="/notes">
            Notes
        </Link>

        <h2>Programmatic routing</h2>

        <button onClick={e => router.push('/')}>
            Go Home
        </button>

        
        <button onClick={e => router.push('/notes/[id]', `/notes/${parseInt(id)+1}`)}>
            Go one higher
        </button>
    </div>
  )
}
// Catch all params by naming this file as [...params].jsx
// import React from "react";
// import { useRouter } from "next/router"

// const Page = () => {
//     const router = useRouter()
//     const { params } = router.query

//     return(
//         <h1>Note { params }</h1>
//     )
// }
// export default Page

// Optional catch all params by naming this file as [[...params]].jsx