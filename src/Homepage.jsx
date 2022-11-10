import React from 'react';
import Image1 from '../src/images/image1.png'
import Gallery1 from '../src/images/image2.png'
import Gallery2 from '../src/images/image3.png'
import Gallery3 from '../src/images/image4.png'
import Arrow from '../src/images/arrow.png'
import Arrow2 from '../src/images/up_arrow.png'
import Logo from '../src/images/logo.png'


import Logos from './component/logos';
import InMemory from './component/InMemory';
import './styles/scrolling.scss'

import Header from './component/commons/Header';
import Form from './component/commons/Form';

const Homepage = () => {
    return (
        <div className="">
            <header className="max-w-5xl m-auto flex justify-between items-center p-2">
                <img src={Logo} className="h-20 w-auto object-contain" alt="" srcset="" />
                <h1 className="font-bold text-lg">Contact Us</h1>
            </header>
            {/* <Header /> */}
            <section className="hero relative">
                <img src={Arrow} className="object-contain absolute -bottom-10 lg:block hidden" alt="" srcset="" />
                <div className="flex lg:flex-row flex-col justify-between items-center max-w-5xl m-auto p-5">
                    <div className="max-w-md ">
                        <h1 className="lg:text-5xl text-4xl text-secondary font-bold leading-tight mb-5">The Morolayo Foundation</h1>
                        <p className="lg:text-md text-lg">The Morolayo Foundation is Faith-based organization with a
                            strong focus on Women, Health and Education, founded in
                            honor of Pst. Mrs. Susanah Funmilayo Morolayo Ayodele</p>
                    </div>
                    <img src={Image1} className="object-contain" alt="" srcset="" />
                </div>
            </section>

            <section className="bg-secondary lg:p-10 p-3 text-white">
                <div className="flex flex-col justify-center items-center mt-6">
                    <h1 className="lg:text-5xl text-2xl font-semibold mb-3">Faith | Education | Health</h1>
                    <p>Loving God & Touching Humanity</p>
                </div>

                <section className="mb-10 mt-28">
                    <div className="brand-wheel">
                        <div className="brand-slide">
                            {Logos.map((item) => (
                                <div className={`logo-card items-center`} key={item.logo}>
                                    <img src={item.logo} alt={item.alt} />
                                    <p className="w-40 text-center mb-10 lg:text-xl text-md mt-5">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="brand-slide delay">
                            {Logos.map((item) => (
                                <div className={`logo-card items-center `} key={item.logo}>
                                    <img src={item.logo} alt={item.alt} className="mt-5" />
                                    <p className="w-40 text-center mb-10 lg:text-xl text-md mt-5">{item.text}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <section className="max-w-5xl m-auto w-full mb-16 relative">
                <div className="text-center font-semibold text-2xl mt-24 mb-16 leading-normal">
                    <p className="">In Loving Memory of</p>
                    <p>Pst. Mrs. Susanah Funmilayo Morolayo Ayodele</p>

                </div>
                <div className="flex flex-wrap">
                    {InMemory.map((text) => (
                        <div key={text.title} className="memory flex flex-col lg:w-1/3 w-full items-center text-center p-4">
                            <img src={text.logo} alt={text.alt} className="h-24 w-24 mt-5 object-contain" />
                            <h3 className="text-lg font-bold pt-2 pb-2">{text.title}</h3>
                            <p className="lg:pl-6 pl-3 lg:pr-6 pr-3 text-lg">{text.text}</p>
                        </div>
                    ))}
                </div>
                <img src={Arrow2} className="object-contain absolute -bottom-28 -right-40 lg:block hidden" alt="" srcset="" />
            </section>
            <section className="bg-darkGreen pt-10 pb-20">
                <h2 className="text-white text-3xl font-semibold text-center mb-16">Memories of Morolayo</h2>
                <div className="max-w-6xl m-auto flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between p-5">
                    <img src={Gallery1} alt="" className="object-contain lg:w-1/3 w-full h-auto" />
                    <img src={Gallery2} alt="" className="object-contain lg:w-1/3 w-full h-auto" />
                    <img src={Gallery3} alt="" className="object-contain lg:w-1/3 w-full h-auto" />
                </div>
            </section>
            <Form />
        </div>
    )
}

export default Homepage