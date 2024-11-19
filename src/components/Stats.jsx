const Stats = () => {
  return (
    <section className="stast_section py-8 lg:pt-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="stats_item flex flex-1 flex-col lg:border-r items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2 ">
              +5120
            </div>
            <div>Happy Patients</div>
          </div>
          <div className="stats_item flex flex-1 flex-col lg:border-r items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2 ">
              26
            </div>
            <div>Total Branches</div>
          </div>
          <div className="stats_item flex flex-1 flex-col lg:border-r items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2 ">
              +53
            </div>
            <div>Senior Doctor</div>
          </div>
          <div className="stats_item flex flex-1 flex-col lg:border-r items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2 ">
              +10
            </div>
            <div>Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
