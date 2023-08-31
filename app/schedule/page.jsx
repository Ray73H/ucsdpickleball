import React from "react";

const Schedule = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 mt-16 space-y-12">
      <div className="border rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Schedule & Events
        </h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTabs=1&showTz=0&showCalendars=0&showPrint=0&showDate=1&showNav=1&showTitle=0&src=MmUyY2I1MmZiNmIwZmY1ZmRiY2M2MWUyNjg0NTc1ZjJkNjEwYmZhOGZlODM4NmUyMzc1OWE0NmMzZTQxMTE2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
          className="border border-gray-300 rounded"
          width="1000"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>

      <div className="border rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Pickleball Court Location
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505.33199846298567!2d-117.23040480309358!3d32.87920343449025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc07f8c1cd93b9%3A0x43e3e7091ff44656!2sWarren%20Tennis%20Courts!5e0!3m2!1sen!2sus!4v1693446600016!5m2!1sen!2sus"
          width="1000"
          height="600"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="border rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Possible Parking Location
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.8349562908093!2d-117.23084335014362!3d32.879601454077985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06dc828b9fef%3A0x3c3321d5c3c72af2!2sP510!5e0!3m2!1sen!2sus!4v1693447090507!5m2!1sen!2sus"
          width="1000"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Schedule;
