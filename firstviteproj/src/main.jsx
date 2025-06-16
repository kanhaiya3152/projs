import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>Hey beauty!</h1>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'Click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  "Click here to visit"
)

createRoot(document.getElementById('root')).render(
 reactElement
)
