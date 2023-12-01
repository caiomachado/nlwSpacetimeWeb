import Link from 'next/link'

export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        You still haven&apos;t registered a memory, start by{' '}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          creating one now
        </Link>
        !
      </p>
    </div>
  )
}
