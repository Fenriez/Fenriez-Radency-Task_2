import CategoriesContainer from "./CategoriesContainer";

const CategoriesSection = () => {
  return (
    <section className="container categories">
      <div className="container__header">
        <div className="header__cell"></div>
        <div className="header__cell">Note Category</div>
        <div className="header__cell">Active</div>
        <div className="header__cell">Archieved</div>
      </div>
      <CategoriesContainer />
    </section>
  );
};

export default CategoriesSection;
