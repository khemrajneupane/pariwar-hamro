// app/about/page.tsx
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        Pariwar Hamro — A Family Meetup Gallery & Chat App
      </h1>

      <p className="text-center text-lg mb-4">
        🌐{" "}
        <Link
          href="https://pariwar-hamro.vercel.app/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Live App
        </Link>
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
          🧠 Motivation
        </h2>
        <p>
          We regularly meet with close family friends, enjoying meals, games,
          and memorable activities together. Over time, we realized that all the
          fun photos taken during these gatherings were scattered and
          unorganized.
          <strong>
            {" "}
            This app was born to give those memories a permanent, structured
            home
          </strong>{" "}
          — a place to store, share, and revisit our beautiful moments.
          Additionally, it adds interactivity through chats and AI, making our
          digital family space more engaging.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
          ✨ Features
        </h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">📷 Photo Gallery</h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Interactive image viewing using <code>react-image-gallery</code>
            </li>
            <li>Upload via file picker or drag-and-drop</li>
            <li>Only logged-in users can upload/delete photos</li>
            <li>Images stored in Cloudinary & linked to users</li>
            <li>Supports JPEG/PNG, max size 5MB</li>
            <li>
              Real-time error/success notifications with{" "}
              <code>react-hot-toast</code>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">🔐 Authentication</h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              NextAuth.js with <code>CredentialsProvider</code> &{" "}
              <code>GoogleProvider</code>
            </li>
            <li>User session required for uploads and AI chat</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">💬 Two Types of Chat</h3>

          <p className="font-medium">1. Real-Time Socket.io Chat</p>
          <ul className="list-disc list-inside ml-4">
            <li>Built with Node.js, Express.js, Socket.IO</li>
            <li>Public/private messaging with real-time updates</li>
            <li>Auto-assign names, optional username registration</li>
            <li>Responsive UI, "You" indicator</li>
            <li>Deployed on Render</li>
            <li>
              🔗{" "}
              <Link
                href="https://github.com/khemrajneupane/socket.io-live-chat"
                target="_blank"
                className="text-blue-500 underline"
              >
                Socket Chat Backend GitHub
              </Link>
            </li>
          </ul>

          <p className="font-medium mt-3">2. OpenAI Chat (AI Assistant)</p>
          <ul className="list-disc list-inside ml-4">
            <li>Backend: Python (Flask) + GPT-3.5-turbo</li>
            <li>Prompt-based responses (max 50 tokens)</li>
            <li>Only accessible to logged-in users</li>
            <li>
              🔗{" "}
              <Link
                href="https://github.com/khemrajneupane/chatbot-flask"
                target="_blank"
                className="text-blue-500 underline"
              >
                OpenAI Chat GitHub
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
          🛠️ Tech Stack
        </h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            Frontend: Next.js (TypeScript), Bootstrap 5, React Icons, React
            Image Gallery, React Hot Toast
          </li>
          <li>Backend: NextAuth.js, MongoDB via Mongoose, Cloudinary</li>
          <li>
            Chat Backends: Node.js + Express.js + Socket.IO; Python + Flask +
            OpenAI API
          </li>
          <li>
            API Routes: <code>POST /api/images</code>,{" "}
            <code>DELETE /api/images/:id</code>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
          📦 Dependencies
        </h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
          {`"dependencies": {
  "bcryptjs": "^3.0.2",
  "bootstrap": "^5.3.6",
  "cloudinary": "^2.6.1",
  "mongodb": "^6.16.0",
  "mongoose": "^8.14.1",
  "next-auth": "^4.24.11",
  "next-connect": "^1.0.0",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-image-gallery": "^1.4.0",
  "socket.io-client": "^4.8.1"
},
"devDependencies": {
  "typescript": "^5"
}`}
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
          🚀 Getting Started Locally
        </h2>
        <ol className="list-decimal list-inside ml-4">
          <li>
            Clone the repo:{" "}
            <code>
              git clone https://github.com/your-username/pariwar-hamro.git
            </code>
          </li>
          <li>
            Navigate: <code>cd pariwar-hamro</code>
          </li>
          <li>
            Install dependencies: <code>npm install</code>
          </li>
          <li>
            Run locally: <code>npm run dev</code>
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
          🔗 Links
        </h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            🖼️{" "}
            <Link
              href="https://pariwar-hamro.vercel.app/"
              target="_blank"
              className="text-blue-500 underline"
            >
              Live App
            </Link>
          </li>
          <li>
            💬{" "}
            <Link
              href="https://github.com/khemrajneupane/socket.io-live-chat"
              target="_blank"
              className="text-blue-500 underline"
            >
              Socket Chat Backend
            </Link>
          </li>
          <li>
            🤖{" "}
            <Link
              href="https://github.com/khemrajneupane/chatbot-flask"
              target="_blank"
              className="text-blue-500 underline"
            >
              OpenAI Chat Backend
            </Link>
          </li>
        </ul>
      </section>

      <section className="text-center">
        <p className="text-lg">
          🙏 Thanks to open-source libraries, APIs, and the amazing family &
          friends who inspired this app.
        </p>
        <p className="italic text-gray-600 mt-2">
          "This is a private social hub built for families or close friend
          groups to share memories, chat, and interact — all in a secure and
          cozy environment."
        </p>
        <p className="mt-4 font-semibold">
          Happy coding and nostalgic sharing! ❤️
        </p>
      </section>
    </main>
  );
};
export default AboutPage;
