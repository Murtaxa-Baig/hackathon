import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { EditIcon } from "@chakra-ui/icons";

import { MoonLoader } from "react-spinners";
import UseAddCourse from "@/src/customHook/UseAddCourse";

export default function addCourses() {
  const {
    addDetailsHandler,
    courseCode,
    courseName,
    description,
    flag,
    isLoading,
    updateDetailsHandler,
    validateCourseCode,
    validateCourseName,
    validateDescription,
    courseCodeError,
    courseNameError,
  } = UseAddCourse();

  if (isLoading) {
    return (
      <Container
        height={"75vh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MoonLoader color="#3182ce" />
      </Container>
    );
  }

  return (
    <Container boxShadow="lg" p="6" rounded="md" bg="white" mt={5}>
      <Text
        fontSize="lg"
        color="blackAlpha.900"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Add Course Form
      </Text>
      <FormControl isRequired mb={4} isInvalid={courseNameError}>
        <FormLabel>Course Name</FormLabel>
        <Input
          placeholder="Enter Your Course Name..."
          value={courseName}
          onChange={validateCourseName}
        />
      </FormControl>
      <FormControl isRequired mb={4} isInvalid={courseCodeError}>
        <FormLabel>Course Code</FormLabel>
        <Input
          placeholder="Enter Your Course Code..."
          value={courseCode}
          onChange={validateCourseCode}
          type="number"
        />
      </FormControl>
      <FormControl isRequired mb={4}>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="Enter Your description..."
          value={description}
          onChange={validateDescription}
        />
      </FormControl>
      {flag ? (
        <Button colorScheme="green" onClick={updateDetailsHandler}>
          Update course
          <EditIcon style={{ marginLeft: "10px" }} />
        </Button>
      ) : (
        <Button colorScheme="green" onClick={addDetailsHandler}>
          Add Course
          <AiOutlinePlus style={{ marginLeft: "10px" }} />
        </Button>
      )}
    </Container>
  );
}
