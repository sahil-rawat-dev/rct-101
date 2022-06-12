import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(1);
  useState(() => {
    let id = setInterval(() => {
      setTimer((p) => {
        if (p >= 100) {
            clearInterval(id);
            return 100;
          }
        return p+1
      });
    }, 1000);
    return ()=>{
        clearInterval(id)
    }
  }, []);
  return (
    <>
      <div>
        <h3>Timer:{timer} Seconds Passed</h3>
      </div>
    </>
  );
};
