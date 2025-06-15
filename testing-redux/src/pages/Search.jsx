import React from 'react'
import NavBar from '../components/NavBar'
import MainGrid from '../components/MainGrid'
import { ContextConsumer } from '../context/Context'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

const Search = () => {
    const { searchData,loading } = ContextConsumer()
    console.log(searchData)
    return (
        <div>
            <NavBar></NavBar>
            {loading && <Loading></Loading>}
            {searchData.length === 0 && <NotFound></NotFound>}
            {!loading && searchData.length > 0 && <MainGrid data={searchData}></MainGrid>}
        </div>
    )
}

export default Search
