import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted/50 animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

function SkeletonFeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export { Skeleton, SkeletonCard, SkeletonFeatureGrid }
