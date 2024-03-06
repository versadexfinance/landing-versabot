// ContactForm.jsx
import React from "react";
import { Flex, Stack } from "@/components/box";
import { styled } from "@/styled";
import Input from "@/components/input";
import Button from "@/components/button";
import Typography from "@/components/typography";

const Form = styled("form", {
  display: "flex",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
  magin: "auto",
  maxWidth: "700px",
});

// const Input = styled("input", {
//   padding: "8px",
//   borderRadius: "4px",
//   border: "1px solid #ccc",
//   "&:focus": {
//     borderColor: "#007bff",
//     outline: "none",
//   },
// });

const Textarea = styled("textarea", {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  backgroundColor: "transparent",
  "&:focus": {
    borderColor: "#007bff",
    outline: "none",
  },
  gridColumn: "1 / -1", // Span across all columns
});

const Label = styled("label", {
  display: "block",
  marginBottom: "8px",
  color: "$primary",
});

const ContactForm = () => {
  return (
    <Stack
      alignItems={"center"}
      gap={2}
      css={{
        mt: 20,
      }}
    >
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography
          textAlign={"center"}
          css={{
            fontSize: "32px",
            color: "#f5ffab",
          }}
        >
          Contact us now!!{" "}
        </Typography>
        <Typography
          css={{
            color: "$primary",
          }}
        >
          f you have any questions, please don't hesitate to get in touch.
        </Typography>
      </Stack>
      <Form
        css={{
          // background: "red",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Stack gap={2}>
          <Flex gap={2} justifyContent={"center"}>
            <Stack>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                required
              />
            </Stack>
            <Stack>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </Stack>
          </Flex>
          <Flex gap={2} justifyContent={"center"}>
            <Stack>
              <Label htmlFor="company">Company</Label>
              <Input id="company" type="text" placeholder="Doe Enterprises" />
            </Stack>
            <Stack>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" placeholder="Subject" required />
            </Stack>
          </Flex>
          <Stack>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Your message"
              required
            />
          </Stack>
          <Button
            css={{
              mt: 8,
              width: "100%",
              background: "linear-gradient(180deg, #EBFE64 0%, #8CEA69 100%)",
              boxShadow: "0px 2px 8px 0px rgba(235, 254, 100, 0.4)",
              "&:hover": {
                scale: 1.05,
                background: "linear-gradient(180deg, #8CEA69 0%, #EBFE64 100%)",
              },
            }}
          >
            Send Message
          </Button>
        </Stack>
      </Form>
    </Stack>
  );
};

export default ContactForm;
