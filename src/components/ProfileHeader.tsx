import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        unoptimized
        className="h-28 w-28 rounded-full object-cover shadow-[0_12px_32px_-12px_rgba(120,64,32,0.55)] ring-4 ring-white/80 sm:h-32 sm:w-32 dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.8)] dark:ring-white/15"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-balance text-[15px] leading-relaxed opacity-70">{bio}</p>
    </header>
  );
}
