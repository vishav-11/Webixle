// app/blog/components/AuthorCard.tsx

import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

interface AuthorCardProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-card-theme bg-card-theme">
      <h3 className="text-sm font-bold text-primary-theme mb-4">About the Author</h3>
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500/20 shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-bold text-primary-theme mb-1">
            {author.name}
          </h4>
          <p className="text-sm text-secondary-theme mb-3">{author.role}</p>
          <div className="flex gap-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                text-xs font-medium bg-primary-500/10 border border-primary-500/20
                text-primary-500 hover:bg-primary-500/20 transition-all duration-200"
            >
              <Mail size={12} />
              Contact
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                text-xs font-medium bg-secondary-theme border border-card-theme
                text-secondary-theme hover:text-primary-theme transition-all duration-200"
            >
              <ExternalLink size={12} />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}