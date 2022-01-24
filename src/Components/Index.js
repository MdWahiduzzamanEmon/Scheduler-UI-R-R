import * as React from "react";
import {
  TimelineViews,
  TimelineMonth,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
} from "@syncfusion/ej2-react-schedule";

    const Index = () => {
    const data = ([
      {
        Id: 1,
        Subject: "Wheel of Reunification",
        StartTime: new Date(2022, 0, 15, 9, 30),
        EndTime: new Date(2022, 0, 15, 11, 0),
      },
      {
        Id: 2,
        Subject: "Headlight Restoration",
        StartTime: new Date(2022, 0, 12, 12, 0),
        EndTime: new Date(2022, 0, 12, 14, 0),
      },
      {
        Id: 3,
        Subject: "Horn restoration",
        StartTime: new Date(2022, 0, 13, 9, 30),
        EndTime: new Date(2022, 0, 13, 11, 0),
      },
      {
        Id: 4,
        Subject: "Engine Repair",
        StartTime: new Date(2022, 0, 14, 13, 0),
        EndTime: new Date(2022, 0, 14, 14, 30),
      },
    ]);
      const roomData = [
        { RoomText: "Convertible", Id: 1, RoomColor: "#cb6bb2" },
        { RoomText: "SUV", Id: 2, RoomColor: "#56ca85" },
      ];
    const ownerData = [
      { OwnerText: "MINI Cooper", Id: 1, GroupId: 1, OwnerColor: "#ffaa00" },
      { OwnerText: "BMW X1", Id: 2, GroupId: 2, OwnerColor: "#f8a398" },
      { OwnerText: "Jeep Wrangler", Id: 6, GroupId: 2, OwnerColor: "#f8a398" },
      { OwnerText: "Range Rover", Id: 7, GroupId: 2, OwnerColor: "#f8a398" },
      { OwnerText: "MNW Z4", Id: 3, GroupId: 1, OwnerColor: "#7499e1" },
      { OwnerText: "Ford Mustang", Id: 4, GroupId: 1, OwnerColor: "#7499e1" },
      { OwnerText: "Mercedes-Benz SL", Id: 5, GroupId: 1, OwnerColor: "#7499e1" },
    ];
  
    return (
      <ScheduleComponent
        width="100%"
        height="650px"
        currentView="TimelineMonth"
        selectedDate={new Date()}
        eventSettings={{ dataSource: data }}
        group={{ resources: ["Rooms", "Owners"] }}
        
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
          <ViewDirective option="TimelineMonth" />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field="RoomId"
            title="Room"
            name="Rooms"
            dataSource={roomData}
            textField="RoomText"
            idField="Id"
            colorField="RoomColor"
          ></ResourceDirective>
          <ResourceDirective
            field="OwnerId"
            title="Owner"
            name="Owners"
            allowMultiple={true}
            dataSource={ownerData}
            textField="OwnerText"
            idField="Id"
            groupIDField="GroupId"
            colorField="OwnerColor"
          ></ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    );
    };

export default Index;




