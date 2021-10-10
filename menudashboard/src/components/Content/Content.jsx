import React from "react";
import OutlineIconButton from "../Buttons/OutlineIconButton";
import IconItem from "../Items/IconItems";
import Navigation from "../TextNavigation/Navigation";
import Button from "../Buttons/Button";
import OutlineButton from "../Buttons/OutlineButton";
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";
export default function Content() {
  return (
    <div className="flex flex-1 h-full bg-secondary overflow-y-scroll p-9">
      <div className="w-full h-full flex flex-col space-y-5">
        <h1 className="text-2xl font-bold text-primary">Settings</h1>
        <div className="flex w-full h-full gap-x-4">
          <div className="flex flex-col w-72 bg-primary h-full gap-y-10 rounded-md shadow-md overflow-y-scroll p-4">
            <IconItem
              text="Appereance"
              desc="Dark and Light mode. Font size"
              icon="fas fa-heart"
            />
            <IconItem
              text="Your Restaurant"
              desc="Dark and Light mode. Font size"
              icon="fas fa-home"
            />
            <IconItem
              text="Product Management"
              desc="Manage your Products"
              icon="fas fa-life-ring"
            />
            <IconItem
              text="Notification"
              desc="Customize your notification"
              icon="fas fa-bell"
            />

            <IconItem
              text="Security"
              desc="Configure Passworn. Pin"
              icon="fas fa-lock"
            />
            <IconItem
              text="About Us"
              desc="Fin more info"
              icon="fas fa-info-circle"
            />
          </div>

          <div className="flex flex-col flex-1 bg-primary h-full gap-y-10 rounded-md shadow-md  p-4">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-xl text-primary"> Products Management</h3>
              <OutlineIconButton text="filter" icon="fas fa-sort" />
            </div>
            <Navigation />
            <div className="w-full h-4/6 flex flex-wrap gap-x-12 gap-y-6 overflow-y-scroll">
              <AddCard />
              <EditCard />
              <EditCard />
              <EditCard />
              <EditCard />
              <EditCard />
            </div>
            <div className="flex items-center justify-evenly">
              <OutlineButton text="Discar Changes" />
              <Button text="Save Changes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
