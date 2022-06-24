import {useNavigate} from 'react-router-dom';
const Home=()=>{
    const navigate=useNavigate()
    const handleLogout=()=>{
        console.log('logout clicked')
        navigate('/')
    }
    return(
        <div className='btn'>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home;