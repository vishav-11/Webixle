// app/blog/components/Pagination.tsx

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-xl border border-card-theme bg-card-theme
          text-secondary-theme hover:border-primary-500/20 disabled:opacity-50
          disabled:cursor-not-allowed transition-all"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-xl font-medium transition-all
            ${currentPage === page
              ? "bg-primary-500 text-white"
              : "border border-card-theme bg-card-theme text-secondary-theme hover:border-primary-500/20"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-xl border border-card-theme bg-card-theme
          text-secondary-theme hover:border-primary-500/20 disabled:opacity-50
          disabled:cursor-not-allowed transition-all"
      >
        Next
      </button>
    </div>
  );
}