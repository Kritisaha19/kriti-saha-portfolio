const CV = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-background text-foreground">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My CV</h1>

        {/* Download Button */}
        <a
          href="/cv.pdf"
          download
          className="btn-primary"
        >
          Download CV
        </a>
      </div>

      {/* CV Preview */}
      <div className="max-w-5xl mx-auto h-[80vh] border rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="/KritiSahaCV.pdf"
          title="CV Preview"
          className="w-full h-full"
        />
      </div>

    </div>
  );
};

export default CV;