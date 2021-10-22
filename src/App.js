import React from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  return (
  <>  
   <Navbar />
   <div className="container my-3">
     <Textform/>
   </div>
  </>
  );
}
export default App;
