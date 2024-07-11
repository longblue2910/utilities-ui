"use client";

import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Tabs,
  Tab,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Result {
  viText: string;
  enText: string;
}

const TabPanel = (props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const DoiSoThanhChuPage = () => {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    document.title = "Đổi số tiền thành chữ";
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Giới hạn input chỉ nhập số
    const formattedValue = value.replace(/\D/g, "");
    // Format dấu phẩy ở phần nghìn
    const numberValue = parseInt(formattedValue, 10);
    if (!isNaN(numberValue)) {
      setNumber(numberValue.toLocaleString("en-US"));
    } else {
      setNumber("");
    }
  };

  const handleConvert = async () => {
    const rawNumber = number.replace(/,/g, "");

    if (!rawNumber) {
      toast.error("Vui lòng nhập số");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:3000/api/convert?number=${rawNumber}`
      );
      setResult(response.data);
      setLoading(false);
    } catch (err) {
      toast.error("Error converting number to words");
      setLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Head>
        <title>{document.title}</title>
        <meta
          name="description"
          content="Công cụ đổi số thành chữ trực tuyến bằng nhiều ngôn ngữ."
        />
        <meta
          name="keywords"
          content="đổi số thành chữ, convert number to words, number converter, words converter"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Container className="section" maxWidth="md">
        <Box my={4}>
          <h2>Đổi số tiền thành chữ</h2>
          <TextField
            label="Nhập số (đ)"
            value={number}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 17 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleConvert}
            disabled={loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : "Chuyển đổi"}
          </Button>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {result && (
            <Box
              sx={{
                width: "100%",
                mt: 2,
                border: "1px solid",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Tabs value={tabIndex} onChange={handleTabChange} centered>
                <Tab label="Tiếng Việt" />
                <Tab label="English" />
              </Tabs>
              <TabPanel value={tabIndex} index={0}>
                {result.viText}
              </TabPanel>
              <TabPanel value={tabIndex} index={1}>
                {result.enText}
              </TabPanel>
            </Box>
          )}
        </Box>
        <ToastContainer />
      </Container>
    </>
  );
};

export default DoiSoThanhChuPage;
