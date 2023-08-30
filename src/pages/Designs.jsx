import Gallery from '../components/gallery';


const Designs = () => {
  return (
    <>
      <div className="grid justify-center h-full pt-20 text-white bg-gradient-to-b from-[#99B898] via-[#99B898]  to-[#2A343B] place-items-center">
        <div className="grid justify-center text-center place-items-center">
          <h2 data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="4000" className="bg-[url('src/assets/A02.jpg')]  md:bg-[left_bottom] bg-[left_bottom] bg-no-repeat md:bg-[length:260px] bg-[length:300px] text-5xl font-bold bg-clip-text text-transparent drop-shadow-[1.5px_-1.5px_1px_white] h-20  ">
            ./Designs
          </h2>
          <p className="text-xl ">Selected Designs I&apos;ve worked on in the past</p>
          <p className=" font-mono text-xl font-semibold text-center text-[#E84A5F]">
            Click on the image to view it better.
          </p>
        </div>

        <Gallery />
      </div>
    </>
  );
};

export default Designs;