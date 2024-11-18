const Department = () => {
  return (
    <section className="department_section py-8 lg:pt-12 ">
      <div
        className="department_bg bg-departments bg-cover lg:bg-auto bg-center bg-none-repeat max-w-[1466px] rounded-[20px] 
      py-12 lg:pt-[80px] lg:pb-[90px] relative min-h-[588px] flex items-center"
      >
        <div className="department_container container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div
              className="flex flex-col gap-[30px] justify-between
            font-medium uppercase text-center lg:text-left text-balance text-[#9ab4b7] 
             xl:text-[17px] lg:mb-0"
            >
              <div className="cursor-pointer hover:text-accent transition-all duration-300">
                Laboratory Analysis
              </div>
              <div className="cursor-pointer hover:text-accent transition-all duration-300">
                Cardiology Clinic
              </div>
              <div className="cursor-pointer hover:text-accent transition-all duration-300">
                Gynecology Clinic
              </div>
              <div className="cursor-pointer hover:text-accent transition-all duration-300">
                Pathology Clinic
              </div>
              <div className="cursor-pointer hover:text-accent transition-all duration-300">
                Pediatrics Clinic
              </div>
              <div className="cursor-pointer hover:text-accent transition-all duration-300">
                Neurology Clinic
              </div>
            </div>
            <div className="flex-1">
              <h2 className="h2 mb-[20px] text-center lg:text-start">
                Cardiology Clinic
              </h2>
              <p className="mb-[30px] font-light text-center lg:text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
              <div className="flex  flex-col lg:flex-row items-center lg:justify-between max-w-[550px] mb-[50px] mx-auto lg:mx-0">
                <div className="text-accent lg:border-r border-[#dcdcdc] lg:pr-6">
                  Neurocritical Care
                </div>
                <div className="text-accent lg:border-r border-[#dcdcdc] lg:pr-6">
                  Neuro Oncology
                </div>
                <div className="text-accent">Geriatric Neurology</div>
              </div>
              <button className="btn btn-lg btn-accent mx-auto lg:mx-0">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
