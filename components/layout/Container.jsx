export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-20 ${className}`}>
      {children}
    </div>
  )
}
