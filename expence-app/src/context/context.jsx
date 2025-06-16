import { createContext, useContext, useState } from "react";

const expenceContext = createContext()

export function ExpeneProvider({ children }) {

    const [show, setShow] = useState(false)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpence, setTotalExpence] = useState(0)
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])

    function handleShowCard() {
        setShow(true)
    }


    return (
        <expenceContext.Provider value={{ total, setTotal, totalExpence, setTotalExpence, show, setShow, handleShowCard, totalIncome, setTotalIncome, data, setData }}>
            {children}
        </expenceContext.Provider>
    )
}

export function ExpenceConsimer() {
    return useContext(expenceContext)
}