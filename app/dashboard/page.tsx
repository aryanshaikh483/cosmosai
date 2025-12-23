'use client';
import Documents from "@/components/Documents";

export const dynamic = 'force-dynamic';

function Dashboard() {
  return (
    <div className="h-full max-w mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 text-indigo-600">My Documments</h1>
      <Documents />
    </div>
  );
}


export default Dashboard;