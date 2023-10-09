import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <div className="py-12">
      <Banner></Banner>
      <div className="space-y-32 pt-32">
        <Featured></Featured>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
