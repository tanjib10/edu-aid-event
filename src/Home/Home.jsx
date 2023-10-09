import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";

const Home = () => {
  return (
    <div className="py-12">
      <Banner></Banner>
      <div className="pt-32">
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
