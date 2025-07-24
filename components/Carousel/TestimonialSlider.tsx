import React from "react";
import { cn } from "@/lib/utils";
import { Card, QuoteRightIcon, Avatar, Button} from "flowbite-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  imageSrc,
  className,
}) => {
  return (
    <div className={cn("w-full max-w-3xl mx-auto px-4", className)}>
      <Card className="relative overflow-hidden border-none shadow-lg rounded-xl p-8 md:p-10 dark:bg-[var(--primary)]">
        <div className="absolute top-4 left-4 w-40 h-40 opacity-40">
          <QuoteRightIcon className="text-black" />
        </div>
        
        <div className="relative z-10">
          <blockquote className="mb-8 text-lg md:text-xl font-medium text-gray-800 italic">
            "{quote}"
          </blockquote>
          
          <div className="flex flex-col items-center mt-6">
            <Avatar className="h-16 w-16 border-2 border-white shadow-md rounded-full">
              {/* <AvatarImage src={imageSrc} alt={author} /> */}
              {/* <Avatar>{author[0]}</AvatarFallback> */}
              
            </Avatar>
            <div className="mt-4 text-center">
              <h4 className="font-semibold text-gray-900">{author}</h4>
              <p className="text-sm text-gray-700">{role}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Testimonial;
