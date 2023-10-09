import {
  BiAnchor,
  BiAnalyse,
  BiAtom,
  BiBookReader,
  BiBuildings,
  BiDonateHeart,
} from "react-icons/bi";
import Marquee from "react-fast-marquee";
const Featured = () => {
  return (
    <div>
      <h3 className="text-3xl text-center">
        <span className=" font-semibold">Featured In </span>
      </h3>
      <Marquee pauseOnHover speed={40} delay={2}>
        <div className=" text-fuchsia-300 flex mt-8 space-x-14">
          <div className="text-xl font-medium italic flex items-center">
            <BiAnchor></BiAnchor>
            <p>Edu-Anchor</p>
          </div>
          <div className="text-xl font-medium italic flex items-center">
            <BiDonateHeart></BiDonateHeart>
            <p>CourseFair</p>
          </div>
          <div className="text-xl font-medium italic flex items-center">
            <BiAnalyse></BiAnalyse>
            <p>AnalysisHub</p>
          </div>
          <div className="text-xl font-medium italic flex items-center">
            <BiAtom></BiAtom>
            <p>Atom-World</p>
          </div>
          <div className="text-xl font-medium italic flex items-center">
            <BiBookReader></BiBookReader>
            <p>Edu-Book</p>
          </div>
          <div className="text-xl font-medium italic flex items-center">
            <BiBuildings></BiBuildings>
            <p>ArchTech</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Featured;
