export default function LoadingHouses() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-coral-red rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-coral-red rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-coral-red rounded-full animate-bounce [animation-delay:-0.6s]"></div>
      </div>
      <p className="mt-4 text-gray-600 text-lg font-medium">
        Loading houses for rent...
      </p>
    </div>
  );
}
