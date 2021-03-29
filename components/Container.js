import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = ({ children }) => {
 return (
  <>
   <Navbar />
   {children}
   <Footer />
  </>
 );
};

export default Container;
