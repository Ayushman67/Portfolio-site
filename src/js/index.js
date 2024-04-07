import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import resume from "../assets/Resume.pdf";

export default function initApp() {
  initSr();
  initTilt();
  addResume(resume);
}
