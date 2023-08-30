const scrollToSection = (sectionId) => {
    const sectionElement = this[sectionId];
    if (sectionElement) {
        sectionElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    }
};
export default scrollToSection;