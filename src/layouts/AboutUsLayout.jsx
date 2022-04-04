import React from 'react'
import { Container, Embed } from 'semantic-ui-react'

export default function AboutUsLayout() {
    return (
        <div>
            <Container>
                <br />
                <h1>
                    Hell March
                </h1>

                <br />
                <Embed
                    autoplay={false}
                    brandedUI
                    color='white'
                    hd={false}
                    id='D0WnZyxp_Wo'
                    placeholder='/images/image-16by9.png'
                    source='youtube'
                />
                <br />
                <br />
            </Container>

        </div>
    )
}
