"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/links";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 받아오기 전에는 비어 있으므로 모든 카드가 0회로 표시됨
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: Record<string, number>) =>
        // 응답 전에 눌린 클릭(낙관적 +1)이 덮여 사라지지 않도록 큰 값을 유지
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, n] of Object.entries(prev)) next[id] = Math.max(next[id] ?? 0, n);
          return next;
        }),
      )
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true, // 같은 탭에서 이동해도 요청이 끝까지 전송되도록
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { count: number }) => setCounts((prev) => ({ ...prev, [id]: data.count })))
      .catch(() => {});
  };

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
