import Link from "next/link";
import Image from "next/image";

export default function Navbar () {
    return (
    <header className="flex flex-col items-center ptop-4 " >
        
            <Link href={"/"}>
                <Image src="/LogoStarWars.png" alt={"Star Wars Logo"} width={"102"} height={"54"}></Image>
            </Link>
       
    </header> 
    )
}