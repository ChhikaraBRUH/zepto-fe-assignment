import ChipsComponent from "@/components/ChipsComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-20 gap-8 container mx-auto">
      <div className="flex flex-col w-full items-center gap-4">
        <h1 className="text-xl font-bold md:text-4xl">
          Chaitanya&apos;s Zepto Frontend Chips Assignment
        </h1>
        <p className="text-lg md:text-xl">
          My resume can be found{" "}
          <a
            href="https://bruh.dev/resume"
            className="text-blue-500 cursor-pointer hover:underline"
          >
            https://bruh.dev/resume
          </a>
          .
        </p>
      </div>

      <ChipsComponent />
    </div>
  );
}
