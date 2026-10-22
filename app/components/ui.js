// Shared building blocks for the site's quiet look: one frame, one ink,
// one ground, one field colour, one pill button.
export const frame = "mx-auto max-w-[1400px] px-4 sm:px-10 md:px-20";

export const sectionTitle =
  "text-[clamp(2rem,3.4vw,3rem)] font-light leading-[1.1] tracking-tight";

export const pageTitle =
  "text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-tight";

const button =
  "inline-block rounded-full px-7 py-3 text-[16px] font-normal transition duration-300 active:scale-[0.98]";
export const buttonInk = `${button} bg-[#3e3e3e] text-[#faf7f0] hover:bg-black`;
export const buttonCream = `${button} bg-[#faf7f0] text-[#3e3e3e] hover:bg-white`;
