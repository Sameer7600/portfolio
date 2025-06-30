import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="h-[650px] w-full grid grid-cols-2 bg-[#F1F3F4]">

         <div>
            <h2 className="ml-16 text-6xl font-extralight mt-48">Repr in voluptate <br />
            Ullamco laboris nisi ut</h2>
            <p className="ml-16 mt-10 text-[16px]">We bring you 100% free CSS templates for your websites. If you wish to <br /> support TemplateMo, please make a small contribution via PayPal or tell <br /> your friends about our website. Thank you.</p>
         </div>

         <div>
            <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_02.jpg" className="h-[648px]" alt="" />
         </div>

      </section>
    </div>
  )
}

export default Hero
