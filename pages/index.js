import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { MoonLoader } from "react-spinners";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Link from "next/link";
import UseShowDetails from "@/src/customHook/useShowDetails";

export default function index() {
  const { storeData, isLoading, deleteDetailsHandler } = UseShowDetails();

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
    <>
      <Text
        fontSize="lg"
        color="blackAlpha.900"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Students
      </Text>
      <TableContainer boxShadow="lg" rounded="md" bg="white" mt={5}>
        <Table variant="simple">
          <TableCaption>All right reserved &amp; created by  &copy; Murtaxa</TableCaption>
          <Thead>
            <Tr>
              <Th>Student_ID</Th>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
              <Th>Phone/cell</Th>
              <Th>Delete</Th>
              <Th>Update</Th>
            </Tr>
          </Thead>
          <Tbody>
            {storeData?.map((item, index) => (
              <Tr key={index}>
                <Td>{item?._id}</Td>
                <Td>{item?.firstName}</Td>
                <Td>{item?.lastName}</Td>
                <Td>{item?.email}</Td>
                <Td>{item?.phoneNum}</Td>
                <Td>
                  <IconButton
                    size="lg"
                    variant="solid"
                    aria-label="open menu"
                    icon={<DeleteIcon color={"red.600"} />}
                    onClick={() => deleteDetailsHandler(item?._id)}
                  />
                </Td>
                <Td>
                  <Link
                    href={{
                      pathname: "/addStudents",
                      query: { userData: JSON?.stringify(item) },
                    }}
                  >
                    <IconButton
                      size="lg"
                      variant="solid"
                      aria-label="open menu"
                      icon={<EditIcon color={"blue.600"} />}
                    />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
