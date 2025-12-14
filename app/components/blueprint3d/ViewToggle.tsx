'use client'

import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-media-query'
import { Maximize, Minimize } from 'lucide-react'

interface ViewToggleProps {
  viewMode: '2d' | '3d'
  onViewChange: (mode: '2d' | '3d') => void
  isFullscreen?: boolean
  onFullscreenToggle?: () => void
}

export function ViewToggle({ viewMode, onViewChange, isFullscreen = false, onFullscreenToggle }: ViewToggleProps) {
  const isMobile = useIsMobile()

  return (
    <div
      className={cn(
        'absolute flex gap-1 bg-card border border-border rounded overflow-hidden shadow-md',
        isMobile ? 'top-3 right-3' : 'top-5 right-5'
      )}
    >
      <button
        onClick={() => onViewChange('3d')}
        className={cn(
          'transition-colors',
          isMobile ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-sm',
          viewMode === '3d'
            ? 'bg-primary text-primary-foreground'
            : 'bg-card text-foreground hover:bg-accent'
        )}
      >
        3D
      </button>
      <button
        onClick={() => onViewChange('2d')}
        className={cn(
          'transition-colors',
          isMobile ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-sm',
          viewMode === '2d'
            ? 'bg-primary text-primary-foreground'
            : 'bg-card text-foreground hover:bg-accent'
        )}
      >
        2D
      </button>
      {onFullscreenToggle && (
        <>
          <div className="w-px bg-border" />
          <button
            onClick={onFullscreenToggle}
            className={cn(
              'transition-colors bg-card text-foreground hover:bg-accent flex items-center justify-center',
              isMobile ? 'px-2 py-1.5' : 'px-2.5 py-1.5'
            )}
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? (
              <Minimize className={isMobile ? 'h-3 w-3' : 'h-4 w-4'} />
            ) : (
              <Maximize className={isMobile ? 'h-3 w-3' : 'h-4 w-4'} />
            )}
          </button>
        </>
      )}
    </div>
  )
}
