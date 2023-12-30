import Image from 'next/image'

export const Logo = () => {
    return (
       <Image 
            height={130}
            width={130}
            alt='CholoShikhi Logo'
            src='/choloshikhi.png'
         />
        //  <p className="text-xl text-sky-700 font-bold">CholoShikhi</p>
    )
}