/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import { Box, Typography, Divider } from "@mui/material";
import TextInput from "../common/TextInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogFilterCard from "../Card/BlogFilterCard";

ReactModal.setAppElement("#react-modal");

const SearchModal = ({ isOpen, toggleModal }) => {
  //   const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const { articles } = useSelector((state) => state.articles);

  const filteredArticles = articles.filter(
    (a) => a.title.toLowerCase() === searchValue.toLowerCase()
  );

  return (
    <Box>
      <ReactModal isOpen={isOpen} onRequestClose={toggleModal}>
        <Box>
          <TextInput
            label={"Start Typing to Search"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type={"text"}
          />
          <Typography textAlign={"center"} variant="body2">
            Search for articles, and more
          </Typography>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box>
          <Typography variant="body1">Results</Typography>
          {[1, 2, 3, 4, 56, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map(
            (article, idx) => {
              return <BlogFilterCard key={idx} />;
            }
          )}
        </Box>
      </ReactModal>
    </Box>
  );
};

export default SearchModal;
