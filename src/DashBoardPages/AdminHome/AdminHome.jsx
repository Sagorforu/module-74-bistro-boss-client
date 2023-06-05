import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTruck, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const pieColor = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="ml-10 w-full my-10">
      <h2 className="text-3xl font-bold">
        Hi, Welcome back!{" "}
        <span className="text-orange-600">{user.displayName}</span>
      </h2>
      <div className="mt-4">
        <div className="stats mr-4 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] shadow">
          <div className="stat  text-white flex items-center">
            <FaWallet className="text-5xl font-bold"></FaWallet>
            <div>
              <div className="stat-value">$ {stats.revenue}</div>
              <div className="stat-title  text-white">Revenue</div>
            </div>
          </div>
        </div>
        <div className="stats mr-4 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] shadow">
          <div className="stat  text-white flex gap-5 items-center">
            <FaUsers className="text-5xl font-bold"></FaUsers>
            <div>
              <div className="stat-value">{stats.users}</div>
              <div className="stat-title  text-white">Customer</div>
            </div>
          </div>
        </div>
        <div className="stats mr-4 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] shadow">
          <div className="stat  text-white flex items-center">
            <FaUtensils className="text-5xl font-bold"></FaUtensils>
            <div>
              <div className="stat-value">{stats.products}</div>
              <div className="stat-title  text-white">Products</div>
            </div>
          </div>
        </div>
        <div className="stats bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] shadow">
          <div className="stat  text-white flex items-center">
            <FaTruck className="text-5xl font-bold"></FaTruck>
            <div>
              <div className="stat-value">{stats.orders}</div>
              <div className="stat-title  text-white">Orders</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar
              dataKey="totalPrice"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Legend></Legend>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    name={entry._id}
                    key={`cell-${index}`}
                    fill={pieColor[index % pieColor.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
