import Logo from "@/assets/Logo.png"
import { motion } from 'framer-motion';



const Footer = () => {
    return (
        <footer className="bg-primary-100 py-20 mt-20">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">

                <motion.div className="basis-1/2 md:mt-0"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{delay:0.2, duration: 1 }}
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible:{opacity: 1, x:0}
                 }}
                >
                    <img src={Logo} alt="Brand Logo" />
                    <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis soluta similique, aperiam incidunt amet veniam alias rerum voluptatum totam.</p>
                    <p> &copy; Evogym All Right Reserved</p>
                </motion.div>

                <div className="basis-1/4 md:0">
                    <h4 className="font-bold">Links</h4>
                    <p className="py-5">Lorem ipsum dolor sit, </p>
                    <p>amet consectetur adipisicing.</p>
                    <p> consectetur adipisicing.</p>
                    
                </div>
                <div className="basis-1/4 md:0">
                <h4 className="font-bold">Contact Us</h4>
                    <p className="py-5">For more design, Call me on the number below </p>
                    <p> +234 7034278995</p>
                </div>
                

           </div>
            

       </footer>
    )
};

export default Footer