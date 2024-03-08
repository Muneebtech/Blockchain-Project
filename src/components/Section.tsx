import { useTheme } from "next-themes";
import React, { forwardRef } from "react";

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

//why using forwardRef here, and not using Image tag of Next js
const Section: React.ForwardRefRenderFunction<HTMLDivElement, SectionProps> = (
  { title, description, imageSrc, imageAlt, reverse },
  ref
) => {
  const { theme } = useTheme();
  const sectionBackgroundColor =
    theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const sectionTextColor = theme === "dark" ? "text-white" : "text-gray-800";
  return (
    <div
      className={`container ${
        reverse ? "flex-row-reverse  lg:flex-row-reverse" : "flex-row"
      } mx-auto flex p-8 flex-col lg:flex-row md:flex-col items-center lg:items-center py-8 ${sectionBackgroundColor} ${sectionTextColor} border-b border-gray-300 `}
      ref={ref}
    >
      <div>
        <h2 className="text-4xl font-bold  mb-4">{title}</h2>
        <p className=" text-2xl leading-relaxed">{description}</p>
      </div>

      <div className={`mt-6 lg:mt-0`}>
        <img src={imageSrc} alt={imageAlt} className="w-full" />
      </div>
    </div>
  );
};

export default forwardRef(Section);
