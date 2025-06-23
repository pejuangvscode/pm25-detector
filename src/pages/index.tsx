import { api } from "~/utils/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
  const { data } = api.pm.getAll.useQuery();

  const chartData = data?.map((d) => ({
    value: d.value,
    createdAt: new Date(d.createdAt).toLocaleTimeString(),
  })) ?? [];

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">PM2.5 Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </main>
  );
}
