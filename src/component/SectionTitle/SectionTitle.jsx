
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto  md:w-4/12">
            <p className="text-[#D99904] text-base font-normal mb-3">--- {subHeading} ---</p>
            <p className="text-4xl font-normal border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;