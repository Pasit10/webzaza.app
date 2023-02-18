import Counter from "@/components/Counter";
import { useConterStore } from "@/store/counter";

export default function Home() {
  const counterStore = useConterStore()
  return (
    <>
      <div>{counterStore.count}</div>

      <button onClick = {counterStore.increment}>increment</button>

      <Counter/>
    </>
  )
}