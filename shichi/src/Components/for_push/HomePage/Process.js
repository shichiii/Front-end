import rentingProcessDiagram from "../../../Static/process1.svg";
import rentingProcessDiagramMobile from "../../../Static/process-vertical1.svg";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const steps = [
  { title: "Search Car Name", link: "home" },
  { title: "Select Your Category", link: "home" },
  {
    title: "Go to Advertisement Page and Select Your Car",
    link: "advertisement",
  },
  { title: "Charge Wallet", link: "wallet" },
];

const RentingProcess = () => {
  return (
    <div className="pt-36 pl-36 pr-36 bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className="wrapper">
        <h1 className="text-[46px] text-primary-black font-bold uppercase leading-[146%] font-kalam mb-9 text-center">
          The steps to <span className="text-pallate-Dark_Sky_Blue">rent </span>{" "}
          a car.
        </h1>

        <div className="flex md:flex-col justify-center md:justify-start gap-8">
          <img src={rentingProcessDiagram} alt="" className="hidden md:block" />
          <img
            src={rentingProcessDiagramMobile}
            alt=""
            className="block md:hidden"
          />

          <Scroll to="to-search" smooth={true}>
            <div className="flex flex-col md:flex-row gap-5 animate-pulse text-purple-200">

              {steps.map((step, i) => (
                <Link
                  to={`../${step.link}`} 
                  className="flex flex-col md:flex-row gap-5"
                  key={i}
                >
                  <div className="flex flex-col gap-2.5 w-fit md:w-[310px] h-[165px] md:h-fit">
                    <p className="text-dark-gray font-bold uppercase">
                      {step.title}
                    </p>
                    
                  </div>
                </Link>
              ))}
            </div>
          </Scroll>
        </div>
      </div>
    </div>
  );
};

export default RentingProcess;
