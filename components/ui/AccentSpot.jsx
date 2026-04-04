export default function AccentSpot({
    size = 360,
    color = 'rgba(14,165,168,0.12)',
    position = 'top-right',
    blur = 48,
    opacity = 0.7,
    style = {},
    className = ''
}) {
    const posStyles = {
        'top-right': { top: 0, right: 0 },
        'top-left': { top: 0, left: 0 },
        'bottom-right': { bottom: 0, right: 0 },
        'bottom-left': { bottom: 0, left: 0 },
        'left-bottom': { left: 0, bottom: 0 },
        'center': { left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }
    }

    const computed = {
        position: 'absolute',
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        background: `radial-gradient(circle, ${color}, transparent 35%)`,
        filter: `blur(${typeof blur === 'number' ? blur + 'px' : blur})`,
        opacity,
        pointerEvents: 'none',
        zIndex: -10,
        borderRadius: '9999px',
        ...posStyles[position],
        ...style,
    }

    return (
        <div aria-hidden className={className} style={computed} />
    )
}
