import "./Footer.css";
import Link from "next/link";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inside">
                <div className="footer-section">
                    <h4>Buying</h4>
                    <ul>
                        <li><Link href={"/"}>Link</Link></li>
                        <li><Link href={"/"}>Link</Link></li>
                        <li><Link href={"/"}>Link</Link></li>
                        <li><Link href={"/"}>Link</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Selling</h4>
                    <ul>
                        <li><Link href={"/"}>Link</Link></li>
                        <li><Link href={"/"}>Link</Link></li>
                        <li><Link href={"/"}>Link</Link></li>
                        <li><Link href={"/"}>Link</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/"}>Careers</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Help</h4>
                    <ul>
                        <li><Link href={"/"}>FAQs</Link></li>
                        <li><Link href={"/"}>Live Chat</Link></li>
                        <li><Link href={"/"}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;