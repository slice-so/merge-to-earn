type Props = {
  label: string
  isActive: boolean
  setisActive: (args: any) => void
}

const Card = ({ label, isActive, setisActive }: Props) => {
  return (
    <div
      className={`flex items-center justify-center py-2 border border-gray-200 rounded-sm shadow-sm cursor-pointer ${
        isActive
          ? "bg-blue-600 text-white dark:bg-blue-600 dark:text-white"
          : "hover:bg-gray-100"
      }`}
      onClick={() => setisActive(label)}
    >
      <p>{label}</p>
    </div>
  )
}

export default Card
