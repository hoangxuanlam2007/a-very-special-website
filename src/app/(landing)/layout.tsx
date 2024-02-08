import Image from "next/image";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-full overflow-auto overflow-x-hidden bg-white">
      <Image
        src="/twist_line_edit_bg.png"
        alt="landing"
        fill
        sizes="100vw"
        unoptimized={true}
        className="absolute inset-0 object-cover overflow-hidden h-fix-webkit-ios"
      />
      <div className="relative z-20 h-full w-full ">{children}</div>
    </main>
  );
};
export default LandingLayout;