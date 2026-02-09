import Image from 'next/image';
import React from 'react';

const ProjectSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-32 p-6 bg-black relative z-10">
      <div className="w-full h-20vh whitespace-normal flex justify-center">
        <h4 className="text-6xl text-white font-bold">Here&apos;s more</h4>
      </div>
      <div className="w-full min-h-screen h-full z-10 bg-black relative text-white grid xl:grid-rows-[repeat(4,minmax(35vh,1fr))] grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectContainer origin="left" name="Agency" image="proj2.png" />
        <ProjectContainer origin="center" name="Agency" />
        <ProjectContainer
          origin="right"
          name="Explore Indonesia"
          image="proj2.png"
        />

        <a
          href="https://furniture-ecommerce-767snebex-ainderew.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="row-span-2 col-span-2 flex flex-col group"
        >
          <div className="h-full w-full flex flex-col gap-2">
            <div className="bg-white h-full w-full relative flex items-end overflow-hidden">
              <Image
                src={'/assets/cover.jpg'}
                alt="project"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-[1.1] duration-300"
              />
              <div className="w-full h-1/2 bg-[rgba(0,0,0,0.8)] translate-y-[100%] group-hover:translate-y-0 duration-200 p-4 group-hover:shadow-[0_-5px_15px_5px_rgba(0,0,0,0.3)] flex flex-col gap-8">
                <span className="">Project Name: Agency</span>
                <span className="">
                  Description: Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Dolorem, facilis!
                </span>
              </div>
            </div>
            <div className="">
              <span className="text-xl">AVION FURNITURES</span>
            </div>
          </div>
        </a>

        <ProjectContainer origin="right" name="Agency" />

        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
      </div>
    </div>
  );
};

export default ProjectSection;

interface props {
  origin: string;
  name: string;
  image?: string;
}
export const ProjectContainer: React.FC<props> = ({
  origin,
  name,
  image = 'proj.jpg',
}) => {
  return (
    <a
      href="https://furniture-ecommerce-767snebex-ainderew.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col group "
    >
      <div className="h-full w-full flex flex-col gap-2 ">
        <div
          className={`bg-white h-full w-full relative overflow-hidden flex items-end group-hover:scale-[1.2] delay-0 group-hover:delay-500 group-hover:z-20 group-hover:shadow-lg  origin-${origin} duration-200`}
        >
          <Image
            src={`/assets/${image}`}
            alt="project"
            fill
            style={{ objectFit: 'cover' }}
            className=" duration-300"
          />
          <div className="w-full h-1/2 bg-[rgba(0,0,0,0.8)] translate-y-[100%] delay-0 group-hover:delay-500 group-hover:translate-y-0 duration-200 p-4 group-hover:shadow-[0_-5px_15px_5px_rgba(0,0,0,0.3)] flex flex-col gap-8">
            <span className="">Project Name: {name}</span>
            <span className="">
              Description: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolorem, facilis!
            </span>
          </div>
        </div>
        <div className="">
          <span className="text-xl">AGENCY</span>
        </div>
      </div>
    </a>
  );
};
