"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-2">Movie Not Found</h1>

      <p className="text-gray-500 max-w-md">
        The movie you are looking for doesn’t exist or might have been removed.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
