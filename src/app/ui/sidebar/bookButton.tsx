import Link from "next/link";
type reservationLink = {
  link: string;
};
export const Book = ({ link }: reservationLink) => {
  return (
    <Link
      target="_blank"
      href={`${link}`}
      className="flex lg:w-full justify-center items-center bg-[#191919] shadow-2xl rounded-md p-2 font-extralight space-x-2 hover:ring hover:opacity-80 duration-300"
    >
      <p>Book now</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    </Link>
  );
};
