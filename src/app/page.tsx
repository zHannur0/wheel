"use client"
import Wheel from "@/components/Wheel";
import {useEffect} from "react";
import { Howl } from "howler";

export default function Home() {
    useEffect(() => {
        const sound = new Howl({
            src: '/bg_music.mp3',
            loop: true,
            autoplay: true,
            volume: 1,
        });

        return () => {
            sound.stop();
        };
    }, []);

    return (
        <div>
            <Wheel/>
        </div>

    );
}
