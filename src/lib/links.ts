export type LinkItem = {
  id: string; // 클릭 수 저장 키 — 바꾸면 기존 집계가 이어지지 않음
  title: string;
  url: string;
};

// 보여 주기용 더미 데이터 — 실제 내용은 나중에 교체
export const links: LinkItem[] = [
  { id: "github", title: "🐙 GitHub", url: "https://github.com/kimddil" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
