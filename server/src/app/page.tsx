import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            ResQLink API Server
          </h1>
          <p className="text-gray-600 mb-4">
            Server is running successfully
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <strong>Status:</strong> Online
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>Available endpoints:</p>
            <ul className="mt-2 space-y-1">
              <li>• /api/auth/* - Authentication routes</li>
              <li>• /api/disasters/* - Disaster management</li>
              <li>• /api/reports/* - Report handling</li>
              <li>• /api/livekit/* - LiveKit integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
