import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../Context/ContextApi";
 
interface Order {
    id: string;
    amount: number;
    currency: string;
     
    
}

  
const LabsTestForm: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState<boolean>(false);
    const [selectedTests, setSelectedTests] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const { name, setName  , age, setAge , gender, setGender,  contact, setContact, saveInputRecord}=useGlobalContext()
    // Test Prices
    const testPrices: Record<string, number> = {
        "CBC": 500, "LFT": 700, "Lipid Profile": 1000, "TFT": 800,
        "KFT": 600, "Blood Sugar": 300, "COVID-19 Test": 1200, "Dengue Test": 1100
    };

    // Load Razorpay script
    useEffect(() => {
        const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
        if (existingScript) {
            setIsRazorpayLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => setIsRazorpayLoaded(true);
        script.onerror = () => console.error('Failed to load Razorpay script.');
        document.body.appendChild(script);
    }, []);

    // Handle test selection and price calculation
    const handleTestSelection = (test: string) => {
        setSelectedTests((prev) => {
            const updatedTests = prev.includes(test) ? prev.filter(t => t !== test) : [...prev, test];
            setTotalPrice(updatedTests.reduce((acc, test) => acc + testPrices[test], 0));
            return updatedTests;
        });
    };

    // Handle Payment
    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isProcessing || !isRazorpayLoaded) {
            alert('Payment system not ready. Please try again.');
            return;
        }

        if (selectedTests.length === 0) {
            alert("Please select at least one test before proceeding.");
            return;
        }

        setIsProcessing(true);

        try {
            const res = await axios.post<{ order: Order }>('http://localhost:5000/payment/checkout', {
                name: 'Lab Test Checkout',
                amount: totalPrice * 100, // Convert to paise for INR
            });

            const { order } = res.data;

            const options = {
                key: 'rzp_test_YbBZ9UxIkaF0Pf', // Replace with your Razorpay Test Key
                amount: order.amount,
                currency: order.currency,
                name: 'Lab Test Payment',
                description: 'Payment for selected lab tests',
                order_id: order.id,
                handler: function (response: any) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    setSelectedTests([]);
                    setTotalPrice(0);
                },
                prefill: {
                    name: 'Sallu Khan',
                    email: 'sallu.khan@example.com',
                    contact: '9000090000',
                },
                theme: {
                    color: '#3399cc',
                },
                modal: {
                    ondismiss: function () {
                        console.log('Payment modal dismissed.');
                        alert('Payment process was cancelled.');
                    },
                },
            };

            const rzp1 = new (window as any).Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment failed. Please try again.');
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
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" required value={name} 
                     onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Age</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="Enter your age" required  value={age}
                     onChange={(e)=>setAge(Number(e.target.value))}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Gender</label>
                    <select className="w-full p-2 border rounded"  required value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact Number</label>
                    <input type="tel" className="w-full p-2 border rounded" placeholder="Enter your phone number" required  value={contact}
                     onChange={(e)=>setContact(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Tests</label>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.keys(testPrices).map((item, index) => (
                            <label key={index} className="flex items-center">
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
                <div className="mb-4">
                    <label className="block text-gray-700">Payment Method</label>
                    <select className="w-full p-2 border rounded" required>
                        <option>Cash</option>
                        <option>Card</option>
                        <option>UPI</option>
                        <option>Online Payment</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    disabled={isProcessing}
                           >
                    {isProcessing ? "Processing..." : "Submit & Pay"}
                </button>


                 
            </form>
            <button className="" onClick={saveInputRecord}>save</button>
        </div>
    );
};

export default LabsTestForm;
