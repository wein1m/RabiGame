import { ParallaxProviders } from "@/app/ParallaxProviders";
import React from "react";
import ContactForm from "./ContactForm";
import ScrollVelocity from "@/components/ScrollVelocity";

const page = () => {
  // const handleFormSubmit = (data) => {
  //   console.log("Parent Dta: ", data);
  // };

  return (
    <ParallaxProviders>
      <section id="page-contact">
        <div className="title">
          <h3>
            <div className="rounded-full bg-text-primary size-3" />
            Contact
          </h3>
          <h1>Get in Touch</h1>
        </div>

        <div className="contact">
          <div className="form-container">
            <ContactForm />
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511.699726668627!2d139.51169359670828!3d35.30971184601344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184f42a6c2df5f%3A0xafcbf29fff985188!2sShichirigahamahigashi%2C%20Kamakura%2C%20Kanagawa%20248-0025%2C%20Japan!5e0!3m2!1sen!2sid!4v1759936070728!5m2!1sen!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="mt-96 -rotate-3">
          <ScrollVelocity
            texts={["✦ RABIGAMES ✦"]}
            className="my-2 stroke-text"
            direction="right"
          />
        </div>
      </section>
    </ParallaxProviders>
  );
};

export default page;

{
  /* <div className="w-full">
                <h4 className="text-base font-neueMachina-bold capitalize tracking-wide text-text-primary mb-4">
                  Office
                </h4>
                <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5">
                  Shichirigahamahigashi, Kamakura, Kanagawa 248-0025, Japan
                </p>
              </div> */
}

/*
          <div className="left-side">
            <div className="border-t border-secondary/60 pt-3 px-2 w-full">
              <div className="flex flex-row justify-between">
                <h5 className="text-base font-neueMachina-bold capitalize tracking-wide text-text-primary mb-4">
                  Visit Us
                </h5>
                <h5 className="font-neueMachina-bold text-base text-secondary">
                  /01
                </h5>
              </div>
              <div className="max-w-[42rem] flex flex-col gap-5 font-hk-grotesk text-base tracking-wide">
                <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5">
                  Shichirigahamahigashi, Kamakura, Kanagawa 248-0025, Japan
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511.699726668627!2d139.51169359670828!3d35.30971184601344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184f42a6c2df5f%3A0xafcbf29fff985188!2sShichirigahamahigashi%2C%20Kamakura%2C%20Kanagawa%20248-0025%2C%20Japan!5e0!3m2!1sen!2sid!4v1759936070728!5m2!1sen!2sid"
                width="600"
                height="350"
                style={{ border: 0, marginTop: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full"></div>
          </div>
*/
