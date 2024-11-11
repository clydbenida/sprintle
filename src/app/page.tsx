import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      Placeholder for session page
      <Link href="/auth">Click me to go to auth</Link>
    </div>
  );
}
