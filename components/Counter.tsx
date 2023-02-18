import { useConterStore } from "@/store/counter"
import { FC } from "react"

interface ICounterProps{
    count?: number | string | undefined
}

const Counter : FC<ICounterProps>= ({ count }) => {
    const counterStore = useConterStore()
    return <>count us {counterStore.count}</>
}

export default Counter