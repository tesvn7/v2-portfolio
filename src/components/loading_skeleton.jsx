

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col space-y-3 h-full w-full">
      <div className="h-1/2 w-full rounded-xl" />
      <div className="space-y-2">
        <div className="h-4 w-[250px]" />
        <div className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
