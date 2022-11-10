import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Location from '../../images/location.png'
import Mail from '../../images/mail.png'
import Phone from '../../images/phone.png'
import TextInput from '../commons/TextInput';

const Form = () => {
  return (
      <section className="bg-secondary pt-24 pb-44">
          <div className="flex lg:flex-row flex-col justify-center gap-10 max-w-6xl m-auto p-5">
              <div className="text-white lg:w-1/3 w-full">
                  <h3 className="font-semibold text-lg mb-10">Contact Us</h3>
                  <p className="flex items-center gap-4 mb-10">
                      <img src={Location} alt="" className="h-7 w-7" />
                      127, Lagos Abeokuta Expressway, Ade-Alu Bus-Stop, Iyana Ipaja
                  </p>
                  <p className="flex items-center gap-4 mb-10">
                      <img src={Mail} alt="" className="h-7 w-7" />
                      @morolayofoundation.org
                  </p>
                  <p className="flex items-center gap-4">
                      <img src={Phone} alt="" className="h-7 w-7" />
                      08134566733
                  </p>
              </div>
              <div className="bg-white lg:w-1/2 w-full lg:p-16 p-7">
                  <TextInput
                      className=" mb-5 mt-10"
                      placeholder="Name"
                  />
                  <TextInput
                      className=" mb-5"
                      placeholder="Email"
                  />
                  <TextInput
                      className=" mb-5"
                      placeholder="Phone"
                  />
                  <TextInput
                      className=" mb-5"
                      placeholder="Message"
                  />
                  <button type="submit" className="flex items-center gap-3 bg-black text-white p-2 mt-10 mb-16">
                      Submit <BsArrowRightShort />
                  </button>

              </div>
          </div>
      </section>
  )
}

export default Form