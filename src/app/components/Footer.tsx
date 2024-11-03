
import Link from "next/link";


export default function Footer(){
    return (
      <footer className="h-36 bg-slate-600 " >
        <ul>
      
      <li className="flex py-9 justify-center text-3xl"> Made by@Amber Asif </li>
      <li><Link className=" flex justify-center text-blue-800 text-3xl font-semibold " href="https://www.linkedin.com/in/amber-asif" target="_blank" rel="noopener noreferrer">Linkdin</Link></li>
      </ul>
        
        
        </footer>
    );
  
  }
  