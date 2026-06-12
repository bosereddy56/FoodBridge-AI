import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AdminCharts({
  available,
  claimed,
  delivered,
}) {
  const data = [
    {
      name: "Available",
      value: available,
    },
    {
      name: "Claimed",
      value: claimed,
    },
    {
      name: "Delivered",
      value: delivered,
    },
  ];

  const COLORS = [
    "#22c55e", // Green
    "#facc15", // Yellow
    "#a855f7", // Purple
  ];

  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mt-10 h-125">
      <h2 className="text-3xl font-bold mb-6">
        Donation Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height="90%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={170}
            innerRadius={90}
            paddingAngle={5}
            label={({ name, value }) =>
              `${name}: ${value}`
            }
          >
            {data.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip
            formatter={(value) => [
              value,
              "Count",
            ]}
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}