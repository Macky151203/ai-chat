export default function Loading(){
    return(
        <>
        <div className=" w-screen h-screen bg-gray-800 animate-pulse flex justify-center items-center">
            <div className="text-2xl text-white">Loading....</div>
            {/* <div className="animate-spin"></div> */}
        </div>
        </>
    )
}