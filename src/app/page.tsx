import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "김종선",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요.",
  imageSrc: "https://placehold.co/144x144/orange/white",
};

// 보여 주기용 더미 데이터 — 실제 내용은 나중에 교체
const links = [
  { title: "🐙 GitHub", url: "https://github.com/kimddil" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="relative isolate mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-6 pb-20 pt-20 sm:pt-28">
      {/* 글래스 카드 뒤로 비치는 은은한 배경 빛 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
        <div className="absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/15" />
      </div>
      <ProfileHeader {...profile} />
      <ul className="mt-12 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
