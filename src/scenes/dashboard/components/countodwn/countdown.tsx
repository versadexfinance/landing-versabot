import { Flex } from "@/components/box";
import Typography from "@/components/typography";
import React, { useState, useEffect } from "react";

const Countdown = ({}) => {
  const calculateTimeLeft: any = () => {
    const difference =
      +new Date("Mon Feb 26 2024 14:00:00 UTC+0000") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      {Object.keys(timeLeft).length === 0 ? (
        <Typography
          neon="true"
          css={{ fontSize: "65px", fontWeight: "bold" }}
        ></Typography>
      ) : (
        <Flex alignItems={"end"} gap={2}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Flex key={unit} alignItems={"end"}>
              <Typography
                neon="true"
                css={{
                  fontWeight: "bold",
                  lineHeight: "1",
                  fontSize: "80px",
                }}
              >
                {String(value)}
              </Typography>
              <Typography
                css={{
                  color: "White",
                  alignSelf: "flex-end",
                  marginBottom: "0.15em",
                }}
              >
                {unit[0]}
              </Typography>
            </Flex>
          ))}
        </Flex>
      )}
    </div>
  );
};

export default Countdown;
