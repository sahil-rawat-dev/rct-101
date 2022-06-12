import { useState, useEffect } from "react";

const rooms = {
  bedroom: {
    name: "bedroom",
    light: false,
    fan: false,
    tempInC: 30
  },
  kitchen: {
    name: "kitchen",
    light: false,
    fan: false,
    tempInC: 30
  }
};

const Room = ({ name, light, fan, tempInC }) => {
  const [lightState, setLightState] = useState(light);
  const [fanState, setFanState] = useState(fan);
  const [tempState, setTempState] = useState(tempInC);

  // useEffect
  useEffect(() => {
    const id = setTimeout(() => {
      setLightState(true);
    }, 2000);

    // cleanup
    return () => {
      clearTimeout(id);
      setLightState(false);
      setFanState(false);
    };
  }, [name]);

  useEffect(() => {
    if (tempState > 35) {
      setFanState(true);
    } else {
      setFanState(false);
    }
  }, [tempState]);

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <button>LIGHT {lightState ? "TRUE" : "FALSE"}</button>
      </div>
      <div>
        <button>FAN {fanState ? "TRUE" : "FALSE"}</button>
      </div>
      <div>
        temperature {tempState}
        <br />
        <button onClick={() => setTempState((prev) => prev + 1)}>
          TEMP INCR{" "}
        </button>
        <button onClick={() => setTempState((prev) => prev - 1)}>
          TEMP DEC{" "}
        </button>
      </div>
      <div></div>
    </div>
  );
};

function Rooms() {
  const [currentRoom, setCurrentRoom] = useState("bedroom");
  const [roomDetails, setRoomDetails] = useState(rooms);

  const { name, light, fan, tempInC } = roomDetails[currentRoom];
  return (
    <>
      <div>
        <div>
          <button
            disabled={currentRoom === "bedroom"}
            onClick={() => setCurrentRoom("bedroom")}
          >
            Move to BedRoom
          </button>
        </div>
        <div>
          <button
            disabled={currentRoom === "kitchen"}
            onClick={() => setCurrentRoom("kitchen")}
          >
            Move to Kitchen
          </button>
        </div>
      </div>
      <div>
        {/* does not get removed when you click on kitchen */}
        <Room name={name} light={light} fan={fan} tempInC={tempInC} />
      </div>
      <div></div>
    </>
  );
}

export default Rooms;
