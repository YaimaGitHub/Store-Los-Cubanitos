import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from './firebase/firebase';
import { auth } from './firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import dpimage from '../image/dp.png'
import { signOut } from 'firebase/auth';
import "./all.css"
import doticon from "../image/dicon.png"

function Home() {
  const navigate = useNavigate();
  const [myuid, setmyuid] = useState("");
  const [loading, setloading] = useState(false);
  const [nav, setnav] = useState(false);


  useEffect(() => {
    checkUser();
  }, [])

  const checkUser = async () => {
    const userid = await localStorage.getItem("useruid");
    if (userid) {
      navigate('/Home');
    } else {
      navigate('/Login');
    }
  };

  // vaiables 
  let [user, setuser] = useState([]);
  let getusers = async () => {
    setloading(true)
    let uid = await localStorage.getItem("useruid");
    setmyuid(uid);
    let list = [];
    const snapshot = await getDocs(collection(db, "users"));
    snapshot.forEach((item) => {
      list.push(item.data())
    })
    setloading(false)
    setuser(list);
  }
  useEffect((e) => {
    getusers()
  }, []);

  // logout 
  let logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("useruid");
        navigate('/Login');
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      })
  }

  return (
    <div className='w-full overflow-hidden'>
      <div className='im w-[100vw] z-50 flex justify-between items-center flex-wrap   bg-red-600  shadow-lg'>
        <h2 className='text-white py-3 px-4 font-bold text-2xl'>Chats</h2>
        <div className='han flex-wrap  flex md:justify-center items-center gap-2 backdrop:'>
          <h2 className='text-white py-3 px-4 font-bold text-base cursor-pointer' onClick={() => {
            navigate("/Myshop")
          }}>MarketPlace</h2>
          <h2 className='text-white py-3 px-4 font-bold text-base cursor-pointer' onClick={() => {
            navigate("/Profile")
          }}>Profile</h2>
          <h2 className='text-white py-3 px-4 font-bold text-base cursor-pointer' onClick={() => {
            navigate("/Location")
          }}>My Location</h2>
        </div>
        <button className='logout text-white  font-bold me-4 rounded-2xl px-2' onClick={logout}>Logout</button>
        <button className='dot text-white  font-bold me-4 rounded-2xl px-2 py-2 cursor-pointer'
          onClick={() => setnav( prev => !prev)}
        ><img src={doticon} alt=""
          className='w-8 h-8'
          /></button>
        <div className={`short-nav  ${!nav ? "mt-[-250px]" : ""} bg-red-600 w-full  ease-in-out duration-500 `}>
          <h2 className='text-white py-3 px-4 font-bold text-base cursor-pointer' onClick={() => {
            navigate("/Myshop")
          }}>MarketPlace</h2>
          <h2 className='text-white py-3 px-4 font-bold text-base cursor-pointer' onClick={() => {
            navigate("/Profile")
          }}>Profile</h2>
          <h2 className='text-white py-3 px-4 font-bold text-base cursor-pointer' onClick={() => {
            navigate("/Location")
          }}>My Location</h2>
        </div>
      </div>

      {/* body */}
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (

        user.map((item, index) => (
          <div key={item.useruid} className='cht w-fll shadow-lg rounded-lg  py-2 px-4 mt-2 mb-2 flex justify-between items-center flex-wrap-reverse'>
            <h1 className='font-semibold capitalize text-xl flex items-center gap-4'> <img src={item.profileimage || dpimage} alt="" className='w-12 h-1/5 rounded-full border-2 border-black' /> {item.name}</h1>
            <p className='em text-gray-500 font-semibold'>{item.email}</p>
            <div className='mes'>
            <button className=' bg-slate-300 py-2 px-4 text-white text-base rounded-full active:bg-slate-500' onClick={() => {
              navigate("/Chat", { state: { ...item, myuid } })
            }}>Message</button>
            </div>
          </div>
        ))

      )}
    </div>
  )
}

export default Home