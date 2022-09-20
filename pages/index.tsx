import { Box, Button, createStyles, Group, Stack } from "@mantine/core";
import { useState } from "react";
import ColorToggle from "../components/ColorToggle";

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
    },
  },
  btn: {
    width: "140px",
    height: "40px",
    border: "2px solid black",
    borderColor: theme.colorScheme === "dark" ? "orange" : "black",
    color: theme.colorScheme === "dark" ? "orange" : "black",
  },

  box: {
    height: "500px",
    width: "100%",
    background:
      theme.colorScheme === "dark"
        ? theme.fn.linearGradient(45, "green", "lime")
        : theme.fn.linearGradient(45, "teal", "lightblue"),
  },
  content: {
    background:
      theme.colorScheme === "dark"
        ? theme.fn.linearGradient(45, "orange", "red")
        : theme.fn.linearGradient(45, "orange", "pink"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colorScheme === "dark" ? "black" : "black",
  },
}));
export default function IndexPage() {
  const { classes, cx } = useStyles();
  const [swap, setSwap] = useState<boolean>(false);
  return (
    <Stack>
      <Group mx="lg" noWrap>
        <Button
          variant="outline"
          className={classes.btn}
          onClick={() => setSwap(!swap)}
        >
          BUTTON
        </Button>
        <ColorToggle />
      </Group>
      <Box mt={20} className={classes.container}>
        {swap ? (
          <>
            <Box className={classes.box}> </Box>{" "}
            <Box className={cx(classes.box, classes.content)}>
              <p style={{ width: "200px" }}>
                Put this text in the absolute center of the square and make it
                200px wide!
              </p>
            </Box>
          </>
        ) : (
          <>
            <Box className={cx(classes.box, classes.content)}>
              <p style={{ width: "200px" }}>
                Put this text in the absolute center of the square and make it
                200px wide!
              </p>
            </Box>
            <Box className={classes.box}> </Box>
          </>
        )}
      </Box>
    </Stack>
  );
}
