import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Category from "./Category";

const CategoriesContainer = () => {
  const { notes } = useTypedSelector((state) => state.notes);

  let categories: string[] = ["Task", "Idea", "Random Thought"];

  const countNotesByCategory = (category: string): number => {
    let result: number = 0;
    notes.forEach((note) => {
      if (note.category === category) {
        result++;
      }
    });
    return result;
  };

  const countArchivedNotesByCategory = (category: string): number => {
    let result: number = 0;
    notes.forEach((note) => {
      if (note.category === category && note.isArchived === true) {
        result++;
      }
    });
    return result;
  };

  return (
    <div className="container__body">
      {categories.map((category): React.ReactElement => {
        return (
          <Category
            key={Date.now() + Math.floor(Math.random() * 100001)}
            categoryName={category}
            categoryTotalCount={countNotesByCategory(category)}
            categoryArchivedCount={countArchivedNotesByCategory(category)}
          />
        );
      })}
    </div>
  );
};

export default CategoriesContainer;
