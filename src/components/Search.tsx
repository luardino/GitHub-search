import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'

export const Search = () => {

  const [user, setUser] = useState(null);
  

  return (
    <div>
        <h2>Searching Users</h2>
        <p>Know your best repositories</p>
        <div>
            <input type="text" placeholder='Enter username' />
            <button>
              <BsSearch/>
            </button>
        </div>
    </div>
  )
}
