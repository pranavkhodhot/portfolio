import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const AnimatedButton = ({ text }) => {
  return (
    <a href="Pranav_Khodhot_Resume.pdf" download>
      <motion.button
        whileHover={{
          borderWidth: "4px",
          padding: "12px 30px",
        }}
        transition={{ duration: 0.2 }}
        className="btn-animated"
      >
        {text}
      </motion.button>
    </a>
  );
};

export default AnimatedButton;
