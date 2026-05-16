import type { ChangeEvent } from "react";
import { Input } from "src/components/ui/input";
import type { GalleryHeaderProps } from "src/types";

export function GalleryHeader({ search, onSearchChange }: GalleryHeaderProps) {
  return (
    <header className="border-b bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Product Gallery
        </h1>

        <div className="mt-6 max-w-md">
          <Input
            type="search"
            placeholder="Search products by name..."
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onSearchChange(e.target.value)
            }
            aria-label="Search products"
            className="h-9"
          />
        </div>
      </div>
    </header>
  );
}
