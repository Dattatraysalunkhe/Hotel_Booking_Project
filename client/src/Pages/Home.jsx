import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import PropertyList from '../components/PropertyList';
import { useDispatch, useSelector } from 'react-redux';




function Home() {

  const [offer, setOffers] = useState([])
  const [saleListings, setSaleListings] = useState([])
  const [rentLsitings, setRentListings] = useState([])
  SwiperCore.use([Navigation]);

  console.log(offer)
  console.log(rentLsitings)

  const{currentUser} = useSelector((state) => state.user)
  const dispatch =useDispatch()

  useEffect(() => {

    const fetchOfferListings = async () => {

      try {
        // const res =await fetch('api/listing/get?parking=true&limit=10%type=all');
        const res = await fetch('api/listing/get?type=all&limit=6');
        const data = await res.json()
        setOffers(data)
        fetchRentListings()
      } catch (error) {
        console.log(error)
      }

    }

    const fetchRentListings = async () => {
      try {

       // const res = await fetch('api/listing/get?type=rent&limit=4')
       const res = await fetch('api/listing/get?type=sale&limit=4')
        const data = await res.json()
        setRentListings(data)

      } catch (error) {
        console.log(error)
      }
    }

    fetchOfferListings()
  }, [])

  return (
    <div className=' max-w-screen-lg mx-auto '>
      {/* top */}
      <div className='flex flex-col gap-5 py-14 px-6 max-w-screen-lg mx-auto'>
        <h1 className='font-semibold text-2xl lg:text-5xl'>Find Tour Next Deal To Holiday Stay <br></br> villas and House </h1>
        <div className='text 2xl: '>
          Most people agree travelling is a good thing. People think it’s exciting, almost invigorating to travel.<br></br> Travelling is the best way to learn new things,
          whether it be a new language or new culture because you’re experiencing it first hand
          Travelling means being out of my comfort zone,
        </div>
        {
          currentUser ? (
            <Link to={'/Profile'}>
              <button className='p-2 bg-blue-400 rounded-xl mt-5 font-medium text-white hover:opacity-55'>Explore...</button>
            </Link>
          ) : (
            <Link className='' to={'/sign-in'}>
          <button className='p-2 bg-blue-400 rounded-xl mt-5 font-medium text-white hover:opacity-55'>Explore...</button>
        </Link>
          )
        }
        {/* <Link className='' to={'/sign-in'}>
          <button className='p-2 bg-blue-400 rounded-xl mt-5 font-medium text-white hover:opacity-55'>Explore...</button>
        </Link> */}
      </div>
      {/* bottom */}
      <Swiper navigation>
        {offer &&
          rentLsitings.length > 0 &&
          rentLsitings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrl[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-7'>
        {offer && offer.length > 0 &&
          (
            <div className=''>
              <div className=''>
                <h2 className='text-2xl font-bold mt-7'>Top Properties</h2>
                <h5 className='mt-3'>From House and Apartment to Resorts and Villas...</h5>
                {/* <Link to={'/'}>
                         
                       </Link> */}
              </div>
              <div className='flex flex-wrap gap-5 mt-8'>               {/* //gap-4 */}
                {
                  offer.map((listing) => (
                    <PropertyList listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Home
