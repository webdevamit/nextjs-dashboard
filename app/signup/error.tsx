'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-gray-100 px-2 text-center">
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="text-4xl font-medium text-gray-800">{error.message}</p>
        <p className="mt-4 text-xl text-gray-800">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>
    </div>
  );
}
