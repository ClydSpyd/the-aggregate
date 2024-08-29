import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-36 relative h-full">
      <Image
        className="mb-5"
        src={"/images/sad_document.png"}
        height={150}
        width={80}
        alt={"sad document"}
      />
      <h1 className={"text-2xl font-poppins text-white"}>Page not found</h1>
      <Link href={"/"}>
        <div className="w-[140px] h-[40px] text-center flex items-center justify-center bg-brandFive hover:bg-opacity-60 text-white rounded-md font-semibold mt-5">
          Home
        </div>
      </Link>
    </section>
  );
}
