import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const getData = async (page, cate) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/post/paging?PageSize=20&PageIndex=${page}&api-version=1.0`;
  const res = await fetch(apiUrl, {
    method: "POST", // Specify the method as POST
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`, // Add your authorization token if required
    },
    body: JSON.stringify({
      // Add any data you need to send with the POST request
      categoryId: null,
      title: null,
      slug: cate,
    }),
    cache: "no-store", // Specify cache control
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  const result = await res.json();
  return result;
};

const CardList = async ({ page, cate }) => {
  const res = await getData(page, cate);
  const data = res.data;
  return (
    <div>
      <div className={styles.searchCard}>
        {" "}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Nhập bài viết cần tìm"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div className={styles.posts}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
