import Image from "next/image";
import Logo from '../../public/assets/brainwave-symbol.svg'

export default function Header() {
    return ( 
        <div className="flex w-full items-center justify-between px-[20px] py-[16px] shadow-md">
            <div>
                <Image src={Logo} alt="Logo"/>
            </div>
        </div>
     );
}
 