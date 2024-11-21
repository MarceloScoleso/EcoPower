import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
    return (
<footer className="relative bg-gradient-to-r from-green-500 to-blue-600 text-white py-8">
<div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="max-w-6xl mx-auto text-center">
    <p>&copy; 2024 EcoPower. Todos os direitos reservados.</p>
    <div className="flex justify-center space-x-6 mt-4">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 hover:text-yellow-400">
        <FaFacebook size={30} />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 hover:text-yellow-400">
        <FaTwitter size={30} />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 hover:text-yellow-400">
        <FaInstagram size={30} />
      </Link>
    </div>
  </div>
</footer>
 );
};
export default Footer;