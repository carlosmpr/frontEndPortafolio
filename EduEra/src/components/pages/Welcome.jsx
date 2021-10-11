import React from "react";
import CardImgBackground from "../Card/CardImgBackground";
import ImageBadge from "../reusables/badge/imageBadge";
import Person from "../../components/assets/images/people.png";
import Person2 from "../../components/assets/images/peson2.png";
import Swift from "../../components/assets/images/swift.png";
import Some from "../../components/assets/images/some.png";

export default function Welcome() {
  return (
    <>
      <div className="flex w-full items-center">
        <p className="font-semibold text-2xl flex-1">Your unfinished courses</p>
        <p className="text-3xl">...</p>
      </div>
      <div className="flex w-full justify-evenly">
        <CardImgBackground
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
        <CardImgBackground
          image={Person2}
          backImg={Some}
          name={"Jhon Doe"}
          username={"@doe"}
          time={"135 min"}
          desc={"Dessing everythin with 3 simple steps"}
        />
      </div>
      <p className="font-semibold text-xl ">Live Lessons</p>
      <div className="flex w-full items-center justify-center gap-x-4">
        <ImageBadge
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
        <ImageBadge
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
        <ImageBadge
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
        <ImageBadge
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
        <ImageBadge
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
        <ImageBadge
          image={Person}
          backImg={Swift}
          name={"Dianne Edwards"}
          username={"@dianne"}
          time={"82 min"}
          desc={"Learn how to create simple Swift applications in 8 lessons"}
        />
      </div>
    </>
  );
}
