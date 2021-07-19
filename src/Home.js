import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB669095959_.jpg" alt=""></img>

                <div className="home__row">
                    <Product 
                    id='85632013'
                    title='Harry Potter and the Philosphers Stone' price= {260}
                    image='https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg' rating={5}></Product>

                    <Product
                    id='12345678'
                    title='Digital Thermometers' price= {300}
                    image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg' 
                    rating={4}
                    ></Product>
                </div>
                <div className="home__row">
                <Product
                 id='96520123'
                 title='Anti Microbial Mask Set' price= {272}
                 image='https://m.media-amazon.com/images/I/91Qs7dkjUlL._AC_UL320_.jpg' 
                 rating={4}
                ></Product>
                
                <Product
                id='96520124'
                title='boAt Airdopes 171 Bluetooth Truly Wireless Earbuds with Mic' price= {2999}
                image='https://images-na.ssl-images-amazon.com/images/I/61AfKd6NMdS._SL1500_.jpg' 
                rating={4}
                ></Product>
                
                <Product
                id='96520127'
                title='ENHANCE Limited Edition Ultimate ID 115 Plus Premium Fitness Band' price= {3000}
                image='https://images-eu.ssl-images-amazon.com/images/I/519lquN4pFL._SX300_SY300_QL70_FMwebp_.jpg' 
                rating={4}></Product>
                
                <Product
                id='96520121'
                title='Lifebuoy Hand Sanitizer Super Hero Kit '
                 price= {180}
                image='https://images-na.ssl-images-amazon.com/images/I/61cra93zupS._SX679_.jpg' 
                rating={5}
                ></Product>
                <Product
                id='16520121'
                title='VOUCH SITRA Laminated PPE KIT with Full Body Coverall, White, Set of 50'
                 price= {14000}
                image='https://images-na.ssl-images-amazon.com/images/I/61frOYQF86L._SX466_.jpg' 
                rating={3}
                ></Product>

                </div>

                <div className="home__row">
                <Product
                 id='51520121'
                 title='Protego 3 Ply Disposable Face Mask - Blue Certified By SITRA - BFE 95, ISO, CE, 3PLY Mask With Meltblown Filter Layer & Nose Clip (Pack of 50)'
                  price= {400}
                 image='https://images-na.ssl-images-amazon.com/images/I/61-FLkeh0GL._SL1083_.jpg' 
                 rating={5}
                ></Product>

                </div>

            </div>
        </div>
    )
}

export default Home 
