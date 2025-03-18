import { blogs } from "../json/Blog"

interface Blog {
    title: string;
    description: string;
    auther: string;
    date: string;
    category: string;
    image: string;

}
const Blog = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Latest Blogs
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
                    >
                        <img src={item.image} alt="" />
                        <h2 className="text-xl font-semibold text-blue-600">{item.title}</h2>
                        <p className="text-gray-700 mt-2">{item.content}</p>
                        <hr className="my-3" />
                        <p className="text-sm">
                            <span className="font-medium">Author:</span> {item.author}
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Date:</span> {item.date}
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Category:</span> {item.category}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
