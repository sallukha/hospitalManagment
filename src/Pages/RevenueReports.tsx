import { data } from "../json/RevenueReports";

interface RevenueReport {
    date: string;
    totalSales: number;
    orders: number;
    month?: string;  // Month is optional since it's not in daily revenue
}

const RevenueReports = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Daily Revenue Reports</h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {data?.dailyRevenue?.length > 0 ? (
                    data.dailyRevenue.map((item: RevenueReport, index: number) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.date}</h2>
                            <p className="text-gray-700"><strong>Total Sales:</strong> ${item.totalSales}</p>
                            <p className="text-gray-700"><strong>Orders:</strong> {item.orders}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-700">No revenue data available.</p>
                )}
            </div>
        </div>
    );
};

export default RevenueReports;
