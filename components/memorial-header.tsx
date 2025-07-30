import { format, differenceInYears, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import { MemorialPhoto } from "@/components/memorial-photo";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialHeaderProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace?: string;
  deathPlace?: string;
  photoUrl?: string;
  className?: string;
}

export function MemorialHeader({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  className,
}: MemorialHeaderProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  // Calculate age - for very young children, show days instead of years
  const ageInYears = differenceInYears(deathDay, birthDay);
  const ageInDays = differenceInDays(deathDay, birthDay);
  
  const ageText = ageInYears === 0 
    ? `${ageInDays} ${ageInDays === 1 ? 'день' : ageInDays < 5 ? 'дня' : 'дней'} жизни`
    : `${ageInYears} ${ageInYears === 1 ? 'год' : ageInYears < 5 ? 'года' : 'лет'} жизни`;

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center space-y-8",
        "py-16",
        className,
      )}
    >
      {photoUrl && (
        <MemorialPhoto src={photoUrl} alt={`Фото ${fullName}`} />
      )}

      <div className="space-y-2 w-full">
        <Typography.H1 className="font-semibold text-4xl lg:text-5xl">
          {fullName}
        </Typography.H1>

        <div className="flex justify-center items-baseline">
          <div className="inline-flex items-baseline">
            <Typography.P className="text-lg lg:text-xl">{birthDayMonth} </Typography.P>
            <Typography.H2 className="text-2xl lg:text-4xl ml-1 pb-0">
              {birthYear}
            </Typography.H2>
          </div>

          <Typography.H2 className="mx-4 text-2xl lg:text-4xl pb-0">
            —
          </Typography.H2>

          <div className="inline-flex items-baseline">
            <Typography.P className="text-lg lg:text-xl">{deathDayMonth} </Typography.P>
            <Typography.H2 className="text-2xl lg:text-4xl ml-1 pb-0">
              {deathYear}
            </Typography.H2>
          </div>
        </div>

        <Typography.P className="text-muted-foreground text-lg">{ageText}</Typography.P>
      </div>

      {(birthPlace || deathPlace) && (
        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full mx-auto">
          {birthPlace && (
            <div
              className={cn(
                "flex flex-col flex-1 items-center",
                "rounded-lg p-4 backdrop-blur-sm",
                "border border-[#92C0C233]",
                "space-y-1",
              )}
            >
              <div className="text-base flex items-center text-muted-foreground w-full">
                <MapPin
                  size={12}
                  className="text-muted-foreground mr-2 flex-shrink-0"
                />
                <Typography.Small>Место рождения</Typography.Small>
              </div>
              <Typography.Large className="w-full text-left">
                {birthPlace}
              </Typography.Large>
            </div>
          )}

          {deathPlace && (
            <div
              className={cn(
                "flex flex-col flex-1 items-center",
                "rounded-lg p-4 backdrop-blur-sm",
                "border border-[#92C0C233]",
                "space-y-1",
              )}
            >
              <div className="text-base flex items-center text-muted-foreground w-full">
                <MapPin
                  size={12}
                  className="text-muted-foreground mr-2 flex-shrink-0"
                />
                <Typography.Small>Место смерти</Typography.Small>
              </div>
              <Typography.Large className="w-full text-left">
                {deathPlace}
              </Typography.Large>
            </div>
          )}
        </div>
      )}
    </div>
  );
}