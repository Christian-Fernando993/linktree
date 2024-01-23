import { Container } from "@/styles/global";
import { HeaderStyle } from './styles' 

import Image from "next/image";
import Logo from '@/assets/icones/Loovi_Logo.svg'

export function Header() {
    return(
        <HeaderStyle>
            <Container>
                <Image src={Logo} alt='Logo da Loovi' className='logo' />
            </Container>
        </HeaderStyle>
    ) 
}