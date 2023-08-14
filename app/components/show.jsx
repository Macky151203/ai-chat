export default function Show({ dat,name }) {
    return (
        <>
            <div className='shadow-md rounded-md space-y-2  flex flex-col p-2' key={dat}>
                <div className='flex flex-row space-x-1 items-start'><div className='font-semibold md:mt-0 mt-2'>{name}: </div><div className={`${dat.message.role !== 'assistant' ? `w-3/4` : ``}bg-slate-500 p-2 rounded-md w-full`}>{dat.prompt}</div></div>
                <div className='flex flex-row space-x-1 items-start'><div className='font-semibold mt-2'>Ai: </div><div className={`${dat.message.role !== 'assistant' ? `w-3/4` : ``}bg-slate-500 p-2 rounded-md w-full`}>{dat.message.content}</div></div>
                {/* <div className='p-2 px-2 bg-slate-500 rounded-md'><span className='font-semibold'>Ai: </span>{dat.message.content}</div> */}
            </div>
        </>
    )
}