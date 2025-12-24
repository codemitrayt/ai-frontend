const StatCard = ({ stat }) => {
  return (
    <div className="bg-white border rounded-sm p-6">
      <div className="flex justify-between items-center">
        <p className="text-black text-sm">{stat.title}</p>

        {stat.icon && <stat.icon className="w-4 h-4 text-gray-600" />}
      </div>

      <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
      <p className="text-gray-400 text-[13px] mt-1">{stat.subTitle}</p>
    </div>
  )
}

export default StatCard
