import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white  py-16 px-10">
            <div className="grid grid-cols-3 mb-16 font-bold">
                <img
                    className="h-[30px]"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808d31a7eca1775993ae82_Black.svg"
                />
                <div>
                    <h3 className="font-medium">CONTACT</h3>
                    <p className="text-2xl py-8 font-sans">contact@fitnesso.com</p>
                    <h3 className="font-medium pb-2">LICENCING</h3>
                    <p className="text-2xl py-1 font-sans">Copyright Flow Ninja</p>
                    <p className="text-2xl py-1 font-sans">Powered By Webflow</p>
                    <p className="text-2xl py-1 font-sans">Licencing</p>
                    <p className="text-2xl py-1 font-sans">Support</p>
                </div>
                <div>
                    <h3 className="font-medium pb-2">EXPLORE</h3>
                    <p className="text-2xl py-1 font-sans">Premium Courses</p>
                    <p className="text-2xl py-1 font-sans">Free Courses</p>
                    <p className="text-2xl py-1 font-sans">Blog</p>
                    <p className="text-2xl py-1 font-sans">About</p>
                    <p className="text-2xl py-1 font-sans">Contact</p>
                    <p className="text-2xl py-1 font-sans">Style Guide</p>
                </div>
            </div>
            <div className="flex justify-around">
                <PaymentMethodImg
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83076eb74fcd72dd21dc7b_paypal.svg"
                />
                <PaymentMethodImg
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8304eb6ceb87f7281f6fdc_Stripe_Logo%2C_revised_2016.svg"
                />
                <PaymentMethodImg
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8305e9097a90332d0e6f79_mc_symbol.svg"
                />
                <PaymentMethodImg
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83061fb74fcd764121d765_Visa_2014_logo_detail.svg"
                />
                <PaymentMethodImg
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8306f7b74fcd548421db27_download.svg"
                />
            </div>
        </footer>
    );
};

const PaymentMethodImg: React.FC<{ src: string; alt: string }> = (props) => {
    return (
        <div className="py-1 px-5 w-[70px] bg-white rounded-lg flex items-center justify-center">
            <img alt={props.alt} src={props.src} />
        </div>
    );
};

export default Footer;

