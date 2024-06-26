import Image from "next/image";

export const VMLogo = ({ isDark, isFull, width = 64, height = 64 }) => {
  return (
    <>
      {isFull ? (
        <Image
          alt="VModel Logo"
          priority
          src={`/assets/images/logo/${
            isDark ? "vmodel-logo-full.png" : "vmodel-logo-full.png"
          }`}
          width={width}
          height={height}
          className="rounded-[999px] object-contain max-w-full inline-block align-middle"
        />
      ) : (
        <Image
          alt="VModel Logo"
          priority
          src={`/assets/images/logo/${
            isDark ? "vmodel-logo-light.svg" : "vmodel-logo.svg"
          }`}
          width={width}
          height={height}
          className="rounded-[999px] object-contain max-w-full inline-block align-middle"
        />
      )}
    </>
  );
};
