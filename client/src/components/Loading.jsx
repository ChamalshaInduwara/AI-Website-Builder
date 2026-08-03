import { Loader2Icon } from 'lucide-react'

const Loading = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-white'>
        <Loader2Icon size={26} className="animate-spin text-zic-950" />
    </div>
  )
}

export default Loading