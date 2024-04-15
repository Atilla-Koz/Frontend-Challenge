import { footerData } from './data';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around bg-footer pt-10 pb-10">
      <h2 className="font-semibold text-[42px] leading-[52.5px] text-title w-[540px] h-[106px] md:pl-[126px] pl-4">
        {footerData.title}
      </h2>
      <div className="flex md:flex-row justify-around text-title md:pt-20  flex-col items-center pt-8">
        <a
          className="w-[296px] h-[24px] text-[24px] leading-[24.2px] text-[#af0c48] underline"
          href="{footerData.email}"
        >
          {footerData.email}
        </a>
        <div className="flex flex-row gap-4">
          <a
            className="w-[120px] h-[27px] font-medium text-[18px] leading-[27px] text-[#0a0a14]"
            href={footerData.links[0].url}
          >
            {footerData.links[0].label}
          </a>
          <a
            className="w-[60px] h-[27px] text-[18px] leading-[27px] text-[#00ab6b]"
            href={footerData.links[1].url}
          >
            {footerData.links[1].label}
          </a>
          <a
            className="w-[74px] h-[27px] text-[18px] leading-[27px] text-[ #0077b5]"
            href={footerData.links[2].url}
          >
            {footerData.links[2].label}
          </a>
        </div>
      </div>
    </footer>
  );
}
