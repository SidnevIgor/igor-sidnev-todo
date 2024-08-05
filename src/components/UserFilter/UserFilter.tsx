import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Wrapper } from "./UserFilter.styled";

type UserFilterProps = {
  options: number[];
  onUserIdSelect: (option: number) => void;
};

export const UserFilter: React.FC<UserFilterProps> = ({
  options,
  onUserIdSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<number | string>("All");
  return (
    <Wrapper>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="user-id">User ID</InputLabel>
        <Select
          labelId="user-id"
          id="user-id-select"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={userId}
          label="User ID"
          onChange={(e) => {
            let { value } = e.target;
            setUserId(value);
            if (value === "All") {
              value = -1;
            }
            onUserIdSelect(+value);
          }}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "& .MuiSvgIcon-root": {
              color: "#9e78cf",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9e78cf !important",
            },
          }}
        >
          <MenuItem value="All">All</MenuItem>
          {options.map((option) => (
            <MenuItem value={option} key={"option-" + option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};
