                                                          import React, {useState, useRef} from 'react';
import { FiPlus } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Frame from "../../images/Frame.png";


const GalleryWidget = () => {
  const [images, setImages] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);
  // create a refrence to hidden input
  const fileInputRef = useRef(null);

  

  
  // open file explorer when button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

//  handle selected images
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  // scroll left/right through images
  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };


  return (
    <div
      className="w-[720px] h-[330px] rounded-[18.89px] flex flex-col mr-[86px]"
      style={{
        backgroundColor: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px 0 rgba(0,0,0,0.4)",
      }}
    >
      {/* Top section */}
      <div className="relative w-full h-[120px] ">

         {/* Decorative Frame */}
  <img
    src={Frame}
    alt="Frame"
    className="absolute"
    style={{ top: "20px", left: "12px" }}
  />
        {/* Left - Title */}
   <div
  className="flex items-center justify-center w-[149px] h-[62px] rounded-[20px] bg-[#171717] 
             text-white text-[20px] font-poppins font-medium leading-none "

              style={{
    position: "absolute",
    top: "20px",   
    left: "51px"   
  }}
>
  Gallery
</div>



        {/* Right - Buttons */}
        <div className="relative w-full">
       <button
       onClick={handleButtonClick}
  className="flex items-center justify-center gap-[2.52px] w-[131.32px] h-[46px] rounded-[104px]"
  style={{
    position: "absolute",
    top: "28px",
    right: "207.68px",
    backgroundColor: "rgba(255,255,255,0.03)",
    boxShadow: `
      -0.5px -0.5px 6.9px rgba(255,255,255,0.25),
       9px 10px 7.1px rgba(0,0,0,0.4),
       inset 0px 0px 48.91px rgba(255,255,255,0.05),
       inset 0px 3.26px 3.26px rgba(255,255,255,0.15)
    `,
    backdropFilter: "blur(104.56px)",
     right: "207.68px"
  }}
>
  <FiPlus className="w-[12.1px] h-[12.1px] text-white" />
  <span className="text-white font-plusJakarta font-extrabold text-[12px] leading-[6.3px]">
    ADD IMAGE
  </span>

</button>

{/* hidden file input */}
  <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
          />

{/* left arrow */}
         <button
         onClick={scrollLeft}
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center"
  style={{
    position: "absolute",
    top: "31px",      
    right: "126px",   
    background: "linear-gradient(180deg, #303439 0%, #161718 100%)",
     boxShadow: `
      -5px -3px 30px -10px #96BEE7,
      4px 5px 30px 5px #101213
    `,
    // opacity: currentIndex === 0 ? 0.4 : 1,
  }}
         >
           <FiArrowLeft
            
            className="text-gray-600 items-center " weight="2" />
         </button>

         {/* right arrow */}
          <button
          onClick={scrollRight}
           className='w-[45px] h-[45px] rounded-full flex items-center justify-center'

            style={{
    position: "absolute",
    top: "31px",      
    right: "63px",   
    background: "linear-gradient(180deg, #303439 0%, #161718 100%)",
     boxShadow: `
      -5px -3px 30px -10px #96BEE7,
      4px 5px 30px 5px #101213
    `,
    // opacity: currentIndex >= images.length - 3 ? 0.4 : 1,
  }}

          >
           <FiArrowRight  
             
           className="text-gray-600 items-center " weight="2"/>
         </button>
        </div>
      </div>

      {/* Bottom section (empty for now) */}
       <div
  
        className="flex-1 flex items-center gap-4 px-6 overflow-hidden overflow-x-auto scroll-smooth scrollbar-hide"
        style={{
    paddingLeft: "51px",
    paddingRight: "57px",
    
  }}
       
       >
        {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
          <img
            key={index}
  src={img}
  alt={`Uploaded ${index}`}
  className="w-[190px] h-[179px] object-cover rounded-[24px] 
             transition-all duration-500 ease-out
             grayscale hover:grayscale-0
             hover:scale-110 hover:-rotate-2 hover:-translate-y-2 hover:translate-x-1
             hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
          />
        ))}
      </div>

       
    </div>
  );
};

export default GalleryWidget; 


