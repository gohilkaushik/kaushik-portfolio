import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// TextPlugin is part of GSAP core; no separate import needed for basic text animation.
// SplitText is a Club GreenSock plugin — use manual character/word splitting in components if needed.

export { gsap, ScrollTrigger };
export default gsap;
