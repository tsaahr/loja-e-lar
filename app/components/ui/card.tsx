// components/ui/card.tsx
export function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
        {children}
      </div>
    );
  }
  