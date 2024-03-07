import { Stack } from "@/components/box";
import Button from "@/components/button";
import Input from "@/components/input";
import Typography from "@/components/typography";
import React from "react";

function ReferralProgram() {
  return (
    <Stack
      css={{
        background: "black",
        border: "1px solid gray",
        borderRadius: "16px",
        justifyContent: "center",
        gap: "20px",
        mt: "20px",
        alignItems: "center",
        padding: "40px",
        backgroundImage: "url(img/heado.png)",
        backgroundPosition: "center",
      }}
    >
      <Stack alignItems={"center"}>
        <Typography
          css={{
            fontSize: "32px",
            color: "#f5ffab",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Versabot - the referral program
        </Typography>
        <Typography
          css={{
            color: "$primary",
          }}
        >
          Coming soon
        </Typography>
        <Typography
          css={{
            color: "$primary",
          }}
        >
          Drop your e-mail to join the program
        </Typography>
      </Stack>

      <div
        style={{
          width: "300px",
        }}
      >
        <Input type="email" placeholder="jhon@doe.com" />
      </div>
      <Button
        css={{
          mt: 8,
          background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
          boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
          "&:hover": {
            scale: 1.05,
            background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
          },
        }}
      >
        Subscribe
      </Button>
    </Stack>
  );
}

export default ReferralProgram;
