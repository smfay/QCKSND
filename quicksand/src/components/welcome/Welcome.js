import React from "react";
import { Fade } from "react-awesome-reveal";

import render from "../../assets/images/render4.png";
import render2 from "../../assets/images/blob2.png";

function Welcome() {
  return (
    <div className="welcome overflow-hidden">
      <Fade damping={0.2} cascade={true} direction="left">
        <h1 className="font-medium">Designer,</h1>
        <h1 className="font-medium">Developer.</h1>

        <span className="w-full h-60 md:h-96 mb-20 mt-20 bg-[#ADDC49] transition-all duration-300 ease-in-out">
          <img
            className="w-[100em] lg:w-[70em] -right-0 -top-[10%] md:-top-[25%] lg:-top-[50%] absolute drop-shadow-lg transition-all duration-300 ease-in-out"
            alt="alt"
            src={render}
          />
        </span>
      </Fade>
      {/* <h2 className="text-xl font-medium">
        I have no soul but my website looks nice.
      </h2> */}
      <Fade>
        <h1 className="font-">A completely sanitized portfolio.</h1>
      </Fade>
      <Fade>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel
          orci porta non. Laoreet sit amet cursus sit amet. Tortor pretium
          viverra suspendisse potenti nullam ac tortor vitae purus. Nulla at
          volutpat diam ut venenatis tellus in metus vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          mattis nunc sed blandit libero volutpat sed cras ornare. Justo laoreet
          sit amet cursus sit amet dictum sit amet. Suscipit tellus mauris a
          diam. Sed elementum tempus egestas sed sed risus pretium. Id donec
          ultrices tincidunt arcu non sodales neque sodales ut. Consequat nisl
          vel pretium lectus quam id leo in vitae. Turpis in eu mi bibendum
          neque. Arcu bibendum at varius vel. Enim nec dui nunc mattis enim ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
          consectetur purus ut faucibus pulvinar elementum integer. Sed pulvinar
          proin gravida hendrerit lectus. Eu consequat ac felis donec et odio
          pellentesque diam volutpat. Quis hendrerit dolor magna eget est lorem.
          Arcu bibendum at varius vel pharetra. Laoreet id donec ultrices
          tincidunt arcu non sodales neque sodales. Tincidunt nunc pulvinar
          sapien et ligula ullamcorper malesuada proin. Pulvinar neque laoreet
          suspendisse interdum consectetur libero id. Sed egestas egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium.
          Tempus egestas sed sed risus pretium quam vulputate dignissim. Platea
          dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim cras. Posuere sollicitudin aliquam ultrices sagittis orci a
          scelerisque purus.
        </p>
      </Fade>

      <Fade damping={0.2} cascade={true} direction="right">
        <div className="bg-[#ADDC49] p-12 flex justify-end">
          <h1 className="font-bold">More</h1>
        </div>
        <div className="bg-[#ADDC49] p-12 flex justify-end">
          <h1 className="font-bold">Contact me</h1>
        </div>
      </Fade>
    </div>
  );
}

export default Welcome;
