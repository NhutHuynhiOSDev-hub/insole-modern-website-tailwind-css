import React from "react";

const Appointment = () => {
  return (
    <section className="appointment py-8 lg:pt-12 overflow-hidden">
      <div className="container mx-auto h-full">
        <h2 className="appointment_title h2 mb-5 lg:mb-[50px] text-center lg:text-left">
          Book Appointment or Call:
          <span className="text-accent-tertiary">(+487) 384 9452</span>
        </h2>
        <form className="appointment_form flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Select Departments */}
            <div className=" select relative flex items-center">
              <div className="absolute right-4">
                <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
              </div>
              <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
                <option value="1">Select Department</option>
                <option value="2">Departmen 1</option>
                <option value="3">Department 2</option>
                <option value="4">Department 3</option>
              </select>
            </div>
            {/* Select Dotorcs */}
            <div className=" select relative flex items-center">
              <div className="absolute right-4">
                <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
              </div>
              <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
                <option value="1">Select doctor</option>
                <option value="2">Dr. Jane Doe</option>
                <option value="3">Dr. Johnny</option>
                <option value="4">Dr. Jhon Doe</option>
                <option value="5">Dr. Bod Smith</option>
              </select>
            </div>
          </div>
          {/* Input Wrapper */}
          <div className="flex flex-col lg:flex-row gap-5">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="text" className="input" placeholder="Phone Number" />
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <input type="date" className="input" />
            <input type="time" className="input" />
          </div>
          <button
            className="mx-auto btn btn-lg btn-accent self-start mt-6"
            type="submit"
          >
            Book an appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
