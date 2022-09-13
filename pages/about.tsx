import Link from "next/link";
import Page from "../constants/page";

const About = () => {
  return (
    <div>
      extension-demo
      <div>
        <Link href={Page().index}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
