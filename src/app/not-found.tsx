import Link from 'next/link'; // Import the Link component for navigation

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-black font-bold mb-8 animate-pulse">
                Coming Soon
            </h1>
            <p className="text-black text-lg mb-8">
                We're working hard to bring you something amazing. Stay tuned!
            </p>


            <iframe src="https://giphy.com/embed/3oKIPnAiaMCws8nOsE" width="457" height="480" frameBorder="0" allowFullScreen></iframe>

            {/* Add a link to navigate back to the homepage */}
            <Link href="/" className="mt-8 text-blue-600 hover:text-blue-800 text-lg">
                Go back to the homepage
            </Link>
        </div>
    );
}