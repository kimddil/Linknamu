type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/70 bg-white/45 px-6 py-[1.125rem] text-center text-[15px] font-semibold shadow-[0_6px_24px_-12px_rgba(120,64,32,0.35)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_28px_-12px_rgba(120,64,32,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:hover:bg-white/[0.1]"
    >
      {title}
    </a>
  );
}
