import { Link } from "react-router-dom";
import Resume from "../assets/GovardhanReddy_js_resume2.pdf";

const ResumeModal = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">Resume Preview</h1>

      <div className="w-full max-w-4xl h-[76vh] border rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={Resume}
          className="w-full h-full"
          title="Resume Preview"
        />
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Link
          to="/"
          className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all"
        >
          ← Back to Home
        </Link>
        <a
          href={Resume}
          download
          className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:opacity-90 transition-all"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
