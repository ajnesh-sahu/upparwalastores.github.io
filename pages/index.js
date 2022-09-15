import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import Store from '../models/Store';
import mongoose from "mongoose";
import Banner from '../models/Banner';
import Uwtext from '../models/Uwtext'




export default function Home({ stores,banners,uwtexts }) {
  return (
    <div>
    <Head>
    <title>upparwala.com</title>
    <meta name="description" content="fixed price by upparwala" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  {uwtexts.map((uwtext) => (
  <div key={uwtext.uwtitle} className='flex flex-col md:flex-row md:justify-start justify-center items-center lg:py-2 shadow-xl sticky top-0 bg-blue-200 z-10'>
      <div className="cursor-pointer logo mr-auto md:mx-5 flex ">
      <Image className='rounded-full bg-indigo-500'height={50} width={50} src="/logobag.png" alt='navlogo' />
       <img src={uwtext.uwtitle} className="md:h-[3vh] lg:h[5vh] h-[5vh] w-[25vh] ml-4 mt-2" alt="title" />
      </div>
    </div>
  ))}
        {banners.map((banner) => (
          <div key={banner.bannerimg}>
            <div className="md:hidden px-2 pt-2">
          <img className='rounded-md' src={banner.bannerimg}/>
          </div>
          <div className="hidden md:block px-2 pt-2">
          <img className="md:m-auto lg:h-[50vh] md:h-[30vh] w-full rounded-md" src={banner.bannerimgmd} />
          </div>
         </div>
         ))}
          
       

      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-10 mx-auto">

          <div className="flex flex-wrap -m-4">
       
          {stores.map((store) => (

              <div key={store.storeid} className="lg:w-1/5 w-1/2 border border-zinc-200 hover:border-purple-600 cursor-pointer shadow-lg lg:m-7 mb-3 hover:rounded-lg">
                {/* <img className='h-14 w-full' src="/storeroof.png" alt="" /> */}
                <a href={store.storelink}><div className="m-3 block relative rounded overflow-hidden md:bg-none bg-gradient-to-bl from-pink-600 to-purple-800 md:bg-gradient-none rounded-br-3xl rounded-tl-3xl md:rounded-none" >
                
                  <img alt="storeimage" className="m-auto md:mx-auto h-[15vh] w-[15vh] lg:h-[36vh] lg:h-[25vh] md:w-[auto] md:rounded-none block rounded-full" src={store.storeimg} />
                </div>
                  <div className="mt-2 m-1 lg:p-2 md:pt-4 text-center lg:text-left lg:h-[18vh] md:h-[10vh] h-[10vh] bg-gradient-to-b from-pink-600 to-purple-800 rounded-b-md">
                    <h3 className="text-white text-xs tracking-widest title-font md:mb-1">{store.pincode}</h3>
                    <h2 className="font-extrabold lg:text-xl md:text-xl text-white capitalize hover:animate-bounce">{store.storename}</h2>
                    <p className="lg:mt-1 text-sm text-white">{store.address}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>

  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let stores = await Store.find()
  let banners = await Banner.find()
  let uwtexts = await Uwtext.find()
  return {
    props: { stores: JSON.parse(JSON.stringify(stores)) , banners: JSON.parse(JSON.stringify(banners)), uwtexts: JSON.parse(JSON.stringify(uwtexts)) },
  }


}