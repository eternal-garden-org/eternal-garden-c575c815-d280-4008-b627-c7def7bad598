import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialBioProps {
  className?: string;
}

export function MemorialBio({ className }: MemorialBioProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Typography.H2 className="text-4xl font-medium">Наш маленький ангел</Typography.H2>
          <Typography.P className="text-base text-muted-foreground">
            Ваня появился на свет 1 июля 2025 года, принеся в нашу семью огромную радость и надежду. 
            Его маленькие ручки, первая улыбка, тихое дыхание во сне — каждый момент с ним был драгоценным. 
            Хотя Ваня был с нами всего 29 дней, он успел наполнить наши сердца безграничной любовью.
          </Typography.P>
        </div>

        <div className="space-y-3">
          <Typography.H2 className="text-4xl font-medium">Память о Ване</Typography.H2>
          <div className="text-base text-muted-foreground space-y-4">
            <Typography.P>
              Каждый день с Ваней был особенным. Его спокойный характер, способность успокаиваться 
              на маминых руках, его маленькие звуки и движения — всё это останется в наших сердцах навсегда. 
              Он был таким крепким и красивым малышом.
            </Typography.P>
            <Typography.P>
              Ваня научил нас ценить каждое мгновение, каждое прикосновение, каждый взгляд. 
              Его короткая, но яркая жизнь показала нам, что любовь не измеряется временем, 
              а силой чувств, которые остаются с нами навсегда.
            </Typography.P>
          </div>
        </div>

        <div className="space-y-3">
          <Typography.H2 className="text-4xl font-medium">Наша любовь</Typography.H2>
          <Typography.P className="text-base text-muted-foreground">
            Ваня останется в наших сердцах как символ чистой, безусловной любви. 
            Хотя его путь был коротким, он оставил неизгладимый след в наших душах. 
            Мы будем помнить его улыбку, его тепло и ту радость, которую он принёс в нашу жизнь.
          </Typography.P>
        </div>
      </div>
    </div>
  );
}