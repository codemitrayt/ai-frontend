const StatCard2 = ({ title, value, subtitle , icon:Icon}) => {
  return (
    <div className="bg-white border rounded-sm p-6">
        <div className="flex justify-between">
            <p className="text-black text-sm">{title}</p>
        {Icon && (
          <Icon className="w-4 h-4 text-gray-600" />
        )}

        </div>
      
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p className="text-gray-400 text-[12px] mt-1">{subtitle}</p>
    </div>
  )
}


export default StatCard2
