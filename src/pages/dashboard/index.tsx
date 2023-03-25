import { decrement, incrementByAmount } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()


    return <div >
        <h1>{count}</h1>
        <button onClick={() => { dispatch(incrementByAmount(5)) }} >+</button>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        {/* Dashboard */}
        {/* <img src="https://snipboard.io/WBiubJ.jpg" /> */}
    </div>
}

// export async function getServerSideProps(context: any) {
//     const session = await getServerSession(context.req, context.res, authOptions)

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: {
//             session,
//         },
//     }
// }