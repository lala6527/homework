import Image from "next/image";
import Link from "next/link";
export const Header = ()  =>{
    return(
        <header>
            <div className="container">
                <Link href="/">
                    {/* <Image src={require("public/images/logo.png")} width={32} height={32} alt="Hurrybuy"/> */}
                    <span>HurryBuy</span>
                </Link>
            </div>
        </header>
    )
}