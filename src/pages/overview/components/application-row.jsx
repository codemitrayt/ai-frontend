import { cn } from '@/lib/utils'

const statusStyles = {
  processing: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
}

const ApplicationRow = ({ application }) => {
  const Icon = application.icon

  return (
    <div className="border p-5 flex items-center justify-between">
      {/* Left */}
      <div className="flex gap-3">
        <div className="mt-2">
          {Icon && <Icon className="w-4 h-4 text-gray-600" />}
        </div>

        <div className="ml-2">
          <h3 className="font-semibold text-sm">
            {application.title}
          </h3>
          <p className="text-gray-500 text-[13px]">
            {application.record}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 w-[45%]">
        <span
          className={cn(
            'px-3 py-1 rounded-full text-[12px] font-medium capitalize',
            statusStyles[application.status] ||
              'bg-gray-100 text-gray-700'
          )}
        >
          {application.status}
        </span>

        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: `${application.progress}%` }}
          />
        </div>

        <span className="text-sm font-semibold w-10 text-right">
          {application.progress}%
        </span>
      </div>
    </div>
  )
}

export default ApplicationRow
