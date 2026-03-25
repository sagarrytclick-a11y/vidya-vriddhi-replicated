import SwiperSlider from './SwiperSlider'

const Swiper = () => {
    const institutions = [
        { name: 'SMU', logo: '/online-mba/image-1.png' },
        { name: 'Amity University', logo: '/online-mba/image-2.png' },
        { name: 'Online Manipal', logo: '/online-mba/image-3.png' },
        { name: 'Jain', logo: '/online-mba/image-4.png' },
        { name: 'Manipal', logo: '/online-mba/image-5.png' },
        { name: 'Shoolini University', logo: '/online-mba/image-6.png' },
        { name: 'UPES', logo: '/online-mba/image-7.png' }
    ]
    return (
        <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                    Trust Our Partner Institutions
                </h2>
    
                <SwiperSlider institutions={institutions} />
            </div>
        </div>
    )
}

export default Swiper