import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../Context/ContextApi";

interface Order {
  id: string;
  amount: number;
  currency: string;
}
const LabsTestForm: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { name, setName, age, setAge, gender, setGender, contact, setContact, resetFields } = useGlobalContext();

  const testPrices: Record<string, number> = {
    "CBC": 500, "LFT": 700, "Lipid Profile": 1000, "TFT": 800,
    "KFT": 600, "Blood Sugar": 300, "COVID-19 Test": 1200, "Dengue Test": 1100
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleTestSelection = (test: string) => {
    setSelectedTests((prev) => {
      const updated = prev.includes(test)
        ? prev.filter(t => t !== test)
        : [...prev, test];
      setTotalPrice(updated.reduce((acc, item) => acc + testPrices[item], 0));
      return updated;
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTests.length === 0) {
      return alert("Please select at least one test.");
    }

    if (!name || !contact || !gender || !age) {
      return alert("Please fill all fields.");
    }

    setIsProcessing(true);

    try {
      const response = await axios.post<{ order: Order }>(
        "https://payment-getway-eosin.vercel.app/payment/checkout",
        {
          name: "Lab Test Checkout",
          amount: totalPrice * 100
        }
      );

      const { order } = response.data;

      const options = {
        key: "rzp_test_YbBZ9UxIkaF0Pf",
        amount: order.amount,
        currency: order.currency,
        name: "Lab Test Payment",
        description: "Payment for selected tests",
        order_id: order.id,
        handler: function (res: any) {
          alert(`Payment successful! Payment ID: ${res.razorpay_payment_id}`);
          setSelectedTests([]);
          setTotalPrice(0);
          resetFields();
        },
        prefill: {
          name: name,
          email: "test@example.com",
          contact: contact,
        },
        theme: { color: "#2e7d32" },
        modal: {
          ondismiss: () => {
            alert("Payment cancelled.");
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Patient Lab Test Form</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Enter your age"
            required
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            className="w-full p-2 border rounded"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Number</label>
          <input
            type="tel"
            className="w-full p-2 border rounded"
            placeholder="Enter your phone number"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Tests</label>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(testPrices).map((item, i) => (
              <label key={i} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedTests.includes(item)}
                  onChange={() => handleTestSelection(item)}
                />
                {item} - ₹{testPrices[item]}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Total Price: ₹{totalPrice}</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Submit & Pay"}
        </button>
      </form>
    </div>
  );
};

export default LabsTestForm;
