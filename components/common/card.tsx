import { formateDate } from "@/utils/formateDate";
import { getReadTime } from "@/utils/getReadTime";
import Link from "next/link";

interface CardProps {
  // variant?: "default" | "small" | "noImage";
  title: string;
  id: string;
  content?: string;
  date: string;
  href: string;
  // image?: string;
}
export default function Card({
  // variant = "default",
  title,
  date,
  content,
  id,
  href,
  // readTime,
}: CardProps) {
  const readTime = getReadTime(content as string);
  const formattedDate = formateDate(date);
  return (
    <Link href={`/blog/${href}`} className="group flex items-center p-4">
      <div>
        <p className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:translate-y-1 after:bg-dark-muted after:opacity-0 after:transition-all after:content-[''] group-hover:after:translate-y-0 group-hover:after:opacity-100 dark:after:bg-light-muted sm:text-lg">
          {title}
        </p>
        <p className="text-dark-muted dark:text-light-muted">
          <span>{formattedDate}</span> {/* • <span> {readTime}</span>*/}
        </p>
      </div>
    </Link>
  );
}