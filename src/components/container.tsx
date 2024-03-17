import { cn } from '@/lib/utils'

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('max-w-7xl w-full mx-auto', className)}>
            {children}
        </div>
    )
}