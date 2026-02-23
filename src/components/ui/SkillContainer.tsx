import { cn } from "@/lib/utils";

type SkillContainerProps = {
  name: string;
  className?: string;
};

export default function SkillContainer({
  name,
  className,
}: SkillContainerProps) {
  return (
    <div
      className={cn(
        "border-2 border-border rounded-lg px-[1em] font-ubuntu-mono",
        className,
      )}
    >
      {name}
    </div>
  );
}
