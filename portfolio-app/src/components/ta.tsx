import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TA() {
  return (
    <Card className="max-w-md mx-2 h-fit">
      <Image
        src="/ta.jpg"
        width={600}
        height={300}
        alt="University of Saskatchewan, May to August 2023'"
        className="rounded-t-lg object-cover w-full aspect-[2/1]"
      />
      <CardHeader className="px-6 pt-6">
        <CardTitle>Teaching Assistant Leader</CardTitle>
        <CardDescription>CMPT 214, University of Saskatchewan, 2023</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">CMPT 214: Programming Principles and Practice</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li>C Language, memory management, pointers, makefiles</li>
            <li>Linux operating system</li>
            <li>Bash scripting, version control with Git</li>
          </ul>
        </div>
        <p>
          Served as a teaching assistant leader, responsible for supporting undergraduate
          students&apos; success in the course. I led weekly discussion sections, addressed student
          inquiries, and provided one-on-one tutoring.
        </p>
      </CardContent>
    </Card>
  );
}
