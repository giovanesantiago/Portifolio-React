import React from "react"
import Image from "./Image"
import linkedin from '../img/redes/linkedin.png'
import git from '../img/redes/git.png'
import insta from '../img/redes/insta.png'

const Redes = () => {
    return (
        <div class="redes">
                <a target="_blank" href="https://www.linkedin.com/in/giovane-santiago-473863212/">
                    <Image src={linkedin} />
                </a>
                <a target="_blank" href="https://github.com/giovanesantiago">
                    <Image src={git} />
                </a>
                <a target="_blank" href="https://www.instagram.com/eugio_santiago/">
                    <Image src={insta} />
                </a>
        </div>
    )
}

export default Redes