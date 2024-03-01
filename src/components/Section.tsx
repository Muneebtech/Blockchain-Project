// SectionComponent.tsx

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
}) => {
  return (
    <div
      className={`container ${
        reverse ? "flex-row-reverse  lg:flex-row-reverse" : "flex-row"
      } mx-auto flex flex-col lg:flex-row md:flex-col items-center lg:items-center py-8`}
    >
      {/* Text Column */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-2xl leading-relaxed">{description}</p>
      </div>

      {/* Image Column */}
      <div className={`mt-6 lg:mt-0`}>
        <img src={imageSrc} alt={imageAlt} className="w-full" />
      </div>
    </div>
  );
};

export default Section;
