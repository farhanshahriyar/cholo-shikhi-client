import Image from 'next/image'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    <div>
      <p className="text-center"> hello World </p>
      <Button variant="destructive">
        Click Me
      </Button>
    </div>
  )
}
