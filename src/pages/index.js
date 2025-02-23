import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Diary</h1>
      <Link href="/diary/new">
        <button className="px-6 py-2 bg-primary text-white rounded-xl shadow-lg hover:bg-indigo-600">
          New Entry
        </button>
      </Link>
    </main>
  );
}
