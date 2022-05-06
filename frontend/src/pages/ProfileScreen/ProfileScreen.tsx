import {
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    Tag,
    TagLabel,
    Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import { ApiContext } from "../../contexts/api";
import { EtherContext } from "../../contexts/ether";
import { ApiPaper } from "../../contexts/api/Api";
import { UserContext } from "../../contexts/user";
import PaperCard from "../../components/PaperCard/PaperCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


export default function ProfileScreen() {
    const ether = useContext(EtherContext).ether;
    const api = useContext(ApiContext).api;
    const user = useContext(UserContext);
    const [papers, setPapers] = useState<ApiPaper[]>([]);
    const [filteredPapers, setFilteredPapers] = useState<ApiPaper[]>([]);
    const [pages, setPages] = useState<number>(0);
    const [showFilteredPapers, setShowFilteredPapers] = useState<boolean>(false);

    const getPapers = async () => {
        const papers = await api?.getUserPapers();
        // console.log(papers?.data);
        if (papers == null) {
            return;
        }

        setPapers(papers?.data);
        console.log(papers.data)
    };

    useEffect(() => {
        if (ether && api && user.token) {
            getPapers();
        }
    }, [ether, api, user.token]);


    const filterPapers = (filter: string) => {
        if (papers.length > 0) {
            setFilteredPapers(papers?.filter(paper => paper.status.includes(filter)))
        }
    }

    const filteredPapersView = () => {
        return (
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {filteredPapers.map((paper) => (
                        <SwiperSlide>
                            <Link to={`/view/${paper.address}`}>
                                <Box transitionDuration="0.2s" transitionTimingFunction="ease-out" _hover={{ transform: 'scale(1.1)' }} py={10} px={6}>
                                    <PaperCard
                                        title={paper.title}
                                        status={paper.status}
                                        abstract={paper.abstract}
                                        ipfsHash={paper.ipfsHash}
                                        heightPercentage={0.2}
                                        category={paper.category}
                                    />
                                </Box>
                            </Link>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )
    }

    return (
        <>
            <Container maxW='7xl'>


                <Flex my="2rem" justifyContent="space-around" alignItems="center">
                    <img
                        style={{ borderRadius: "50%", height: "20vh", width: "20vh" }}
                        src="https://media-exp1.licdn.com/dms/image/C5603AQGtgn0mDao7LQ/profile-displayphoto-shrink_400_400/0/1649330215887?e=1655942400&v=beta&t=WJi-xD6TDcgs3Bxweischb2BRdmqmnoNVnds-UPdqHc"
                        alt="profile"
                    />
                    <Box>
                        <Text>
                            <b>Name:</b> {user.username}
                        </Text>
                        <Text>
                            <b>Designation:</b> {user.designation}
                        </Text>
                        <Text>
                            <b>Email:</b> {user.email}
                        </Text>
                    </Box>
                    <TableContainer>
                        <Table variant="striped">
                            <Thead>
                                <Tr textAlign="center">
                                    <Th>Researcher Statistics</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Citations</Td>
                                    <Td>h-index</Td>
                                </Tr>
                                <Tr>
                                    <Td>134</Td>
                                    <Td>12</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
                <Heading as="h3" size="lg" mx="6vw">
                    Papers Uploaded
                </Heading>
                <HStack spacing={6} mx="6vw" my="2rem">
                    <Box as={FaFilter} size="32px" color="gray.800" />
                    <Text>Filters</Text>
                    <Tag onClick={() => {
                        filterPapers("UNDER_REVIEW")
                        setShowFilteredPapers(true)
                    }}
                        size="md" variant="solid" colorScheme="gray" padding="0.5rem">
                        <TagLabel>Under Review</TagLabel>
                    </Tag>
                    <Tag onClick={() => {
                        filterPapers("PUBLISHED")
                        setShowFilteredPapers(true)
                    }} size="md" variant="solid" colorScheme="gray" padding="0.5rem">
                        <TagLabel>Approved</TagLabel>
                    </Tag>{" "}
                    <Tag onClick={() => {
                        filterPapers("REJECTED")
                        setShowFilteredPapers(true)
                    }} size="md" variant="solid" colorScheme="gray" padding="0.5rem">
                        <TagLabel>Rejected</TagLabel>
                    </Tag>
                    <Tag onClick={() => { setShowFilteredPapers(false) }} size="md" variant="solid" colorScheme="gray" padding="0.5rem">
                        <TagLabel>Show All</TagLabel>
                    </Tag>
                </HStack>
                {showFilteredPapers ? filteredPapersView() : papers.length > 0 &&
                    (
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {papers.map((paper) => (
                                <SwiperSlide>
                                    <Link to={`/view/${paper.address}`}>
                                        <Box transitionDuration="0.2s" transitionTimingFunction="ease-out" _hover={{ transform: 'scale(1.1)' }} py={10} px={6}>
                                            <PaperCard
                                                title={paper.title}
                                                status={paper.status}
                                                abstract={paper.abstract}
                                                ipfsHash={paper.ipfsHash}
                                                heightPercentage={0.2}
                                                category={paper.category}
                                            />
                                        </Box>
                                    </Link>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                }
            </Container>
        </>
    );
}

