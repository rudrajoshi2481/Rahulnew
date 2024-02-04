"use client";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
function page() {
  return (
    <div>
      <Hero />
      <ScrollAnimation />
      <Logos />
      <Separator />
      <Stories />
    </div>
  );
}

const Stories = () => {
  return (
    <div className="lg:m-12 lg:mx-24">
      <h1 className="text-6xl font-bold mb-24">Our Stories</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="lg:flex p-3 justify-evenly">
              <div className="max-w-[600px]">
                <h1 className="text-5xl font-bold">
                  Global Excellence in Delivery:
                </h1>
                <p className="font-lg mt-3">
                  At Benifexim, we pride ourselves on a commitment to delivering
                  a diverse range of high-quality products worldwide. From
                  meeting specific demands to ensuring timely deliveries, our
                  global presence guarantees satisfaction at every corner of the
                  globe.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/delivery.jpg"
                  width={600}
                  height={600}
                  alt="delivery"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="lg:flex p-3 justify-evenly">
              <div className="max-w-[600px]">
                <h1 className="text-5xl font-bold">Global Market Impact:</h1>
                <p className="font-lg mt-3">
                  Benifexim is not just a local player; our increasing global
                  reach has positioned us as a major exporter to 11 different
                  countries. Continual improvement in the quality of our
                  products gives us unparalleled access to diverse markets,
                  reinforcing our status as a trusted and impactful player in
                  the international trade arena.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/market.jpg"
                  width={600}
                  height={600}
                  alt="delivery"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="lg:flex p-3 justify-evenly">
              <div className="max-w-[600px]">
                <h1 className="text-5xl font-bold">Customer-Centric Energy:</h1>
                <p className="font-lg mt-3">
                  Our customer focus is not just a philosophy; it{"'"}s a way of
                  life at Benifexim. We thrive on understanding and living with
                  the energy of our customers, constantly adapting to their
                  needs and speed. As your strong and reliable partner, customer
                  satisfaction remains our top priority.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/customer.jpg"
                  width={600}
                  height={600}
                  alt="delivery"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="lg:flex p-3 justify-evenly">
              <div className="max-w-[600px]">
                <h1 className="text-5xl font-bold">Cost Reflects Quality:</h1>
                <p className="font-lg mt-3">
                  In the realm of import and export, Benifexim stands firm on
                  the principle that cost is proportional to quality. We
                  maintain rigorous quality standards across our product range,
                  ensuring that every shipment reflects our unwavering
                  dedication to excellence.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/quality.jpg"
                  width={600}
                  height={600}
                  alt="delivery"
                />
              </div>
            </div>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const Logos = () => {
  return (
    <div className="mx-24 my-12 flex gap-8 flex-wrap justify-center">
      <Image src={"/assets/GST.png"} width={350} height={350} alt="GST" />
      <Image src={"/assets/Apeda.png"} width={350} height={350} alt="GST" />
      <Image src={"/assets/fssai.png"} width={350} height={350} alt="GST" />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="h-[60vh] flex  flex-wrap p-9  lg:flex-col justify-center ">
      <div className="lg:ml-24 md:ml-24   min-w-[300px] max-w-[750px]">
        <h1 className="lg:text-8xl md:text-3xl sm:text-3xl font-bold ">
          Elevating Excellence in Exports
        </h1>
        <p className="lg:w-[40vw] py-6">
          Benifexim, a leading name in international exports, specializes in
          delivering superior quality food, VEGETABLES, CLOTHING,
          andPHARMACEUTICALS. Our unwavering commitment to excellence and global
          standards defines us as a trusted partner for premium products
          worldwide.
        </p>
      </div>
      <div className=" max-w-[650px] min-w-[200px] ">
        <Image
          src={"/assets/cargo_ships.jpg"}
          alt="homepage"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default page;
