interface TechBarProps {
  className?: string
}


const TechBar = ({ className }: TechBarProps) => {
  return (
    <div className={`bg-tertiary text-xs grid grid-cols-6 justify-items-center py-3 w-96 rounded-3xl mt-5 ${className}`}>
      <div className="iconTech"> icon </div>
      <div className="iconTech"> icon </div>
      <div className="iconTech"> icon </div>
      <div className="iconTech"> icon </div>
      <div className="iconTech"> icon </div>
      <div className="iconTech"> icon </div>
    </div>
  )
}

export default TechBar