import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: "20px",
});
const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{ position: "fixed", bottom: 1, left: 20 }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={300}
          width={400}
          padding={2}
          borderRadius={3}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography textAlign="center"  variant="h6"
                  color={"text.primary"}

          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://mui.com/static/images/avatar/2.jpg"
              width="30px"
              height="30px"
            ></Avatar>
            <Typography variant="span" fontWeight={500}>
              Mujtaba
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            // label="Multiline"
            multiline
            rows={2} //no of line bellow placeholder
            // defaultValue="Default Value"
            placeholder="Write something here"
            variant="standard"
          />
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
