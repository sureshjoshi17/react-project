import React, { useState } from 'react';
import { 
    HeroContainer,
    HeroBg,
    VideoBg, 
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight,
    Button
 } from './HeroElements';
 import Video from '../../Video/video.mp4'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> 
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual BankingMade Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='signup' onMouseEnter = {onHover}
                        onMouseLeave = {onHover} 
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
