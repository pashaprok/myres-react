import React from 'react'
import StartSection from './StartSectionComponent'
import BannerStartSection from './BannerStartSectionComponent'
import TitleSection from './TitleSectionComponent'
import Loading from './LoadingComponent'
import Image from 'react-bootstrap/Image'
import { baseUrl } from '../shared/baseUrl'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function RenderCompanySlide({ company }) {
    return(
        <div>
            <div className="company-item">
                <a 
                    href={company.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="company-link"
                >
                    <Image src={baseUrl + company.logo} alt="company" fluid />
                </a>
            </div>
        </div>
    )
}

function RenderWorkerItem({ worker }) {
    return (
        <div className="worker-item">
            <Image src={baseUrl + worker.photo} alt="employee" fluid className="dish-photo" />
            <div className="worker-item-body">
                <h4>
                    {worker.name}
                </h4>
                <p>
                    {worker.position}
                </p>
                <div className="social">
                    <a 
                        href={worker.inst} 
                        className="soc-worker-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                        href={worker.teleg} 
                        className="soc-worker-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="far fa-paper-plane"></i>
                    </a>
                    <a 
                        href={worker.mail} 
                        className="soc-worker-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="far fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

function About(props) {
    const settingsCompaniesSlider = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };

    const listWorkers = props.workers.workers.map((worker) => {
        if (props.workers.isLoading) {
           return(
               <div className="container">
                   <div className="row">            
                       <Loading />
                   </div>
               </div>
           );
       }
       else if (props.workers.errMess) {
           return(
               <div className="container">
                   <div className="row"> 
                       <div className="col-12">
                           <h4>{props.workers.errMess}</h4>
                       </div>
                   </div>
               </div>
           );
       }
       else {return (
            <RenderWorkerItem
                worker={worker}
                key={worker.id}
            />
        );}
    });

    const slidesCompanies = props.companies.companies.map((company) => {
        if (props.companies.isLoadingCompanies) {
           return(           
                <Loading />
           );
       }
       else if (props.companies.errMessCompanies) {
           return(
                <p>{props.companies.errMessCompanies}</p>
           );
       }
       else {return (
            <RenderCompanySlide
                company={company}
                key={company.id}
            />
        );}
    });

    return(
        <div>
            <StartSection
                bgi="about-start start-section"
            >
                <BannerStartSection
                    title="About Us"
                    subtitle="dolor sit amet consectetur adipisicing elit"
                />   
            </StartSection>
            <div className="section section-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="left-title">
                                Opsum dolor sit
                            </h4>
                            <div>
                                <img src="assets/img/about-text.jpg" alt="table" className="text-image top-right" />
                                
                                <p className="single-text-dark">
                                    Lorem ipsum sit amet consectetur adipisicing elit. Facilis, corrupti at! Iste odit aliquam ratione, vel amet beatae quisquam. Laborum culpa molestias, iste aliquid ducimus reiciendis alias ipsa voluptas dolorem sunt corporis debitis veniam nisi, nemo, placeat recusandae at? Quaerat dolorum, nam, repellendus nobis fugiat itaque maxime quae amet nisi exercitationem dolores impedit. Modi, necessitatibus?
                                </p>
                                <p className="single-text-dark">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores eius quam eos reiciendis et voluptate debitis veniam soluta, deleniti deserunt ex pariatur suscipit sapiente quo nemo modi obcaecati neque veritatis dolor dolore! Magni suscipit cum blanditiis quasi impedit veniam unde, dignissimos sint error, eveniet at est sed consequatur porro vel inventore amet natus! Qui mollitia aliquam quo dolorum debitis esse earum excepturi quaerat ut aspernatur, vel maiores. Iste eaque corrupti et minima dolores fugit voluptas illo labore sapiente magnam mollitia neque vel, eos eveniet voluptatem cum officiis reprehenderit officia magni minus facilis dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto molestiae expedita deleniti voluptates animi quaerat, officia neque deserunt molestias magnam perferendis enim blanditiis laudantium dolorum odio alias itaque accusamus magni consectetur quisquam.
                                </p>
                                <p className="single-text-dark">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod odit et quo molestiae, quibusdam ea aspernatur voluptas nostrum, consequatur quasi, quaerat inventore sint tenetur rem. Voluptatum cum qui natus expedita est asperiores, similique dolore molestias sapiente eligendi unde nesciunt nam a accusantium minus maxime deserunt officia consequuntur quam, at officiis mollitia repellendus distinctio. Facere possimus molestiae ab minima? Quas maxime libero veritatis illum deserunt quia recusandae. Necessitatibus atque molestiae tempora vitae dolorem accusantium, officia adipisci vero iste ducimus itaque exercitationem unde, veniam voluptatem nobis delectus. Recusandae voluptate ipsa quae fugit repudiandae ducimus quasi soluta optio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section section-dark workers-section">
                <div className="container">
                    <TitleSection 
                        title='our employees'
                        subtitle="Ipsum dolor sit amet consectetur" 
                    />
                    <div className="workers-list">
                        {listWorkers}
                    </div>
                </div>
            </section>
            <section className="section section-light companies-section">
                <div className="container">
                    <TitleSection 
                        title='companies'
                        subtitle="Ipsum dolor sit amet consectetur" 
                    />
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settingsCompaniesSlider} className="companies-slider">
                                {slidesCompanies}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;