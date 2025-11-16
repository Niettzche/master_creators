import { WavyBlock, WavyBlockItem } from "@/components/ui/wavy-text-block";

const titles = [
  "Flexible",
  "Animated",
  "Customizable",
  "Optimized",
  "Lightweight",
  "Responsive",
  "UI Blocks",
];

export default function DemoOne() {
  return (
    <main className="h-[300vh] pt-60 overflow-hidden">
      <div className="max-w-6xl">
        <WavyBlock className="flex flex-col justify-start items-start gap-6">
          {titles.map((title, index) => (
            <WavyBlockItem key={title} index={index}>
              <h2 className=" text-[9.3vw] font-bold leading-none tracking-tighter uppercase whitespace-nowrap">
                {title}
              </h2>
            </WavyBlockItem>
          ))}
        </WavyBlock>
      </div>
    </main>
  );
}
