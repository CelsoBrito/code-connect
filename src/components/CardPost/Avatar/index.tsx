import Image from "next/image"

type AvatarType = {
    name: string,
    imageSrc: string,
}

export const Avatar = ({ name, imageSrc }: AvatarType) => {
    return (
        <ul className="flex flex-row justify-end items-center gap-[8px]">
            <li>
                <Image src={imageSrc} width={32} height={32} alt={`${name} Avatar'/s`} />
            </li>
            <li className="text-[#888] text-[15px] font-semibold">
                @{name}
            </li>
        </ul>
    )
}