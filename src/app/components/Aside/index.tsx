import Image from 'next/image';
import logo from './logo.png';

export const Aside = () => {
    return (
        <aside className="rounded-[8px] bg-[#171D1F] py-[40px] px-[16px]">
            <Image src={logo} alt='Logo da Code Connect' />
            {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
        </aside>
    );
}