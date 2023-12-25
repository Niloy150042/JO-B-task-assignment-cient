import { useQuery } from "@tanstack/react-query"
import useAxiossecure from "./useAxiossecure"

const useTask =()=>{
    
    const axiossecure = useAxiossecure()
         
    const {data: task=[] ,refetch} = useQuery({
        queryKey: ["tasks"],
        queryFn:async()=>{
            const res=await axiossecure.get('/taskinfo')
            return res.data
        }
    })
    return [task,refetch]
}
export default useTask

