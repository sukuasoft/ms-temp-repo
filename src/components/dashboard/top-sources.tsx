import { Avatar, Button, Card, CardBody } from "@heroui/react";
import { ChevronRight, Link } from "lucide-react";

const topSources = [
  { source: "Engenharia informática", value: "1232", progressPercentage: 95 },
  { source: "Economia", value: "932", progressPercentage: 72 },
  { source: "Engenharia mecânica", value: "789", progressPercentage: 61 },
  { source: "Contabilidade", value: "636", progressPercentage: 49 },
  { source: "EPI", value: "611", progressPercentage: 47 },
];

const TopSources = () => {
  return (
    <Card className="shadow-md">
      <CardBody>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">Resumo por curso</h1>
        </div>
        <ul className="mt-4 space-y-3 ps-1">
          {topSources.map((data, i) => (
            <SourceList {...data} key={i} />
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default TopSources;

function SourceList({
  source,
  progressPercentage,
  value,
}: {
  source: string;
  value: string;
  progressPercentage: string | number;
}) {
  return (
    <>
      <li className="relative flex items-center justify-between rounded-md border px-3 py-2 text-sm">
        <div
          className="absolute left-0 h-full rounded-md bg-primary/30"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <span className="z-10 flex items-center gap-3">
          {source !== "Direct / None" ? (
            <Avatar
              src={`https://s2.googleusercontent.com/s2/favicons?domain=${source}`}
              className="h-4 w-4 bg-transparent text-tiny"
            />
          ) : (
            <Link size={16} />
          )}
          {source}
        </span>
        <span>{value}</span>
      </li>
    </>
  );
}
