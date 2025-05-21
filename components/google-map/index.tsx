const GoogleMap = () => {
  return (
    <div className="w-full max-w-xl h-[450px] mt-6 mx-auto rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps?q=St.+John+College+of+Engineering+and+Management&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        className="border-0"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
