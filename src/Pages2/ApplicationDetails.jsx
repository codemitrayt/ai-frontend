import { useParams } from "react-router-dom"

const ApplicationDetails = () => {
  const { appId } = useParams()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Application Details</h1>
      <p className="text-gray-500 mt-2">
        Application ID: {appId}
      </p>
    </div>
  )
}

export default ApplicationDetails
