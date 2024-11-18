function FAQ() {
  return (
    <section className="faq_section py-8 lg:pt-12 ">
      <div className="faq_container container mx-auto">
        <h2 className="faq_title h2 text-center mb-[50px]">We've got answer</h2>
        {/* Item Wrapper */}
        <div className="max-w-5xl mx-auto">
          {/* Item, */}
          <div className="faq_item px-[30px] pt-7 pb-4 border-b text-start cursor-pointer select-none">
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4 ">
                Why To Believe in Insolve Medical Healthcare?
              </h4>
              <div className="faq_btn text-accent">
                <i className="ri-add-fill text-2xl"></i>
              </div>
            </div>
            <div className="faq_answer hidden overflow-hidden transition-all duration-150">
              <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum is simply dummy text of the printing and
                typesetting industry Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
              </p>
            </div>
          </div>
          {/* Item, */}
          <div
            id="faq_item2"
            className="faq_item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
          >
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">
                Will we get Healthcare Updates After Surgery?
              </h4>
              <div className="faq_btn text-accent">
                <i className="ri-add-fill text-2xl"></i>
              </div>
            </div>
            <div className="faq_answer hidden overflow-hidden">
              <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum is simply dummy text of the printing and
                typesetting industry Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
              </p>
            </div>
          </div>
          {/* Item, */}
          <div
            id="faq_item3"
            className="faq_item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
          >
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">
                What Preparation Acre Necessary Before Undergoing Surgery?
              </h4>
              <div className="faq_btn text-accent">
                <i className="ri-add-fill text-2xl"></i>
              </div>
            </div>
            <div className="faq_answer hidden overflow-hidden">
              <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum is simply dummy text of the printing and
                typesetting industry Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
              </p>
            </div>
          </div>
          {/* Item, */}
          <div
            id="faq_item4"
            className="faq_item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
          >
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">
                How Long Will It Take To Recover Afer The Surgery?
              </h4>
              <div className="faq_btn text-accent">
                <i className="ri-add-fill text-2xl"></i>
              </div>
            </div>
            <div className="faq_answer hidden overflow-hidden">
              <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum is simply dummy text of the printing and
                typesetting industry Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
