export default function Footer() {
  return (
    <footer className="flex flex-col justify-around bg-footer pt-10 pb-10">
      <h2 className="font-semibold text-[42px] leading-[52.5px] text-title w-[540px] h-[106px] md:pl-[126px] pl-4">
        Let’s work together on your next product.
      </h2>
      <div className="flex md:flex-row justify-around text-title md:pt-20  flex-col items-center pt-8">
        <a
          className="w-[296px] h-[24px] text-[24px] leading-[24.2px] text-[#af0c48] underline"
          href="atillakoz@hotmail.com"
        >
          atillakoz@hotmail.com
        </a>
        <div className="flex flex-row gap-4">
          <a
            className="w-[120px] h-[27px] font-medium text-[18px] leading-[27px] text-[#0a0a14]"
            href="atillakoz@hotmail.com"
          >
            Personal Blog
          </a>
          <a
            className="w-[60px] h-[27px] text-[18px] leading-[27px] text-[#00ab6b]"
            href="https://github.com/Atilla-Koz"
          >
            GitHub
          </a>
          <a
            className="w-[74px] h-[27px] text-[18px] leading-[27px] text-[ #0077b5]"
            href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
