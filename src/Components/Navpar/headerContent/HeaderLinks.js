import {BsPerson} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { LogOut } from '../../RTK/Slices/CartSlice'
const HeaderLinks = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.cart.isLogin)
    const isAdmin = useSelector(state => state.cart.isAdmin)
    return ( 
    <>
                        {isLogin ?  
                            <>
                                <div className='d-flex flex-row justify-content-start align-items-center '>
                                    <BsPerson className='text-white fs-1 fw-bold me-2'   />
                                    <h3 className='text-white text-center mt-1'>
                                        <Link to='/profile' className='text-white'>Profile</Link>
                                    </h3>
                                </div>
                                {isLogin && isAdmin &&<div className='d-flex flex-row justify-content-start align-items-center '>
                                    <BsPerson className='text-white fs-1 fw-bold me-2'   />
                                    <h3 className='text-white text-center mt-1'>
                                        <Link to='/admin/home' className='text-white'>Admin</Link>
                                    </h3>
                                </div>}
                                <div className='d-flex flex-row justify-content-start align-items-center ' onClick={() =>dispatch(LogOut()) }>
                                    <BiLogOut className='text-white fs-1 fw-bold me-2'   />
                                    <h3 className='text-white text-center mt-1'>
                                        Logout
                                    </h3>
                                </div>
                            </>
                                :
                            <div className='d-flex flex-row justify-content-start align-items-center '>
                                <BsPerson className='text-white fs-1 fw-bold me-2'   />
                                
                                <h5 className='text-white'><Link to='/login' className='text-white'>Login<br/>SignUp</Link></h5>                        
                            </div>                            
                        }
                </>
  )
}

export default HeaderLinks