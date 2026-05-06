import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="text-eyebrow uppercase text-magenta">404</p>
      <h1 className="mt-3 font-display text-display-2 text-ink">Page not found.</h1>
      <p className="mt-4 max-w-md text-pretty text-ink/65">
        The page you&rsquo;re looking for moved or never existed. Let&rsquo;s get you home.
      </p>
      <Button asChild variant="primary" size="lg" className="mt-8">
        <Link href="/">Back to Frenzo</Link>
      </Button>
    </section>
  );
}
