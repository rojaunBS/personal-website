import React from 'react'
import {Button2} from '../ButtonElement'
import { Img, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap } from './InfoElements'
import pdf from '../../assets/Rojaun_Samuda_resume.pdf'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button2 href={pdf} target="_blank"
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        >{buttonLabel}
                                    </Button2>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper> 
            </InfoContainer> 
        </>
    )
}

export default InfoSection
