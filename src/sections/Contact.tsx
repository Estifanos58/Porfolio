import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 ">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <div className="absolute inset-0 opacity-5 pointer-events-none -z-10" style={{
            backgroundImage:`url(${grainImage})`,
          }}></div>

          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div className="md:w-[300px] lg:w-[700px]">
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and discuss how
                I can help you achieve your goals.
              </p>
            </div>  

            <div className="flex flex-col justify-center items-center gap-4 md:gap-2 md:text-sm w-full">
              <Input type="text" placeholder="Enter Your Name" className="p-2 md:p-1 w-full font-mono rounded-md" />
              <Input type="text" placeholder="Enter Your Email" className="p-2 rounded-md font-mono md:p-1 w-full" />
              <Textarea placeholder="Enter Your Message" className="p-2 rounded-md w-full h-36 md:h-20 font-mono resize-none"/>
              <Button className="px-6 py-2 md:py-1 text-xl rounded-lg text-white w-[200px] font-mono">Send</Button>
            </div>

          </div>
        </div>
      </div>
   </div>
  );
};
