import "../../../App.css";

function Footer() {
  return (
    <footer className="w-full h-10 bg-[linear-gradient(152deg,_#16254d,_#11192a)] flex justify-center items-center gap-2 text-[#f3f4f6] ">
      <small className="text-sm">Site designed by</small>
      <a className="underline hover:text-[#f3f4f6]/60"
        href="https://www.linkedin.com/in/jose-fe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        jose ferrer
      </a>
      <small className="text-sm">© All rights reserved.</small>
    </footer>
  );
}

export default Footer;
