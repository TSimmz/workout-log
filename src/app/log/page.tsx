import Link from 'next/link';
import Workout from '../_components/ui/Workout';

export default async function Log() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-12 py-8">
        {/* Page header */}
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Log <span className="text-[hsl(280,100%,70%)]">Page</span>
          </h1>
          <Link
            href={'/'}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {'Back to Home'}
          </Link>
        </div>

        <form className="flex flex-col gap-y-3">
          {/* Initial Workout Component */}
          <Workout />
          <Workout />
          <Workout />
          <Workout />
        </form>
      </div>
    </main>
  );
}
