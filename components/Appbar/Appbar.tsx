"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Vegitables",
    href: "/products",
    description:
      "Providing a farm-fresh assortment of vibrant and nutritious vegetables for a healthy and flavorful culinary experience.",
  },
 
  {
    title: "Cloths",
    href: "/products",
    description:
      "Offering trendy and comfortable clothing to elevate your style with a blend of fashion and comfort.",
  },
  {
    title: "Pharmaceuticals",
    href: "/products",
    description:
      "Ensuring well-being through top-tier pharmaceuticals, committed to health and quality in every dose.",
  },
];

export function Appbar() {
  return (
    <div className="flex justify-between lg:mx-72 lg:my-6">
      <Link href={"/"}><Image src="/assets/logo.png" width={150} height={50} alt="logo" /></Link>
      <div>
        <NavigationMenuComponent />
      </div>
    </div>
  );
}

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      benifexim/export
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      delivering superior quality food, vegetables, clothing,
                      and pharmaceuticals.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/aboutus" title="Introduction">
                a leading name in international exports, specializes in
                delivering superior quality food, vegetables, clothing, and
                pharmaceuticals.
              </ListItem>
              <ListItem href="/aboutus" title="About Page">
                At Benifexim, we recognize the significance of each shipment in
                shaping global experiences. Whether it's nourishing lives with
                top-tier food products, adorning the world with fashionable
                clothing, or contributing to healthcare through pharmaceutical
                exports, our mission remains unwavering – to enrich lives
                globally by consistently delivering products of the utmost
                quality.
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <Link href="/contactus" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
