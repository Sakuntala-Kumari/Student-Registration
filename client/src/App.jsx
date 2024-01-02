import { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './Students';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Students />}></Route>
          <Route path='/create' element={<CreateStudent />}></Route>
          <Route path='/update/:id' element={<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

