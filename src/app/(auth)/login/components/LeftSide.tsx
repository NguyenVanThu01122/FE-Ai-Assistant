"use client";
import Typewriter from "@/components/Typewritter";
import {
  Box,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";

export default function LeftSide() {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.300", "black.500");
  return (
    <Box
      sx={{
        width: "60%",
        display: {
          base: "none",
          md: "block",
        },
        p: "32px",
        overflowY: "auto",
      }}
      bg={bg}
    >
      <Logo />
      <Image
        src="/images/bg-login.png"
        alt="bg"
        sx={{
          width: "70%",
          maxWidth: "700px",
          margin: "auto",
          maxHeight: "50vh",
          objectFit: "contain",
        }}
      />
      <Box sx={{ marginTop: "50px" }}>
        <Text sx={{ fontSize: "40px", fontWeight: "bold" }}>
          Welcome to AI Assistant!
        </Text>
        <Typewriter
          text='"Your smart assistant ready to support you anytime, anywhere. Start exploring today!"'
          sx={{ fontSize: "30px", mt: "10px" }}
          icon="/images/icon-last-text.png"
        />
      </Box>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
    </Box>
  );
}
