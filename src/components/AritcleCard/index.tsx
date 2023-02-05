import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({
  title,
  intro,
  type,
  card_img,
  href,
}: {
  title: string;
  intro: string;
  type: string;
  href: string;
  card_img: string;
}) {
  return (
    <div className="group relative">
      <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        {card_img && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/card${card_img}`}
            alt={title}
            className="w-full object-cover object-center"
          />
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="dark:text-white text-sm text-gray-700">
            <Link className="hover:break-after-column" href={`/blog${href}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="mt-1  text-sm text-gray-500 dark:text-white">{intro}</p>
        </div>
        <p className="text-sm capitalize font-medium text-gray-900 dark:text-white">
          {type}
        </p>
      </div>
    </div>
  );
}
