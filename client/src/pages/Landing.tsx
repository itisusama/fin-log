import { icon } from "@/imports/icon";
import { ui } from "@/imports/ui";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <ui.MainHeading
        title="Character Encyclopedia"
        data-aos="fade-down"
      />
      <p className="text-center my-4" data-aos="fade-up">
        Hi! There. Do you have issues in what character to use?
        <br />
         You can create or find characters for you next novel here.
      </p>

          <Link to="/dashboard">
            <ui.Button variant="secondary" data-aos="fade-down">
              Get to Dashboard
              <icon.ArrowRight />
            </ui.Button>
          </Link>
    </div>
  );
}