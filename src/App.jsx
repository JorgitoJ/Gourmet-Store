import { useState } from 'react'

import foto from "./assets/original.png"

import { RiMenu3Fill,
         RiUser3Line,
         RiAddLine, 
         RiPieChartLine,
         RiSearchLine,
         RiArrowDownSLine,
         RiCloseLine,
         RiDeleteBin6Line } from 'react-icons/ri'
import { Sidebar } from './components/Sidebar'


function App() {

  const [showMenu, setshowMenu] = useState(false)

  const toggleMenu = ()=>{
    setshowMenu(!showMenu)
  }
  
  console.log(showMenu)
  return (
     <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}/>

      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-[#ec7c6a] 
                      py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        	<button className='relative p-2  '>
            <RiUser3Line/>
          </button>
          <button className='p-2'>
            <RiAddLine/>
          </button>
          <button className='p-2'>
            <RiPieChartLine/>
          </button>
          <button className='p-2'>
            <RiMenu3Fill onClick={toggleMenu}/>
          </button>
      </nav>

      <main className='lg:pl-28 grid lg:grid-cols-8 grid-cols-1 p-4'>
        <div className='lg:col-span-6 lg:mr-4'>
          <header>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
              <div>
                <h1 className='text-2xl text-gray-300'>J&A{"'"}s Kitchen Corner</h1>
                <p className='text-gray-500'>15 octubre 2024</p>
              </div>
              <form>
                  <div className='w-full relative mb-3'>
                  <RiSearchLine className='absolute left-2 top-4 -translate-y-1/2 text-gray-300'/>
                  <input 
                    type="text"  
                    className='bg-[#1F1D2B] w-full rounded-md py-1 pl-8 pr-4 outline-none text-gray-300' placeholder='Search'/>
                  </div>
                  
                </form>
              
            </div>
            <nav className='text-gray-300 flex items-center justify-between border-b mb-4 md:justify-start md:gap-8'>
              <a href="#" className='relative py-2 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a]
                                     before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'>
                Hot dishes</a>
              <a href="#" className='py-2' >Cold dishes</a>
              <a href="#" className='py-2' >Soup</a>
              <a href="#" className='py-2' >Grill</a>
            </nav>
           
          </header>
          <div className='flex justify-between lg:mb-[50px] mb-[40px]'>
              <h2 className='text-gray-300 text-xl'>Chose Dishes</h2>
              <button className='text-gray-300 flex items-center gap-2 bg-[#1F1D2B] p-2 pr-3 rounded-lg'>
                <RiArrowDownSLine className='mt-1'/>Dine in 
              </button>
          </div>
          <div className='lg:p-5 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 mb-7'>
            <div className='bg-[#1F1D2B] rounded-lg md:p-5 p-8 flex flex-col items-center justify-evenly'>
              <img src= {foto} className='w-60 h-60 lg:w-40 lg:h-40 object-cover -mt-20 p-2 rounded-full'/>
              <p className='text-gray-300 text-xl'>Chiken Salad</p>
              <p className='text-gray-400'>$8.00</p>
              <p className='text-gray-600'>20 Bolws availables</p>
            </div>
            <div className='bg-[#1F1D2B] rounded-lg md:p-5 p-8 flex flex-col items-center justify-evenly'>
              <img src= {foto} className='w-60 h-60 lg:w-40 lg:h-40 object-cover -mt-20 p-2 rounded-full'/>
              <p className='text-gray-300 text-xl'>Chiken Salad</p>
              <p className='text-gray-400'>$8.00</p>
              <p className='text-gray-600'>20 Bolws availables</p>
            </div>
            <div className='bg-[#1F1D2B] rounded-lg md:p-5 p-8 flex flex-col items-center justify-evenly'>
              <img src= {foto} className='w-60 h-60 lg:w-40 lg:h-40 object-cover -mt-20 p-2 rounded-full'/>
              <p className='text-gray-300 text-xl'>Chiken Salad</p>
              <p className='text-gray-400'>$8.00</p>
              <p className='text-gray-600'>20 Bolws availables</p>
            </div>
            <div className='bg-[#1F1D2B] rounded-lg md:p-5 p-8 flex flex-col items-center justify-evenly'>
              <img src= {foto} className='w-60 h-60 lg:w-40 lg:h-40 object-cover -mt-20 p-2 rounded-full'/>
              <p className='text-gray-300 text-xl'>Chiken Salad</p>
              <p className='text-gray-400'>$8.00</p>
              <p className='text-gray-600'>20 Bolws availables</p>
            </div>
            <div className='bg-[#1F1D2B] rounded-lg md:p-5 p-8 flex flex-col items-center justify-evenly'>
              <img src= {foto} className='w-60 h-60 lg:w-40 lg:h-40 object-cover -mt-20 p-2 rounded-full'/>
              <p className='text-gray-300 text-xl'>Chiken Salad</p>
              <p className='text-gray-400'>$8.00</p>
              <p className='text-gray-600'>20 Bolws availables</p>
            </div>
            <div className='bg-[#1F1D2B] rounded-lg md:p-5 p-8 flex flex-col items-center justify-evenly'>
              <img src= {foto} className='w-60 h-60 lg:w-40 lg:h-40 object-cover -mt-20 p-2 rounded-full'/>
              <p className='text-gray-300 text-xl'>Chiken Salad</p>
              <p className='text-gray-400'>$8.00</p>
              <p className='text-gray-600'>20 Bolws availables</p>
            </div>
                      
          </div>
        </div>
        <div className='lg:col-span-2 fixed right-0 lg:static bg-[#1F1D2B] w-full h-full top-0 '>
  
          <div className='relative text-gray-300  h-full'>
            <div className=''>
            <RiCloseLine className=' text-xl p-3 box-content bg-[#262837] rounded-full top-3 left-3 mt-2 ml-2'/>
            <h1 className='t-0 flex items-center p-4 text-3xl'>Orders #13291</h1>
            </div>
          <div className='pl-4 flex gap-3 flex-wrap mb-5'>
            <button className='bg-[#ec7c6a] px-4 py-2 text-white rounded-lg'>Dine In</button>
            <button className='px-4 py-2 text-[#ec7c6a] rounded-lg border border-gray-500'>To Go</button>
            <button className='px-4 py-2 text-[#ec7c6a] rounded-lg border border-gray-500'>Delivery</button>
          </div>
          <div>
            <div className='pl-4 grid grid-cols-6 pr-2 text-white mb-3'>
              <h5 className='col-span-4'>Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>

            <div className='pl-2 pr-2 '>
              <div className='bg-[#262837] p-1 rounded-lg'>
              <div className='grid grid-cols-6'>
                <div className='flex gap-4 col-span-4'>
                  <img src={foto} className='w-14 h-14  object-cover' />
                  <div className='flex flex-col justify-center'>
                    <h2 className='text-gray-300'>Chiken Salad</h2>
                    <p className='text-gray-500'>$8.00</p>
                  </div>
                </div>
                <div className='text-white flex items-center'>
                  <span>2</span>
                </div>
                <div className='text-white text-center flex items-center pr-1'>
                 <span>$16.00</span>
                </div>
            </div>
            <div className='grid grid-cols-6 '>
                  <form className='col-span-5 p-1'>
                    <input type="text" placeholder='Notes..' className='bg-[#1F1D2B] p-2 w-full rounded-md'/>
                  </form>
                <div className='text-[#ec7c6a] text-xl flex justify-center items-center '>
                   <button className='border p-2 border-[#ec7c6a] hover:bg-[#ec7c6a] hover:text-gray-300 rounded-md '> 
                      <RiDeleteBin6Line />
                   </button>
                </div>
                </div>
            </div>
            </div>
          </div>
          <div className='bottom-0 absolute w-full left-0 p-2 bg-[#262837] lg:bg-[#1F1D2B]'>
            
            <div className='flex justify-between items-center mb-2 '>
              <span className='text-gray-500'>Discount</span>
              <p className='text-gray-300'>$0</p>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-gray-500'>Subtotal</span>
              <p className=' text-gray-300'>$ 210.50</p>
            </div>
            <button className='bg-[#ec7c6a] text-gray-300 p-1 my-2 rounded-md w-full'>Submit</button>
          </div>
          </div>
          </div>
      </main>

    </div>
    

  )
}

export default App
