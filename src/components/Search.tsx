import {BsSearch} from 'react-icons/bs'

export const Search = () => {
  return (
    <div>
        <h2>Searching Users</h2>
        <p>Best Repositories</p>
        <div>
            <input type="text" placeholder='Enter username' />
            <button>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}
