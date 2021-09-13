import { motion } from 'framer-motion';
import Image from 'next/image'


import s3 from '../public/s3.svg'

export default function Section4() {

    return (
        <div className="section w-full fp-section fp-table bg">
            <div className="fp-tableCell" style="height: 954px;">
                <div className="container px-4">
                    <div className="flex items-center justify-between w-full">
                        <div className="kkk">
                            <Image src={s3} width={525} />
                        </div>
                        <div className="mmm">
                            <h2>What we do</h2>
                            <p>
                            AstroV Ventures invests in potential gaming, NFT and DeFi projects. Beside financial investments, we are dedicated in helping blockchain projects reach mass adoption by providing extensive resources and industry networks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}