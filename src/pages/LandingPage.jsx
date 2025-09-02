import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const plugin = React.useRef();
  return (
    <>
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        <section className="text-center">
          <h1 className="flex flex-col items-center justify-center text-4xl sm:text-6xl lg:text-8xl font-extrabold bg-gradient-to-br from-gray-500 via-gray-200 to-white text-transparent bg-clip-text tracking-tighter py-4">
            Find Your Dream Job{" "}
            <span className="flex items-center gap-2 sm:gap-6">
              and get{" "}
              <img
                className="h-14 w-14 sm:w-16 lg:w-24 rounded-full sm:h-16 lg:h-24"
                src="/mylogo.jpg"
                alt="logo"
              />
            </span>
          </h1>
          <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
            Explore thousands of job listings or find the perfect candidate
          </p>
        </section>
        <div className="flex items-center gap-6 justify-center">
          {/* buttons  */}
          <Link to={"/jobs"}>
            <Button variant={"blue"} size={"xl"}>
              Find Jobs
            </Button>
          </Link>
          {/* buttons  */}
          <Link to={"/post-job"}>
            <Button variant={"destructive"} size={"xl"}>
              Post a Job
            </Button>
          </Link>
        </div>
        {/* curousel */}
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    className="h-9 sm:h-14 object-contain"
                    src={path}
                    alt={name}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        {/* banner  */}
        <img src="/HiringBanner.jpg" alt="banner" className="w-full" />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Search and apply for jobs, track applications, and more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Post jobs, manage applications, and find the best candidates
              </p>
            </CardContent>
          </Card>
        </section>
        {/* Accordion  */}
        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </>
  );
};

export default LandingPage;
