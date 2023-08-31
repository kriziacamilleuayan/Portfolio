import { useEffect } from "react";
import Banner from "./banner";
import Contact from "./contact";
import Introduction from "./introduction";
import Skills from "./skills";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Introduction />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
