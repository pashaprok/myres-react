import React from 'react'
import StartSection from './StartSectionComponent'
import BannerStartSection from './BannerStartSectionComponent'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <StartSection
                bgi="nf-start start-section"
            >
                <BannerStartSection
                    title="Not Found"
                    subtitle=""
                >
                    <Link to="/">
                        return home
                    </Link>
                </BannerStartSection>   
            </StartSection>
        </div>
    )
}