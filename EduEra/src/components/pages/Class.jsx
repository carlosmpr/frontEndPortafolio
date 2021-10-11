import React from "react";
import Items from "../reusables/item/Items";
import IconItem from "../reusables/item/IconItems";
import Person from "../../components/assets/images/people.png";
import Swift from "../../components/assets/images/swift.png";
export default function Class() {
  return (
    <div className="w-full flex">
      <div className="flex-1  p-4 space-y-4">
        <p className="font-semibold text-2xl ">Course - Simple Swift App</p>
        <div className="relative w-full h-96 bg-red-400 rounded-3xl  flex flex-col justify-between overflow-hidden">
          <img src={Swift} alt={Swift} className="w-full" />
          <div className="absolute left-5 bottom-3 bg-white rounded-2xl w-4/5  p-4 text-sm  z-10 backdrop-filter backdrop-blur-md bg-opacity-10">
            <div className="w-full flex items-center  text-primary gap-x-4">
              <i class="fas fa-play"></i>
              <p>1.0x</p>
              <div className="flex-1">
                <progress className="w-full" id="file" value="32" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>
              <i class="fas fa-volume-up"></i>
              <i class="fas fa-layer-group"></i>
              <i class="fas fa-window-maximize"></i>
            </div>
          </div>
        </div>
        <Items
          image={Person}
          title="Lesson 6 - Implement Navigation"
          username={"@dianneed"}
        />
        <p>
          In this lesson, you use navigation controllers and segues to create
          the navigation flow of the FoodTracker app. At the end of the lesson,
          you’ll have a complete navigation scheme and interaction flow for the
          app.
        </p>
      </div>
      <div className="w-64 h-auto  p-4 space-y-4 overflow-y-scroll">
        <p className="font-semibold text-2xl ">Lessons</p>
        <IconItem
          icon={"fas fa-book-open"}
          text={"Install xcode"}
          desc={"Lesson 4 * 11min"}
        />
        <IconItem
          icon={"fas fa-book-open"}
          text={"Install xcode"}
          desc={"Lesson 4 * 11min"}
        />
        <IconItem
          icon={"fas fa-book-open"}
          text={"Install xcode"}
          desc={"Lesson 4 * 11min"}
        />
        <IconItem
          icon={"fas fa-book-open"}
          text={"Install xcode"}
          desc={"Lesson 4 * 11min"}
        />
        <IconItem
          icon={"fas fa-book-open"}
          text={"Install xcode"}
          desc={"Lesson 4 * 11min"}
        />
        <IconItem
          icon={"fas fa-book-open"}
          text={"Install xcode"}
          desc={"Lesson 4 * 11min"}
        />
      </div>
    </div>
  );
}
