import { Homepage, BlogContentPage, ContactPage } from "./pages"
import {Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch';

export default function App() {
  let {loading, data, error} =useFetch('http://localhost:8008/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
  console.log(data)
  
  
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data?data:""} />}> </Route>
        <Route path='/blog/:id' element={<BlogContentPage blogs={data?data:""} /> }> </Route>
        <Route path='/contact' element={<ContactPage /> }> </Route>
        <Route path='/hem' element={<BlogContentPage/> }> </Route>

        
        
        


      
   
      </Routes>

    

    
    </div>
    
  )
}