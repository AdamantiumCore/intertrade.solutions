import { HNavLinks } from "../../constants/index"
import Link from 'next/link';
export default function HNavbar() {
  return (
    <div className=" flex justify-center items-center">
        <div className="w-[90vw] md:w-[60vw] flex justify-between font-afacad text-lg font-medium">
        {HNavLinks.map((link, index) => (
          <div key={index}>
            <Link href={link.url}>
              <p>{link.label}</p> 
              </Link>
          </div>
        ))}

        </div>
      
    </div>
  )
}
