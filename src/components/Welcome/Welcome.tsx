import Image from "next/image"
import { SocialIcon } from "react-social-icons"

import me from "@assets/images/igor.jpg"
import { Text } from "@lib/Text/Text"

import s from "./Welcome.module.scss"

export const Welcome: React.FC = (): JSX.Element => {

    return (
        <header className={s.wrapper} id="welcome">
            <div className={s.welcomeData}>
                <Image alt="portrait" className={s.portrait} src={me}></Image>
                <Text color="brand" component="h1" variant="h1">Hi. I&apos;m Igor.</Text>
                <Text color="white" component="p" variant="paragraph">A Software Engineer mainly focusing on Backend but with Frontend and Blockchain experience.</Text>
            </div>
            <div className={s.socialsAndResume}>
                <div className={s.socials}>
                    <SocialIcon bgColor="#60f9dc" className={s.icon} url="https://www.linkedin.com/in/igor-abramov-815484143" />
                    <SocialIcon bgColor="#60f9dc" className={s.icon} url="https://github.com/IgorAbramov" />
                    <SocialIcon bgColor="#60f9dc" className={s.icon} url="https://www.facebook.com/Igor.Abrramov" />
                    <SocialIcon bgColor="#60f9dc" className={s.icon} url="https://t.me/IggyAbrams" />
                </div>
                <a className={s.downloadResumeButton} href="/Igor_Abramov_Resume_2023_01.pdf"
target="_blank">RESUME</a>
            </div>
        </header>
    )
}