import Card from './Card'
import { ExpenceConsimer, ExpeneProvider } from '../context/context'
import { useEffect } from 'react'
import PieChart from './PieChart'
const ExpenceTracker = () => {

  const { setShow, show, setTotalIncome, total, setTotal, totalExpence, setTotalExpence, totalIncome, data, setData } = ExpenceConsimer()

  useEffect(() => {
    const totalincome = data.reduce((acc, item) => {
      return item.type === "income" ? acc + item.amount : acc;
    }, 0);
    const totalexpence = data.reduce((acc, item) => {
      return item.type === "expence" ? acc + item.amount : acc;
    }, 0);

    setTotalIncome(totalincome);
    setTotalExpence(totalexpence);
    setTotal(totalincome - totalexpence);
  }, [data]);


  return (
    <>
      {show && <Card />}
      <div className='h-dvh z-10 relative overflow-hidden'>
        <nav className='flex place-content-between m-6 '>
          <p className='font-bold text-blue-500 text-3xl'>Expence Tracker</p>
          <button className='bg-blue-500 rounded text-white p-2' onClick={() => setShow(true)}>Add New Transaction</button>
        </nav>
        <div className=' h-2/5 flex  justify-center items-center'>
          <div className='  text-4xl text-center place-content-around flex-col flex  items-center h-full w-1/2'>
            <p className='font-bold'>Balence is ${total}</p>
            <div>
              <p className='font-bold'>${totalIncome}</p>
              <p className='text-lg text-gray-500'>Total Income</p>
            </div>
            <div>
              <p className='font-bold'>${totalExpence}</p>
              <p className='text-lg text-gray-500'>Total expence</p>
            </div>
          </div>
          <div className='  flex justify-center items-center h-full w-1/2'>
            <div className="w-full flex justify-center items-center">
              <PieChart income={totalIncome} expense={totalExpence} />
            </div>
          </div>
        </div>
        <div className=' h-2/5 flex '>
          <div className='  font-bold h-dvh w-1/2 p-3'>
            <p className='font-bold text-2xl text-red-800 ' >Expense</p>

            {
              data.map((item, index) =>
                item.type === "expence" && <div key={index} className='w-full bg-red-100 rounded flex mt-3 items-center h-10 place-content-between p-3 border-red-300 border '>
                  <div>{item.discription}</div>
                  <div>{item.amount}</div>
                </div>

              )
            }

          </div>
          <div className='font-bold h-dvh w-1/2 p-3 '>
            <p className='font-bold text-2xl text-blue-800 ' >Income</p>
            {
              data.map((item, index) =>
                item.type === "income" && <div key={index} className='w-full bg-blue-100 rounded flex mt-3 items-center h-10 place-content-between p-3 border-blue-300 border '>
                  <div>{item.discription}</div>
                  <div>{item.amount}</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpenceTracker
