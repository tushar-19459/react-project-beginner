import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { ContextConsumer } from '../context/Context';
import MainGrid from '../components/MainGrid';
import Loading from '../components/Loading';

const Home = () => {

    const { data, getdata, loading } = ContextConsumer()

    useEffect(() => {
        getdata('')
    }, [])


    return (
        <div className='overflow-x-hidden'>
            <>
                <NavBar></NavBar>
                {loading && <Loading></Loading>}
                {!loading && <MainGrid data={data}></MainGrid>}
            </>
        </div>
    )
}

export default Home
