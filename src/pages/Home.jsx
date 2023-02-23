import React from 'react'
import { useState } from 'react'
import { Spacer } from '../components/Spacer'
import { Link, Route } from "wouter"
import { Header } from '../components/Header'
import { TextCard } from '../components/TextCard'

export const Home = () => {
    return (
        <>
            <div id="content">
                <Spacer px="20vw" />
                <Header />
                <Spacer px="10vw" />
                <TextCard heading="KTO SME?" text={`Vítajte na LanCrafte, česko-slovenskom Minecraft serveri, ktorý je domovom pre tých najlepších hráčov. Naša komunita je založená na priateľskej a zábavnej atmosfére, kde sa môžete tešiť na hranie rôznych minihier s ostatnými hráčmi.

Náš Admin-Team je veľmi priateľský a ochotný vám pomôcť s akýmkoľvek problémom alebo otázkou.

Náš server ponúka širokú škálu rôznych minihier, ktoré vám umožňujú súťažiť proti ostatným hráčom.
LanCraft je skvelým miestom pre každého, kto hľadá komunitu priateľov a zábavu v Minecrafte. Takže neváhajte a pripojte sa k nám ešte dnes!`} />

            </div>
        </>

    )
}
