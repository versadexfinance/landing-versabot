import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@stitches/react";
import { TypeAnimation } from "react-type-animation";
import Typography from "@/components/typography";
import { Flex, Stack } from "@/components/box";

// Define styles using Stitches
const FaqContainer = styled("div", {
  textAlign: "left",
  minWidth: "100%",
  maxWidth: "900px",
  // minWidth: "100%",

  marginTop: "20px",
  "& .faq-item": {
    marginBottom: "20px",
    cursor: "pointer",
    "& .faq-question": {
      fontSize: "22px",
      fontWeight: "bold",
      color: "white",
    },
    "& .faq-answer": {
      fontSize: "20px",
      color: "white",
      paddingTop: "5px",
      overflow: "hidden",
    },
    "& .toggle-icon": {
      float: "right",
      fontSize: "24px",
      lineHeight: "24px",
    },
  },
});

const Faq = ({ faqItems }) => {
  const [selected, setSelected] = useState(null);

  const toggleSelected = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <FaqContainer>
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          className="faq-item"
          onClick={() => toggleSelected(index)}
          whileHover={{ scale: 1.05 }}
        >
          <Flex
            className="faq-question"
            alignItems={"center"}
            justifyContent={"spaceBetween"}
            gap={10}
          >
            <Typography
              css={{
                fontWeight: "bold",
              }}
              neon={true}
            >
              {item.question}
            </Typography>
            <span className="toggle-icon">
              <Typography
                neon={true}
                css={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#ed9960",
                }}
              >
                {selected === index ? "-" : "+"}
              </Typography>
            </span>
          </Flex>
          <AnimatePresence>
            {selected === index && (
              <motion.div
                className="faq-answer"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <Stack
                  css={{
                    minHeight: "80px",
                  }}
                >
                  <Typography>{item.answer}</Typography>
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </FaqContainer>
  );
};

export default Faq;
