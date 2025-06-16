
import First from "./First"

// Ek time me bs ek hi chiz ko return(mtlb sirf ek closing tag hoga) kr skte hai agr usse 
// jyda krna h toh hm ek fragmaent tag(div) use krenge jisme ek se jyda uske andr return kr skte hai.
function App() {
  const abc = "Hey why are you getting anger ??"
  return (
    <>
    <First/>
    <h1>Hello Brother {abc}</h1>
    </>
  )
}

export default App
 