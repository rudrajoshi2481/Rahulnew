"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function pages() {

  const food = [
    {
      name: "Greenchilly",
      image: "/products/greenchilli.jpg",
      tag: "food",
    },
    {
      name: "Lemon",
      image: "/products/lemon.jpg",
      tag: "food",
    },
    {
      name: "Ginger",
      image: "/products/ginger.jpg",
      tag: "food",
    },
    {
      name: "Promogrent",
      image: "/products/promogranate.jpg",
      tag: "food",
    },
    {
      name: "Drumstick",
      image: "/products/drumstick.jpg",
      tag: "food",
    },
    {
      name: "Onion",
      image: "/products/onion.jpg",
      tag: "food",
    },
    {
      name: "Small Onion",
      image: "/products/onion.jpg",
      tag: "food",
    },
  ];
  
  const cloth = [
    {
      name: "Leggings",
      image: "/products/Leggings.jpg",
      tag: "cloth",
    },
    {
      name: "Shorts",
      image: "/products/cloths.jpg",
      tag: "cloth",
    },
    {
      name: "Tops",
      image: "/products/silk.jpg",
      tag: "cloth",
    },
    {
      name: "Hoodies",
      image: "/products/silk.jpg",
      tag: "cloth",
    },
    {
      name: "Jackets",
      image: "/products/cotton.jpg",
      tag: "cloth",
    },
    {
      name: "Gymwear",
      image: "/products/silk.jpg",
      tag: "cloth",
    },
    {
      name: "Yoga Pants",
      image: "/products/cotton.jpg",
      tag: "cloth",
    },
    {
      name: "Tank Tops",
      image: "/products/silk.jpg",
      tag: "cloth",
    },
    {
      name: "Sports Bras",
      image: "/products/cotton.jpg",
      tag: "cloth",
    },
    {
      name: "Teamwear",
      image: "/products/silk.jpg",
      tag: "cloth",
    },
    {
      name: "Sweatshirt Leggings",
      image: "/products/cotton.jpg",
      tag: "cloth",
    }
    // Add more items as needed
  ];
  
  const pharmaceuticals = [
    {
      name: "Metformine",
      image: "/products/pharmaceuticals.jpg",
      tag: "pharmaceuticals",
    },
    {
      name: "Aspirin",
      image: "/products/pharmaceuticals.jpg",
      tag: "pharmaceuticals",
    },
    {
      name: "Atenolol",
      image: "/products/pharmaceuticals.jpg",
      tag: "pharmaceuticals",
    },
    {
      name: "Atorvastatin",
      image: "/products/pharmaceuticals.jpg",
      tag: "pharmaceuticals",
    },
  ];
  
  const mergedData = [...food, ...cloth, ...pharmaceuticals];
  
  

  const [showProducts, setshowProducts] = useState(mergedData)


  return (
    <div className="flex content-center flex-col  items-center p-6">
      <div className="lg:min-w-[900px] justify-center   flex mb-9 ">
        <Input placeholder="Search Food & Vegitables" />
        <Button>Search</Button>
      </div>

      <div className="flex justify-center flex-wrap gap-9 ">
        {
          showProducts.map(e => {
            return <ProductCard title={e.name} des={""} imageUrl={e.image} footer={e.tag}/>
          })
        }
      </div>
    </div>
  );
}

const ProductCard = ({ title, des, imageUrl, footer }: any) => {
  return (
    <div key={title}>
      <Card className="min-w-[300px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{des}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={imageUrl}  width={500} height={500} alt={title} quality={15} className="w-[300px] h-[300px] object-cover"/>
        </CardContent>
        
      </Card>
    </div>
  );
};
export default pages;
