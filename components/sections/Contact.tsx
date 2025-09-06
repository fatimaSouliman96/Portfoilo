import ImageContact from '../imageContact/ImageContact'
import ContactInfo from '../contactInfo/ContactInfo'


export default function Contact() {
    return (
        <div className="w-full pb-20 pt-14">
            <div className='w-1/2 h-[1px] bg-secondary mx-auto mb-8 shadow-[-3px_5px_20px_0px_#ffffff]' ></div>
            <p className="text-white text-4xl font-extrabold leading-[4rem]">
                Contact me
            </p>
            <div className='flex w-full lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center' >
                <ContactInfo />
                <ImageContact />

            </div>
        </div>
    )
}

